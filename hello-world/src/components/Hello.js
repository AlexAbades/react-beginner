import React from "react";

export default function Hello(props) {
  return (
    <div className="dummyClass">
      <h1>Hello {props.name} a.k.a {props.heroName}</h1>
      <h2>{props.children}</h2>
    </div>
  );
}
