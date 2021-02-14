const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const loginRoute = require("./routes/loginRoute");
const morgan = require("morgan");
const mongodb = process.env.MONGODB || "mongodb://localhost:27017/walladoor";

mongoose
  .connect(mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("\x1b[32mSUCCESS\x1b[0m MongoDB connected"))
  .catch(() => console.error("\x1b[31mERROR\x1b[0m MongoDB is not connected"));

app.use(express.static("public"));
app.use(morgan("tiny"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("index.html");
});

app.use("/api/users", userRoute);
app.use("/api/login", loginRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
