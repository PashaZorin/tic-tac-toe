import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { scoreCount } from "../store/gameSlice";

const InfoGame = () => {
  const dispatch = useDispatch();
  const winner = useSelector((state) => state.todos.winner);
  useEffect(() => {
    dispatch(scoreCount());
  }, [winner]);

  const userName = useSelector((state) => state.todos.userName);
  const countPlayer = useSelector((state) => state.todos.player);
  const countPlayer2 = useSelector((state) => state.todos.player2);

  return (
    <div className="info-game">
      <p>Score</p>
      <p>
        {userName} : {countPlayer}
      </p>
      <p>Player2 : {countPlayer2} </p>
    </div>
  );
};

export default InfoGame;
