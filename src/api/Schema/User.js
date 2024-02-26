const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
        },
        name: {
            type: String,
            required: true,
            maxlength: 30
        },
        Role: {
            type: String,
            required: true,
            enum: {
                values: ['Manager', 'Staff', 'Employee'],
                message: '{VALUE} is not supported'
            }
        },
        deadline: {
            type: Date,
            required: true
        },
        tasks: {
            type: Number,
            default: 0
        },
        date: {
            type: Date,
            default: Date.now
        },
        done: {
            type: Boolean
        }

    },
)


const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee