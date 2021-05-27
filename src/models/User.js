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
  pet: {
    type: Schema.ObjectId,
    ref: "Pet"
  }
});

module.exports = mongoose.model("User", userSchema);