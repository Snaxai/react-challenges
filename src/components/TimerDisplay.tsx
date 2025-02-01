interface TimerDisplayProps {
  minutes: number;
  seconds: number;
}

export function TimerDisplay({ minutes, seconds }: TimerDisplayProps) {
  return (
    <div style={{ fontSize: "3rem", margin: "2rem 0" }}>
      {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
    </div>
  );
}
