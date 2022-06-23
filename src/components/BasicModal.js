import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import { clooseModalAlert, clearGame } from "../store/gameSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector((state) => state.todos.alertIsOpen);
  const modalMessege = useSelector((state) => state.todos.alertMessege);

  useEffect(() => {
    if (modalIsOpen) {
      setTimeout(() => {
        dispatch(clearGame());
        dispatch(clooseModalAlert());
      }, 500);
    }
  }, [dispatch, modalIsOpen]);
  return (
    <div>
      <Modal
        open={modalIsOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalMessege}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
