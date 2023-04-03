import React, { useState, useEffect } from 'react';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import './Header.css';

interface HeaderProps {
  title: string;
  backBtn?: boolean;
}

export default function Header({ title, backBtn }: HeaderProps) {
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(
        (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 80) || currentScrollPos < 10,
      );

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <div className={`header-container ${visible ? '' : 'hide'}`}>
      <div className="header-row">
        <h1 className="title">{title}</h1>
        {backBtn && (
          <div className="header-btn-container">
            <button type="button">
              <FastRewindIcon />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

Header.defaultProps = {
  backBtn: false,
};
