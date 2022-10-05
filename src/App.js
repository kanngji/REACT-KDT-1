import React, { useEffect, useState } from "react";
import SPracticeTimer from "./1001/SPracticeTimer";
import Where from "./components/Where";
import Image from "./components/Image";
import Dialog from "./components/Dialog";
import WelcomeDialog from "./components/WelcomeDialog";
import WelcomeDialogBtn from "./components/WelcomeDialogBtn";
import FancyBorder from "./components/FancyBorder";
import SignUpDialog from "./components/SignUpDialog";
import Profile from "./components/Profile";
import Board from "./components/Board";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import { Routes, Route, Link } from "react-router-dom";
import BoardDetail from "./components/BoardDetail";
function App() {
  const [show, setShow] = useState(false);

  const onChange = () => {
    setShow(!show);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header></Header>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/board" element={<Board></Board>}></Route>
        <Route
          path="/board/:boardId"
          element={<BoardDetail></BoardDetail>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
