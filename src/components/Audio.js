import React, { forwardRef } from 'react'

const Audio = forwardRef((props, ref) => {
  return <audio id='beep' ref={ref} src={props.audioScr}></audio>
})

export default Audio
