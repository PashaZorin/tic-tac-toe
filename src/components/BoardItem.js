import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { chooseItem, clearGame } from "../store/gameSlice";
import { calculateWinner } from "../store/gameSlice";
const BoardItem = ({ item, id }) => {
  const dispatch = useDispatch();
  const itemValue = useSelector((state) => state.todos.xIsNext);
  const gameOver = useSelector((state) => state.todos.gameOver);
  useEffect(() => {
    dispatch(calculateWinner());
  }, [itemValue]);
  //useEffect(() => {
  //  if (gameOver) {
  //    setTimeout(() => {
  //      dispatch(clearGame());
  //    }, 1000);
  //  }
  //}, [gameOver]);

  return (
    <div
      className="board__item"
      onClick={() => {
        dispatch(chooseItem(id));
      }}
    >
      {item}
    </div>
  );
};

export default BoardItem;
