import React from "react";

export default function Dialog(props) {
  return (
    <div
      style={
        typeof props.color !== "undefined"
          ? { backgroundColor: props.color }
          : { backgroundColor: "orange" }
      }
    >
      <p>{props.message}</p>
      {/* {typeof props.color !== "undefined" ? null : alert("색상 값이 없습니다")} */}
      {props.children}
    </div>
  );
}
