import React from 'react';
import Header from './Header';
import './BasePage.css';

interface PageProps {
  children: React.ReactNode;
}

export default function BasePage({ children }:PageProps) {
  return (
    <div className="container">
      <Header title="Movies!" />
      <div className="content">
        {/* //components here */}
        {children}
      </div>
    </div>
  );
}
