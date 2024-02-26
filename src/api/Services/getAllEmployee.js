const Employee = require("../Schema/User");

// function to get all employees
const getAllEmployee = async () => {
    try {
        const employees = await Employee.find();
        return employees;
    } catch (error) {
        console.log(error);
    }
}

module.exports = getAllEmployee;