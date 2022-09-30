import { useState } from "react";

export default function () {
  const [count, setCount] = useState(0);
  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  const init = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={plus}>+1</button>
      <button onClick={init}>초기화</button>
      <button onClick={minus}>-1</button>
    </div>
  );
}

// 초기화 해주는 함수도 만들어서 실습에 조금 더 신경썻다 이말이야~
