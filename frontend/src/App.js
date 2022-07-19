import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'

import './App.css';
import Home from './components/Home'
import Main from './components/Main';
import Register from './components/Register';

const AuthWrapper = () => {
  const location = useLocation();
  const token = sessionStorage.getItem("authToken");

  console.log(token)
  
  return token ? (
    <Home />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

function App() {
  return (
    <div className="App rounded bg-white-100 flex justify-center">
      <Routes>

        <Route element={<AuthWrapper />}>
          <Route path="/home" element={<Home />} />
        </Route>

        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/home" element={<Home />} /> */}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App;