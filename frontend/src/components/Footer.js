import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/experience">Experience</a></li>
            <li><a href="/resume">Resume</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Connect With Me</h3>
          <div className="social-links">
            <a 
              href="https://github.com/tawsia" 
              target="_blank" 
              rel="noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <span>📱</span> GitHub
            </a>
            <a 
              href="https://linkedin.com/in/tawsiarasool" 
              target="_blank" 
              rel="noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <span>💼</span> LinkedIn
            </a>
            <a 
              href="https://x.com/TawsiaRasool" 
              target="_blank" 
              rel="noreferrer"
              className="social-link"
              aria-label="Twitter"
            >
              <span>🐦</span> Twitter
            </a>
            <a 
              href="mailto:your.tawsiarasool32@gmail.com" 
              className="social-link"
              aria-label="Email"
            >
              <span>✉️</span> Email
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>About This Portfolio</h3>
          <p>
            Built with React, Node.js, Express, and MySQL.
            A full-stack project showcasing my development skills.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Tawsia Rasool. All rights reserved.</p>
        <p>Made with ❤️ while preparing for tech opportunities</p>
      </div>
    </footer>
  );
};

export default Footer;
