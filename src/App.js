import React, { useState } from "react";
import SPracticeTimer from "./1001/SPracticeTimer";

function App() {
  const [show, setShow] = useState(false);
  const onChange = () => {
    setShow(!show);
  };
  return (
    <div className="App">
      {show && <SPracticeTimer></SPracticeTimer>}
      <button onClick={onChange}>보이기</button>
    </div>
  );
}

export default App;
