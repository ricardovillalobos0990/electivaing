const mongoose = require("mongoose");

const peopleSchema = mongoose.Schema({
  id_: mongoose.SchemaType.ObjectID,
  name: String,
  age: Number,
});

module.exports("People")