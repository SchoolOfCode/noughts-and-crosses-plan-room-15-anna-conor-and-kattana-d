import React from "react";
import Square from "../Square";

function Board({ board, onClick }) {
  return (
    <div>
      {board.map((item, index) => {
        return (
          <Square text={item} index={index} onClick={onClick} key={index} />
        );
      })}
    </div>
  );
}

export default Board;

//Board - create 9 squares on a board in a grid 3*3 - (create div and render 3 squares) - repeat 3 times
//create class names for each <Square> component
