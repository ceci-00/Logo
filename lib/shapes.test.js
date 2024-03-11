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

test("the first parameter of triangle should set text properly.", () => {
    const b = "ABC";
    const a = new Triangle(b, 'Red', 'green');
    expect(a.text).toBe(b);
});

test("the second parameter of triangle should set textColor properly.", () => {
    const b = "Blue";
    const a = new Triangle('CUT', b, 'red');
    expect(a.textColor).toBe(b);
});

test("the third parameter of triangle should set shapeColor properly.", () => {
    const b = "Red";
    const a = new Triangle('cut', 'blue', b);
    expect(a.shapeColor).toBe(b);
});