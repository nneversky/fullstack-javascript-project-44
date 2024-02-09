#!/usr/bin/env node
/* eslint-disable */
import makeWelcome from '../src/cli.js'
import mainProgressionFunc from '../src/games/progression.js'

mainProgressionFunc(makeWelcome());