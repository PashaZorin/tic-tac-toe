import React from "react";
import { useDispatch } from "react-redux";
import { chooseItem } from "../store/gameSlice";
import { memo } from "react";

const BoardItem = ({ item, id }) => {
  const dispatch = useDispatch();
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

export default memo(BoardItem);
