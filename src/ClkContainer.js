import React, { useReducer, useEffect, useRef } from 'react'
import clockReducer from './reducer/clockReducer'
import {
  UPDATE,
  STARTPAUSE,
  RESET,
  INCREASE,
  DECREASE,
  CHANGEOP,
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

  // start alarm by playing audio
  function startAlarm(audio) {
    audio.play()
  }

  // stop alarm by pausing and restarting audio
  function stopAlarm(audio) {
    audio.pause()
    audio.currentTime = 0
  }

  function sessionCountDown(
    sessionLength,
    seconds,
    timerStatus,
    intervalId,
    breakLength,
    audio
  ) {
    /*
     * If start is true
     *
     * Assign seconds to to 10 if it containes the default value or current value of the state
     * Assign SessionLength state to the current state value if the ClockState value is change, if not then assign it to the current state value - 1
     */
    //dispatch({ type: CHANGEOP })
    timerStatus = false
    seconds = seconds === '00' ? 60 : seconds
    let sessionMinutes = timerStatus ? sessionLength : sessionLength - 1

    /*
     * Set up an interval that executes every second
     *
     * Decrement seconds value every second
     * If seconds reaches 0, then decrement the sessionLength value
     * Assign seconds 59, indicating restarting a clock seconds
     *
     */
    timerStatus = true
    intervalId = setInterval(() => {
      seconds = seconds - 1
      if (seconds === -1) {
        sessionMinutes = sessionMinutes - 1
        seconds = 59
      }
      // when minutes and seconds equal to 0 clear interval and sound alarm
      if (sessionMinutes === 0 && seconds === 0) {
        clearInterval(intervalId)
        startAlarm(audio)
      }

      // distch to update the current values of the state
      updateTime(sessionMinutes, seconds, intervalId)
    }, 100)

    // start new cycle when alarm has ended
    audio.addEventListener('ended', function handler() {
      seconds = '60'
      breakCountDown(
        breakLength,
        seconds,
        timerStatus,
        intervalId,
        sessionLength,
        audio
      )

      //resetTimer()
      //startPauseTimer()

      // remove event listerner
      this.removeEventListener('ended', handler)
    })
  }

  function breakCountDown(
    breakLength,
    seconds,
    timerStatus,
    intervalId,
    sessionLength,
    audio
  ) {
    //dispatch({ type: CHANGEOP })
    timerStatus = false
    seconds = seconds === '00' ? 60 : seconds
    let breakMinutes = timerStatus ? breakLength : breakLength - 1

    timerStatus = true
    intervalId = setInterval(() => {
      seconds = seconds - 1
      if (seconds === -1) {
        breakMinutes = breakMinutes - 1
        seconds = 59
      }

      // when minutes and seconds equal to 0 clear interval and sound alarm
      if (breakMinutes === 0 && seconds === 0) {
        clearInterval(intervalId)
        startAlarm(audio)
      }
      updateTime(breakMinutes, seconds, intervalId)
    }, 100)

    // // start new cycle when alarm has ended
    audio.addEventListener('ended', function handler() {
      seconds = '60'
      sessionCountDown(
        sessionLength,
        seconds,
        timerStatus,
        intervalId,
        breakLength,
        audio
      )

      // remove event listerner
      this.removeEventListener('ended', handler)
    })
  }

  useEffect(() => {
    const audio = audioRef.current

    let date = new Date().getTime()
    console.log(date)

    if (state.start) {
      sessionCountDown(
        state.sessionLength,
        state.seconds,
        state.timerRunning,
        state.intervalId,
        state.breakLength,
        audio
      )
    } else {
      clearInterval(state.intervalId)
    }
  }, [state.start])

  function updateTime(min, sec, intervalId) {
    dispatch({
      type: UPDATE,
      payload: {
        minutes: min,
        seconds: sec,
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

  function resetTimer() {
    dispatch({
      type: RESET,
      payload: {
        operation: 'timer',
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
          breakCounter={
            state.breakLength > 60
              ? 60
              : state.breakLength < 1
              ? 1
              : state.breakLength
          }
          onDecrease={decreaseTimer}
          onIncrease={increaseTimer}
        />
        <SessionLength
          sessionCounter={
            state.sessionLength > 60
              ? 60
              : state.sessionLength < 1
              ? 1
              : state.sessionLength
          }
          onIncrease={increaseTimer}
          onDecrease={decreaseTimer}
        />
      </div>
      <div>
        <Clock
          minutes={state.minutes}
          seconds={state.seconds}
          clockStatus={state.clockState}
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
        <Controls idName={'reset'} icon={'reset'} onClick={resetTimer} />
      </div>
      <Audio ref={audioRef} audioScr={audioScr} />
    </section>
  )
}

export default ClockContainer
