#!/usr/bin/env node
import questionName from '../src/cli.js'
import createEquation from '../src/games/cliCalc.js'

createEquation(questionName());