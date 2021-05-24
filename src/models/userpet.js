const mongoose = require("mongoose");

const userPetSchema = mongoose.Schema({
  _id: mongoose.SchemaTypes.ObjectId,
  cc: Number,
  name: String,
  lastName: String,
  address: String,
  phone: Number,
  email: String,
  pet: String,
  agepet: Number,
  status: Boolean,
});

module.exports = mongoose.model("userpet", userPetSchema);
