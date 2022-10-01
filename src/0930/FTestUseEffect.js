import { useEffect, useState, useRef } from "react";

export default function FTestUseEffect() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("입력하세요!");
  const inputValue = useRef();
  const onButtonClick = () => {
    console.log("🖱 버튼 클릭");
    setCount(count + 1);
  };

  const onInputChange = () => {
    console.log("키 입력");
    setText(inputValue.current.value);
  };

  useEffect(() => {
    console.log("🎈렌더링 할 때마다 실행되는 useEffect");
  });
  useEffect(() => {
    console.log("🎈버튼클릭 시 할 때마다 실행되는 useEffect");
  }, [count]);
  useEffect(() => {
    console.log("🎈인풋 입력시 할 때마다 실행되는 useEffect");
  }, [text]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={onButtonClick}>클릭</button>
      <br />
      <br />
      <br />
      <input ref={inputValue} onChange={onInputChange} />
      <h1>{text}</h1>
    </>
  );
}
