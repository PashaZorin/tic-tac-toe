import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: {
    oneUser: true,
    userName: "",
    signUpModal: true,
    items: Array(9).fill(null),
    winner: "",
    xIsNext: true,
    player: 0,
    player2: 0,
    lines: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ],
    alertIsOpen: false,
    alertMessege: "",
  },
  reducers: {
    chengeUser(state) {
      state.oneUser = !state.oneUser;
    },
    isComputerTurn(state) {
      console.log("turn 000000");
      if (!state.xIsNext) {
        (function computerTurn() {
          let emptyIndexes = state.items
            .map((square, index) => (square === null ? index : null))
            .filter((val) => val !== null);
          console.log(emptyIndexes, "emptyIndexes");
          let randomIndex = Math.ceil(Math.random() * emptyIndexes.length);
          if (state.items[randomIndex] === null) {
            console.log(randomIndex, "randomIndex");
            state.items[randomIndex] = "O";
            state.xIsNext = true;
          } else {
            if (emptyIndexes.length > 1) {
              computerTurn();
              console.log(emptyIndexes.length > 1, "length");
            }
          }
        })();
      }
    },
    clearGame(state, action) {
      state.xIsNext = true;
      state.items = Array(9).fill(null);
    },
    calculateWinner(state, action) {
      for (let i = 0; i < state.lines.length; i++) {
        const [a, b, c] = state.lines[i];
        if (
          state.items[a] &&
          state.items[a] === state.items[b] &&
          state.items[a] === state.items[c]
        ) {
          if (state.items[a] === "X") {
            state.winner = state.items[a];
            state.alertIsOpen = true;
            state.alertMessege = "Победил игрок " + state.userName;
            state.winner = state.items[a];
          } else {
            console.log(state.items[a], "state.items[a]");
            state.alertIsOpen = true;
            state.alertMessege = "Победа игрок Player2";
            state.winner = state.items[a];
          }
        }
      }
      if (!state.items.includes(null) ?? !state.winner) {
        console.log("НИЧЕЯ");
        state.alertMessege = "НИЧЕЯ";
        state.alertIsOpen = true;
        state.winner = "draw";
      }
    },
    clooseModalAlert(state) {
      state.alertIsOpen = false;
      state.winner = "";
    },
    clooseModalSignUp(state, action) {
      state.signUpModal = false;
      state.userName = action.payload || "Player";
    },
    scoreCount(state, action) {
      if (state.winner === "X") state.player = state.player + 1;
      if (state.winner === "O") state.player2 = state.player2 + 1;
    },
    chooseItem(state, action) {
      if (state.items[action.payload]) return;
      console.log("work");
      state.xIsNext
        ? (state.items[action.payload] = "X")
        : (state.items[action.payload] = "O");

      state.xIsNext = !state.xIsNext;
    },
  },
});
export const {
  chooseItem,
  clearGame,
  calculateWinner,
  clooseModalAlert,
  scoreCount,
  isComputerTurn,
  clooseModalSignUp,
  chengeUser,
} = itemSlice.actions;
export default itemSlice.reducer;
