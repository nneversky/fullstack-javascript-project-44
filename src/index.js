/* eslint-disable */
import readlineSync from "readline-sync";

const generateRound = (question) => {
  console.log(`Question: ${question}`);
  const checkingAnswer = readlineSync.question("Your answer: ");
  return checkingAnswer;
};

const roundsCount = 3;

const runEngine = (nameUser, rules, arrGenerateRound) => {
  console.log(rules);
  let checkTrue = false;
  for (let i = 0; i < roundsCount; i++) {
    const [value, key] = arrGenerateRound[i];
    const round = generateRound(value);
    if (round === String(key)) {
      console.log("Correct!");
      checkTrue = true;
    } else {
      console.log(
        `'${round}' is wrong answer ;(. Correct answer was '${key}'.`
      );
      console.log(`Let's try again, ${nameUser}!`);
      checkTrue = false;
      break;
    }
  }
  if (checkTrue) console.log(`Congratulations, ${nameUser}!`);
};

export default runEngine;
