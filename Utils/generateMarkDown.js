// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch(license){
        case null:
            return '';
        
        case 'None':
            return '';

        case 'MIT':
            return '[MIT](https://img.shields.io/badge/license-MIT-brightgreen)';
        
        case 'GNU':
            return '[GNU](https://img.shields.io/badge/license-GNU-blue)';
        
        case 'Existing Project/Community':
            return '[Other](https://img.shields.io/badge/license-requires%20update-orange)'
    }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

    ## Description

    - ${data.motive}
    - ${data.build}
    - ${data.solve}
    - ${data.learnings}

    ## Table of Contents
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [How to Contribute](#How to Contribute)
    - [License](#license)
    - [Testing](#testing)
    - [Questions?](#questions?)

    ## Installation

    ${data.installation}

    ## Usage

    ${data.usage}

    ## Credits

    ${data.credits}

    ## How to Contribute
    
    ${data.contribute}

    ## Licensing ${renderLicenseBadge(data.license)}

    

    ## Testing
    
    ${data.testing}

    ## Questions?

    Github: https://github.com/${data.gitHubUser}
    Email: ${data.email}
`;
}

module.exports = generateMarkdown;
