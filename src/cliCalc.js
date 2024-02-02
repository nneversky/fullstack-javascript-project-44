/* eslint-disable */
import readlineSync from 'readline-sync'

const numEven = () => {
    let num = Math.floor(Math.random(3) * 3);
    return num;
}

const numEq = () => {
    let num = Math.floor(Math.random(1, 100) * 20);
    return num;
}

const symbolMath = () => {
    let num = numEven();
    if (num === 0){
        return '+';
    } else if (num === 1){
        return '-';
    } else if (num === 2){
        return '*';
    }
}

const createEquation = (nameUser) => {
    console.log('What is the result of the expression?');
    let checkTrue = false;
    for (let i = 0; i < 3; i ++){
        let equation = `${numEq()} ${symbolMath()} ${numEq()}`;
        console.log(`Question: ${equation}`);
        const checkNum = readlineSync.question('Your answer: ');
        if (+checkNum === eval(equation)){
            console.log('Correct!');
            checkTrue = true;
        } else {
            console.log(`'${checkNum}' is wrong answer ;(. Correct answer was '${eval(equation)}'.`);
            console.log(`Let's try again, ${nameUser}!`);
            break;
        }
    }
    if (checkTrue)
            console.log(`Congratulations, ${nameUser}}!`);
}

export default createEquation;