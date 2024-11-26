// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './screens/Login'; // Import your Login screen
import Home from './screens/Home'; // Import your Home screen

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Protect the Home route */}
        <Route path="/dashboard" element={<Home />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
