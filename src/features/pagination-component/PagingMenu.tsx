import React from 'react';
import PagingArrows from './PagingArrows';
import PagingText from './PagingText';
import { PagingOptions } from '../../api/types';
import './PagingComponents.css';

interface PaginationMenuProps {
  pagingOptions: PagingOptions,
  totalItems: number;
  onPageChange: (newPage: number) => void;
}

export default function PaginationMenu({
  pagingOptions,
  totalItems,
  onPageChange,
} : PaginationMenuProps) {
  const { page: currentPage, page_size: pageSize } = pagingOptions;

  const roundedTotalPages = Math.ceil(totalItems / pageSize);

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      onPageChange(newPage);
    }
  };

  const handleNextClick = () => {
    if (currentPage < roundedTotalPages) {
      const newPage = currentPage + 1;
      onPageChange(newPage);
    }
  };

  const currentStart = (currentPage - 1) * pageSize + 1;
  const currentEnd = totalItems < (currentPage) * pageSize ? totalItems : (currentPage) * pageSize;

  return (
    <div>
      <div className="menu-container">
        <PagingText
          currentStart={currentStart}
          currentEnd={currentEnd}
          total={totalItems}
        />
        <PagingArrows
          currentPage={currentPage}
          totalPages={roundedTotalPages}
          handlePreviousClick={handlePreviousClick}
          handleNextClick={handleNextClick}
        />
      </div>
    </div>
  );
}
