import React from "react";
import BasicModal from "./components/BasicModal";
import Board from "./components/Board";
import InfoGame from "./components/InfoGame";
import SingUpModal from "./components/SingUpModal";
import "./style/index.scss";

function App() {
  return (
    <div className="wrapper">
      <SingUpModal />
      <BasicModal />
      <Board />
      <InfoGame />
    </div>
  );
}

export default App;
