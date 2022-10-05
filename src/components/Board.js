import Header from "./Header";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
export default function Board() {
  return (
    <>
      <Header></Header>
      <h1>게시판 페이지입니다</h1>;
      <Link to="1">
        <h2>게시글 1번 보여주기</h2>
      </Link>
      <Link to="2">
        <h2>게시글 2번 보여주기</h2>
      </Link>
      <Link to="3">
        <h2>게시글 3번 보여주기</h2>
      </Link>
    </>
  );
}
