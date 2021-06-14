import { render } from '@testing-library/react';
import React from 'react'
import "../Square.style.css";

const Square = ({value, onClick, isWinningSquares }) => {
    console.log('square rerender');
    
    return (
          <button 
          type="button" 
          className="square" 
          onClick={onClick}
          className={` square ${isWinningSquares ? `winning` : ``} ${
            value === `X` ? `text-green` : `text-orange`}`}
          
          > 
          {value}
            </button>
    );       
};

export default Square;
