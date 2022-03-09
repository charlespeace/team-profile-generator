
const Employee = require('./lib/Employee.js');

new Employee().getName();


// const inquirer = require('inquirer');
// const fs = require('fs');


// const generatePage = () => { 
//     return `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Team Roster</title>
// </head>
// <body>
//     <header>
//         <h1>My team</h1>
//     </header>
//     <main>
//         // ${Employee.name}(js)
//         // ${Employee.email}(js)
//     </main>
// </body>
// </html>
//     `;
// };

// const writeToFile = (generatePage) => {
//     fs.writeFile('./dist/index.html', generatePage, err => {
//         if (err) throw new Error(err);
//         console.log('File created!');
//     });
// };


// questions()
//     .then(data => {
//         return generatePage(data);
//     })
//     .then(generatePage => {
//         return writeToFile(generatePage);
//     })