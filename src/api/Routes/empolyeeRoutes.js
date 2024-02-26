const express = require("express");
const router = express.Router();

// Services
const getAllEmployee = require("../Services/getAllEmployee");
const getEmployeeById = require("../Services/getEmployeeById");
const addEmployee = require("../Services/addEmployee");

// Get all employees
router.get("/", async (req, res) => {
  try {
    const employees = await getAllEmployee();
    res.send({
      status: "success",
      data: employees
    });
  } catch (error) {
    console.log(error);
  }
});
// Get employee by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await getEmployeeById(id);
    res.send(employee);
  } catch (error) {
    console.log(error);
  }
});
// Add employee
router.post("/add", async (req, res) => {
  try {
    addEmployee(req.body);
    res.status(201).json({ message: 'Employee added successfully' });
  } catch (error) {
    console.error('Error adding employee:', error);
    res.status(400).json({ message: 'Bad Request' });
  }
});
module.exports = router;
