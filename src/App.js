import React from "react";
import BasicModal from "./components/BasicModal";
import Board from "./components/Board";
import InfoGame from "./components/InfoGame";
import "./style/index.scss";

function App() {
  return (
    <div className="wrapper">
      <BasicModal />
      <Board />
      <InfoGame />
    </div>
  );
}

export default App;
