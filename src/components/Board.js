import React, { useEffect } from "react";
import BoardItem from "./BoardItem";
import { useSelector, useDispatch } from "react-redux";
import { calculateWinner } from "../store/gameSlice";

const Board = () => {
  const boardItems = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateWinner("aaaaaaa"));
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
