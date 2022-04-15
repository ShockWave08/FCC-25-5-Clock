import React from 'react'
import { DecreaseIcon } from '../utility/Icon'

const Decrease = ({ idName, onClick }) => {
  return (
    <button id={idName} className='btn' onClick={onClick}>
      <DecreaseIcon />
    </button>
  )
}

export default Decrease
