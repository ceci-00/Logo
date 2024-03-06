// runs application using imports from lib
const { readFile, writeFile } = require('fs/promises');
const Shape = require('./lib/shapes');
const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        message: 'Enter text for your logo (up to 3 characters).',
        name: 'text'
    },
    {
        type: 'input',
        message: 'Enter text color (color keyword or hexadecimal number)',
        name: 'text-color',
    },
    {
        type: 'list',
        message: 'Choose a shape',
        choices: ['circle', 'triangle', 'square'],
        name: 'chosen-shape',
    },
    {
        type: 'input',
        message: 'Enter shape color (color keyword or hexadecimal number)',
        name: 'shape-color',
    },
];

