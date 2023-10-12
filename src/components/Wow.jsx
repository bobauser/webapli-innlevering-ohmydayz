import React, { useState } from 'react';

export default function Wow( {enVariabel} ) {

    const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };
    return (
        <div>
            <h1>Tittle</h1>
            <span>Klikket: {count}</span>
            <button>Click for mayonesse</button>
            <p>Klikk her "{enVariabel}"</p>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>    
        </div>
    )
}