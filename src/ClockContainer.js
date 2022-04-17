import React, { useReducer, useEffect, useRef } from 'react'
import clockReducer from './reducer/clockReducer'
import {
  UPDATE,
  STARTPAUSE,
  RESET,
  INCREASE,
  DECREASE,
} from './actions/actionTypes'

import BreakLength from './components/BreakLength'
import SessionLength from './components/SessionLength'
import Clock from './components/Clock'
import Controls from './helper/Controls'
import { initialState } from './initialState'
import Audio from './components/Audio'

const ClockContainer = () => {
  const [state, dispatch] = useReducer(clockReducer, initialState)
  const audioRef = useRef(null)
  // audio source
  const audioScr =
    'https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'

  // Format display time to clock format
  function formatTime(time) {
    let minutes = Math.floor(time / 60)
    let seconds = time % 60

    return (
      (minutes < 10 ? '0' + minutes : minutes) +
      ':' +
      (seconds < 10 ? '0' + seconds : seconds)
    )
  }

  // Format session and break length to clock format
  function formatBreakNSessionTime(time) {
    let minutes = Math.floor(time / 60)

    return minutes < 10 ? '0' + minutes : minutes
  }

  // start clock
  function startClock(
    displayTime,
    onBreak,
    audio,
    sessionLength,
    breakLength,
    intervalId
  ) {
    let seconds = 1
    let date = new Date().getTime()
    let nextDate = new Date().getTime() + seconds

    intervalId = setInterval(() => {
      date = new Date().getTime()
      if (date > nextDate) {
        if (displayTime <= 0 && !onBreak) {
          audio.play()
          onBreak = true
          displayTime = breakLength
        } else if (displayTime <= 0 && onBreak) {
          audio.play()
          onBreak = false
          displayTime = sessionLength
        }

        displayTime = displayTime - 1

        nextDate += seconds
        // distch to update the current values of the state
        updateTime(displayTime, onBreak, intervalId)
      }
    }, 100)
  }

  useEffect(() => {
    if (state.start) {
      startClock(
        state.displayTime,
        state.onBreak,
        audioRef.current,
        state.sessionLength,
        state.breakLength,
        state.intervalId
      )
    }

    if (!state.start) {
      clearInterval(state.intervalId)
    }
  }, [state.start])

  function updateTime(displayTime, onBreak, intervalId) {
    dispatch({
      type: UPDATE,
      payload: {
        displayTime: displayTime,
        onBreak: onBreak,
        intervalId: intervalId,
      },
    })
  }

  function startPauseTimer() {
    dispatch({
      type: STARTPAUSE,
      payload: {
        operation: 'timer',
      },
    })
  }

  function resetTimer(audioData) {
    dispatch({
      type: RESET,
      payload: {
        operation: 'timer',
        audio: audioData,
      },
    })
  }

  function increaseTimer(data) {
    dispatch({
      type: INCREASE,
      payload: {
        data: data,
        operation: 'increase',
      },
    })
  }

  function decreaseTimer(data) {
    dispatch({
      type: DECREASE,
      payload: {
        data: data,
        operation: 'decrease',
      },
    })
  }

  return (
    <section className='alarm-clock'>
      <div className='length'>
        <BreakLength
          breakLen={formatBreakNSessionTime(state.breakLength)}
          onDecrease={decreaseTimer}
          onIncrease={increaseTimer}
        />
        <SessionLength
          sessionLen={formatBreakNSessionTime(state.sessionLength)}
          onIncrease={increaseTimer}
          onDecrease={decreaseTimer}
        />
      </div>
      <div>
        <Clock
          timeLeft={formatTime(state.displayTime)}
          clockStatus={state.onBreak ? 'Break' : 'Session'}
        />
      </div>
      <div className='control'>
        {state.start === false ? (
          <Controls
            idName={'start_stop'}
            icon={'start'}
            onClick={startPauseTimer}
          />
        ) : (
          <Controls
            idName={'start_stop'}
            icon={'pause'}
            onClick={startPauseTimer}
          />
        )}
        <Controls
          idName={'reset'}
          icon={'reset'}
          onClick={() => resetTimer(audioRef.current)}
        />
      </div>

      <Audio ref={audioRef} audioScr={audioScr} />
    </section>
  )
}

export default ClockContainer
