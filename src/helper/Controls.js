import React from 'react'
import { StartIcon, StopIcon, ResetIcon } from '../utility/Icon'

const Controls = ({ idName, icon, onClick }) => {
  const iconName = { icon }
  return (
    <button className='btn' id={idName} onClick={onClick}>
      {iconName.icon === 'pause' ? (
        <StopIcon />
      ) : iconName.icon === 'start' ? (
        <StartIcon />
      ) : (
        <ResetIcon />
      )}
    </button>
  )
}

export default Controls
