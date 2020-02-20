import "./styles.css";

/* 
  
  Step I - Add Jest as a dev dependency
  install Jest -
  npm install --dev jest
  yarn add --dev jest

  Step II - Add the "test" script
  scripts: {
    "test": "jest --watchAll"
  }

  STEP III - start the test runner in the command line
  yarn test || npm test

  Alternatively, start the test runner in your IDE or even in codesandbox (You will need to look up the documentation if you would prefer to use your IDE)

*/

// STEP IV - Add a function (unit) that we can test

// Write a "sum" function that takes in two numbers and returns the sum of those two numbers

export const sum = (a, b) => a + b;

// STEP V - Create a test file - `index.test.js` - and write unit tests for this "sum" function
