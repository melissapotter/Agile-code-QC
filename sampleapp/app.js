const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

app.get('/employee', function(req, res){
    res.send({type: 'GET'});
    console.log(req);
});

//clock employee in
app.post('/clockin', function(req, res){
    res.send({type: 'POST'});
    console.log(req);
});

//clock employee out

app.post('/clockout', function(req, res){
    res.send({type: 'POST'});
    console.log(req);
});


//connect to mongodb
mongoose.connect('mongodb://localhost/employee');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.listen(process.env.port || 8080, function(){
    console.log('now listening for requests');
});