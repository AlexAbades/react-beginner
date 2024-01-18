import React from "react";
import Person from "./Person";

export default function ListPerson() {
  const persons = [
    {
      _id: 0,
      name: "Alex",
      age: 28,
      skill: "Python + FullStack",
    },
    {
      _id: 1,
      name: "Laura",
      age: 28,
      skill: "Python + ReactNative + Preciosa",
    },
    {
      _id: 2,
      name: "Pau",
      age: 28,
      skill: "Scala",
    },
    {
      _id: 3,
      name: "Ferran",
      age: 27,
      skill: "FullStack",
    },
  ];

  const renderPerson = persons.map((person) => (
    <Person person={person} key={person._id}></Person>
  ));
  return <>{renderPerson}</>;
}
