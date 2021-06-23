// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeLic = "";
  switch (license) {
    case 'Apache 2.0':
      badgeLic = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case 'MIT':
      badgeLic = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case 'Mozilla-Public 2.0':
      badgeLic = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case 'GNU-General-Public GPL v3':
      badgeLic = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case 'Boost Software License 1.0':
      badgeLic = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case 'None':
      break;
  }
  return badgeLic;
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = "";
  switch (license) {
    case 'Apache 2.0':
      link = "https://opensource.org/licenses/Apache-2.0)";
      break;
    case 'MIT':
      badgeLic = "https://opensource.org/licenses/MIT)";
      break;
    case 'Mozilla-Public 2.0':
      badgeLic = "https://opensource.org/licenses/MPL-2.0)";
      break;
    case 'GNU-General-Public GPL v3':
      badgeLic = "https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case 'Boost Software License 1.0':
      badgeLic = "://www.boost.org/LICENSE_1_0.txt)";
      break;
    case 'None':
      break;
  }
  return link;

}

// // // TODO: Create a function that returns the license section of README
// // // If there is no license, return an empty string
// function renderLicenseSection(license) {}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let badgeLic = renderLicenseBadge(data.license);
  let link = renderLicenseLink(data.license);
  return `# ${data.title}

  ## Licensing:
  [![license](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)
 


  # Description:

  ${data.description}
  
  # Installation:
  
  ${data.installation}
  
  # Usage:
  
  ${data.usage}
  
  # License:
  
  ${data.license}
  
  # Contribution:
  
  ${data.contribution}
  
  # Testing:
  
  ${data.testing}
  
  # Additional Info:
  
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email} 
  
`;
}

module.exports = generateMarkdown;
