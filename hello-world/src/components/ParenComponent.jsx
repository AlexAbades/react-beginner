import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

export default function ParentComponent() {
 const [count, setCount] = useState() ;
 return (
  <>
  <h1>This is a parent Component</h1>
  <h2>Count: {count}</h2>

  <ChildComponent setCount={setCount}></ChildComponent>

  </>
 )
}