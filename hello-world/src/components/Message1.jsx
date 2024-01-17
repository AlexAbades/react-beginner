import React, { useState } from "react";

export default function Message1 () {

  const [message, setMessage] = useState("Welcome");

  const changeMessage = () => {
    setMessage("Thank you using arrow function");
  }

  return (
    <>
    <h1>{message}</h1>
    <button onClick={changeMessage}>Subscribe</button>
    </>
  );
}