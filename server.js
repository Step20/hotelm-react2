require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const hotelsRoute = require("./routes/hotels");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();

//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/hotels", hotelsRoute);

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "public", "index.html"));
  });
}

const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log("Connected to backend.");
});
