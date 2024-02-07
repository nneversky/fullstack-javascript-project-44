/* eslint-disable */
import readlineSync from 'readline-sync'

const sampleSay = (nameUser, mainQuestion, checkExample, correctAnswer) => {
    console.log(mainQuestion);
    let checkTrue = false;
    for (let i = 0; i < 3; i ++){
        console.log(`Question: ${checkExample[i]}`);
        const checkingAnswer = readlineSync.question('Your answer: ');
        if (checkingAnswer === String(correctAnswer[i])){
            console.log('Correct!');
            checkTrue = true;
        } else {
            console.log(`'${checkingAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer[i]}'.`);
            console.log(`Let's try again, ${nameUser}!`);
            checkTrue = false;
            break;
        }
    }
    if (checkTrue)
        console.log(`Congratulations, ${nameUser}!`);
}

export default sampleSay;