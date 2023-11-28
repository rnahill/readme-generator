// Function that returns license badge and link based on user's chosen license
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'Mozilla Public License 2.0') {
    return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)(https://opensource.org/licenses/MPL-2.0)';
  } 

  if(license === 'Apache License 2.0'){
    return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)(https://opensource.org/licenses/Apache-2.0)';
  }

  if(license === 'MIT License'){
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)'
  }

  if(license === 'Boost Software License 1.0'){
    return '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)(https://www.boost.org/LICENSE_1_0.txt)'
  }

  if(license === 'The Unlicense'){
    return '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)(http://unlicense.org/)'
  }

  if(license === 'None'){
    return '';
  }
}

function generateMarkdown(data) {
  

// Create table of contents

  let tableOfContents = `## Table of Contents`;

  if(data.installation !== '') {
    tableOfContents += ` 
    
* [Installation](#installation)
    
    `;
  };

  if(data.usage !== '') {
    tableOfContents += ` 
    
* [Usage](#usage)
    
    `;
  };

  if(data.license !== '') {
    tableOfContents += ` 
    
* [License](#license)
    
    `;
  };

  if(data.contributors !== '') {
    tableOfContents += ` 
    
* [Contributors](#contributors)
    
    `
  };

  if(data.tests !== '') {
    tableOfContents += ` 
    
* [Tests](#tests)
    
    `
  };

// Add title and description

  let markdown = 
  `
# ${data.title}

## Description

${data.description}
  
  `

// Add table of contents
  markdown += tableOfContents;

// Add installation section

  if(data.installation !== ''){

    markdown +=
    `

## Installation

${data.installation}

    `
  };

// Add usage section

  if(data.usage !== ''){

    markdown +=
    `

## Usage

${data.usage}

    `
  };

// Add License section

  markdown += 
  `

## License

${data.license}

${renderLicenseBadge(data.license)}

  `

// Add contributors section

  if(data.contributors !== ''){
    
    markdown +=
    `

## Contributors

${data.contributors}
    
    `
  }

// Add tests section

  if(data.tests !== ''){

    markdown +=
    `
## Tests

${data.tests}

    `
  }

// add Questions section

  markdown +=
  `

## Questions

Questions? Contact me using the links below.

Github: ${data.username}

Email: ${data.contact}
  
  `
  
return markdown;
  
}

module.exports = generateMarkdown;
