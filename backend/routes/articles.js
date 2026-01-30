const express = require("express");
const Article = require("../models/Article");
const Access = require("../models/Access");
const router = express.Router();

// GET newest 75 articles (paged 15 at a time)
router.get("/page/:num", async (req, res) => {
  const page = parseInt(req.params.num);
  const skip = (page - 1) * 15;

  const articles = await Article.find()
    .sort({ _id: -1 })
    .skip(skip)
    .limit(15);

  res.json(articles);
});

// GET one article (without body unless unlocked)
router.get("/:id", async (req, res) => {
  const article = await Article.findById(req.params.id);
  if (!article) return res.json({ error: "Not found" });

  const unlock = await Access.findOne({
    articleId: req.params.id,
    token: req.readerToken
  });

  let body = article.body;

  if (article.isPaid && !unlock) {
    const words = article.body.split(" ").slice(0, 20).join(" ");
    body = words + "...";
  }

  res.json({
    ...article.toObject(),
    body,
    unlocked: !!unlock
  });
});

// SEARCH articles by text
router.get("/search/:term", async (req, res) => {
  const term = req.params.term;
  const regex = new RegExp(term, "i");

  const results = await Article.find({
    $or: [
      { title: regex },
      { excerpt: regex },
      { body: regex }
    ]
  }).sort({ _id: -1 });

  res.json(results);
});

// CREATE article (admin)
router.post("/", async (req, res) => {
  if (req.headers["x-admin-password"] !== process.env.ADMIN_PASSWORD)
    return res.json({ error: "Unauthorized" });

  const article = new Article(req.body);
  await article.save();

  res.json({ success: true, article });
});

module.exports = router;
