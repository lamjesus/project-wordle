import React from 'react'
import InputWord from './InputWord'
import { sample } from '../../utils'
import { WORDS } from '../../data'
import AnswerList from '../AnswerList/AnswerList'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game () {
  const [answer, setAnswer] = React.useState([])
  const handleAnswer = (guess) => {
    const guesses = [...answer]
    guesses.push({ guess, id: Math.random() })
    setAnswer(guesses)
  }
  return (
    <>
      <AnswerList answers={answer}/>
      <InputWord handleAnswer={handleAnswer} />
    </>
  )
}

export default Game
