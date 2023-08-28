require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const hotelsRoute = require("./routes/hotels");
const cookieParser = require("cookie-parser");

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/hotels", hotelsRoute);

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

if (process.env.NODE_ENV === "production") {
  app.use(
    "/static",
    express.static(path.join(__dirname, "client/build/static"))
  );
  app.use(
    "/manifest.json",
    express.static(path.join(__dirname, "client/build/manifest.json"))
  );
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log("Connected to backend.");
});
