import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const strProgress = () => {
  const num = getRandomInRange(1, 10);
  let num2 = getRandomInRange(1, 10);
  const numFine = [[]];
  const numProgress = getRandomInRange(1, 10);
  let num3 = 0;
  for (let i = 1; i < 11; i++) {
    num2 += num;
    numFine[0][0] = i === numProgress ? `${numFine} ..` : `${numFine} ${num2}`;
    if (i === numProgress) num3 = num2;
  }
  numFine[0][0] = numFine[0][0].slice(1);
  numFine[1] = num3;
  return numFine;
};

const strProgressionNum = () => {
  const arrNum = [];
  for (let i = 0; i < 3; i++) arrNum.push(strProgress());
  return arrNum;
};

const strArrayProgress = (arr) => {
  const arrProgression = [];
  for (let i = 0; i < 3; i++) arrProgression.push(...arr[i][0]);
  return arrProgression;
};

const numArrayProgress = () => {
  const progressionAnswer = strProgressionNum();
  const strProgressionNumber = strArrayProgress(progressionAnswer);
  const arrNumProgress = [];
  for (let i = 0; i < 3; i++) {
    arrNumProgress.push([strProgressionNumber[i], progressionAnswer[i][1]]);
  }
  return arrNumProgress;
};

export default () => {
  const rules = 'What number is missing in the progression?';
  return runEngine(rules, numArrayProgress());
};
