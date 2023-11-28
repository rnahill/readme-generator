// Packages needed for this application

const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = [ 
{
    type: "input",
    message:  "What is the title of your project?",
    name: "title"
},

{
    type: "input",
    message:  "Include a description of your project:",
    name: "description"
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
},

{
    type: "list",
    message:   "Which License did you use?",
    choices: ['Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense','None'],
    name: "license"
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
},

{
    type: "input",
    message:    "What email address can a user use to contact you?",
    name: "contact"
},

];


// Function to tell user what fields are required. If any sections are blank then a file will not be created. User will have to restart program to successfully make a file.

function invalidResponse (answer){

    for(const key in answer){
        let currentAnswer = answer[key]; 
    if(currentAnswer.length < 1){
        
       console.log(`This field (${key}) is required.`);

       process.exit(1);
    }
    }
}

// Function to write readme file

function writeToFile(fileName, data) {
    

    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('File write successful.');
        }
    });
}


//Function to initialize application

async function init() {

    const responses = await inquirer.prompt(questions);

    invalidResponse(responses);

   

    let markdown = generateMarkdown(responses);
    
    const fileName = "README.md";

    writeToFile(fileName, markdown);

}

// Function call to initialize app

init();
