const {
	Router,
	json
} = require("express");
const router = Router();
const mongoose = require("mongoose");
const {
	restart
} = require("nodemon")

const Admin = require("../models/admin");

router.get("/", (req, res) => {
	Admin.find()
		.exec()
		.then((admin) => res.status(200).json(admin))
		.catch((error) => res.status(500).json({
			error
		}));
});

router.get("/:cc", (req, res) => {
	const cc = req.params.cc;
	Admin.findOne({
			cc: cc
		})
		.exec()
		.then((admin) => {
			if (admin === null) {
				res.status(404).json({
					message: "Admin not found",
				});
			} else {
				res.status(200).json(admin);
			}
		})
		.catch((error) => res.status(500).json({
			error
		}));
});

router.post("/", (req, res) => {
	const admin = new Admin({
		_id: new mongoose.Types.ObjectId(),
		cc: req.body.cc,
		name: req.body.name,
		lastName: req.body.lastName,
		phone: req.body.phone,
		email: req.body.email,
	});
	admin
		.save()
		.then((result) =>
			res.status(201).json({
				state: "OK",
				message: "Admin as Created",
				createdAdmin: admin,
			})
		)
		.catch((error) => res.status(500).json({
			error
		}));
});

router.patch("/:cc", (req, res) => {
	const cc = req.params.cc;

	Admin.updateOne({
			cc: cc
		}, {
			$set: {
				name: req.body.name,
				lastName: req.body.lastName,
				phone: req.body.phone,
				email: req.body.email,
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
	Admin.remove({
			cc: cc
		})
		.exec()
		.then((result) => res.status(200).json(result))
		.catch((error) => res.status(500).json({
			error
		}))
})

module.exports = router;