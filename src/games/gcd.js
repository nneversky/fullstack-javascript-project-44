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

const generateArrNOD = () => {
  const arrRandomNumber = arrRandomNum();
  const arrNODNubmber = arrNODNum(arrRandomNumber);
  const arrNODandRandomNumber = [];
  for (let i = 0; i < 3; i++)
    arrNODandRandomNumber.push([
      `${arrRandomNumber[i][0]} ${arrRandomNumber[i][1]}`,
      arrNODNubmber[i],
    ]);
  return arrNODandRandomNumber;
};

export default () => {
  const rules = "Find the greatest common divisor of given numbers.";
  return runEngine(rules, generateArrNOD());
};
