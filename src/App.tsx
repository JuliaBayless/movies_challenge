import React from 'react';
import '@fontsource/poppins';
import './App.css';
import { Routes, Route } from 'react-router';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
        />
        <Route
          path="/movie/:id"
        />
      </Routes>
    </div>
  );
}
