import React from 'react';
// import 'C:/Users/Aieyaan/react folder/credo-health/src/styles/Header.css';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Credo Health</div>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
