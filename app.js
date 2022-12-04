const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config(); 

const app = express();

//import routes
const studentsRoute = require("./routes/students");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//middleware

app.use('/students', studentsRoute);


//routes
app.get("/", (req, res) => {
	res.send("Hello World!");
});

//connet to database

mongoose.connect(
	process.env.DB_CONNECTION,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => console.log("connected to database")
);

app.listen(3000, () => {
	console.log("Server started on port 3000");
});
