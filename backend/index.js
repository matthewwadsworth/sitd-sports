require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const tokenMiddleware = require("./middleware/token");
const articlesRoute = require("./routes/articles");
const paymentsRoute = require("./routes/payments");
const commentsRoute = require("./routes/comments");
const accessRoute = require("./routes/access");

const app = express();

app.use(cors());
app.use(express.json());
app.use(tokenMiddleware);

const PORT = process.env.PORT || 4000;

// Routes
app.use("/api/articles", articlesRoute);
app.use("/api/payments", paymentsRoute);
app.use("/api/comments", commentsRoute);
app.use("/api/access", accessRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Mongo connected");
    app.listen(PORT, () => console.log("Server running on port", PORT));
  })
  .catch((err) => console.log(err));