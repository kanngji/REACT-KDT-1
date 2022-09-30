import { useEffect, useState, useMemo } from "react";

export default function UsingUseMemo() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  const location = useMemo(() => {
    return {
      where: isKorea ? "한국" : "외국",
    };
  }, [isKorea]);

  // effect 와 memo 의 차이

  useEffect(() => {
    console.log(" use effect 호출");
    // location 이 변화될때
  }, [location]);

  return (
    <>
      <h1>숫자 증감</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <br></br>
      <br></br>
      <h1>Where are you?</h1>
      <h2>위치: {location.where}</h2>
      <button
        onClick={() => {
          setIsKorea(!isKorea);
        }}
      >
        나라변경
      </button>
    </>
  );
}
