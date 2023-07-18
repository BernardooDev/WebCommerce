const express = require("express");

const router = express.Router();

const user = [
  {
    id: 1,
    nome: "bernardo",
    sobrenome: "augusto",
    idade: 20,
  },
];

router.get("/", (req, res) => {
  res.send(user);
});

router.post("/", (req, res) => {
  const Newuser = req.body;
  res.status(201).send(user.push(Newuser));
});

router.delete("/", (req, res) => {
  const DeleteUser = req.body;
  res.send(user.pop(DeleteUser));
});

module.exports = router;
