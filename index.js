const express = require("express");
const app = express();
const path = require("path");

const PORT = 9999;

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); // Run index.js outside of root dir

app.get("/", (req, res) => {
	res.render("home");
});

app.get("/random", (req, res) => {
	const randomNumber = Math.floor(Math.random() * 10 + 1);
	res.render("random", {
		randomNumber,
	});
});

app.get("/loop", (req, res) => {
	const items = [1, 2, 3, 4, 5];
	res.render("loop", { items });
});

app.listen(PORT, () => {
	console.log(`Listening on port http://localhost:${PORT}`);
});
