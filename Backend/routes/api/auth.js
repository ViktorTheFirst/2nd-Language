const express = require("express");
const router = express.Router();
const User = require("..//../models/UserModel");
const { registerValidation, loginValidation } = require("..//../validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const verify = require("..//..//middleware/verifyToken");

//===========================================================================================
router.get("/", (req, res) => {
  res.send("WE ARE AT api/auth");
});
//===========================================================================================
router.post("/register", async (req, res) => {
  //validate user before creation
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    //check if user email already in DB
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send("Email already exists");

    //hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user; oreder of fields HAS to be like in the reqest
    const user = new User({
      email: req.body.email,
      password: hashedPassword,
      name: req.body.name,
    });
    await user.save();

    const payload = { user: { _id: user._id } };
    console.log(payload);
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

  //res.header("auth-token", token).send(token);
});

//===========================================================================================
router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //check if email exists in DB
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email doesn't exist");

  //check if the password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid Password");

  //create and assign token
  const token = jwt.sign({ _id: _user.id }, process.env.TOKEN_SECRET);
  res.json({ token });
});
module.exports = router;
