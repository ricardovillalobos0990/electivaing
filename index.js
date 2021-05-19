const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = requiere("mongoose");
mongoose.connect("mongodb+srv://electivaing:<Osama12345>@cluster0.of2gq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

//Settings
app.set("port", 5050);
app.set("json spaces", 2);

//Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//req = request = solicitud
//res = response = respuesta
app.use("/people", require("./routes/people"));

//Start WEB Server
app.listen(app.get("port"), () => {
  console.log(`Servidor corriendo en el puerto ${app.get("port")}`);
});

//   {
//     firstname: "Ricardo",
//     lastname: "Villalobos",
//     age: 30,
//   },
//   {
//     firstname: "Andres",
//     lastname: "Marulanda",
//     age: 31,
//   },
