import logo from './logo.svg';
import Home from './pages/Home';
import Landing from './pages/Landing';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [curPage, setCurPage] = useState("homea")
  return (
    <>
      {curPage=="home" ? <Home /> : <Landing />}
    </>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
