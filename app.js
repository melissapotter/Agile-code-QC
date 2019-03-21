const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const ejs = require("ejs");


// set up express app
const app = express();

// connect to mongodb
mongoose.connect("mongodb://localhost/employees", {useNewUrlParser:true});
mongoose.Promise = global.Promise;

// To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
app.use(express.static(__dirname + '/public'));

// Set the app to use ejs files
app.set("view engine", "ejs");

// You need to use bodyParser() if you want the form data to be available in req.body
app.use(bodyParser.json());


// When we need to initialize and use routing, use this. Remove the <> symbols and add your directory name
app.use("/agile", require("./routes/employees"));

// Home page
app.get("/", function(req, res) {
    res.render("landing");
});


// listen for requests
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Now listening for requests");
});