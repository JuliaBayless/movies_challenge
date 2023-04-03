import React, { useState, useEffect } from 'react';
import './Header.css';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
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
      </div>
    </div>
  );
}