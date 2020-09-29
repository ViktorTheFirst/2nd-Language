const express = require("express");
const router = express.Router();
const User = require("..//../models/UserModel");
const Progress = require("..//../models/ProgressModel");

//=====================================================================

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

//=====================================================================

router.post("/updateprogress", async (req, res) => {
  try {
    const { lessonType, lessonNum, email } = req.body;
    //console.log("-----------------", req.body);
    //get the user we want to update progress of
    const user = await User.findOne({ email: email });
    //find the progress document of the given user, user.progress = _id of the progress doc
    const progress = await Progress.findById(user.progress);

    if (lessonType == "Sounds") {
      progress.soundLevel = parseInt(lessonNum) + 1;
    } else if (lessonType == "Words") {
      progress.wordLevel = parseInt(lessonNum) + 1;
    } else if (lessonType == "Sentence") {
      progress.sentenceLevel = parseInt(lessonNum) + 1;
    } else if (lessonType == "Story") {
      progress.storyLevel = parseInt(lessonNum) + 1;
    } else {
      res.status(500).json({ errors: [{ msg: err.message }] });
      console.log("Error, wrong lessonType given", err);
    }
    await progress.save();
    //querry the updated user again for responce
    const theUser = await User.findOne({ email: email })
      .populate("progress")
      .select("-password");
    res.status(200).json({ user: theUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ errors: [{ msg: err.message }] });
  }
});

module.exports = router;
