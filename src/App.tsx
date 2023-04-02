import React from 'react';
import '@fontsource/poppins';
import './App.css';
import { Routes, Route } from 'react-router';
import ListPage from './features/ListPage';
import DetailsPage from './features/DetailsPage';
import BasePage from './components/BasePage';

export default function App() {
  return (
    <BasePage>
      <Routes>
        <Route
          path="/"
          element={(
            <ListPage />
          )}
        />
        <Route
          path="/movie/:id"
          element={(
            <DetailsPage />
          )}
        />
      </Routes>
    </BasePage>
  );
}
