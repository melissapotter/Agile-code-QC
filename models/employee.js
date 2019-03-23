const mongoose = require("mongoose");
const Schema = mongoose.Schema;



// create user Schema & model
const EmployeeSchema = new Schema({
   name: {
       type: String,
   },
   clockin: {
       type: Number,
       required: [true, "Error"]
   },
   clockout: {
       type: Number
   }});


const Employee = mongoose.model("employee", EmployeeSchema);

module.exports = Employee;