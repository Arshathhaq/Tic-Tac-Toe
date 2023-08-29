import React from "react";
import { useState } from "react";


function Square({value, onSquareClick})
{
  return (
    <div>
      <button className="square" onClick={onSquareClick} >{value}</button>
    </div>
  );
}



export default function Board() {
  const [squares , setSquares] = useState(Array(9).fill(null));
  const [xIsNext , setXIsNext] = useState(true);
  

  
  function handleClick(i) {
    const nextSquares = squares.slice();
    if(calculateWinner(squares) || squares[i] )
    {
      return ;
    }
    if(xIsNext)
    {
      nextSquares[i] = "X";
    }
    else{
    nextSquares[i] = "O";
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  const winner = calculateWinner(squares);
  let result;

    
    if(winner){
      result = ("Winner : " + winner)
    }
    else if(squares.filter(item => item === null).length === 0){
        result = "Draw !";
    }
    else{
        result = ("Next Player : " + (xIsNext ? "X" : "O"))
    }
    
  function help(){
    window.location.reload(true)

  }

  return(
  <div>
      <div className="status"> {result} </div>
      <div className="game">
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() =>handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
      <div><button onClick={help}>Reset</button></div>
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
    [2, 4, 6]
  ];
  for (var i = 0; i < lines.length; i++)
  {
    var [a, b, c] = lines[i];
    if(squares[a] && (squares[a] === squares[b]) && (squares[a] === squares[c]))
    { 
      return squares[a];
    }
  }
  return null;
}
