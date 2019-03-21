const mongoose = require("mongoose");
const Schema = mongoose.Schema;



// create user Schema & model
const EmployeeSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name field is required"]
    }
    // ,
    // time: {
    //     clockin: Number,
    //     clockout: Number
    // }
});


const Employee = mongoose.model("employee", EmployeeSchema);

module.exports = Employee;