// runs application using imports from lib
const {Triangle,Circle,Square} = require('./lib/shapes');
const inquirer = require('inquirer');
const fs = require("fs/promises");
const { log } = require('console');
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

function init() {
inquirer.prompt(questions).then(answers => {
    let shapeChoice;
    if (answers.chosenShape === "Circle") {
        shapeChoice = new Circle(answers.text, answers.textColor, answers.shapeColor);
    } else if (answers.chosenShape === "Triangle") {
        shapeChoice = new Triangle(answers.text, answers.textColor, answers.shapeColor);
    } else if (answers.chosenShape === "Square") {
        shapeChoice = new Square(answers.text, answers.textColor, answers.shapeColor);
    } else {
        console.log("Invalid shape type.");
    }
          
    const svgContent = shapeChoice.renderSVG();    
        fs.writeFile('logo.svg', svgContent).then(() => console.log('Generated logo.svg')).catch(err => console.log(err));
    })
}

init()