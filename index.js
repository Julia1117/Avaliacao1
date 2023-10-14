const express = require('express');
const server = express();
server.use(express.json());

const port = 8000; 

const hero = ['Warrior', 'Mage'];

server.get('/hero/:index', (req, res) => {
const { index } = req.params;

return res.json(hero[index]);
});

server.get('/hero', (req, res) => {
  return res.json(hero);
});

server.post('/hero', (req, res) => {
  const { name } = req.body;
  hero.push(name);

  return res.json(hero);
});

server.put('/hero/>index', (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  hero[index] = name;

  return res.json(hero);
});

server.delete('/hero/:index', (req, res) => {
  const { index } = req.params;

  hero.splice(index, 1);
  return res.json({ message: "The hero was deleted"});
});

server.listen(8000);