import "./App.css";
import { useState } from "react";
import Board from "../Board";

function App() {
  const boardArray = [null, null, null, null, null, null, null, null, null];
  const [board, setBoard] = useState(boardArray);

  const [move, setMove] = useState(true);
  // true - X
  // false - 0

  function onClick(index) {
    if (boardArray[index] === null) {
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
