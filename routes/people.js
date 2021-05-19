const { Router, request } = require("express");
const router = Router();

const people = [
  {
    id: "1",
    firstname: "Ricardo",
    lastname: "Villalobos",
    gender: "F",
    age: 30,
  },
  {
    id: "2",
    firstname: "Andres",
    lastname: "Marulanda",
    gender: "M",
    age: 35,
  },
  {
    id: "3",
    firstname: "Steven",
    lastname: "Florez",
    gender: "M",
    age: 35,
  },
];

router.get("/", (req, res) => {
  res.json(people);
});

router.get("/male", (req, res) => {
  let newPeople = people.filter(people => people.gender === "M")
  res.json(newPeople);
});

router.get("/:id", (req, res) => {
  let newPerson = people.find(person => person.id === req.params.id);
  if(newPerson === undefined){
    res.status(404).json({error: "Not Found"});
  }else{
    res.status(200).json(newPerson);
  }
});

module.exports = router;