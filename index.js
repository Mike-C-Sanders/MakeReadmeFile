//Application is using Inquirer to prompt the user and FileSystem(Fs) To create/generate the Readme Doc.
const inquirer = require('inquirer');
const fs = require('fs');

// An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: `What's the title of your project?`,
    },
];

const promptUser = () => {
    return inquirer.prompt(questions);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
