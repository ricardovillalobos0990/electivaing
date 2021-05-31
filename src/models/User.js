const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
  _id: mongoose.SchemaTypes.ObjectId,
  cc: Number,
  name: String,
  lastName: String,
  address: String,
  phone: Number,
  email: String,
  status: Boolean,
});

module.exports = mongoose.model("User", userSchema);