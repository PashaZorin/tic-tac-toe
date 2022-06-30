import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import { clooseModalSignUp } from "../store/gameSlice";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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

const SingUpModal = () => {
  const dispatch = useDispatch();
  const signUpModal = useSelector((state) => state.todos.signUpModal);
  const closeModal = (data) => dispatch(clooseModalSignUp(data));
  const [userName, setUserName] = useState("");
  return (
    <div>
      <Modal
        open={signUpModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <p>Введите ваше имя</p>
          </Typography>
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Имя"
              variant="outlined"
              onChange={(e) => setUserName(e.target.value)}
            />
            <Button variant="outlined" onClick={() => closeModal(userName)}>
              Outlined
            </Button>
          </section>
        </Box>
      </Modal>
    </div>
  );
};
export default SingUpModal;
