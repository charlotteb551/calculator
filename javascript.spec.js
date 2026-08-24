const calculator = require('./javascript');

describe("calculator functions", () => {
  test("add should add two numbers", () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.add(-2, 3)).toBe(1);
    expect(calculator.add(2.5, 1.5)).toBe(4);
  });

  test("subtract should subtract the second number from the first", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.subtract(3, 5)).toBe(-2);
    expect(calculator.subtract(2.5, 1.5)).toBe(1);
  });

  test("multiply should multiply two numbers", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.multiply(-2, 3)).toBe(-6);
    expect(calculator.multiply(2.5, 2)).toBe(5);
  });

  test("divide should divide the first number by the second", () => {
    expect(calculator.divide(6, 3)).toBe(2);
    expect(calculator.divide(5, 2)).toBe(2.5);
    expect(calculator.divide(-6, 3)).toBe(-2);
  });

});