import React from "react";

export default function ({person}) {
  
  return (
    <>
    <h2>Hello my name is {person.name}. I am {person.age} and I am good at {person.skill}</h2>
    </>
  )
}