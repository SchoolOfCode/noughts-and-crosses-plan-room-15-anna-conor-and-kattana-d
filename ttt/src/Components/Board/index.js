import React from "react";
import Square from "../Square";

function Board() {
  return (
    <div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}

export default Board;

//Board - create 9 squares on a board in a grid 3*3 - (create div and render 3 squares) - repeat 3 times
//create class names for each <Square> component
