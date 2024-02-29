import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const getFindSimpleNum = (num) => {
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const num = getRandomInRange(1, 100);
  const answer = getFindSimpleNum(num) === true ? 'yes' : 'no';
  return [num, answer];
};

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return runEngine(rules, generateRound);
};
