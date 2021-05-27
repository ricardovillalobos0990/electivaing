const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const petSchema = mongoose.Schema({
  _id: mongoose.SchemaTypes.ObjectId,
  carnet: Number,
  namePet: String,
  race: String,
  agepet: Number,
  status: String,
});

module.exports = mongoose.model("Pet", petSchema);