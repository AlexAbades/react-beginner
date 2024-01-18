import React from "react";

function MemoComponent({ name }) {
  return (
    <>
      <h1>{name}</h1>
    </>
  );
}

export default React.memo(MemoComponent);
