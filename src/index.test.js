import { sum } from "./index";

// AAA flow of testing

// all of the tests for the sum function would be in the describe block
// if you had a multiply function, make a multiply describe block
describe("sum function", () => {
  it("should add two numbers together", () => {
    // Arrange
    let expected = 3;
    let firstNum = 1;
    let secondNum = 2;

    // Act
    let actual = sum(firstNum, secondNum);

    // Assert
    expect(actual).toBe(expected);

    expected = 5;
    firstNum = 2;
    secondNum = 3;
    actual = sum(firstNum, secondNum);

    expect(actual).toBe(expected);
  });

  it("cleaner version of adding two numbers together", () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(4, 7)).toBe(11);
  });
});
