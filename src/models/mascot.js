const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = mongoose.model("User");

const mascotSchema = mongoose.Schema({
  _id: mongoose.SchemaTypes.ObjectId,
  carnet: Number,
  nameMascot: String,
  race: String,
  ageMascot: Number,
  status: String,
  user: {
    type: Schema.ObjectId,
    ref: "User"
  }
})

module.exports = mongoose.model("mascot", mascotSchema);