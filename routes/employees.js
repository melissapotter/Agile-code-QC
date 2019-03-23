const express = require("express");
const router = express.Router();
const Employee = require("../models/employee");
const bodyParser= require("body-parser")

// get a list of users from the db
router.get("/employees", function(req, res, next) {
    Employee.find({}).then(function(employee) {
        console.log("reached route");
        res.send(employee);
    });
});

// add a new user to the db
router.post("/employees", function(req, res, next) {
    Employee.create(req.body).then(function(employee) {
        console.log(employee);
        res.send(employee);
    }).catch(next);
});

// update a user in the db
router.put("/employees/:id", function(req, res, next) {
    Employee.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function() {
        Employee.findOne({ _id: req.params.id }).then(function(employee) {
            res.send(employee);
        });
    });
});

// delete a user in the db
router.delete("/employee/:id", function(req, res, next) {
    Employee.findByIdAndRemove({ _id: req.params.id }).then(function(employee) {
        res.send(employee);
    });
});

//post clockin time

router.post("/", function(req, res, next) {
    Employee.create(req.body).then(function(employee) {
        function startTime() {
            var today = new Date();

            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            var d = today.getDay();

            var total = h + m / 60 + s / 3600;
            document.getElementsByClassName('check').innerText = total;

            if (total > 0) {
                var total = req.body.clockIn;
            }
        }
        res.send(employee);
        alert(req.body);
    });
});

module.exports = router;
