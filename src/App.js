import logo from './logo.svg';
import CreateTenantListingPage from './pages/CreateTenantListingPage';
import Landing from './pages/Landing';
import Matches from './pages/Matches';
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import './App.css';

function App() {
  const [curPage, setCurPage] = useState("landing")
  return (
    <>
      {curPage=="home" ? <CreateTenantListingPage /> : <CreateTenantListingPage />}
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
