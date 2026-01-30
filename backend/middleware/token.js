const { v4: uuidv4 } = require("uuid");

module.exports = (req, res, next) => {
  let token = req.headers["x-reader-token"];

  if (!token) {
    token = uuidv4();
    res.setHeader("x-reader-token", token);
  }

  req.readerToken = token;
  next();
};
