import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const findSimpleNum = (num) => {
  let checkTrue = true;
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i += 1) {
    if (num % i === 0) checkTrue = false;
  }
  return checkTrue === true ? 'yes' : 'no';
};

const generateRound = () => {
  const num1 = getRandomInRange(1, 100);
  return [num1, findSimpleNum(num1)];
};

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return runEngine(rules, generateRound);
};
