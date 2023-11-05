import React from 'react'

function AnswerList ({ answers }) {
  return (
    <div>
      {answers.map((answer) => (
        <div key={answer.id} className="guess-results">
          <p className="guess">{answer.guess}</p>
        </div>
      ))}
    </div>
  )
}

export default AnswerList
