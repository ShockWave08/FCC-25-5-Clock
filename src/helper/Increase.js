import React from 'react'
import { IncreaseIcon } from '../utility/Icon'

const Increase = ({ idName, onClick }) => {
  return (
    <button className='btn' id={idName} onClick={onClick}>
      <IncreaseIcon />
    </button>
  )
}

export default Increase
