import { useState } from "react";
export default function StateTest() {
  const [num, setNum] = useState(0);
  const add = () => {
    setNum(num + 1);
  };
  const minus = () => {
    setNum(num - 1);
  };
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={add}>+1</button>
      <button onClick={minus}>-1</button>
    </div>
  );
}
