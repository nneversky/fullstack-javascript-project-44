/* eslint-disable */
import sampleSay from '../index.js'


const NOD = (x, y) => {
	if (y > x) return NOD(y, x);
	if (!y) return x;
	return NOD(y, x % y);
}

const generateRandomNum = () => {
    let num = Math.floor(Math.random(1, 100) * 50);
    return num;
}

const arrRandomNum = () => {
    const arrEquation = [];
    for (let i = 0; i < 3; i ++)
        arrEquation.push([generateRandomNum(), generateRandomNum()]);

    return arrEquation;
}

const arrNODNum = (arr) => {
    const arrNOD = [];
    for (let i = 0; i < 3; i ++)
        arrNOD.push(NOD(arr[i][0], arr[i][1]))
    
    return arrNOD;
}

const NODarr = (arrEquation) => {
    const arr = [];
    for (let i = 0; i < 3; i ++)
        arr.push(`${arrEquation[i][0]} ${arrEquation[i][1]}`);

    return arr;
}

const mainGcdFunc = (nameUser) =>{
    const randomArrOne = arrRandomNum();
    return sampleSay(nameUser, 'Find the greatest common divisor of given numbers.', NODarr(randomArrOne), arrNODNum(randomArrOne));
}

export default mainGcdFunc;