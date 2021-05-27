const {
	Router,
	json
} = require("express");
const router = Router();
const mongoose = require("mongoose");
const {
	restart
} = require("nodemon");

const Mascotas = require("../models/Pet")

router.get("/", (req, res) => {
	Mascotas.find()
		.exec()
		.then((pet) => res.status(200).json(pet))
		.catch((error) => res.status(500).json({
			error
		}));
});

router.get("/:carnet", (req, res) => {
	const carnet = req.params.carnet;
	Mascotas.findOne({
			carnet: carnet
		})
		.exec()
		.then((pet) => {
			if (pet === null) {
				res.status(404).json({
					message: "Pet not found",
				});
			} else {
				res.status(200).json(pet);
			}
		})
		.catch((error) => res.status(500).json({
			error
		}));
});

router.post("/", (req, res) => {
	const pet = new Mascotas({
		_id: new mongoose.Types.ObjectId(),
		carnet: req.body.carnet,
		namePet: req.body.namePet,
		race: req.body.race,
		agepet: req.body.agepet,
		status: req.body.status,
	});
	pet
		.save()
		.then((result) =>
			res.status(201).json({
				state: "OK",
				message: "Pet as Created",
				createPet: pet,
			})
		)
		.catch((error) => res.status(500).json({
			error
		}));
});

router.patch("/:carnet", (req, res) => {
	const carnet = req.params.carnet;

	Mascotas.updateOne({
			carnet: carnet
		}, {
			$set: {
				namePet: req.body.namePet,
				race: req.body.race,
				agepet: req.body.agepet,
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
	Mascotas.remove({
			carnet: carnet
		})
		.exec()
		.then((result) => res.status(200).json(result))
		.catch((error) => res.status(500).json({
			error
		}))
})

module.exports = router;