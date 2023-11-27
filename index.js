// TODO: Include packages needed for this application

const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
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
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'Other License'],
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

function invalidResponse (answer){

    for(const key in answer){
        // console.log(answer[key]);
        let currentAnswer = answer[key]; 
    if(currentAnswer.length < 1){
        
       console.log(`This field (${key}) is required.`);

       process.exit(1);
    }
    }
}



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    

    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('File write successful.');
        }
    });
}

// TODO: Create a function to initialize app


async function init() {

    const responses = await inquirer.prompt(questions);

    invalidResponse(responses);

   

    let markdown = generateMarkdown(responses);
    
    const fileName = "exampleREADME.md";

    writeToFile(fileName, markdown);

}

// Function call to initialize app
init();


// to do:

// figure out how to get markdown over to index.js

// figure out invalidResponse function

// figure out layout of readme

// finish other functions