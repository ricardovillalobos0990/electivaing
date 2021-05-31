const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  _id: mongoose.SchemaTypes.ObjectId,
  cc: Number,
  name: String,
  lastName: String,
  address: String,
  phone: Number,
  email: String,
});

module.exports	= mongoose.model("User", userSchema);