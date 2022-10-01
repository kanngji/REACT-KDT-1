import React, { useState } from "react";
export default function FPage74() {
  const [count, setCount] = useState(0);
  const onChange = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={onChange}>버튼</button>
    </>
  );
}
