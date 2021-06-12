import React from 'react'

const StatusMessage = ({ winner, current }) => {
    const noMovesLeft = current.board.every(el => el !== null);
    return (
    <div className="status-message">
        {winner && <>
        winner is{` `}
         <span className={winner === `x`? `text-green` : `text-orange` }>
         {winner}
         </span>
        </>
         }
    {!winner && 
    !noMovesLeft &&
    `Next player is ${ current.isXNext ? `x` : `0`}`}
    {!winner && noMovesLeft && 'X and 0 tied' }
 
    </div>);
};

export default StatusMessage;

