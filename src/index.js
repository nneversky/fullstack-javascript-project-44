import readlineSync from 'readline-sync';
import makeWelcome from './cli.js';

const roundsCount = 3;

const runEngine = (rules, GenerateRound) => {
  const nameUser = makeWelcome();
  console.log(rules);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = GenerateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === String(answer)) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`,
      );
      return console.log(`Let's try again, ${nameUser}!`);
    }
  }
  return console.log(`Congratulations, ${nameUser}!`);
};

export default runEngine;
