// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="header-container">
      <div className="header-inner">
        <h1 className="header-title"></h1>
        <nav className="header-nav">
          <Link className="header-link" to="/">Home</Link>
          <Link className="header-link" to="/portfolio">Portfolio</Link>
          <Link className="header-link" to="/contact">Contact</Link>
          <Link className="header-link" to="/resume">Resume</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
