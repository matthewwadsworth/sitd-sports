const express = require("express");
const Access = require("../models/Access");
const router = express.Router();

// Create PayPal order
router.post("/create", async (req, res) => {
  try {
    const order = await fetch("https://api-m.paypal.com/v2/checkout/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.PAYPAL_ACCESS_TOKEN
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: "1.09"
            }
          }
        ]
      })
    });

    const data = await order.json();
    res.json({ id: data.id });
  } catch (err) {
    res.json({ error: "Payment failed" });
  }
});

// Capture PayPal payment
router.post("/capture/:id", async (req, res) => {
  try {
    const capture = await fetch(
      `https://api-m.paypal.com/v2/checkout/orders/${req.params.id}/capture`,
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + process.env.PAYPAL_ACCESS_TOKEN
        }
      }
    );

    const result = await capture.json();

    if (result.status === "COMPLETED") {
      await Access.create({
        articleId: req.body.articleId,
        token: req.readerToken,
        permanent: true
      });

      return res.json({ success: true });
    }

    res.json({ error: "Payment not completed" });
  } catch (err) {
    res.json({ error: "Payment error" });
  }
});

module.exports = router;
