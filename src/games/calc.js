/* eslint-disable */
/* eslint-disable no-console */
import sampleSay from '../index.js'


const generateRandomNum = () => {
    let num = Math.floor(Math.random(1, 100) * 20);
    return num;
}

const randomSymbolMath = () => {
    const symbolMath = ['-', '+', '*'];
    const symbol = Math.floor(Math.random() * symbolMath.length);
    return symbolMath.at(symbol);
}

const generateRandomEquation = () => {
    return `${generateRandomNum()} ${randomSymbolMath()} ${generateRandomNum()}`;
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