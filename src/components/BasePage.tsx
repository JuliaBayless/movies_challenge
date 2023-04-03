import React from 'react';
import Header from './Header';
import './BasePage.css';

interface PageProps {
  children: React.ReactNode;
  backBtn?: boolean;
}

export default function BasePage({ children, backBtn }:PageProps) {
  return (
    <div className="container">
      <Header title="Movies!" backBtn={backBtn} />
      <div className="content">
        {children}
      </div>
    </div>
  );
}

BasePage.defaultProps = {
  backBtn: false,
};
