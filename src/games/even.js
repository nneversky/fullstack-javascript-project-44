/* eslint-disable */
import runEngine from "../index.js";
import { getRandomInRange } from "../utils.js";

const arrRandomNum = () => {
  const arrEquation = [];
  for (let i = 0; i < 3; i++) arrEquation.push(getRandomInRange(0, 100));
  return arrEquation;
};

const arrRandomNumEval = (arr) => {
  const arrRandomEval = [];
  for (let value of arr) {
    let checkQuestion = value % 2 === 0 ? "yes" : "no";
    arrRandomEval.push(checkQuestion);
  }
  return arrRandomEval;
};

const arrGenerateRound = () => {
  const randomArr = arrRandomNum();
  const arrEval = arrRandomNumEval(randomArr);
  const arrEven = [];
  for (let i = 0; i < 3; i++) {
    arrEven.push([randomArr[i], arrEval[i]]);
  }
  return arrEven;
};

const mainEvenFunc = (nameUser) => {
  return runEngine(
    nameUser,
    'Answer "yes" if the number is even, otherwise answer "no".',
    arrGenerateRound()
  );
};

export default mainEvenFunc;
