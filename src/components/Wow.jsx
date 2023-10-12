import React, { useState } from 'react';

export default function Wow( {enVariabel} ) {

    const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
    return (
        <div>
            <h1>Tittle</h1>
            <span>Klikket: {count}</span>
            <button>Click for mayonesse</button>
            <p>Klikk her "{enVariabel}"</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>    
        </div>
    )
}