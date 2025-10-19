import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AgentsList from "./AgentsList";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <AgentsList /> } />
        <Route path='/agents:id' element={ <AgentDetail /> } />
      </Routes>
    </Router>
  );
}

export default App;
