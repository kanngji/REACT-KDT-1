import { useState } from "react";

export default function StatePractice() {
  const [message, SetMessage] = useState("");
  const onClickEnter = () => {
    SetMessage("안녕하세요");
  };
  const onClickLeave = () => {
    SetMessage("안녕하가셰요");
  };
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
    </div>
  );
}
