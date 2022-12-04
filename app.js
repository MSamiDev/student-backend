const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');

require("dotenv").config(); 

const app = express();

//import routes
const studentsRoute = require("./routes/students");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//middleware

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

app.use(
    cors({origin: ['http://localhost:3001', 'http://127.0.0.1:3001']})
  );


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
