import React from "react";

export default function NameList() {
  const names = ["Alex", "Laura", "Pau"];
  const renderNames = names.map((name) => <h1>Hello {name}</h1>);
  return <>{renderNames}</>;
}
