// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    // Title of the project
    {
        name: "Title",
        type: "input",
        message: "What is the title for your project?",
    },
    // Description component
    {
        name: "Description",
        type: "input",
        message: "Please write a short description of your project.",

    },
    // Installation component
    {
        name: "Installation",
        type: "input",
        message: "How do I install this application?",

    },
    // Usage component
    {
        name: "Usage",
        type: "input",
        message: "What is this application used for?",

    },
    //License component
    {
        name: 'license',
        message: 'Select the kind of license you would like to use this application:',
        type: 'list',
        choices: [
            'Apache',
            'GPL v2',
            'GPL v3',
            'MIT'
        ]
    },
    //Contributing component
    {
        type: "input",
        message: "How might people contribute to this project?",
        name: "Contributing",
    },
    //Test component   
    {
        name: "Test",
        type: "input",
        message: "What command do you use to test this application?",

    },
    //Questions component   
    {
        name: "UserName",
        type: "input",
        message: "What is your GitHub username?",

    },
    {
        name: "Email",
        type: "input",
        message: "What is your email?",

    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile("./Generated_README/" + fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Successfully generated: " + fileName);
    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generateMarkdown(data));
        })
}

// Function call to initialize app
init();