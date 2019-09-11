const getMissingNumbers = require('./numbers');

test('It does not accept numbers as input', () => {
    expect(getMissingNumbers(5)).toBe('Invalid input');
});

test('It does not accept strings as input', () => {
    expect(getMissingNumbers('string')).toBe('Invalid input');
});

test('It does not accept an empty array as input', () => {
    expect(getMissingNumbers([])).toBe('Invalid input');
});

test('It returns missing numbers in an array', () => {
    expect(
        getMissingNumbers([1, 2, 3, 5, 6, 7,9])
        ).toEqual([4,8]);
});