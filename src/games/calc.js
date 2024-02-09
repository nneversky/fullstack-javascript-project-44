/* eslint-disable */
import sampleSay from '../index.js';
import { getRandomInRange } from '../utils.js';

const randomSymbolMath = () => {
    const symbolMath = ['-', '+', '*'];
    const symbol = Math.floor(Math.random() * symbolMath.length);
    return symbolMath.at(symbol);
}

const generateRandomEquation = () => {
    return `${getRandomInRange(0, 50)} ${randomSymbolMath()} ${getRandomInRange(0, 50)}`;
}

const randomEquation = () => {
    const arrEquation = [];
    for (let i = 0; i < 3; i ++)
        arrEquation.push(generateRandomEquation());

    return arrEquation;
}

const randomEquationEval = (arr) => {
    const arrEquation = arr.map(function(elem){
        return eval(elem);
    })

    return arrEquation;
}

const mainCalcFunc = (nameUser) =>{
    const randomArr = randomEquation();
    return sampleSay(nameUser, 'What is the result of the expression?', randomArr, randomEquationEval(randomArr));
}

export default mainCalcFunc;