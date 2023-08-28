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

// // get directory where is index.html
// const root = path.join(__dirname, "client", "build");
// //express.use static with the directory
// app.use(express.static(root));
// //express get request any (*) root, please use file that is on root directory configure above.
// app.get("*", (req, res) => {
//   res.sendFile("index.html", { root });
// });

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
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log("Connected to backend.");
});
