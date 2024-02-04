/* eslint-disable */
import readlineSync from 'readline-sync'

const findSimpleNum = (num) => {
    let checkTrue = true;
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i ++){
        if (num % i === 0)
            checkTrue = false;
    }
    checkTrue = (checkTrue === true) ? 'yes' : 'no';
    return checkTrue;
}

const randonNum = () => {
    let num = Math.floor(Math.random(1, 100) * 50);
    return num;
}

const checkSimpleNum = (nameUser) => {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    let checkTrue = false;
    for (let i = 0; i < 3; i ++){
        let simpleNum = randonNum();
        console.log(`Question: ${simpleNum}`);
        const checkNum = readlineSync.question('Your answer: ');
        if (checkNum === findSimpleNum(simpleNum)){
            console.log('Correct!');
            checkTrue = true;
        } else {
            console.log(`'${checkNum}' is wrong answer ;(. Correct answer was '${findSimpleNum(simpleNum)}'.`);
            console.log(`Let's try again, ${nameUser}!`);
            checkTrue = false;
            break;
        }
    }
    if (checkTrue)
        console.log(`Congratulations, ${nameUser}!`);
}

export default checkSimpleNum;