// const { expect } = require('expect');
// const { test } = require('picomatch');
// const { describe } = require('yargs');
const stringLength = require('./stringLength');
const reverseString = require('./reverseString');
const Calculator = require('./calculator');
const capitalize = require('./capitalize');

// String length (must be between 1 and 10)
describe('String length between 1 and 10', () => {
  test('Hello = 5 ', () => {
    const count = stringLength('Hello');
    expect(count).toBe(5);
  });

  test('eiString10CharacterErBeshi  = more than 10', () => {
    const count = stringLength('eiString10CharacterErBeshi');
    expect(count).toBe(26);
  });
});


// reverseString
describe('return a reversed string', () => {
  test('Hello will be olleH', () => {
    expect(reverseString('Hello')).toBe('olleH');
  });
});


// Calculator class
describe('test the Calculator class', () => {
  const calc = new Calculator(6,2);

  test('calc add 6 + 2 = 8', () => {
    expect(calc.add()).toBe(8);
  });

  test('calc subtract 6 - 2 = 4', () => {
    expect(calc.subtract()).toBe(4);
  });

  test('calc divide 6 / 2 = 3', () => {
    expect(calc.divide()).toBe(3);
  });

  test('calc multiply 6 * 2 = 12', () => {
    expect(calc.multiply()).toBe(12);
  });

});


// Capitalize string

describe('Capitalize the first character of a string', () => {
  test('hELLO should return HELLO', () => {
    const testString = String(capitalize('hELLO'));
    expect(testString).toBe('HELLO');
  });
});