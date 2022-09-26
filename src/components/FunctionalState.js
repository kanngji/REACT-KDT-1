import React, { useState } from "react";

function FunctionalState() {
  const [message, setMessage] = useState(""); // useState(초기화)
  const onClickEnter = () => {
    setMessage("안녕하세요");
  };
  const onClickLeave = () => {
    setMessage("안녕히가세요");
  };
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      {message}
    </div>
  );
}

export default FunctionalState;
