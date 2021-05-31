const { Router, json } = require("express");
const router = Router();
const mongoose = require("mongoose");
const { restart } = require("nodemon");

const Mascot = require("../models/Mascot");
const User = require("../models/User");

router.get("/", (req, res) => {
  Mascot.find()
    .exec()
    .then((mascot) => res.status(200).json(mascot))
    .catch((error) =>
      res.status(500).json({
        error,
      })
    );
});

router.post("/", (req, res) => {
  const mascot = new Mascot({
    _id: new mongoose.Types.ObjectId(),
    carnet: req.body.carnet,
    namePet: req.body.namePet,
    agePet: req.body.agePet,
    race: req.body.race,
    user: req.body.user,
  });
  mascot
    .save()
    .then((result) =>
      res.status(201).json({
        state: "OK",
        message: "Mascot as Created",
        createMascot: mascot,
      })
    )
    .catch((error) =>
      res.status(500).json({
        error,
      })
    );
});

router.patch("/:carnet", (req, res) => {
  const carnet = req.params.carnet;
  Mascot.updateOne(
    {
      carnet: carnet,
    },
    {
      $set: {
        namePet: req.body.namePet,
        agePet: req.body.agePet,
        race: req.body.race,
        user: req.body.user,
      },
    }
  )
    .exec()
    .then((result) =>
      res.status(202).json({
        result,
      })
    )
    .catch((error) =>
      res.status(202).json({
        error,
      })
    );
});

router.delete("/:carnet", (req, res) => {
  const carnet = req.params.carnet;
  Mascot.remove({
    carnet: carnet,
  })
    .exec()
    .then((result) => res.status(200).json(result))
    .catch((error) =>
      res.status(500).json({
        error,
      })
    );
});

router.get("/user", function (req, res) {
  Mascot.find({}, function (err, mascot) {
    User.populate(mascot, { path: "user" }, function (err, mascot) {
      res.status(200).send(mascot);
    });
  });
});

module.exports = router;
