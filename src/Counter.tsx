import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Counter Page</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button onClick={() => setCount(count - 1)}>-</button>
        <span
          style={{ margin: "0 1rem", fontSize: "2rem", fontWeight: "bold" }}
        >
          {count}
        </span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}
