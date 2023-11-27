// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  let tableOfContents = `## Table of Contents`;

  if(data.installation !== '') {
    tableOfContents += ` * [Installation](#installation)`;
  };

  if(data.usage !== '') {
    tableOfContents += ` [Usage](#usage)`;
  };

  if(data.license !== '') {
    tableOfContents += ' [License](#license)';
  };

  if(data.contributors !== '') {
    tableOfContents += ` [Contributors(#contributors)]`
  };

  if(data.tests !== '') {
    tableOfContents += ` [Tests](#tests)`
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

  // add questions section

  markdown +=
  `

  ## Questions

  Questions? Contact me using the links below.

  ${data.userName}

  ${data.contact}
  
  `
  
  // console.log(markdown)
  return markdown;
  
  
  
//   return `# ${data.title}
// `
;
}

module.exports = generateMarkdown;
