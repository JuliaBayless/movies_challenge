import React from 'react';

interface PageProps {
  children: React.ReactNode;
}

export default function BasePage({ children }:PageProps) {
  return (
    <div>
      {' '}
      {/* page style here header w back button toggle here */}
      <div>
        {/* //components here */}
        {children}
      </div>
    </div>
  );
}
