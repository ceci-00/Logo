const { default: test } = require("node:test");
const validateColor = require('validate-color');

// needs to export 'triangle', 'circle', and 'square' classes
class Shape {
    constructor(text, textColor, shapeColor) {
        if (text.length < 3) {
            throw new Error('`text` must contain at least 3 characters.')
        }
        if (!validateColor(textColor)) {
            throw new Error(`Invalid text color input`)
        }
        if (!validateColor(shapeColor)) {
            throw new Error(`Invalid shape color input`)
        }
        
        this.text = text,
        this.textColor = textColor,
        this.shapeColor = shapeColor,
    }

    renderSVG() {
    return `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
${this.render()}
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`
}
};

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        return `<rect width="100" height="100" fill="${this.shapeColor}" />`
    }
}

module.exports = Shape;