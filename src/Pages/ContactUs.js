import React from 'react';
import './Contact.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact MotoGuide</h1>
      <p className="contact-description">
        Have questions, feedback, or business inquiries? We’d love to hear from you.
      </p>
      
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="6" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
