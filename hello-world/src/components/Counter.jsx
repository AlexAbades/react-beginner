import React, { useState } from "react";

export default function Counter () {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count+1)
  }
  return(
    <>
    <div>
      <h1>The Counter is set to: {count}</h1>

      <button style={{margin:"2px"}} onClick={increment}>Increment</button>

      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
    </>
  )
}