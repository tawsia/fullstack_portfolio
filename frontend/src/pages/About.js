import React from 'react';
import Counter from "../components/Counter";

const About = () => {
  return (
    <div className="about-page">
      <section className="page-header">
        <h1>About Me</h1>
        <p className="about-intro">
          I'm a passionate DSA enthusiast and full-stack developer who enjoys solving problems and building things that matter.
          I have solved 400+ problems on platforms like LeetCode & GeeksforGeeks and I'm currently working through NeetCode150 roadmap to strengthen my problem-solving skills.
          I love turning ideas into reality through code and I'm always eager to learn new technologies and improve my craft.
        </p>
      </section>

      <div className="about-content">
        {/* Personal Story */}
        <section className="about-section">
          <h2>My Journey</h2>
          <p>
          I began my coding journey with a simple curiosity about how 
          websites work and how ideas turn into interactive experiences. 
          What started as exploration gradually became a passion for problem-solving and continuous improvement.

          </p>
          <p>
          Over time, I developed a disciplined approach to learning, strengthening my fundamentals, solving challenging problems, and building projects that reflect real-world thinking. I believe growth comes 
          from consistency, curiosity, and applying knowledge through practice.
          </p>
          <p>
          Alongside my role as a teacher, I continue to sharpen my technical skills every day. Teaching has strengthened my patience, clarity of thought, and ability to break down complex ideas,qualities that also shape the way I approach coding.

          </p>
          <p>I am driven by the desire to learn deeply, build thoughtfully, and contribute meaningfully wherever I work.</p>
        </section>

        {/* Skills */}
        <section className="about-section">
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <ul>
                <li>C++ (Proficient)</li>
                <li>Python (Basic)</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul>
                <li>React</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML5 & CSS3</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>RESTful APIs</li>
                <li>MySQL</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Tools</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>MySQL Workbench</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="about-section">
          <h2>Education</h2>
          <div className="education-item">
            <h3>B.Tech in Computer Science</h3>
            <p className="education-institution">Rajasthan Technical University / Arya College Of Engineering And Research Centre</p>
            <p className="education-year">2018 - 2022</p>
            <p className="education-details">
              Relevant coursework: Data Structures, Algorithms, Compuer Networks.
            </p>
          </div>
        </section>

        {/* DSA Achievements */}
        <section className="about-section">
          <h2>DSA & Problem Solving</h2>
          <div className="dsa-achievements">
            <div className="dsa-stat">
            <h3>
  <Counter end={400} suffix="+" />
</h3>
              <p>Problems Solved</p>
              <span className="dsa-platforms">LeetCode & GeeksforGeeks</span>
            </div>
            <div className="dsa-stat">
              <h3>NeetCode150</h3>
              <p>Currently Solving</p>
              <span className="dsa-platforms">Systematic Learning Path</span>
            </div>
            <div className="dsa-stat">
              <h3>Daily Practice</h3>
              <p>Consistent Problem Solving</p>
              <span className="dsa-platforms">Building Strong Foundation</span>
            </div>
          </div>
        </section>


        <section className="about-section">
  
  
     <h2>Coding Profiles</h2>

  <div className="coding-grid">

    <a
      href="https://leetcode.com/u/Tawsia32/"
      target="_blank"
      rel="noreferrer"
      className="coding-card"
    >
      <img 
        src="https://www.google.com/s2/favicons?domain=leetcode.com&sz=64" 
        alt="LeetCode" 
      />
      <h3>LeetCode</h3>
    </a>

    <a
      href="https://www.geeksforgeeks.org/profile/tawsiarasool32?tab=activity"
      target="_blank"
      rel="noreferrer"
      className="coding-card"
    >
      <img 
        src="https://www.google.com/s2/favicons?domain=geeksforgeeks.org&sz=64" 
        alt="GeeksforGeeks" 
      />
      <h3>GeeksforGeeks</h3>
    </a>

    <a
      href="https://www.naukri.com/code360/profile/tawsia32"
      target="_blank"
      rel="noreferrer"
      className="coding-card"
    >
      <img 
        src="https://www.google.com/s2/favicons?domain=codingninjas.com&sz=64" 
        alt="Code360 by Coding Ninjas" 
      />
      <h3>Code 360 by Coding Ninjas</h3>
    </a>

  </div>
</section>

        {/* What I'm Looking For */}
        <section className="about-section">
          <h2>Career Goals</h2>
          <p>
            I'm actively preparing for tech opportunities where I can:
          </p>
          <ul className="goals-list">
            <li>Work on challenging, real-world problems</li>
            <li>Apply my DSA knowledge to build efficient solutions</li>
            <li>Collaborate with experienced developers</li>
            <li>Contribute to scalable applications</li>
            <li>Continue learning and growing</li>
            <li>Make a meaningful impact</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
