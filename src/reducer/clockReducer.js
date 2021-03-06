import {
  UPDATE,
  STARTPAUSE,
  RESET,
  INCREASE,
  DECREASE,
} from '../actions/actionTypes'
import { initialState } from '../initialState'

function clockReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE:
      const data = action.payload
      return {
        ...state,
        displayTime: data.displayTime,
        onBreak: data.onBreak,
        intervalId: data.intervalId,
      }

    case STARTPAUSE:
      return {
        ...state,
        start: !state.start,
      }

    case RESET:
      const audioData = action.payload
      audioData.audio.pause()
      audioData.audio.currentTime = 0

      return {
        ...state,
        start: false,
        onBreak: false,
        intervalId: state.intervalId,
        displayTime: 25 * 60,
        // breakLength: 5 * 60,
        // sessionLength: 25 * 60,
        breakLength: 5,
        sessionLength: 25,
      }

    case INCREASE:
      const incData = action.payload
      return {
        ...state,
        displayTime:
          incData.data === 'session' &&
          !state.start &&
          state.displayTime !== 3600
            ? state.sessionLength + 60
            : state.sessionLength,
        sessionLength:
          state.sessionLength === 3600
            ? 3600
            : incData.data === 'session' && !state.start
            ? state.sessionLength + 60
            : state.sessionLength,
        breakLength:
          state.breakLength === 3600
            ? 3600
            : incData.data === 'break' && !state.start
            ? state.breakLength + 60
            : state.breakLength,
      }

    case DECREASE:
      const decData = action.payload
      return {
        ...state,
        displayTime:
          decData.data === 'session' && !state.start && state.displayTime !== 60
            ? state.sessionLength - 60
            : state.sessionLength,

        sessionLength:
          state.sessionLength === 60
            ? 60
            : decData.data === 'session' && !state.start
            ? state.sessionLength - 60
            : state.sessionLength,
        breakLength:
          state.breakLength === 60
            ? 60
            : decData.data === 'break' && !state.start
            ? state.breakLength - 60
            : state.breakLength,
      }

    default:
      return initialState
  }
}

export default clockReducer
