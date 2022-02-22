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
    {
        type: 'input',
        name: 'motive',
        message: `What was your motivation for creating this project?`,
    },
    {
        type: 'input',
        name: 'whyBuild',
        message: `Why did you build this project?`,
    },
    {
        type: 'input',
        name: 'problemSolved',
        message: 'What does this problem solve?',
    },
    {
        type: 'input',
        name: 'learnings',
        message: 'What did you learn?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? \n Provide a step-by-step description of how to get the development environment running.'
    },
    {
        type: 'input',
        name: 'usage',
        message: `Provide instructions and examples for use. Include screenshots as needed.`
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can others contribute to this project.'
    },
    {
        type: 'input',
        name: 'gitHubUser',
        message: `What's your GitHub User Name?`,
    },
    {
        type: 'input',
        name: 'email',
        message: `What's your email address?`,
    },
    {
        type: 'input',
        name: 'license',
        message: `What type of licensing will you be using?\n`,
        choices: ['MIT', 'GNU', 'Existing Project/Community'],
    }
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
