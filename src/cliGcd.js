/* eslint-disable */
import readlineSync from 'readline-sync'

const NOD = (x, y) => {
	if (y > x) return NOD(y, x);
	if (!y) return x;
	return NOD(y, x % y);
}

const randonNum = () => {
    let num = Math.floor(Math.random(1, 100) * 50);
    return num;
}

const sayNOD = (nameUser) => {
    let checkTrue = false;
    for (let i = 0; i < 3; i ++){
        console.log('Find the greatest common divisor of given numbers.');
        let num_1 = randonNum();
        let num_2 = randonNum();
        console.log(`Question: ${num_1} ${num_2}`);
        const checkNum = readlineSync.question('Your answer: ');
        if (+checkNum === NOD(num_1, num_2)){
            console.log('Correct!');
            checkTrue = true;
        } else {
            console.log(`'${checkNum}' is wrong answer ;(. Correct answer was '${NOD(num_1, num_2)}'.`);
            console.log(`Let's try again, ${nameUser}!`);
            break;
        }
    }
    if (checkTrue)
        console.log(`Congratulations, ${nameUser}!`);
} 

export default sayNOD;