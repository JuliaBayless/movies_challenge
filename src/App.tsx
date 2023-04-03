import React from 'react';
import '@fontsource/poppins';
import { Routes, Route } from 'react-router';
import ListPage from './features/ListPage';
import DetailsPage from './features/DetailsPage';
import BasePage from './components/BasePage';

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={(
          <BasePage>
            <ListPage />
          </BasePage>
          )}
      />
      <Route
        path="/movie/:id"
        element={(
          <BasePage backBtn>
            <DetailsPage />
          </BasePage>
          )}
      />
    </Routes>
  );
}
