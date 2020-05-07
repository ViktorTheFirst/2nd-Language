const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).json({ msg: "No token,authorization denied" });
  }
  try {
    const verified = jwt.verify(token, process.env.SECRET_TOKEN);
    req.user = verified.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
