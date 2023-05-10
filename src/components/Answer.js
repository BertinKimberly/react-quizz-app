import React from 'react'

const Answer = ({answerText,index}) => {
  const letterMapping=['A','B','C','D']
  return (
    <div className='answer'>
      <div className='answer-letter'>{letterMapping[index]}</div>
      <div className='answer-text'>{answerText}</div>
    </div>
  )
}

export default Answer
