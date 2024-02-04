/* eslint-disable */
import readlineSync from 'readline-sync'

const numEven = () => {
    let num = Math.floor(Math.random(1, 100) * 50);
    return num;
}

const checkEven = (nameUser) => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < 3; i ++){
        let coutNum = numEven();
        console.log(`Question: ${coutNum}`);
        const sayCheck = readlineSync.question('Your answer: ');
        let checkQuestion = (coutNum % 2 === 0) ? 'yes' : 'no';
        if (sayCheck === checkQuestion){
            console.log('Correct!');
        } else {
            console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${nameUser}!`);
            break;
        }
        if (checkQuestion)
            console.log(`Congratulations, ${nameUser}!`);
    } 
}

export default checkEven;