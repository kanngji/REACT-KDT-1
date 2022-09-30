import { useRef, useEffect, useState } from "react";

export default function TestUseEffect() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("입력해 주세요");
  const inputValue = useRef();

  const onButtonClick = () => {
    setCount(count + 1);
  };

  const onInputChange = () => {
    console.log("✔✔ 키 입력");
    setText(inputValue.current.value);
  };

  useEffect(() => {
    console.log("🎸🎺렌더링 할때마다 실행되는 useEffect");
  });
  useEffect(() => {
    console.log("둘다 보고있는 useEffect");
  }, [count, text]);
  useEffect(() => {
    console.log("최초 렌더링 시에만 실행되는 useEffect");
  }, []);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={onButtonClick}>+1 버튼</button>
      <br />
      <br />
      <input ref={inputValue} onChange={onInputChange} />
      <h1>{text}</h1>
    </>
  );
}
