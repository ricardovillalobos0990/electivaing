const mongoose = require("mongoose");

const servicesSchema = mongoose.Schema({
  ccUserPet: Number,
  name: String,
  status: String,
});

module.exports = mongoose.model("Services", servicesSchema);