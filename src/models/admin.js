const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  _id: mongoose.SchemaTypes.ObjectId,
  name: String,
  lastName: String,
  phone: Number,
  email: String,
});

module.exports = mongoose.model("admin", adminSchema);
