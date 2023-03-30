import React, { ReactNode } from 'react';
import './BaseCard.css';

interface CardProps {
  title?: string;
  footer?: ReactNode;
  child?: JSX.Element;
}

export default function BaseCard({ title, footer, child }: CardProps) {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{title}</h2>
      </div>
      <div className="card-body">
        {child}
      </div>
      <div className="card-footer">
        {footer}
      </div>
    </div>
  );
}

BaseCard.defaultProps = {
  title: undefined,
  footer: undefined,
  child: undefined,
};
