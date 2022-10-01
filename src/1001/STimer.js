import React, { useEffect } from "react";

export default function STimer() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 실행중");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h1>타이머가 실행 중입니다!</h1>
    </>
  );
}
