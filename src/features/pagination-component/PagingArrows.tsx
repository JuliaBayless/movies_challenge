import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import React from 'react';

interface PageArrowsProps {
  currentPage: number
  totalPages: number
  handlePreviousClick: () => void
  handleNextClick: () => void
}

export default function PagingArrows({
  currentPage, totalPages, handlePreviousClick, handleNextClick,
}: PageArrowsProps) {
  return (
    <div>
      <button type="button" className="paging-button" onClick={handlePreviousClick} disabled={currentPage === 1}>
        <NavigateBeforeIcon />
      </button>
      <button type="button" className="paging-button" onClick={handleNextClick} disabled={currentPage === totalPages}>
        <NavigateNextIcon />
      </button>
    </div>
  );
}
