/* eslint-disable no-plusplus */
import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const arrRandomNum = () => {
  const arrEquation = [];
  for (let i = 0; i < 3; i++) {
    arrEquation.push(getRandomInRange(0, 100));
  }
  return arrEquation;
};

const arrAnswer = (arr) => {
  const arrEvenNum = arr.map((num) => {
    if (num % 2 === 0) return 'yes';
    return 'no';
  });
  return arrEvenNum;
};

const generateArrRound = () => {
  const arrRandomNumber = arrRandomNum();
  const arrAnswerYesOrNo = arrAnswer(arrRandomNumber);
  const arrEvenNum = [];
  for (let i = 0; i < arrRandomNumber.length; i++) {
    arrEvenNum.push([arrRandomNumber[i], arrAnswerYesOrNo[i]]);
  }
  return arrEvenNum;
};

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  return runEngine(rules, generateArrRound());
};
