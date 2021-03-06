import React, { useEffect } from "react";
import BoardItem from "./BoardItem";
import { useSelector, useDispatch } from "react-redux";
import { calculateWinner, isComputerTurn } from "../store/gameSlice";

const Board = () => {
  const boardItems = useSelector((state) => state.todos.items);
  const xIsNext = useSelector((state) => state.todos.xIsNext);
  const oneUser = useSelector((state) => state.todos.oneUser);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!oneUser) {
      if (!xIsNext) {
        dispatch(isComputerTurn());
      }
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
