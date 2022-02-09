import "./App.css";
import { useState } from "react";
import Board from "../Board";
import { helper } from "../../helper";

function App() {
  const square = [null, null, null, null, null, null, null, null, null];

  const [board, setBoard] = useState(square);

  const [move, setMove] = useState(true);

  function onClick(index) {
    if (!board[index]) {
      let moveValue = null;
      if (move) {
        moveValue = "X";
      } else {
        moveValue = "O";
      }
      setMove(!move);

      const newBoard = [
        ...board.slice(0, index),
        moveValue,
        ...board.slice(index + 1),
      ];
      setBoard(newBoard);
    }
  }

  return (
    <div>
      <Board board={board} onClick={onClick} />
    </div>
  );
}

export default App;

//Create State
//create a board const with an array
//Check if square is null and allow change from null to X or O
