const {
	Router,
	json
} = require("express");
const router = Router();
const mongoose = require("mongoose");
const {
	restart
} = require("nodemon");

const userPet = require("../models/userpet");

router.get("/", (req, res) => {
	userPet.find()
		.exec()
		.then((userpet) => res.status(200).json(userpet))
		.catch((error) => res.status(500).json({
			error
		}));
});

router.get("/:cc", (req, res) => {
	const cc = req.params.cc;
	userPet.findOne({
			cc: cc
		})
		.exec()
		.then((userpet) => {
			if (userpet === null) {
				res.status(404).json({
					message: "USER PET not found",
				});
			} else {
				res.status(200).json(userpet);
			}
		})
		.catch((error) => res.status(500).json({
			error
		}));
});

router.post("/", (req, res) => {
	const userpet = new userPet({
		_id: new mongoose.Types.ObjectId(),
		cc: req.body.cc,
		name: req.body.name,
		lastName: req.body.lastName,
		address: req.body.address,
		phone: req.body.phone,
		email: req.body.email,
		namePet: req.body.namePet,
		race: req.body.race,
		agepet: req.body.agepet,
		status: req.body.status,
	});
	userpet
		.save()
		.then((result) =>
			res.status(201).json({
				state: "OK",
				message: "User Pet as Created",
				createUserPet: userpet,
			})
		)
		.catch((error) => res.status(500).json({
			error
		}));
});

router.patch("/:cc", (req, res) => {
	const cc = req.params.cc;

	userPet.updateOne({
			cc: cc
		}, {
			$set: {
				name: req.body.name,
				lastName: req.body.lastName,
				address: req.body.address,
				phone: req.body.phone,
				email: req.body.email,
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

router.delete("/:cc", (req, res) => {
	const cc = req.params.cc;
	userPet.remove({
			cc: cc
		})
		.exec()
		.then((result) => res.status(200).json(result))
		.catch((error) => res.status(500).json({
			error
		}))
})

module.exports = router;