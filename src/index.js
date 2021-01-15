import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Board from "./board/Board";
import { Observe } from "./board/Gamer";

Observe((KnightPosition) => {
  ReactDOM.render(
    <div style=
      {{
        overflow: 'hidden',
        width: '100vw',
        height: '100vh'
      }}
    >
      <Board KnightPosition={KnightPosition}></Board>
    </div>,
    document.getElementById('root')
  );
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
