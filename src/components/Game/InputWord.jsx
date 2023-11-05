import React from 'react'

function InputWord ({ handleAnswer }) {
  const [guess, setGuess] = React.useState('')

  const handleGuess = (event) => {
    event.preventDefault()
    setGuess(event.target.value.toUpperCase())
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    handleAnswer(guess)
    setGuess('')
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input pattern="^[A-Za-z]{5}$" title="Please enter exactly 5 letters." required id="guess-input" type="text" value={guess} onChange={handleGuess} />
    </form>
  )
}

export default InputWord
