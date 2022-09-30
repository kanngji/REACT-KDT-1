import { useState } from "react";
export default function RecustomObj(props) {
  const [index, setIndex] = useState(0);
  let obj = props.objArr[index];

  const changeProfile = () => {
    if (index === props.objArr.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    obj = props.objArr[index];
  };
  return (
    <div>
      <h1>이름: {obj.name}</h1>
      <h2>나이: {obj.age}</h2>
      <h3>별명: {obj.nickName}</h3>
      <button onClick={changeProfile}>프로필변경하기</button>
    </div>
  );
}
