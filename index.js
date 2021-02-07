// TODO: Include packages needed for this application
const fs  = require('fs');
const inquirer = require('inquirer');
const generateReadMe = require('./utils/generateMarkdown.js');
//creates file
const file = '../dist/new-README.md';

// TODO: Create a function to initialize app
const promptUser = projectData => {
   projectData = [];
  if (!projectData.projects) {
    projectData.projects = [];
  }
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your projects title ?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter title name');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
      },
      
      {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for the project (required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter a description for the project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please enter the installation instructions for the project (required)',
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('Please enter the installation instructions for the project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please enter the usage instructions for the project (required)',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please enter the usage instructions for the project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Please enter any collaborators for the project (if none leave empty)',
       
      },
      {
        type: 'input',
        name: 'badges',
        message: 'Please enter badges, if any.',
        
      },
      {
        type: 'input',
        name: 'features',
        message: 'Please enter all features in the project (required)',
        validate: featureInput => {
          if (featureInput) {
            return true;
          } else {
            console.log('Please enter the features in the project!');
            return false;
          }
        }
      },
    
    {
      type: 'confirm',
      name: 'contributers',
      message: 'Would you want contriubuters to this project?',
      default: true
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'Add guideline for contributing to your project.',
      when: ({ contributers }) => contributers
    }
    , {
      type: 'input',
      name: 'license',
      message: 'Please enter license type (leave empty if none)',
     
      
    },

      {
        type: 'input',
        name: 'testing',
        message: 'Please enter test cases for the project then add intructions on how to run them. (required)',
        validate: testInput => {
          if (testInput) {
            return true;
          } else {
            console.log('Please enter test cases!');
            return false;
          }
        }
      }
      
    ] );
    //  .then(projectData => {
    //   projectData.projects.push(projectData);
    //   if (projectData.confirmAddProject) {
    //     return promptProject(portfolioData);
    //   } else   {
    //     return portfolioData;
    //   }
    // });
    
  };

// TODO: Create a function to write README file
// function writeToFile(fileName, projectData) {
//     fs.writeFile(fileName, pageHTML, err => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log('Page created! Check out index.html in this directory to see it!');
      
       
//       });
//       generateReadMe(projectData)
// }

// Function call to initialize app

  promptUser()
  .then(projectData => {
    const page = generateReadMe(projectData);

    fs.writeFile('./dist/projectREADME.md', page, err => {
      if (err) {
        console.log(err);
        return;
      }

      console.log('read me Page created!');
    
    
    });
  });
  // .then (writeToFile(file,projectData));





