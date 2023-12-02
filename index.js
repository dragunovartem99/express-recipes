const express = require("express");
const app = express();
const path = require("path");

const port = 9999;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); // Run index.js outside of root dir

app.get("/", (req, res) => {
	res.render("home");
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
