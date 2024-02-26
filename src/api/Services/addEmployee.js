const Employee = require("../Schema/User");

// Funtion to add an employee
const addEmployee = async (employeeData) => {
    try {
        const employee = new Employee(employeeData);
        const newEmployee = await employee.save();
        return newEmployee;
    } catch (error) {
        console.log(error);
    }
}

module.exports = addEmployee;