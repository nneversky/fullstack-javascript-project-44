/* eslint-disable */
import runEngine from "../index.js";
import { getRandomInRange } from "../utils.js";

const strProgress = () => {
  let num = getRandomInRange(1, 10);
  let num2 = getRandomInRange(1, 10);
  let numFine = [[]];
  let numProgress = getRandomInRange(0, 10);
  let num3 = 0;
  for (let i = 0; i < 10; i++) {
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
  const arrNum = [];
  for (let i = 0; i < 3; i++) arrNum.push(...arr[i][0]);
  return arrNum;
};

const numArrayProgress = () => {
  const arr = strProgressionNum();
  const strArr = strArrayProgress(arr);
  const arrNum = [];
  for (let i = 0; i < 3; i++) arrNum.push([strArr[i], arr[i][1]]);
  return arrNum;
};

const mainProgressionFunc = (nameUser) => {
  return runEngine(
    nameUser,
    "What number is missing in the progression?",
    numArrayProgress()
  );
};

export default mainProgressionFunc;
