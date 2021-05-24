const { Router, json } = require("express");
const router = Router();
const mongoose = require("mongoose");
const walker = require("../models/walker");

const Walker = require("../models/walker");

router.get("/", (req, res) => {
  Walker.find()
    .exec()
    .then((walker) => res.status(200).json(walker))
    .catch((error) => res.status(500).json({ error }));
});

router.get("/:cc", (req, res) => {
  const cc = req.params.cc;
  Walker.findOne({ cc: cc })
    .exec()
    .then((walker) => {
      if (walker === null) {
        res.status(404).json({
          message: "Walker not found",
        });
      } else {
        res.status(200).json(walker);
      }
    })
    .catch((error) => res.status(500).json({ error }));
});

router.post("/", (req, res) => {
  const walker = new Walker({
    _id: new mongoose.Types.ObjectId(),
    cc: req.body.cc,
    name: req.body.name,
    lastName: req.body.lastName,
    phone: req.body.phone,
    email: req.body.email,
  });
  walker
    .save()
    .then((result) =>
      res.status(201).json({
        state: "OK",
        message: "Walker as Created",
        createdWalker: walker,
      })
    )
    .catch((error) => res.status(500).json({ error }));
});

module.exports = router;
