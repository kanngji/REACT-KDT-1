import Header from "./Header";
import React from "react";
import { useParams, useLocation } from "react-router-dom";
export default function BoardDetail() {
  const params = useParams();
  const location = useLocation();

  console.log(params);
  return (
    <>
      <Header></Header>
      <h2>{params.boardId}번 게시글 내용입니다!</h2>
      <p>쿼리: {location.search}</p>
      <p>주소: {location.pathname}</p>
      <p>해쉬: {location.hash}</p>
    </>
  );
}
