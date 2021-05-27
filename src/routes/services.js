const {
	Router,
	json
} = require("express");
const router = Router();
const mongoose = require("mongoose");
const {
	restart
} = require("nodemon");

const Services = require("../models/Services");

router.get("/", (req, res) => {
	Services.find()
		.exec()
		.then((services) => res.status(200).json(services))
		.catch((error) => res.status(500).json({
			error
		}));
});

module.exports = router;