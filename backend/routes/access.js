const express = require("express");
const Access = require("../models/Access");
const router = express.Router();

router.get("/:articleId", async (req, res) => {
  const unlocked = await Access.findOne({
    articleId: req.params.articleId,
    token: req.readerToken
  });

  res.json({ unlocked: !!unlocked });
});

module.exports = router;
