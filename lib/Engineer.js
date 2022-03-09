const Employee = require('./Employee.js')

class Engineer extends Employee {
    constructor(name, id, email, github,) {
        super(name, id, email)
        this.role = role
        this.github = github
    }

    getGithub() {
        return inquirer
        .prompt([

        ])
    }
}

module.exports = Engineer