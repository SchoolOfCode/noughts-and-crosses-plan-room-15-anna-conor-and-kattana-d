import React from "react";
/* import css from "./square.module.css"; */

function Square({ onClick, text, index }) {
  return (
    <div>
      <button
        index={index}
        onClick={() => {
          onClick(index);
        }}
      >
        {text}...
      </button>
    </div>
  );
}

export default Square;
