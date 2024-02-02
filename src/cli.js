/* eslint-disable */
import readlineSync from 'readline-sync'

let sayName = '';
const questionName = () =>{
    console.log('Welcome to the Brain Games!');
    sayName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${sayName}!`);
    return sayName
}

export default questionName;