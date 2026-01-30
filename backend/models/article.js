const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  title: String,
  excerpt: String,
  body: String,
  author: String,
  date: String,
  category: String,
  isPaid: Boolean,
});

module.exports = mongoose.model("Article", ArticleSchema);
