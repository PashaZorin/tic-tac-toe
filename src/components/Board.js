import React from "react";
import { useSelector } from "react-redux";
import BoardItem from "./BoardItem";

const Board = () => {
  const boardItems = useSelector((state) => state.todos.items);

  return (
    <div className="board">
      {boardItems.map((item, index) => (
        <BoardItem key={index} item={item} id={index} />
      ))}
    </div>
  );
};

export default Board;
