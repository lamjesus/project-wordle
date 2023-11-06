import React from 'react';

function Guess({ attempt }) {
	const cells = attempt
		? attempt.split('').map((letter, index) => (
				<span className='cell' key={index}>
					{letter}
				</span>
		  ))
		: Array(5)
				.fill(null)
				.map((_, index) => <span className='cell' key={index}></span>);

	return <p className='guess'>{cells}</p>;
}

export default Guess;
