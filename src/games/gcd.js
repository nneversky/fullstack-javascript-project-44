import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const nod = (x, y) => {
  if (y > x) return nod(y, x);
  if (!y) return x;
  return nod(y, x % y);
};

const generateRound = () => {
  const num1 = getRandomInRange(0, 100);
  const num2 = getRandomInRange(0, 100);
  return [`${num1} ${num2}`, nod(num1, num2)];
};

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  return runEngine(rules, generateRound);
};
