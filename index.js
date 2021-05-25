const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://electivaing:Osama12345@cluster0.of2gq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Settings
app.set("port", 5050);
app.set("json spaces", 2);

//Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());

//req = request = solicitud
//res = response = respuesta
app.use("/admin", require("./src/routes/admin"));
app.use("/userpet", require("./src/routes/userpet"));
app.use("/walker", require("./src/routes/walker"));
app.use("/services", require("./src/routes/services"));


//Start WEB Server
app.listen(app.get("port"), () => {
  console.log(`Servidor corriendo en el puerto ${app.get("port")}`);
});