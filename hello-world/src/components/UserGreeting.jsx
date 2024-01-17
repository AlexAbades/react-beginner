import React, { useState } from "react";

export default function UserGreeting () {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <>
    {isLoggedIn 
    ? <h1>Welcome Alex</h1>
    : <h1>Welcome Guest</h1>}
    <button onClick={()=>setIsLoggedIn(true)}>LoggIn</button>
    </>
  )
}