const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const User = mongoose.model("User");

const petSchema = mongoose.Schema({
  _id: mongoose.SchemaTypes.ObjectId,
  carnet: Number,
  namePet: String,
  race: String,
  agepet: Number,
  status: String,
});

module.exports = mongoose.model("Pet", petSchema);