import React from 'react'

import {
  FaBell,
  FaRegBellSlash,
  FaCaretUp,
  FaCaretDown,
  FaUndoAlt,
  FaStop,
  FaPlay,
} from 'react-icons/fa'

import './icon.css'

export const StartIcon = () => {
  return <FaPlay />
}

export const StopIcon = () => {
  return <FaStop />
}

export const IncreaseIcon = () => {
  return <FaCaretUp />
}

export const DecreaseIcon = () => {
  return <FaCaretDown />
}

export const ResetIcon = () => {
  return <FaUndoAlt />
}

export const AlarmOn = () => {
  return <FaBell />
}

export const AlarmOff = () => {
  return <FaRegBellSlash />
}

//   console.log('start')
//   state.seconds = state.seconds === '00' ? 60 : state.seconds
//   state.minutes = state.clockState.includes('Set Timer')
//     ? state.minutes
//     : state.minutes - 1
//   state.intervalId = setInterval(() => {
//     state.seconds = state.seconds - 1
//     if (state.seconds === 0) {
//       state.minutes = state.minutes - 1
//       state.seconds = 59
//     }

//     if (state.minutes === 0 && state.seconds === 0) {
//       resetTimer()
//     }
//     updateTime(state.minutes, state.seconds)
//   }, 1000)
