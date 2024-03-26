// imported classes to test
const { Circle, Triangle, Square } = require('./shapes');

describe('Triangle', () => {
    // Test case to verify that the Triangle class constructor works as expected
    test('constructor should create a triangle with correct properties', () => {
        const triangle = new Triangle('ABC', 'blue', 'red');

        // Verify that the properties are set correctly
        expect(triangle.text).toBe('ABC');
        expect(triangle.textColor).toBe('blue');
        expect(triangle.shapeColor).toBe('red');
    });

    // Test case to verify the render method of Triangle class
    test('render method should return SVG representation of a triangle', () => {
        const triangle = new Triangle('ABC', 'blue', 'red');
        const expectedSVG = `<polygon points="150, 18 244, 182 56, 182" fill="red" />`;

        // Verify that the render method returns the correct SVG content
        expect(triangle.render()).toBe(expectedSVG);
    });
});

describe('Circle', () => {
    // Test case to verify that the Triangle class constructor works as expected
    test('constructor should create a circle with correct properties', () => {
        const circle = new Circle('DEF', 'blue', 'green');

        // Verify that the properties are set correctly
        expect(circle.text).toBe('DEF');
        expect(circle.textColor).toBe('blue');
        expect(circle.shapeColor).toBe('green');
    });

    // Test case to verify the render method of circle class
    test('render method should return SVG representation of a circle', () => {
        const circle = new Circle('DEF', 'blue', 'green');
        const expectedSVG = `<circle cx="150" cy="100" r="80" fill="green" />`;

        // Verify that the render method returns the correct SVG content
        expect(circle.render()).toBe(expectedSVG);
    });
});