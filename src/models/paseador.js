const mongoose = require('mongosoe');

const paseadorSchema = mongoose.paseadorSchema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    lastName: String,
    age: Number,
    dir: String,
    state: Boolean,
});

module.exports = mongoose.model("paseador", paseadorSchema):