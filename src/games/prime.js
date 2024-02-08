/* eslint-disable */
/* eslint-disable no-console */
import sampleSay from '../index.js'


const findSimpleNum = (num) => {
    let checkTrue = true;
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i ++){
        if (num % i === 0)
            checkTrue = false;
    }
    checkTrue = (checkTrue === true) ? 'yes' : 'no';
    return checkTrue;
}

const generateRandomNum = () => {
    let num = Math.floor(Math.random(1, 100) * 50);
    return num;
}

const arrRandomNum = () => {
    const arrEquation = [];
    for (let i = 0; i < 3; i ++)
        arrEquation.push(generateRandomNum());

    return arrEquation;
}

const simlpeArrNum = (arr) => {
    const arrNum = [];
    for (let value of arr)
        arrNum.push(findSimpleNum(value));

    return arrNum;
}

const mainPrimeFunc = (nameUser) =>{
    const randomArrOne = arrRandomNum();
    return sampleSay(nameUser, 'Answer "yes" if given number is prime. Otherwise answer "no".', randomArrOne, simlpeArrNum(randomArrOne));
}

export default mainPrimeFunc;