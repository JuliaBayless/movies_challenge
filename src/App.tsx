import React from 'react';
import '@fontsource/poppins';
import './App.css';
import { Routes, Route } from 'react-router';
import ListPage from './features/ListPage';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={(
            <ListPage />
          )}
        />
        <Route
          path="/movie/:id"
        />
      </Routes>
    </div>
  );
}
