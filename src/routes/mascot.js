const {
	Router,
	json
} = require("express");
const router = Router();
const mongoose = require("mongoose");
const {
	restart
} = require("nodemon");

const Mascot = require("../models/mascot")

router.get("/", (req, res) => {
	Mascot.find()
		.exec()
		.then((mascot) => res.status(200).json(mascot))
		.catch((error) => res.status(500).json({
			error
		}));
});

router.get("/:carnet", (req, res) => {
	const carnet = req.params.carnet;
	Mascot.findOne({
			carnet: carnet
		})
		.exec()
		.then((mascot) => {
			if (mascot === null) {
				res.status(404).json({
					message: "Mascot not found",
				});
			} else {
				res.status(200).json(mascot);
			}
		})
		.catch((error) => res.status(500).json({
			error
		}));
});

router.post("/", (req, res) => {
	const mascot = new Mascot({
		_id: new mongoose.Types.ObjectId(),
		
		carnet: req.body.carnet,
		nameMascot: req.body.nameMascot,
		race: req.body.race,
		ageMascot: req.body.ageMascot,
		status: req.body.status,
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
		.catch((error) => res.status(500).json({
			error
		}));
});

router.patch("/:carnet", (req, res) => {
	const carnet = req.params.carnet;

	Mascot.updateOne({
			carnet: carnet
		}, {
			$set: {
				nameMascot: req.body.nameMascot,
				race: req.body.race,
				ageMascot: req.body.ageMascot,
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

router.delete("/:carnet", (req, res) => {
	const carnet = req.params.carnet;
	Mascot.remove({
			carnet: carnet
		})
		.exec()
		.then((result) => res.status(200).json(result))
		.catch((error) => res.status(500).json({
			error
		}))
})


module.exports = router;