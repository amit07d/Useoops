import { useState } from "react";

function BoardSquare({ playerSymbol, onSquareClick }) {
  return (
    <button
      className="w-16 h-16 border text-xl cursor-pointer"
      onClick={onSquareClick}
    >
      {playerSymbol}
    </button>
  );
}

function determineWinner(boardState) {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [first, second, third] of winningCombos) {
    if (
      boardState[first] &&
      boardState[first] === boardState[second] &&
      boardState[first] === boardState[third]
    ) {
      return boardState[first];
    }
  }

  return null;
}

function TicTacToeGame() {
  const [boardState, setBoardState] = useState(Array(9).fill(""));
  const [isXNext, setIsXNext] = useState(true);

  const winner = determineWinner(boardState);

  function handleSquareClick(index) {
    if (boardState[index] !== "" || winner) return;

    const updatedBoard = [...boardState];
    updatedBoard[index] = isXNext ? "X" : "O";
    setBoardState(updatedBoard);
    setIsXNext(!isXNext);
  }

  function restartGame() {
    setBoardState(Array(9).fill(""));
    setIsXNext(true);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl mb-4">
        {winner
          ? `Winner: ${winner}`
          : boardState.includes("")
          ? `Turn: ${isXNext ? "X" : "O"}`
          : "It's a draw!"}
      </h1>

      <div>
        <div className="flex gap-1 justify-center">
          <BoardSquare playerSymbol={boardState[0]} onSquareClick={() => handleSquareClick(0)} />
          <BoardSquare playerSymbol={boardState[1]} onSquareClick={() => handleSquareClick(1)} />
          <BoardSquare playerSymbol={boardState[2]} onSquareClick={() => handleSquareClick(2)} />
        </div>
        <div className="flex gap-1 justify-center mt-1">
          <BoardSquare playerSymbol={boardState[3]} onSquareClick={() => handleSquareClick(3)} />
          <BoardSquare playerSymbol={boardState[4]} onSquareClick={() => handleSquareClick(4)} />
          <BoardSquare playerSymbol={boardState[5]} onSquareClick={() => handleSquareClick(5)} />
        </div>
        <div className="flex gap-1 justify-center mt-1">
          <BoardSquare playerSymbol={boardState[6]} onSquareClick={() => handleSquareClick(6)} />
          <BoardSquare playerSymbol={boardState[7]} onSquareClick={() => handleSquareClick(7)} />
          <BoardSquare playerSymbol={boardState[8]} onSquareClick={() => handleSquareClick(8)} />
        </div>
      </div>

      <button
        onClick={restartGame}
        className="mt-4 px-4 py-2 border rounded text-lg"
      >
        Reset
      </button>
    </div>
  );
}

export default TicTacToeGame;
