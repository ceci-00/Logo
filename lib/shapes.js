// imports 'test' module from 'node:test' pkg
const { default: test } = require("node:test");
// imports 'validateColor' function from 'validate-color' pkg
const validateColor = require('validate-color').default;
// define shape class
class Shape {
    // constructor function for Shape class
    constructor(text, textColor, shapeColor) {
        // log info about the new shape being created
        console.log(`=====New Shape Being Made ==
        text: ${text}\ntextColor: ${textColor}\nshapeColor: ${shapeColor}`);
        // validates input parameters
        if (text.length > 3) {
            throw new Error('`text` must contain at most 3 characters.')
        }
        if (!validateColor(textColor)) {
            throw new Error(`Invalid text color input`)
        }
        if (!validateColor(shapeColor)) {
            throw new Error(`Invalid shape color input`)
        }
        // sets properties of the shape instance
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    // method that renders the SVG representation of the shape
    renderSVG() {
        return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    ${this.render()}
    <text x="125" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`
    }
}
// defines Triangle class, inheriting from Shape class
class Triangle extends Shape {
    // constructor function for Triangle class
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor) // calls parent constructor
    }
    // method renders SVG representation of triangle
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
    }
}
// defines Circle class, inheriting from Shape class
class Circle extends Shape {
    // constructor function for Circle class
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor) //calls parent constructor
    }
    // method renders SVG representation of circle
    render() {
        return `<circle cx="125" cy="100" r="80" fill="${this.shapeColor}" />`
    }
}
// defines Square class, inheriting from Shape class
class Square extends Shape {
    // constructor function for Square class
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor) // calls parent constructor
    }
    // method renders SVG representation of square
    render() {
        return `<rect cx="250" cy="250" fill="${this.shapeColor}" />`
    }
}
// Exports Triangle, Circle, and Square classes
module.exports = { Triangle, Circle, Square };