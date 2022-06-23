import Button from "@mui/material/Button";
import React from "react";
import { chengeUser } from "../store/gameSlice";
import { useDispatch, useSelector } from "react-redux";

export default function BasicButtons() {
  const oneUser = useSelector((state) => state.todos.oneUser);
  console.log(oneUser);
  const dispatch = useDispatch();
  return (
    <Button variant="outlined" onClick={() => dispatch(chengeUser())}>
      {oneUser ? "Играть вдвоем" : "Играть одному"}
    </Button>
  );
}
