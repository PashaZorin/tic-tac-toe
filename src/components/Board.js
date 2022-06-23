import React, { useEffect } from "react";
import BoardItem from "./BoardItem";
import { useSelector, useDispatch } from "react-redux";
import {
  calculateWinner,
  isComputerTurn,
  scoreCount,
} from "../store/gameSlice";

const Board = () => {
  const boardItems = useSelector((state) => state.todos.items);
  const xIsNext = useSelector((state) => state.todos.xIsNext);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!xIsNext) {
      dispatch(isComputerTurn());
      dispatch(scoreCount());
    }
    dispatch(calculateWinner(""));
  });
  return (
    <div className="board">
      {boardItems.map((item, index) => (
        <BoardItem key={index} item={item} id={index} />
      ))}
    </div>
  );
};

export default Board;
