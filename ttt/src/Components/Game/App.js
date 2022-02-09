import "./App.css";
import { useState } from "react";
import Board from "../Board";

function App() {
  const [move, setMove] = useState("");
  const board = [null, null, null, null, null, null, null, null, null];
  function onClick() {}
  return (
    <div>
      <Board
        onClick={(event) => {
          setMove();
        }}
      />
    </div>
  );
}

export default App;

//Create State
//create a board const with an array
//Check if square is null and allow change from null to X or O
