import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import Guess from '../Guess/Guess';
function AnswerList({ userAnswer, gameAnswer }) {
	const ans = userAnswer.map(answer => {
		return answer.guess;
	});

	return (
		<div className='guess-results'>
			{range(NUM_OF_GUESSES_ALLOWED).map(num => {
				const attempt = ans[num] || '';
				return <Guess attempt={attempt} key={num} gameAnswer={gameAnswer} />;
			})}
		</div>
	);
}

export default AnswerList;
