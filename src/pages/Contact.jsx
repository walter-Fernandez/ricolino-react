import React from 'react';
import '../App.css';

function Contact() {
  return (
    <div style={{ backgroundColor: '#fff3e0', minHeight: '100vh', padding: '2rem 1rem' }}>
      <h2 className="text-center" style={{ fontWeight: 'bold', marginBottom: '2rem' }}>Contact Us</h2>

      {/* Embedded Google Map */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8935368885776!2d-73.96340428459433!3d40.76809497932671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fca9fda621%3A0x47d3a9f607841f7e!2s695%20Park%20Ave%2C%20New%20York%2C%20NY%2010065!5e0!3m2!1sen!2sus!4v1656114935483!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0, maxWidth: '800px' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
      }}>
        <form>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="name" style={{ display: 'block', fontWeight: 'bold' }}>Name:</label>
            <input
              type="text"
              id="name"
              style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold' }}>Email:</label>
            <input
              type="email"
              id="email"
              style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="message" style={{ display: 'block', fontWeight: 'bold' }}>Message:</label>
            <textarea
              id="message"
              rows="5"
              style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
            ></textarea>
          </div>
          <button type="submit" style={{
            backgroundColor: '#ff5722',
            color: 'white',
            padding: '0.75rem 1.5rem',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            Send
          </button>
        </form>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .text-center {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          form label {
            font-size: 0.95rem;
          }

          form input,
          form textarea {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Contact;


