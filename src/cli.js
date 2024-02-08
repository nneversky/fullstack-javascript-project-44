/* eslint-disable */
/* eslint-disable no-console */
import readlineSync from 'readline-sync'

const questionName = () =>{
    console.log('Welcome to the Brain Games!');
    let sayName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${sayName}!`);
    return sayName
}

export default questionName;