const mongoose = require("mongoose");

const userPetSchema = mongoose.Schema({
  _id: mongoose.SchemaTypes.ObjectId,
  cc: Number,
  name: String,
  lastName: String,
  address: String,
  phone: Number,
  email: String,
  namePet: String,
  race: String,
  agepet: Number,
  status: String,
});

module.exports = mongoose.model("userpet", userPetSchema);
