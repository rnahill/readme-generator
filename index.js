// TODO: Include packages needed for this application

const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [ 
{
    type: "input",
    message:  "What is the title of your project?",
    name: "title"
    
    // require input
},

{
    type: "input",
    message:  "Include a description of your project:",
    name: "description"
    // require input
},

{
    type: "input",
    message:  "If applicable, provide installation intructions for your application:",
    name: "installation"
},

{
    type: "input",
    message:  "Include usage instructions for your application:",
    name: "usage"
    // require input
},

{
    type: "list",
    message:   "Which License did you use?",
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'Other License'],
    name: "license"
    // require input
},

{
    type: "input",
    message:   "Include anyone who contributed to the project, if any.",
    name: "contributors"
},

{
    type: "input",
    message:   "If applicable, give instructions on how to test your application:",
    name: "tests"
},

{
    type: "input",
    message:    "What is your Github username? (No @ needed)",
    name: "username"
    // require input
},

{
    type: "input",
    message:    "What email address can a user use to contact you?",
    name: "contact"
    // require input
},

];

// function invalidResponse (answer){
//     answer = questions.name; 
//     if(answer.length < 1){
//         return console.log('This field is required.');
//     }
// }

// invalidResponse();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fs = require('fs');

    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('File write successful.');
        }
    });
}

// TODO: Create a function to initialize app


async function init() {

    const responses = await inquirer.prompt(questions);

    console.log(responses);
    // let responses = {
    //     title: "Example"
    // }

    generateMarkdown(responses);
    
    const fileName = "exampleREADME.md";
    const jsonString = JSON.stringify(responses);

    writeToFile(fileName, jsonString);
}

// Function call to initialize app
init();


