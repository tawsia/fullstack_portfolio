import React from 'react';

const Resume = () => {
  const handleDownload = () => {
    // If you have a resume.pdf in public folder, this will download it
    const link = document.createElement('a');
    link.href = '/Tawsai_Rasool_CV.pdf';
    link.download = 'Tawsai_Rasool_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-page">
      <section className="page-header">
        <h1>Resume</h1>
        <p>Download my resume or view it online</p>
      </section>

      <div className="resume-content">
        <div className="resume-card">
          <div className="resume-icon">📄</div>
          <h2>My Resume</h2>
          <p>
            Click the button below to download my resume in PDF format.
            You can also view it online if I've provided a link.
          </p>
          
          <div className="resume-actions">
            <button onClick={handleDownload} className="btn btn-primary">
              Download Resume (PDF)
            </button>
            <a 
              href="https://your-resume-link.com" 
              target="_blank" 
              rel="noreferrer"
              className="btn btn-secondary"
            >
              View Online
            </a>
          </div>


        
        </div>
      </div>
    </div>
  );
};

export default Resume;
