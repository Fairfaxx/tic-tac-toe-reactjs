import React from "react";
import Board from "./components/Board";

import './components/styles/root.scss';

const App = () => (
  <div className='app'>
    <h1>TIC TAC TOE</h1>
    <Board />
  </div>
);

export default App;
