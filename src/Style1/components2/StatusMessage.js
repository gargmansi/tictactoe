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
    <>
    Next player is <span className={current.isXNext ? `text-green` : `text-orange` }>
         
        { current.isXNext ? `x` : `0`}{' '}
        </span>
</>
}
   {!winner && noMovesLeft && 'X and 0 tied'}
 
    </div>);
};

export default StatusMessage;

