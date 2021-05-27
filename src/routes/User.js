const {
	Router,
	json
} = require("express");
const router = Router();
const mongoose = require("mongoose");
const {
	restart
} = require("nodemon");

const User = require("../models/User");

router.get("/", (req, res) => {
	User.find()
		.exec()
		.then((user) => res.status(200).json(user))
		.catch((error) => res.status(500).json({
			error
		}));
});

router.get("/todos", (req, res) => {
	User.find({}, (err, result) => {
		res.status(200).send(result)
	});
	5
});


router.get("/:cc", (req, res) => {
	const cc = req.params.cc;
	User.findOne({
			cc: cc
		})
		.exec()
		.then((user) => {
			if (user === null) {
				res.status(404).json({
					message: "USER not found",
				});
			} else {
				res.status(200).json(user);
			}
		})
		.catch((error) => res.status(500).json({
			error
		}));
});

router.post("/", (req, res) => {
	const user = new user({
		_id: new mongoose.Types.ObjectId(),
		cc: req.body.cc,
		name: req.body.name,
		lastName: req.body.lastName,
		address: req.body.address,
		phone: req.body.phone,
		email: req.body.email,
	});
	user
		.save()
		.then((result) =>
			res.status(201).json({
				state: "OK",
				message: "User as Created",
				createUser: user,
			})
		)
		.catch((error) => res.status(500).json({
			error
		}));
});

router.patch("/:cc", (req, res) => {
	const cc = req.params.cc;

	User.updateOne({
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
	User.remove({
			cc: cc
		})
		.exec()
		.then((result) => res.status(200).json(result))
		.catch((error) => res.status(500).json({
			error
		}))
})

module.exports = router;