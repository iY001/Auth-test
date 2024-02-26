
const Employee = require("../Schema/User");

const getEmployeeById = async (id) => {
    try {
        const employee = await Employee.find({ id: id });
        return employee;
    } catch (error) {
        console.log(error);
    }
}

module.exports = getEmployeeById;