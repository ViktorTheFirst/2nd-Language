const express = require('express');
const router = express.Router();
const User = require('..//../models/UserModel');
const Progress = require('..//../models/ProgressModel');
const { registerValidation, loginValidation } = require('..//../validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//===========================================================================================
router.get('/', (req, res) => {
  res.send('WE ARE AT api/auth');
});
//===========================================================================================
router.post('/register', async (req, res) => {
  //validate user before creation
  const { error } = registerValidation(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  try {
    //check if user email already in DB
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send('Email already exists');

    //hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    let progress = new Progress({});
    await progress.save();
    //create new user; oreder of fields HAS to be like in the reqest
    const user = new User({
      email: req.body.email,
      password: hashedPassword,
      lastName: req.body.lastName,
      firstName: req.body.firstName,
      age: req.body.age,
      avatar: 'no avatar selected yet',
      progress: progress._id,
    });
    await user.save();

    const payload = { user: { id: user.id } };

    //create and assign token
    jwt.sign(
      payload,
      process.env.TOKEN_SECRET,
      { expiresIn: 36000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    res.status(400).send(err);
  }
});

//===========================================================================================
router.post('/login', async (req, res) => {
  console.log('INSIDE auth login');
  //console.log("req.body: ", req.body);

  const { error } = loginValidation(req.body);

  if (error) return res.status(400).json({ errors: error.details[0].message });

  try {
    //check if email exists in DB
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res
        .status(400)
        .json({ errors: [{ msg: 'Invalid Login details' }] });

    //check if the password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass)
      return res
        .status(400)
        .json({ errors: [{ msg: 'Invalid Login details' }] });

    const payload = { user: { id: user.id } };

    //create and send token as a result
    jwt.sign(
      payload,
      process.env.TOKEN_SECRET,
      { expiresIn: 36000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    res.status(500).json({ errors: [{ msg: err.message }] });
  }
});

module.exports = router;
