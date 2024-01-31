import readlineSync from 'readline-sync'
export const questionName = () =>{
    console.log('Welcome to the Brain Games!');
    const sayName = readlineSync.question('May I have your name?');
    console.log(`Hello, ${sayName}!`);
}