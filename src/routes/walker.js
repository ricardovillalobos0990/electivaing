const {
  Router,
  json
} = require("express");
const router = Router();
const mongoose = require("mongoose");
const {
  restart
} = require("nodemon");

const Walker = require("../models/Walker");

router.get("/", (req, res) => {
  Walker.find()
    .exec()
    .then((walker) => res.status(200).json(walker))
    .catch((error) => res.status(500).json({
      error
    }));
});

router.get("/:cc", (req, res) => {
  const cc = req.params.cc;
  Walker.findOne({
      cc: cc
    })
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
    .catch((error) => res.status(500).json({
      error
    }));
});

router.post("/", (req, res) => {
  const walker = new Walker({
    _id: new mongoose.Types.ObjectId(),
    cc: req.body.cc,
    name: req.body.name,
    lastName: req.body.lastName,
    phone: req.body.phone,
    email: req.body.email,
    status: req.body.status,
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
    .catch((error) => res.status(500).json({
      error
    }));
});

router.patch("/:cc", (req, res) => {
  const cc = req.params.cc;

  Walker.updateOne({
      cc: cc
    }, {
      $set: {
        name: req.body.name,
        lastName: req.body.lastName,
        phone: req.body.phone,
        email: req.body.email,
        status: req.body.status,
      },
    })
    .exec()
    .then((result) => res.status(202).json({
      result
    }))
    .catch((error) => res.status(202).json({
      error
    }));
})

router.delete("/:cc", (req, res) => {
  const cc = req.params.cc;
  Walker.remove({
      cc: cc
    })
    .exec()
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(500).json({
      error
    }))
})

module.exports = router;