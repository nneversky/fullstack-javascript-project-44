#!/usr/bin/env node
/* eslint-disable */
import makeWelcome from "../src/cli.js";
import mainPrimeFunc from "../src/games/prime.js";

mainPrimeFunc(makeWelcome());
