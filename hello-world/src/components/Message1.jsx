import React, { useState } from "react";

export default function Message1 () {

  const [message, setMessage] = useState("Welcome");

  const changeMessage = () => {
    setMessage("Thank you using arrow function");
  }

  // function change (){
  //   setMessage("Thank you using funciton");
  // }

  return (
    <>
    <h1>{message}</h1>
    <button onClick={change}>Subscribe</button>
    </>
  );
}