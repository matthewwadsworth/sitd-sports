const express = require("express");
const Comment = require("../models/Comment");
const router = express.Router();

router.get("/:articleId", async (req, res) => {
  const comments = await Comment.find({ articleId: req.params.articleId })
    .sort({ date: -1 });

  res.json(comments);
});

router.post("/:articleId", async (req, res) => {
  const comment = new Comment({
    articleId: req.params.articleId,
    token: req.readerToken,
    comment: req.body.comment
  });

  await comment.save();
  res.json({ success: true, comment });
});

module.exports = router;
