const Employee = require('./Employee.js')

class Manager extends Employee {
    constructor(name, email, role, officeNumber,) {
        super(name, id, email)
        this.role = role
        this.officeNumber = officeNumber
    }

    getOfficeNumber() {
        return inquirer
        .prompt([
            { 
                type: 'input',
                name: 'officeNumber',
                message: 'What is the office number of this manager?'
            }
        ])
    }
}

module.exports = Manager