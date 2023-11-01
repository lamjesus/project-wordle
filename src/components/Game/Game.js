import React from 'react';
import InputWord from './InputWord';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  return <>
    <InputWord />

  </>;
}

export default Game;
