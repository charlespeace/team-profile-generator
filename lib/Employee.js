const inquirer = require('inquirer')
const Prompt = require('./Prompt')
class Employee {
    constructor(name, email, role) {
        this.name = name
        // this.id = this.id++
        this.email = email
        this.role = role
    }

    getName() {
        inquirer
        .prompt([
            { 
                type: 'input',
                name: 'name',
                message: 'What is the name of the team member you would like to add?'
            }
        ])
        .then(({ name }) => {
            this.Employee = new Employee(name)
            this.getEmail();
        })
    }

    // getId() {

    // }

    getEmail() {
        return inquirer
        .prompt([
            { 
                type: 'input',
                name: 'email',
                message: 'What is their email address?'
            }
        ])
        .then(({ email }) => {
            this.Employee = new Employee(email)
            console.info('New employee added!')
            this.getRole();
        })
    }

    getRole() {
        return inquirer
        .prompt([
            { 
                type: 'list',
                name: 'role',
                message: 'What is the role of this team member?',
                choices: ['Manager', 'Engineer', 'Intern']
            }
        ])
        .then(({ role }) => {
            if (role === 'Manager') {
                return new Prompt().getRole()
            } else if (role === 'Engineer') {
                console.info ('Employee position updated to engineer!')
            } else if (role === 'Intern') {
                console.info('Employee position updated to intern!')
            }
        })
    }
}

module.exports = Employee