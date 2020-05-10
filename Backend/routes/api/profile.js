const express = require("express");
const router = express.Router();
const verify = require("..//../middleware/verifyToken");

router.get("/", verify, (req, res) => {
  res.json({ title: "my title", desc: "my desc" });
});

module.exports = router;
