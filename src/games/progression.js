import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const generateRound = () => {
  const num = getRandomInRange(1, 10);
  let num2 = getRandomInRange(1, 10);
  const numFine = [[]];
  const numProgress = getRandomInRange(1, 10);
  let num3 = 0;
  for (let i = 1; i < 11; i += 1) {
    num2 += num;
    numFine[0][0] = i === numProgress ? `${numFine} ..` : `${numFine} ${num2}`;
    if (i === numProgress) num3 = num2;
  }
  numFine[0][0] = numFine[0][0].slice(1);
  numFine[1] = num3;
  return numFine;
};

export default () => {
  const rules = 'What number is missing in the progression?';
  return runEngine(rules, generateRound);
};
