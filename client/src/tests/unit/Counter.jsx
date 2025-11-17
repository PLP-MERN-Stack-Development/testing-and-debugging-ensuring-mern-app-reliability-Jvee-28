import React, { useState } from 'react';
export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div data-testid="count">{count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}
