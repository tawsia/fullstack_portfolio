import React from 'react';

const Experience = () => {
  return (
    <div className="experience-page">
      <section className="page-header">
        <h1>Experience</h1>
        <p>My professional journey and achievements</p>
      </section>

      <div className="experience-timeline">
        {/* Current Job */}
        <div className="experience-item">
          <div className="experience-date">
            <span>2024 - Present</span>
          </div>
          <div className="experience-content">
            <h3>Teacher</h3>
            <p className="company">Sidrah International Convent School</p>
            <ul>
              <li>Teaching and mentoring students while pursuing tech career</li>
              <li>Balancing teaching responsibilities with continuous learning</li>
              <li>Applying problem-solving skills in educational context</li>
            </ul>
          </div>
        </div>

       
      </div>

      {/* Achievements Section */}
      <section className="achievements-section">
        <h2>Achievements & Certifications</h2>
        <div className="achievements-grid">
          <div className="achievement-item">
            <h4>🔥 400+ Problems Solved</h4>
            <p>LeetCode & GeeksforGeeks</p>
          </div>
          <div className="achievement-item">
            <h4>📚 NeetCode150</h4>
            <p>Currently working through systematic learning path</p>
          </div>
          <div className="achievement-item">
            <h4>🎯 Portfolio Project</h4>
            <p>Built a complete full-stack application</p>
          </div>
          <div className="achievement-item">
            <h4>👩‍🏫 Teaching Experience</h4>
            <p>Teacher at Sidrah International Convent School</p>
          </div>
          <div className="achievement-item">
            <h4>💻 Code Quality</h4>
            <p>Focus on clean, maintainable code</p>
          </div>
          <div className="achievement-item">
            <h4>🚀 Continuous Learning</h4>
            <p>Always learning new technologies</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
