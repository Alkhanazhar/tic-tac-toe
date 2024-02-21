import React, { useEffect, useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXturn, setIsXturn] = useState(true);
  const [isWinner, setIsWinner] = useState(false);
  const checkWinner = () => {
    const winnerArray = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerArray) {
      let [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[b] === state[c]) {
        console.log("winner");
        return setIsWinner(true);
      } else {
        setIsWinner(false);
      }
    }
  };
  const handleClick = (index) => {
    const copyState = [...state];
    copyState[index] = isXturn ? "X" : "O";
    setState(copyState);
    setIsXturn(!isXturn);
  };
  useEffect(() => {
    checkWinner();
  }, [isXturn]);
  if (isWinner)
    return (
      <div className="w-full  text-center h-screen flex items-center flex-col justify-center text-4xl gap-6">
        <div>{!isXturn ? "X" : "O"} won 🎉🎉🎉</div>
        <div
          className="flex bg-gray-700 text-white p-2 cursor-pointer"
          onClick={() => location.reload()}
        >
          Re-Game
        </div>
      </div>
    );
  return (
    <>
      <h1 className="text-6xl text-black text-center mt-12 font-bold">
        Tic Tac Toe ⚛️
      </h1>
      <div className="board-container grid rid-cols-3 w-full mt-36">
        <div className="board-row flex justify-center items-center">
          <Square onClick={(e) => handleClick(0)} value={state[0]} />
          <Square onClick={(e) => handleClick(1)} value={state[1]} />
          <Square onClick={(e) => handleClick(2)} value={state[2]} />
        </div>{" "}
        <div className="board-row flex justify-center items-center">
          <Square onClick={(e) => handleClick(3)} value={state[3]} />
          <Square onClick={(e) => handleClick(4)} value={state[4]} />
          <Square onClick={(e) => handleClick(5)} value={state[5]} />
        </div>{" "}
        <div className="board-row flex justify-center items-center">
          <Square onClick={(e) => handleClick(6)} value={state[6]} />
          <Square onClick={(e) => handleClick(7)} value={state[7]} />
          <Square onClick={(e) => handleClick(8)} value={state[8]} />
        </div>{" "}
      </div>
    </>
  );
};

export default Board;
