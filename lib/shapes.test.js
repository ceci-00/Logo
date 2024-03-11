// test for shapes
const { Circle, Triangle, Square } = require('./shapes');

describe("Circle", () => {
    test("Should return SVG for Circle", () => {
        const circle = new Circle('CUT','blue','red');
        const expectedSVG = `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="red" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">CUT</text>
    </svg>`;
    expect(circle.renderSVG()).toEqual(expectedSVG);
    });
});

