import React from 'react';
import { Link } from 'react-router-dom';
import Counter from "../components/Counter";

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Tawsia Rasool</span>
          </h1>
          <p className="hero-subtitle">Full-Stack Developer & DSA Enthusiast</p>
          <p className="hero-description">
          I am a teacher at Sidrah International Convent School and a self-motivated developer passionate about structured problem-solving and lifelong learning. I build practical web applications with clarity and purpose, and with over 400 coding problems solved,
           I continuously refine my technical skills and analytical thinking.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">
              View My Work
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-photo-wrap">
            <img
              src={`${process.env.PUBLIC_URL || ''}/photo_2026.jpg`}
              alt="Tawsia Rasool"
              className="profile-photo"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling?.classList.add('profile-placeholder-visible');
              }}
            />
            <div className="profile-placeholder" aria-hidden="true">
              <span>👩‍💻</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="stats">
        <div className="stat-item">
          <h3>
        <Counter end={400} suffix="+" />
        </h3>
          <p>Problems Solved</p>
        </div>
        <div className="stat-item">
          <h3>NeetCode <Counter end={150} /></h3>
          <p>Currently Solving</p>
        </div>
        <div className="stat-item">
          <h3>DSA</h3>
          <p>Enthusiast</p>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="skills-preview">
        <h2>Technologies I Work With</h2>
        <div className="tech-tags">
          <span className="tech-tag">React</span>
          <span className="tech-tag">Node.js</span>
          <span className="tech-tag">Express</span>
          <span className="tech-tag">MySQL</span>
          <span className="tech-tag">JavaScript</span>
          <span className="tech-tag">Python</span>
          <span className="tech-tag">C++</span>
          <span className="tech-tag">DSA</span>
          <span className="tech-tag">LeetCode</span>
          <span className="tech-tag">HTML/CSS</span>
          <span className="tech-tag">REST APIs</span>
          <span className="tech-tag">Git</span>
        </div>
      </section>
    </div>
  );
};

export default Home;
