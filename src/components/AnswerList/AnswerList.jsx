import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
function AnswerList({ answers }) {
	const ans = answers.map(answer => {
    
		return answer.guess;
	});

	return (
		<div className='guess-results'>
			{range(NUM_OF_GUESSES_ALLOWED).map(num => {
				const attempt = ans[num] || '';
				return <Guess attempt={attempt} key={num} />;
			})}
		</div>
	);
}

export default AnswerList;
