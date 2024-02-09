/* eslint-disable */
import sampleSay from '../index.js';
import { getRandomInRange } from '../utils.js';

const arrRandomNum = () => {
    const arrEquation = [];
    for (let i = 0; i < 3; i ++)
        arrEquation.push(getRandomInRange(0, 100));

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
    return sampleSay(nameUser, 'Answer "yes" if the number is even, otherwise answer "no".', randomArr, arrRandomNumEval(randomArr));
}

export default mainEvenFunc;