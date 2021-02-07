// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
   
## discription 
  ${data.description}

## Table of contents 

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Badges](#badges)
* [Features](#features)
* [Contributing](#contributing)
* [Tests](#tests)

## installations 
${data.installation}
## usage
 ${data.usage}

## credits 
${data.credits}

## license
${data.license}

## badges
${data.badges}

## features
${data.features}

## contributing 
${data.contribute}

## tests
${data.testing}

`;
}

module.exports = generateMarkdown;
