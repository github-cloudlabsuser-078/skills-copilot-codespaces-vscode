// FILEPATH: /workspaces/skills-copilot-codespaces-vscode/test.js
const { add } = require('./your-file-name'); // replace 'your-file-name' with the actual file name

describe('add', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('adds 5 + 5 to equal 10', () => {
        expect(add(5, 5)).toBe(10);
    });

    test('adds -1 + -1 to equal -2', () => {
        expect(add(-1, -1)).toBe(-2);
    });

    test('adds 0 + 0 to equal 0', () => {
        expect(add(0, 0)).toBe(0);
    });
});