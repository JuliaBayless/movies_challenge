import React from 'react';

interface PagingTextProps {
  currentStart: number;
  currentEnd: number;
  total: number;
}

export default function PagingText({ currentStart, currentEnd, total }: PagingTextProps) {
  const count = `Showing ${currentStart}-${currentEnd} of ${total} items`;

  return (
    <p>{count}</p>
  );
}
