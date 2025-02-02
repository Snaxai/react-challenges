import { TimerDisplay } from "./components/TimerDisplay";

import { useTimer } from "./hooks/useTimer";
import { isDevelopment } from "./utils/env";
import "./Pomodoro.css";

const TIMER_DURATIONS = {
  WORK: 25,
  SHORT_BREAK: 5,
  LONG_BREAK: 15,
} as const;

export default function Pomodoro() {
  const {
    minutes,
    seconds,
    isActive,
    flash,
    toggleTimer,
    resetTimer,
    startTimerForDuration,
    setSeconds,
  } = useTimer({ initialDuration: TIMER_DURATIONS.WORK });

  const startTestTimer = () => {
    startTimerForDuration(0);
    setSeconds(1);
    toggleTimer();
  };

  return (
    <>
      <div className='pomodoro-container'>
        <h1>Pomodoro Timer</h1>
        <TimerDisplay minutes={minutes} seconds={seconds} />
        <div className='controls'>
          <button onClick={toggleTimer} className='control-button'>
            {isActive ? "Pause" : "Start"}
          </button>
          <button onClick={resetTimer} className='control-button'>
            Reset
          </button>
          <button
            onClick={() => startTimerForDuration(TIMER_DURATIONS.SHORT_BREAK)}
            className='control-button'
          >
            5 Min Break
          </button>
          <button
            onClick={() => startTimerForDuration(TIMER_DURATIONS.LONG_BREAK)}
            className='control-button'
          >
            15 Min Break
          </button>
          <button
            onClick={() => startTimerForDuration(TIMER_DURATIONS.WORK)}
            className='control-button'
          >
            25 Min Work
          </button>
          {isDevelopment() && (
            <button onClick={startTestTimer} className='control-button'>
              Test 1 Sec Timer
            </button>
          )}
        </div>
      </div>
      <div
        className={`flash-overlay ${flash ? "flash-visible" : "flash-hidden"}`}
      />
    </>
  );
}
