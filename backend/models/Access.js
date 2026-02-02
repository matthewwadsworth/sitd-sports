const mongoose = require("mongoose");

const AccessSchema = new mongoose.Schema({
  token: String,
  articleId: String,
  permanent: Boolean
});

module.exports = mongoose.model("Access", AccessSchema);
