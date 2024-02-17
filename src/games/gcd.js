/* eslint-disable */
import runEngine from "../index.js";
import { getRandomInRange } from "../utils.js";

const nod = (x, y) => {
  if (y > x) return nod(y, x);
  if (!y) return x;
  return nod(y, x % y);
};

const arrRandomNum = () => {
  const arrEquation = [];
  for (let i = 0; i < 3; i++)
    arrEquation.push([getRandomInRange(0, 100), getRandomInRange(0, 100)]);
  return arrEquation;
};

const arrNODNum = (arr) => {
  const arrNOD = [];
  for (let i = 0; i < 3; i++) arrNOD.push(nod(arr[i][0], arr[i][1]));
  return arrNOD;
};

const arrNOD = () => {
  const arrEquation = arrRandomNum();
  const one = arrNODNum(arrEquation);
  const arr = [];
  for (let i = 0; i < 3; i++)
    arr.push([`${arrEquation[i][0]} ${arrEquation[i][1]}`, one[i]]);
  return arr;
};

const mainGcdFunc = (nameUser) => {
  return runEngine(
    nameUser,
    "Find the greatest common divisor of given numbers.",
    arrNOD(arrRandomNum())
  );
};

export default mainGcdFunc;
