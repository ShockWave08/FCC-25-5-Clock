import React from 'react'

const Clock = ({ timeLeft, clockStatus }) => {
  return (
    <section className='timer'>
      <h2 id='timer-label'>{clockStatus}</h2>
      <h1 id='time-left'>{timeLeft}</h1>
    </section>
  )
}

export default Clock
