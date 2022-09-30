import { useState, useMemo } from "react";

export default function TestUseMemo() {
  const hardCalculate = (number) => {
    console.log("어려운 계산 시작");
    let sum = 0;
    for (let i = 0; i < 100000001; i++) {
      sum = sum + 1;
    }
    return number + sum;
  };

  const [hardNum, setHardNumber] = useState(1);
  const hardSum = useMemo(() => {
    return hardCalculate(hardNum);
  }, [hardNum]);

  const easyCalculate = (number) => {
    console.log("쉬운 계산 시작");
    let sum = 100000000 + number;
    return sum;
  };

  const [easyNum, setEasyNumber] = useState(1);
  const easySum = easyCalculate(easyNum);
  return (
    <>
      <h1>시간이 오래 걸리는 계산</h1>
      <input
        type="number"
        value={hardNum}
        onChange={(e) => {
          setHardNumber(parseInt(e.target.value));
        }}
      />
      <span> + 100000000 = {hardSum} </span>

      <br></br>
      <br></br>
      <br></br>
      <h1>시간이 빨리 걸리는 계산</h1>
      <input
        type="number"
        value={easyNum}
        onChange={(e) => {
          setEasyNumber(parseInt(e.target.value));
        }}
      />
      <span> + 100000000 = {easySum} </span>
    </>
  );
}
