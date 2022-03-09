const Employee = require('./Employee.js')

class Engineer extends Employee {
    constructor(name='') {
        this.github
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer