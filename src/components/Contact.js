import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then(
      () => {
        alert('Message sent successfully! ✅');
        e.target.reset();
      },
      (error) => {
        alert('Oops! Something went wrong ❌');
        console.error(error);
      }
    );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>Have a question or want to work together? Send me a message!</p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="title" placeholder="Subject" required />
          <textarea name="message" placeholder="Your Message" rows="6" required />
          <input type="hidden" name="time" value={new Date().toLocaleString()} />
          <button type="submit">Send Message</button>
        </form>
        {process.env.REACT_APP_SHOW_PHONE === "true" && (
  <a href={`tel:${process.env.REACT_APP_PHONE}`} className="call-button">Call Me</a>
)}

      </div>
    </section>
  );
};

export default Contact;
