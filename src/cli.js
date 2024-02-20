import readlineSync from 'readline-sync'

const makeWelcome = () =>{
    console.log('Welcome to the Brain Games!');
    let sayName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${sayName}!`);
    return sayName
}

export default makeWelcome;