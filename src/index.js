const express = require("express");
const app = express();
const calculator = require("src/calculator");
const pokedex = require("pokedex");

app.use(express.json());

app.post("/calculator/add", (req, res) => {
	let body = JSON.parse(req.body);
	res.send("Calculator add result.");
});

app.post("/calculator/subtract", (req, res) => {
	let body = JSON.parse(req.body);
	res.send("Calculator subtract result.");
});

app.post("/calculator/multiply", (req, res) => {
	let body = JSON.parse(req.body);
	res.send("Calculator multiply result.");
});

app.post("/calculator/divide", (req, res) => {
	let body = JSON.parse(req.body);
	res.send("Calculator divide result.");
});

app.get("/pokedex/retrieve/:id", (req, res) => {
	let pokedexId = req.params.id;
	res.send("Retrieves pokedex entry " + pokedexId);
});

const server = app.listen(8080, () => {
	console.log("API started on port 8080.");
})
