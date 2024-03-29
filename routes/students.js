const express = require("express");
const router = express.Router();
const Stud = require("../models/student");

//get all students
router.get("/all", async (req, res) => {
	try {
		const students = await Stud.find();
		res.json(students);
	} catch (err) {
		res.json({ message: err });
	}
	res.end();
});

// get a specific student
router.get("/:studentId", async (req, res) => {
	try {
		const student = await Stud.findById(req.params.studentId.toString());
		res.json(student);
	} catch (err) {
		res.json({ message: err });
	}
	res.end();
});

//update a student
router.patch("/update/:studentId", async (req, res) => {
	try {
		const updatedStudent = await Stud.updateOne(
			{ _id: req.params.studentId.toString() },
			{
				$set: {
					firstName: req.body.firstName,
					middleName: req.body.middleName,
					lastName: req.body.lastName,
					urnNo: req.body.urnNo,
					rollNo: req.body.rollNo,
					currentYear: req.body.currentYear,
					branch: req.body.branch,
					email: req.body.email,
					phone: req.body.phone,
					dob: req.body.dob,
					college: req.body.college,
					department: req.body.department,
					country: req.body.country,
					address: req.body.address,
					city: req.body.city,
					state: req.body.state,
					zipCode: req.body.zipCode,
				},
			}
		);
		res.json(updatedStudent);
	} catch (err) {
		res.json({ message: err });
	}
	res.end();
});

//delete a student
router.delete("/:studentId", async (req, res) => {
	try {
		const removedStudent = await Stud.deleteOne({
			_id: req.params.studentId.toString(),
		});
		res.json(removedStudent);
	} catch (err) {
		res.json({ message: err });
	}
	res.end();
});

//enter a new student
router.post("/new", async (req, res) => {
	const student = new Stud({
		firstName: req.body.firstName,
		middleName: req.body.middleName,
		lastName: req.body.lastName,
		urnNo: req.body.urnNo,
		rollNo: req.body.rollNo,
		currentYear: req.body.currentYear,
		branch: req.body.branch,
		email: req.body.email,
		phone: req.body.phone,
		dob: req.body.dob,
		college: req.body.college,
		department: req.body.department,
		country: req.body.country,
		address: req.body.address,
		city: req.body.city,
		state: req.body.state,
		zipCode: req.body.zipCode,
	});

	student
		.save()
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.json({ message: err });
		});
});

router.get("/", (req, res) => {
	res.send("Hello Students!");
});

module.exports = router;

// {
//     "firstName" : "Demo",
//     "lastName" : "Demo",
//     "email" : "demo@email.com",
//     "phone" : 987654321,
//     "age" : 21,
//     "college" : "Demo",
//     "department" : "Demo",
//     "country" : "Demo",
//     "address" : "Demo",
//     "city" : "Demo",
//     "state" : "Demo",
//     "zipCode" : 123456
// }
