import React from "react";
import Board from "./components/Board";
import InfoGame from "./components/InfoGame";
import "./style/index.scss";

function App() {
  return (
    <div className="wrapper">
      <Board />
      <InfoGame />
    </div>
  );
}

export default App;
