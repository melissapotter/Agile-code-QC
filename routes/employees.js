const express = require("express");
const router = express.Router();
const Employee = require("../models/employee");
var bodyParser = require('body-parser');

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

// post clockIn

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));


// router.post('/employee', function(req, res) {
//     var clockIn = function startTime() {
//         var today = new Date();

//         var h = today.getHours();
//         var m = today.getMinutes();
//         var s = today.getSeconds();


//         var total = h + m / 60 + s / 3600;
//         var total = req.body.clockIn;
//     };
//     console.log(req.body);



//     res.send(req.body);
// });


module.exports = router;
