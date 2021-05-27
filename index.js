const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");

mongoose.connect("mongodb+srv://electivaing:Osama12345@cluster0.of2gq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

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
app.use("/pet", require("./src/routes/Pet"));
app.use("/user", require("./src/routes/User"));
app.use("/walker", require("./src/routes/Walker"));
app.use("/services", require("./src/routes/Services"));

//Start WEB Server
app.listen(app.get("port"), () => {
  console.log(`Servidor corriendo en el puerto ${app.get("port")}`);
});