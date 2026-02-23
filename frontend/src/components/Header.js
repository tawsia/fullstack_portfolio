import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="main-header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-icon">👩‍💻</span>
          <span className="logo-text">My Portfolio</span>
        </Link>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li>
              <Link to="/" className={isActive('/') ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={isActive('/about') ? 'active' : ''}>
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className={isActive('/projects') ? 'active' : ''}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/experience" className={isActive('/experience') ? 'active' : ''}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="/resume" className={isActive('/resume') ? 'active' : ''}>
                Resume
              </Link>
            </li>
            <li>
              <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
