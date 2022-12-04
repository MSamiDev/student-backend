const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
        unique: true,
	},
	phone: {
		type: Number,
		required: true,
        unique: true,
	},
	age: {
		type: Number,
		required: true,
	},
	college: {
		type: String,
		required: true,
	},
	department: {
		type: String,
		required: true,
	},
	country: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	state: {
		type: String,
		required: true,
	},
	zipCode: {
		type: Number,
		required: true,
	},
});

module.exports = mongoose.model("Stud", studentSchema);
