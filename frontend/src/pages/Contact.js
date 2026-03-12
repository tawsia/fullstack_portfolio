import React, { useState } from 'react';
import emailjs from "@emailjs/browser";


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now we just log; later we will send this to the backend
   emailjs.send(
    "service_ib4js92",
    "template_25o2w06",
    {
      from_name: name,
      to_name: "Tawsia",
     email: email,
      message: message
    },
    "Oxyp5ch0LX_5slqJa"
  )
  .then(()=>{
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  })
  .catch((err)=>{
    console.error('Failed to send message:', err);
  });
  };

  return (
    <div className="contact-page">
      <section className="page-header">
        <h1>Get In Touch</h1>
        <p>Have a question or want to work together? I'd love to hear from you!</p>
      </section>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Let's Connect</h2>
          <p>
            I'm always open to discussing new opportunities, interesting projects,
            or just having a chat about technology and development.
          </p>

          <div className="contact-methods">
            <div className="contact-method">
              <span className="contact-icon">📧</span>
              <div>
                <h3>Email</h3>
                <a href="mailto:tawsairasool62@gmail.com">tawsiarasool32@gmail.com</a>
              </div>
            </div>

            <div className="contact-method">
              <span className="contact-icon">💼</span>
              <div>
                <h3>LinkedIn</h3>
                <a href="https://linkedin.com/in/tawsiarasool" target="_blank" rel="noreferrer">
                  linkedin.com/in/tawsiarasool
                </a>
              </div>
            </div>

            <div className="contact-method">
              <span className="contact-icon">📱</span>
              <div>
                <h3>GitHub</h3>
                <a href="https://github.com/tawsia" target="_blank" rel="noreferrer">
                  github.com/tawsia
                </a>
              </div>
            </div>
          </div>

          <div className="social-media-links">
            <h3>Follow Me</h3>
            <div className="social-icons">
              <a href="https://github.com/tawsia" target="_blank" rel="noreferrer" className="social-icon">
                GitHub
              </a>
              <a href="https://linkedin.com/in/tawsiarasool" target="_blank" rel="noreferrer" className="social-icon">
                LinkedIn
              </a>
              <a href="https://x.com/TawsiaRasool" target="_blank" rel="noreferrer" className="social-icon">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send a Message</h2>
          {submitted && (
            <div className="success-message">
              ✅ Thanks for reaching out! I'll get back to you soon.
            </div>
          )}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="6"
                placeholder="Your message..."
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
