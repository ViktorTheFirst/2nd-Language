const express = require("express");
const router = express.Router();
const User = require("..//../models/UserModel");
const Progress = require("..//../models/ProgressModel");

router.get("/getuser/:email", async (req, res) => {
  userEmail = req.params.email;
  //console.log("req", req);
  try {
    const theUser = await User.findOne({ email: userEmail })
      .select("-password")
      .populate("progress");
    //console.log("theUser", theUser);
    res.json({ user: theUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ errors: [{ msg: err.message }] });
  }
});

//=====================================================================

router.post("/updateavatar", async (req, res) => {
  try {
    const { email, avatarName } = req.body;
    console.log("email: ", email);
    console.log("avatarName: ", avatarName);
    console.log("req.body: ", req.body);
    const theUser = await User.findOneAndUpdate(
      { email: email },
      { avatar: avatarName },
      { new: true }
    )
      .populate("progress")
      .select("-password");
    res.status(200).json({ user: theUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ errors: [{ msg: err.message }] });
  }
});

module.exports = router;
