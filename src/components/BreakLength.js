import React from 'react'

import Increase from '../helper/Increase'
import Decrease from '../helper/Decrease'

const BreakLength = ({ breakLen, onIncrease, onDecrease }) => {
  return (
    <section id='break-label'>
      <h3>Break-Length</h3>
      <div>
        <Decrease
          idName={'break-decrement'}
          onClick={() => onDecrease('break')}
        />

        <h2 id='break-length'>{breakLen}</h2>

        <Increase
          idName={'break-increment'}
          onClick={() => onIncrease('break')}
        />
      </div>
    </section>
  )
}

export default BreakLength
