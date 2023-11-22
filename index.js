// TODO: Include packages needed for this application

const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "Include a description of your project:",
    "Create a Table of Contents:",
    "How can a user install your application?",
    "How do you use the application?",
    "What License did you use?",
    "Who contributed to the project?",
    "List any tests here:",
    "What is your Github username?",
    "What contact information can a user use to contact you?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
// ask questions here

    let responses = {
        title: "Example"
    }

    generateMarkdown(responses);
}

// Function call to initialize app
init();
