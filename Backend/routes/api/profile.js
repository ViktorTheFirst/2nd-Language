const express = require("express");
const router = express.Router();
const User = require("../../models/UserModel");
const verify = require("..//../middleware/verifyToken");

/* router.get("/getit", async (req, res) => {
  console.log("req.body in routes/profile:", req.body);
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json({ user });
  } catch (err) {
    res.status(500).send("Server getprofile error");
  }
}); */

router.get("/getprofile", verify, async (req, res) => {
  //console.log("req.body in routes/profile:", req.body);

  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json({ user });
  } catch (err) {
    res.status(500).send("Server getprofile error");
  }
});

module.exports = router;
