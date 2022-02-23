//Application is using Inquirer to prompt the user and FileSystem(Fs) To create/generate the Readme Doc.
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Utils/generateMarkDown');

// An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: `What's the title of your project?`,
    },
    {
        type: 'input',
        name: 'motive',
        message: `What was your motivation for creating this project?`,
    },
    {
        type: 'input',
        name: 'build',
        message: `Why did you build this project?`,
    },
    {
        type: 'input',
        name: 'solve',
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
        type: 'list',
        name: 'license',
        message: `What type of licensing will you be using?\n`,
        choices: ['None', 'MIT', 'GNU', 'Existing Project/Community'],
        
    },
    {
        type: 'input',
        name: 'test',
        message: 'What tests were written for this application?'
    },
    {
        type: 'input',
        name: 'fileName',
        message: 'Using one word, how would you like to name your README file?',
    }
];

//function that will be called to prompt the user to answer the questions from the above array
const promptUser = () => {
    return inquirer.prompt(questions);
}


//function to initialize app
function init() {
    //initiate the inquirer questions
    promptUser()
    //generate the markdown file using writefilesync
    .then((answers) => fs.writeFileSync(`${answers.fileName}.md`, generateMarkdown(answers)))
    //print to the console that the promise was returned successfully 
    .then(() => console.log('Your Readme File was Successfully Created!'))
    //catch all errors
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
