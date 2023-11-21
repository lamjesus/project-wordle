import React from 'react';
import InputWord from './InputWord';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import AnswerList from '../AnswerList/AnswerList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [userAnswer, setUserAnswer] = React.useState([]);
	const [win, setWin] = React.useState(false);
  console.log(win)
	const handleAnswer = guess => {
		const guesses = [...userAnswer];
		guesses.push({ guess, id: Math.random() });
		setUserAnswer(guesses);
	};

	return (
		<>
			<AnswerList userAnswer={userAnswer} gameAnswer={answer} setWin={setWin} />
			<InputWord handleAnswer={handleAnswer} win={win} />
		</>
	);
}

export default Game;
