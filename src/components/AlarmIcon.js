import React from 'react'

import { AlarmOn, AlarmOff } from '../utility/Icon'

const AlarmIcon = (props) => {
  const timerDone = props.timerDone

  if (timerDone === 0) {
    return setTimeout(() => {
      ;<button className='btn alarmIcon'>
        <AlarmOn />
      </button>
    }, 2000)
  } else {
    return (
      <button className='btn alarmIcon'>
        <AlarmOff />
      </button>
    )
  }
}

export default AlarmIcon
