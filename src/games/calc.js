/* eslint-disable */
import runEngine from "../index.js";
import { getRandomInRange } from "../utils.js";

const randomSymbolMath = () => {
  const symbolMath = ["-", "+", "*"];
  const symbol = Math.floor(Math.random() * symbolMath.length);
  return symbolMath.at(symbol);
};

const generateRandomEquation = () => {
  return `${getRandomInRange(0, 50)} ${randomSymbolMath()} ${getRandomInRange(
    0,
    50
  )}`;
};

const randomEquation = () => {
  const arrEquation = [];
  for (let i = 0; i < 3; i++) arrEquation.push(generateRandomEquation());
  return arrEquation;
};

const arrGenerateRound = () => {
  const randomArr = randomEquation();
  const arr = randomArr.map((arrRandom) => [arrRandom, eval(arrRandom)]);
  return arr;
};

const mainCalcFunc = (nameUser) => {
  return runEngine(
    nameUser,
    "What is the result of the expression?",
    arrGenerateRound()
  );
};

export default mainCalcFunc;
