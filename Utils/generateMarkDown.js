// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch(license){
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

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch(license){
        case 'None':
            return '';
        case 'MIT':
            return '[MIT License](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)'
        case 'GNU':
            return '[GNU License](https://choosealicense.com/licenses/gpl-3.0/)';
    }

}

//  function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    switch(license){
        case 'None':
            return '';
        case 'MIT': 
            return `
            Permissions	
            - Commercial use
            - Distribution
            - Modification
            - Private use

            Conditions
            - License and copyright notice

            Limitations
            - Liability
            - Warranty`; 
        case 'GNU':
            return `
            Permissions	
            - Commercial use
            - Distribution
            - Modification
            - Patent use
            - Private use
            
            Conditions	
            - Disclose source
            - License and copyright notice
            - Same license
            - State changes
            
            Limitations
            - Liability
            - Warranty`
        case 'Existing Project/Community':
            return 'Please update this licensing to the current project/community licensing details.'    
    }
}

// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title} ${renderLicenseBadge(data.license)}

    ## Description

    - ${data.motive}
    - ${data.build}
    - ${data.solve}
    - ${data.learnings}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Contribute](#How to Contribute)
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

## Licensing

${renderLicenseLink(data.license)}

${renderLicenseSection(data.license)}

## Testing
    
${data.testing}

## Questions?

Github: https://github.com/${data.gitHubUser}
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
