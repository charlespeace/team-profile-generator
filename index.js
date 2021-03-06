const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')

const inquirer = require('inquirer')

const path = require('path');
const outputDirectory = path.resolve(__dirname, "output")
const outputPath = path.join(outputDirectory, "team.html");

const fs = require('fs')
const generatePage = require('./src/template.js')

teamMembers = []

function newTeam() {
    function newEmployee() {
        inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                message: 'What is the role of this team member?',
                choices: ['Manager', 'Engineer', 'Intern']
            }
        ])
        .then(selection => {
            if (selection.role === 'Manager') {
                addManager()
            } else if (selection.role === 'Engineer') {
                addEngineer()
            } else if (selection.role === 'Intern') {
                addIntern()
            }
        })
    }

    function addAnother() {
        inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'add',
                message: 'Would you like to add another team member?'
            }
        ])
        .then(answer => {
            if (answer.add === true) {
                newEmployee()
            } else {
                writeToFile()
            }
        })
    }

    function addManager() {
        inquirer
        .prompt([    
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the manager you would like to add?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is their employee ID?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is their email address?'
            },
            { 
                type: 'input',
                name: 'officeNumber',
                message: 'What is the office number of this manager?'
            }
        ])
        .then(answers => {
            const employee = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
            teamMembers.push(employee)
            addAnother()
        })
    }

    function addEngineer() {
        inquirer
        .prompt([    
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the engineer you would like to add?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is their employee ID?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is their email address?'
            },
            { 
                type: 'input',
                name: 'github',
                message: 'What is their github username?'
            }
        ])
        .then(answers => {
            const employee = new Engineer(answers.name, answers.id, answers.email, answers.github)
            teamMembers.push(employee)
            addAnother()
        })
    }
    
    function addIntern() {
        inquirer
        .prompt([    
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the intern you would like to add?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is their employee ID?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is their email address?'
            },
            { 
                type: 'input',
                name: 'school',
                message: 'What is school does the intern attend?'
            }
        ])
        .then(answers => {
            const employee = new Intern(answers.name, answers.id, answers.email, answers.school)
            teamMembers.push(employee)
            addAnother()
        })
    }

    function writeToFile() {
        fs.writeFileSync(outputPath, generatePage(teamMembers), "utf-8")
            console.log('File created!')
    }

    newEmployee()
}

newTeam()