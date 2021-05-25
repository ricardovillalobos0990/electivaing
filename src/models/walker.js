const mongoose = require("mongoose");

const walkerSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  cc: Number,
  name: String,
  lastName: String,
  phone: Number,
  email: String,
  status: String,
});

module.exports = mongoose.model("walker", walkerSchema);
