const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  let people = [
    {
      firstname: "Ricardo",
      lastname: "Villalobos",
      age: 30,
    },
    {
      firstname: "Andres",
      lastname: "Marulanda",
      age: 35,
    },
  ];
  res.json(people);
});

module.exports = router;
