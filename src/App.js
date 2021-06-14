import React, { useState } from "react"
import Board from './Style1/components2/Board'
import History from './Style1/components2/History'
import StatusMessage from './Style1/components2/StatusMessage';
import { calculateWinner } from "./helpers";

import './Style1/root.scss';
const NEW_GAME = [
{board:  Array(9).fill(null), isXNext: true },
];
const App =()=> {
  const [history, setHistory] = useState(NEW_GAME);
const [currentMove, setCurrentMove] = useState(0);
const current = history[currentMove];

    const {winner, winningsquares} = calculateWinner( current.board);
    
    const  handleSquareClick  =  (position) => {
        if(current.board[position] || winner){
            return;
        }
        setHistory(prev => {
          const last = prev[prev.length-1];
            const newBoard = last.board.map((Square, pos) =>{
                if(pos === position){
                   return last.isXNext ? 'X' : 'O';
                }
                return Square;
            });
            return prev.concat({board: newBoard, isXNext: !last.isXNext });
        });
        setCurrentMove(prev => prev+1 );  
    };
    const moveTo = move => {
      setCurrentMove(move);
    };
    const onNewGame = () => {
      setHistory(NEW_GAME);
      setCurrentMove(0);
    }
  return (
    <div className="app">
      <h1> 
        tic <span className="text-green">  tac</span>  toe</h1>
      <StatusMessage winner={winner} current={current} />
       {/* <h2>{message}</h2> */}
      <Board board={current.board} 
      handleSquareClick={handleSquareClick}
      winningsquares={winningsquares}
      />
      <button 
      type="button" 
      onClick={onNewGame}
      className={`btn-reset ${winner ? `active` : ``}`} >
        start new game
        </button>
        <h2 style={{fontWeight: 'normal'}}> current game history</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
      <div className="bg-balls"/>
    </div>
  );
};

export default App;
