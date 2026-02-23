import React, { useEffect, useState } from 'react';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${API_URL}/projects`);
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="projects-page">
    
        <section className="page-header">
          <h1>My Projects</h1>
          <p>Loading projects...</p>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div className="projects-page">
        <section className="page-header">
          <h1>My Projects</h1>
          <p className="error-message">{error}</p>
        </section>
      </div>
    );
  }

  return (
    <div className="projects-page">
      <section className="page-header">
        <h1>My Projects</h1>
        <p>A collection of projects I've built to showcase my skills</p>
      </section>

      {projects.length === 0 ? (
        <div className="no-projects">
          <p>No projects yet. Check back soon!</p>
        </div>
      ) : (
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              {project.image_url && (
                <div className="project-image">
                  <img src={project.image_url} alt={project.title} />
                </div>
              )}
              <div className="project-content">
                <h2>{project.title}</h2>
                <p className="project-description">{project.description}</p>
                {project.tech_stack && (
                  <div className="project-tech">
                    <strong>Technologies:</strong>
                    <div className="tech-tags">
                      {project.tech_stack.split(',').map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech.trim()}</span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="project-links">
                  {project.github_link && (
                    <a 
                      href={project.github_link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="btn-link btn-github"
                    >
                      📱 GitHub
                    </a>
                  )}
                  {project.live_link && (
                    <a 
                      href={project.live_link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="btn-link btn-live"
                    >
                      🌐 Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
