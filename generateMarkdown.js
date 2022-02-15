// TODO: Create a function that returns a license badge based on which license is passed in
const licenseArr = ['Apache', 'GPL v2', 'GPL v3', 'MIT']

// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === licenseArr[0]) {
        return "[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if (license === licenseArr[1]) {
        return "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
    } else if (license === licenseArr[2]) {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    } else if (license === licenseArr[3]) {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else {
        return ""
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === licenseArr[0]) {
        return `[${licenseArr[0]}](https://opensource.org/licenses/Apache-2.0)`
    } else if (license === licenseArr[1]) {
        return `[${licenseArr[1]}](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
    } else if (license === licenseArr[2]) {
        return `[${licenseArr[2]}](https://www.gnu.org/licenses/gpl-3.0)`
    } else if (license === licenseArr[3]) {
        return `[${licenseArr[3]}](https://opensource.org/licenses/MIT)`
    } else {
        return ""
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === licenseArr[0]) {
        return `Get more information about ${licenseArr[0]} here:`
    } else if (license === licenseArr[1]) {
        return `Get more information about ${licenseArr[1]} here:`
    } else if (license === licenseArr[2]) {
        return `Get more information about ${licenseArr[2]} here:`
    } else if (license === licenseArr[3]) {
        return `Get more information about ${licenseArr[3]} here:`
    } else {
        return ""
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.Title}

## Badges
  ${renderLicenseBadge(data.license)}

## Description
${data.Description}
## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
# Installation
${data.Installation}
## Usage
${data.Usage}
## License
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
## Contributing
${data.Contributing}
## Tests
${data.Test}
## Questions
If you have any questions, you can reach me at my GitHub: [${data.UserName}](https://github.com/${data.UserName}) or email me directly at: ${data.Email}`;

}

module.exports = generateMarkdown;