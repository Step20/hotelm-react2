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
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

app.use(express.static(__dirname));
// send the user to index html page inspite of the url
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  connect();
  console.log("Connected to backend.");
});
