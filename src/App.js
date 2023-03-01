import { useState } from "react";

function Square({ value, handleSquareClick }) {
  return (
    <button className="square" onClick={handleSquareClick}>
      {value}
    </button>
  );
}

function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleSquareClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = [...squares];
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status = "";
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
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

export default function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
