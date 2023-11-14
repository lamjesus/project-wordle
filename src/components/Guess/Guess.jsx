import React from 'react';
import { checkGuess } from '../../game-helpers';

function Guess({ attempt, gameAnswer }) {
	const checkAnswer = checkGuess(attempt, gameAnswer);
	const cells = checkAnswer
		? checkAnswer.map((letter, index) => (
				<span className={`cell ${letter.status}`} key={index}>
					{letter.letter}
				</span>
		  ))
		: Array(5)
				.fill(null)
				.map((_, index) => <span className='cell' key={index}></span>);

	return <p className='guess'>{cells}</p>;
}

export default Guess;
