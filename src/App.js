import logo from './logo.svg';
import Home from './pages/Home';
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {curPage=="home" ? <Home /> : 
        curPage=='landing' ? <Landing setPage={(x) => setCurPage(x)} /> :
        curPage=='matches' ? <Matches setPage={(x) => setCurPage(x)} /> :
        <Home />
      }
    </ThemeProvider>
  );
}

export default App;
