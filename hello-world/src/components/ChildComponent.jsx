import React from "react"

export default function ChildComponent({setCount}){

  return (
    <>
    <p>Child:</p>
    <button onClick={() => setCount(1)}>1</button>
    <button onClick={() => setCount(2)}>2</button>
    <button onClick={() => setCount(3)}>3</button>
    </>
  )
}