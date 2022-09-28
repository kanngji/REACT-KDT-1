import Practice from "./components/Practice";
import ConditionalRender from "./components/ConditionalRender";
import { useState } from "react";
import PracticeOne from "./components/PracticeOne";
import PracticeTwo from "./components/PracticeTwo";
function App() {
  const [condition, setCondition] = useState("1번");
  const onChange = () => {
    condition === "1번" ? setCondition("2번") : setCondition("1번");
  };

  return (
    <div className="App">
      {condition === "1번" ? (
        <PracticeOne text={condition}></PracticeOne>
      ) : (
        <PracticeTwo text={condition}></PracticeTwo>
      )}
      <button onClick={onChange}>{condition}</button>
    </div>
  );
}

export default App;
