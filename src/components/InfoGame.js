import React from "react";
import { useSelector } from "react-redux";

const InfoGame = () => {
  const countPlayer = useSelector((state) => state.todos.player);
  const countPlayer2 = useSelector((state) => state.todos.player2);
  return (
    <div className="infoGame">
      <p>Score</p>
      <p>Player : {countPlayer} </p>
      <p>Player2 : {countPlayer2} </p>
    </div>
  );
};

export default InfoGame;
