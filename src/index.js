import readlineSync from "readline-sync";
import makeWelcome from "./cli.js";

const generateRound = (question) => {
  console.log(`Question: ${question}`);
  const checkingAnswer = readlineSync.question("Your answer: ");
  return checkingAnswer;
};

const roundsCount = 3;

const runEngine = (rules, arrGenerateRound) => {
  const nameUser = makeWelcome();
  console.log(rules);
  for (let i = 0; i < roundsCount; i++) {
    const [value, key] = arrGenerateRound[i];
    const round = generateRound(value);
    if (round === String(key)) {
      console.log("Correct!");
    } else {
      console.log(
        `'${round}' is wrong answer ;(. Correct answer was '${key}'.`
      );
      return console.log(`Let's try again, ${nameUser}!`);
    }
  }
  console.log(`Congratulations, ${nameUser}!`);
};

export default runEngine;
