import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const generateProgression = (start, step, length = 10) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const generateRound = () => {
  const start = getRandomInRange();
  const step = getRandomInRange(5, 10);
  const progression = generateProgression(start, step);
  const hiddenIndex = getRandomInRange(0, progression.length - 1);
  const answer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => {
  const rules = 'What number is missing in the progression?';
  return runEngine(rules, generateRound);
};
