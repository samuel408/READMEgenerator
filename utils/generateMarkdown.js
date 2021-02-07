// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
if( license == 'none'){
  return ''
}
else{
  return ':![](https://img.shields.io/badge/license-'+ license +'-green)'
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if( license == 'none'){
    return ''
  }
  else{
    return '![License Link](https://opensource.org/licenses/'+ license+')'
  }
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if( license == 'none'){
    return ''
  }
  else{
    return license + renderLicenseLink(license)
  }
  
}
//github username
function githubUserName(username){
return 'https://github.com/' + username
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

   
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
* [questions?](#questions?)


## installations 
${data.installation}
## usage
 ${data.usage}

## credits 
${data.credits}

## license
 ${renderLicenseSection(data.license)}


## features
${data.features}

## contributing 
${data.contribute}

## tests
${data.testing}
 
## Questions
email:${data.email}
github:${githubUserName(data.github)}
`;
}

module.exports = generateMarkdown;
