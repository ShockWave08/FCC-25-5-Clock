## This Project is from the last challenge on FreeCodeCamp Front End Development Libraries

### Install Instructions

npm Install

### Run Instructions

npm start

### Issues

#### Expected Behavior

- After the FCC bundle.js 25 + 5 test is complete, the test should stop and values return to default.

  - The start/stop button can be pressed to restart and stop/pause if started.

  - The reset button should stop the clock and go revert back to default values.

#### Actual Behavior

- When the FCC bundle.js 25 + 5 test is complete, the clock continues.

  - The Start and stop button has no effect on the clock. It does not stop or start timer.

  - In the current running state of the clock, pressing the reset button temporarily reverts back to default values.
  - However, after a second or so goes right back to where the countdown was before it displayed default values.

    - Before the test, on manual testing. Everything works perfect.

#### Live Test Link

_Use Codepen to test. Local test fails most for some reason._
_Saw it's a known issue in the FCC community._

[Code Pen 25 + 5 Clock](https://codepen.io/shockwave08/pen/dyJjVXZ?editors=0011)
