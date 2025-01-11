import React, { useState } from 'react';
import './contactstyle.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false); // Track loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true); // Set loading to true when form is being submitted

    // Send the form data to the backend
    fetch('http://localhost:5000/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (response.ok) {
        alert('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again later.');
      }
      setIsLoading(false); // Reset loading state
    })
    .catch(error => {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
      setIsLoading(false); // Reset loading state on error
    });
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form-box">
        <h2>Get in Touch</h2>
        <h1>Contact Me</h1>
        
        <form onSubmit={handleSubmit} className="contact-form" id="contact-form">
          <div>
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              required
            />
          </div>

          <div>
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="What's your email?"
              required
            />
          </div>

          <div>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              required
            />
          </div>

          <button type="submit" disabled={isLoading}>{isLoading ? 'Sending...' : 'Send'}</button>
        </form>
      </div>
    </div>
  );
}
