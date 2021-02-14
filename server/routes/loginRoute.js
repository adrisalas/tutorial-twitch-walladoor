const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../model/user");

router.post("/", (req, res) => {
  User.findOne({ name: req.body.name, password: req.body.password })
    .exec()
    .then((doc) => {
      if (doc != undefined) {
        res.status(200).json(doc);
      } else {
        res.status(403).json({ error: "Error" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Error" });
    });
});

module.exports = router;
