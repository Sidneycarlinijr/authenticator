import React from 'react';
import { Routes, Route } from 'react-router-dom'

import './App.css';
import Home from './components/Home'
import Main from './components/Main';
import Register from './components/Register';

function App() {
  return (
    <div className="App rounded bg-white-100 flex justify-center">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;