import runEngine from '../index.js'
import { getRandomInRange } from '../utils.js'

const findSimpleNum = (num) => {
    let checkTrue = true
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) checkTrue = false
    }
    return checkTrue === true ? 'yes' : 'no'
}

const arrRandomNum = () => {
    const arrEquation = []
    for (let i = 0; i < 3; i++) arrEquation.push(getRandomInRange(1, 100))
    return arrEquation
}

const arrSimpleNumAndAnswer = () => {
    const randomSimpleArrNum = arrRandomNum()
    const arrSimpleNum = []
    for (let i = 0; i < 3; i++) {
        arrSimpleNum.push([
            randomSimpleArrNum[i],
            findSimpleNum(randomSimpleArrNum[i]),
        ])
    }
    return arrSimpleNum
}

export default () => {
    const rules =
        'Answer "yes" if given number is prime. Otherwise answer "no".'
    return runEngine(rules, arrSimpleNumAndAnswer())
}
