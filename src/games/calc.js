import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const randomSymbolMath = () => {
  const symbolMath = ['-', '+', '*']; return symbolMath[getRandomInRange(0, symbolMath.length - 1)];
};

const calculation = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;

    case '-':
      return num1 - num2;

    case '*':
      return num1 * num2;

    default:
      throw new Error(`Invalid operator - ${operator}`);
  }
};

const generateRound = () => {
  const num1 = getRandomInRange();
  const num2 = getRandomInRange();
  const operator = randomSymbolMath();
  const question = `${num1} ${operator} ${num2}`;
  const answer = calculation(num1, num2, operator).toString();
  return [question, answer];
};

export default () => {
  const rules = 'What is the result of the expression?';
  return runEngine(rules, generateRound);
};
