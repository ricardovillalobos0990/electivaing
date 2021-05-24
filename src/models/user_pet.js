const mongoose = require("mongoose");

const userPetSchema = mongoose.Schema({
  _id: mongoose.SchemaType.ObjetctId,
  name: String,
  lastName: String,
  address: String,
  phone: Number,
  email: String,
  pet: String,
  age_pet: Number,
  status: Boolean,
});

module.exports = mongoose.model("user_pet", userPetSchema);
