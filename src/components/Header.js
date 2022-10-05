import { Link } from "react-router-dom";
import React from "react";

export default function Header() {
  return (
    <>
      <nav>
        <ul style={{ display: "flex", justifyContent: "space-around" }}>
          <li>
            <Link to="/">홈페이지로 이동</Link>
          </li>
          <li>
            <Link to="/profile">프로필 페이지로 이동</Link>
          </li>
          <li>
            <Link to="/board">보드 페이지로 이동</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
