import { useState, useEffect } from "react";

interface UseTimerProps {
  initialDuration: number;
}

export function useTimer({ initialDuration }: UseTimerProps) {
  const [minutes, setMinutes] = useState(initialDuration);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [flash, setFlash] = useState(false);
  const [currentDuration, setCurrentDuration] = useState(initialDuration);

  useEffect(() => {
    let interval: number | undefined;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            setFlash(true);
            setTimeout(() => setFlash(false), 1000);
            setIsActive(false);
            clearInterval(interval);
            return;
          }
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  const toggleTimer = () => setIsActive(!isActive);

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(currentDuration);
    setSeconds(0);
  };

  const startTimerForDuration = (duration: number) => {
    setCurrentDuration(duration);
    setMinutes(duration);
    setIsActive(false);
    setSeconds(0);
  };

  return {
    minutes,
    seconds,
    isActive,
    flash,
    toggleTimer,
    resetTimer,
    startTimerForDuration,
  };
}
