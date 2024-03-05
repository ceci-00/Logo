const { default: test } = require("node:test")

// needs to export 'triangle', 'circle', and 'square' classes
class Shape {
    constructor(text, textColor, shapeColor) {
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
