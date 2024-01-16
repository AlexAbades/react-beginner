import React from "react";

export default function Hello1() {
  return React.createElement(
    "div",
    {id: "Hello", className: "dummyClass"},
    React.createElement("h1", null, "Hello Alex")
  );
}