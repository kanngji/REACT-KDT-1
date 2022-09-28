import CustomObject from "./components/CustomObject";

function App() {
  const pororoObj = [
    {
      name: "뽀로로",
      age: "5",
      nickName: "사고뭉치",
    },
    {
      name: "루피",
      age: "4",
      nickName: "공주님",
    },
    {
      name: "크롱이",
      age: "6",
      nickName: "장난꾸러리",
    },
  ];
  return (
    <div className="App">
      <CustomObject objArr={pororoObj}></CustomObject>
    </div>
  );
}

export default App;
