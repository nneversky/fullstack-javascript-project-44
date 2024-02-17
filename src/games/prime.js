/* eslint-disable */
import runEngine from "../index.js";
import { getRandomInRange } from "../utils.js";

const findSimpleNum = (num) => {
  let checkTrue = true;
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) checkTrue = false;
  }
  checkTrue = checkTrue === true ? "yes" : "no";
  return checkTrue;
};

const arrRandomNum = () => {
  const arrEquation = [];
  for (let i = 0; i < 3; i++) arrEquation.push(getRandomInRange(0, 100));
  return arrEquation;
};

const simlpeArrNum = () => {
  const randomArrOne = arrRandomNum();
  const arrNum = [];
  for (let i = 0; i < 3; i++) {
    arrNum.push([randomArrOne[i], findSimpleNum(randomArrOne[i])]);
  }
  return arrNum;
};

const mainPrimeFunc = (nameUser) => {
  return runEngine(
    nameUser,
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    simlpeArrNum()
  );
};

export default mainPrimeFunc;
