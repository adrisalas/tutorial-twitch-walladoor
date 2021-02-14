const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../model/user");

router.get("/", (req, res) => {
  User.find()
    .exec()
    .then((docs) => {
      let usersWithoutPasswords = docs.map((doc) => {
        return {
          name: doc.name,
          email: doc.email,
        };
      });
      res.json(usersWithoutPasswords);
    })
    .catch((err) => {
      res.status(500).json({ error: "Error" });
    });
});

router.post("/", (req, res) => {
  if (req.body.name && req.body.email && req.body.password) {
    new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
      .save()
      .then(() => res.status(201).json({}))
      .catch((err) => {
        res.status(500).json({ error: "Error" });
      });
  } else {
    res.status(400).json({ error: "Error" });
  }
});

module.exports = router;
