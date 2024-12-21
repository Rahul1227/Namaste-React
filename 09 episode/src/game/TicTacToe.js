import React, { useState } from "react";
import "./Game.css";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isUserTurn, setIsUserTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (newBoard) => {
    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        return newBoard[a];
      }
    }
    return newBoard.every((cell) => cell !== null) ? "Draw" : null;
  };

  const handleClick = (index) => {
    if (board[index] || winner || !isUserTurn) return;

    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      return;
    }
    setIsUserTurn(false);

    // AI makes a move
    setTimeout(() => {
      aiMove(newBoard);
    }, 500);
  };

  const aiMove = (currentBoard) => {
    const newBoard = [...currentBoard];

    // AI tries to win or block user from winning
    const makeStrategicMove = (symbol) => {
      for (let combo of winningCombinations) {
        const [a, b, c] = combo;
        const cells = [newBoard[a], newBoard[b], newBoard[c]];
        if (cells.filter((cell) => cell === symbol).length === 2 && cells.includes(null)) {
          return combo[cells.indexOf(null)];
        }
      }
      return null;
    };

    let move = makeStrategicMove("O"); // Try to win
    if (move === null) move = makeStrategicMove("X"); // Block user

    // Otherwise, pick the first available cell
    if (move === null) {
      move = newBoard.findIndex((cell) => cell === null);
    }

    newBoard[move] = "O";
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else {
      setIsUserTurn(true);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsUserTurn(true);
    setWinner(null);
  };

  return (
    <div className="game">
      <h2>Tic-Tac-Toe</h2>
      {winner ? (
        <h3>{winner === "Draw" ? "It's a Draw!" : `${winner} Wins!`}</h3>
      ) : (
        <h3>{isUserTurn ? "Your Turn (X)" : "AI's Turn (O)"}</h3>
      )}

      <div className="board">
        {board.map((cell, index) => (
          <div
            key={index}
            className={`cell ${cell ? "filled" : ""}`}
            onClick={() => handleClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>

      <button className="reset-button" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;
