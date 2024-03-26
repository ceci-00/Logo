// importing shapes from lib directory
const {Triangle,Circle,Square} = require('./lib/shapes');
// importing inquirer for user prompts and fs promises for file system ops
const inquirer = require('inquirer');
const fs = require("fs/promises");
const { log } = require('console');
// questions for user prompts
const questions = [
    {
        type: 'input',
        message: 'Enter text for your logo (up to 3 characters).',
        name: 'text'
    },
    {
        type: 'input',
        message: 'Enter text color (color keyword or hexadecimal number)',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'Choose a shape',
        choices: ['Circle', 'Triangle', 'Square'],
        name: 'chosenShape',
    },
    {
        type: 'input',
        message: 'Enter shape color (color keyword or hexadecimal number)',
        name: 'shapeColor',
    },
];
// initializes application
function init() {
    // prompts user w/questions and handles answers
inquirer.prompt(questions).then(answers => {
    let shapeChoice;
    // creates selected shape base on user input
    if (answers.chosenShape === "Circle") {
        shapeChoice = new Circle(answers.text, answers.textColor, answers.shapeColor);
    } else if (answers.chosenShape === "Triangle") {
        shapeChoice = new Triangle(answers.text, answers.textColor, answers.shapeColor);
    } else if (answers.chosenShape === "Square") {
        shapeChoice = new Square(answers.text, answers.textColor, answers.shapeColor);
    } else {
        // handles invalid shape type
        console.log("Invalid shape type.");
    }
    // generates SVG content for selected shape      
    const svgContent = shapeChoice.renderSVG();    
    // writes SVG content to file named 'logo.svg'
        fs.writeFile('logo.svg', svgContent).then(() => console.log('Generated logo.svg')).catch(err => console.log(err));
    })
}
// calling init function to start app
init()