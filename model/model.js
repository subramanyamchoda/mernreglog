const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const EmployeeModel = mongoose.model("Employee", EmployeeSchema);

const TableBooking = new mongoose.Schema({
    tableno: Number,
    name: String,
    bookingdate: Date,
    bookingtime: String // Corrected typo: changed 'string' to 'String'
});

const TableModel1 = mongoose.model("tablebooking", TableBooking);

module.exports = { EmployeeModel, TableModel1 };
