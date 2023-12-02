const express = require("express");
const app = express();
const port = 9999;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render("home");
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});