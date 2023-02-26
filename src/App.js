import { useState } from "react";

function Square({ value, handleSquareClick }) {
  return (
    <button className="square" onClick={handleSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleSquareClick(i) {
    const nextSquares = [...squares];
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Square
          value={squares[0]}
          handleSquareClick={() => handleSquareClick(0)}
        />
        <Square
          value={squares[1]}
          handleSquareClick={() => handleSquareClick(1)}
        />
        <Square
          value={squares[2]}
          handleSquareClick={() => handleSquareClick(2)}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          handleSquareClick={() => handleSquareClick(3)}
        />
        <Square
          value={squares[4]}
          handleSquareClick={() => handleSquareClick(4)}
        />
        <Square
          value={squares[5]}
          handleSquareClick={() => handleSquareClick(5)}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          handleSquareClick={() => handleSquareClick(6)}
        />
        <Square
          value={squares[7]}
          handleSquareClick={() => handleSquareClick(7)}
        />
        <Square
          value={squares[8]}
          handleSquareClick={() => handleSquareClick(8)}
        />
      </div>
    </>
  );
}
