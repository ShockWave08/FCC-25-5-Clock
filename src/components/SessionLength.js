import React from 'react'

import Increase from '../helper/Increase'
import Decrease from '../helper/Decrease'

const SessionLength = ({ sessionLen, onIncrease, onDecrease }) => {
  return (
    <section id='session-label'>
      <h3>Session-Length</h3>
      <div>
        <Decrease
          idName={'session-decrement'}
          onClick={() => onDecrease('session')}
        />

        <h2 id='session-length'>{sessionLen}</h2>

        <Increase
          idName={'session-increment'}
          onClick={() => onIncrease('session')}
        />
      </div>
    </section>
  )
}

export default SessionLength
