import { useState } from "react";
export default function CustomObject(props) {
  const [index, setIndex] = useState(0);
  let obj = props.objArr[index];

  const changeProfile = () => {
    if (index === props.objArr.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }

    obj = props.objArr[index];
    //setIndex(index + 1);
  };
  return (
    <div>
      <h1>이름 :{obj.name} </h1>
      <h1>나이 :{obj.age} </h1>
      <h1>별명 :{obj.nickName} </h1>
      <button onClick={changeProfile}>프로필 변경하기</button>
    </div>
  );
}
