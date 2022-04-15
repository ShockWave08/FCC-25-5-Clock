export const UPDATE = 'UPDATE'
export const STARTPAUSE = 'START'
export const RESET = 'RESET'
export const INCREASE = 'INCREASE'
export const DECREASE = 'DECREASE'
// export const = ''
// export const = ''

// function startClock(
//   displayTime,
//   onBreak,
//   onSession,
//   audio,
//   sessionLength,
//   breakLength,
//   intervalId
// ) {
//   let seconds = 1000
//   let date = new Date().getTime()
//   let nextDate = new Date().getTime() + seconds
//   let onBreakVariable = state.onBreak

//   if (!state.start) {
//     intervalId = setInterval(() => {
//       date = new Date().getTime()
//       if (date > nextDate) {
//         displayTime = (prev) => {
//           if (prev <= 0 && !onBreakVariable) {
//             audio.play()
//             onBreakVariable = true
//             onBreak = true
//             onSession = false
//             return breakLength
//           } else if (prev <= 0 && onBreakVariable) {
//             audio.play()
//             onSession = true
//             onBreakVariable = false
//             onBreak = false
//             return sessionLength
//           }
//           return prev - 1
//         } //updateTime dispatch
//         nextDate += seconds
//         // distch to update the current values of the state
//         updateTime(
//           displayTime,
//           onBreak,
//           onSession,
//           audio,
//           sessionLength,
//           breakLength,
//           intervalId
//         )
//       }
//     }, 30)
//   }
//   if (state.start) {
//     clearInterval(state.intervalId)
//   }
//   state.start = !state.start
// }

//  if (start) {
//       intervalId = setInterval(() => {
//         date = new Date().getTime()
//         //console.log(date)
//         if (date > nextDate) {
//           console.log(displayTime)

//           if (displayTime <= 0 && !onBreakVariable) {
//             audio.play()
//             onBreakVariable = true
//             onBreak = true
//             onSession = false
//             displayTime = breakLength
//           } else if (displayTime <= 0 && onBreakVariable) {
//             audio.play()
//             onSession = true
//             onBreakVariable = false
//             onBreak = false
//             displayTime = sessionLength
//           } else {
//             displayTime = displayTime - 1
//           }

//           nextDate += seconds
//           // distch to update the current values of the state
//           updateTime(displayTime, onBreak, onSession, intervalId)
//         }
//       }, 1000)
//     }
//     if (!start) {
//       clearInterval(state.intervalId)
//     }
//     state.start = !state.start
//   }
