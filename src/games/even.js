import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const number = getRandomInRange();
  const answer = isEven(number) ? 'yes' : 'no';
  const question = String(number);
  return [question, answer];
};

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  return runEngine(rules, generateRound);
};
