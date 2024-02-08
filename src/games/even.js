/* eslint-disable */
/* eslint-disable no-console */
import sampleSay from '../index.js'

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

const arrRandomNumEval = (arr) => {
    const arrRandomEval = [];
    for (let value of arr){
        let checkQuestion = (value % 2 === 0) ? 'yes' : 'no';
        arrRandomEval.push(checkQuestion);
    }
    return arrRandomEval;
}

const mainEvenFunc = (nameUser) =>{
    const randomArr = arrRandomNum();
    return sampleSay(nameUser, 'Answer "yes" if the number is even, otherwise answer "no".', randomArr, arrRandomNumEval(randomArr))
}

export default mainEvenFunc;