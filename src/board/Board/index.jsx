import React from 'react';
import RenderSquare from "../RenderSquare";

const Board = ({ KnightPosition }) => {
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(RenderSquare(i, KnightPosition));
  }
  return (
    <div
      style={{
        width: '80%',
        height: '80%',
        display: 'flex',
        flexWrap: 'wrap',
        border: '1px dashed',
        margin: '10vh 10vw'
      }}
    >
      {squares}
    </div>
  )
}

export default Board;
