/* eslint-disable */
import readlineSync from 'readline-sync'

const numEven = () => {
    let num = Math.floor(Math.random(10) * 10);
    return num;
}

const strProgress = () => {
    let num = numEven();
    let num2 = numEven();
    let numFine = [[]];
    let numProgress = numEven();
    let num3 = 0;
    for (let i = 0; i < 10; i ++){
        num2 += num;
        numFine[0][0] = (i === numProgress) ? `${numFine} ..` : `${numFine} ${num2}`;
        if (i === numProgress)
            num3 = num2;
    }
    numFine[0][0] = numFine[0][0].slice(1,);
    numFine[1] = num3;
    return numFine;
}

const findNumProgress = (nameUser) => {
    let checkTrue = false;
    for (let i = 0; i < 3; i ++){
        let arrProgress = strProgress();
        console.log('What number is missing in the progression?');
        console.log(`Question: ${arrProgress[0]}`);
        const checkNum = readlineSync.question('Your answer: ');
        if (+checkNum === arrProgress[1]){
            console.log('Correct!');
            checkTrue = true;
        } else {
            console.log(`'${checkNum}' is wrong answer ;(. Correct answer was '${arrProgress[1]}'.`);
            console.log(`Let's try again, ${nameUser}!`);
            break;
        }
    }
    if (checkTrue)
        console.log(`Congratulations, ${nameUser}!`);
}

export default findNumProgress;