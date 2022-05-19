import React, { useState } from 'react'
import "./Exercise4.css"

function Counter() {
    const [count, setCount] = useState(0)
    const increaseCount = () => setCount(count + 1);
    
  return (
      <div className='counter'>
          <h4>Button has been clicked:{count}</h4>
          <button onClick={increaseCount}>Click</button>
      </div>
  )
}

export default Counter
