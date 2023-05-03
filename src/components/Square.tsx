import { useState } from "react";

interface props {
  value: string;
  onSquareClick: Function;
}

function Square({ value, onSquareClick }: props) {
  return (
    <>
      <button className="square" onClick={onSquareClick()}>
        {value}
      </button>
    </>
  );
}

export default Square;
