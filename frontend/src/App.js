import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'

import './App.css';
import Main from './components/Main';
import Register from './components/Register';

function App() {
  return (
    <div className="App rounded bg-white-100 flex justify-center">
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  )
}

export default App;