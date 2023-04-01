import React from 'react';
import './BaseCard.css';

interface CardProps {
  title?: string;
  child?: JSX.Element;
  onClick?: () => void;
}

export default function BaseCard({
  title, child, onClick,
}: CardProps) {
  return (
    <button type="button" className="card" onClick={onClick}>
      <div className="card-header">
        <h2>{title}</h2>
      </div>
      <div className="card-body">
        {child}
      </div>
      <div className="card-footer">
        <div className="styleCardContent">
          <p className="styleCardTitle">{title}</p>
          <p className="styleLocationLabel"> release year </p>
          <p className="styleDescription"> runtime </p>
          <p className="styleDescription"> ratings? </p>
        </div>
      </div>
    </button>
  );
}

BaseCard.defaultProps = {
  title: undefined,
  child: undefined,
  onClick: undefined,
};
