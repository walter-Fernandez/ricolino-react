import React from 'react';
import '../App.css';
import backgroundImage from '../assets/background_restaurant.jpeg';

function About() {
  return (
    <div
      className="about-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '4rem 2rem',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        className="about-content"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          padding: '2rem',
          borderRadius: '12px',
          maxWidth: '900px',
          textAlign: 'center',
          fontSize: '1.2rem',
          lineHeight: '1.8',
        }}
      >
        <p>
          Thank you for visiting our restaurant website. My grandma opened this business in 1846. This place used to be a farm, but she decided to start selling candies. Later, she began selling sandwiches, then chicken. However, during the Great Depression in 1929, she went back to selling candies. One day, my cousin asked her, “Why are you still selling candies?” That is when she decided to switch to selling pickles. After she passed away, we opened a restaurant in her honor. My grandma was a pioneer, so we named this place "Ricolino" after the name of her original candy business.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-content {
            padding: 1.5rem;
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .about-content {
            padding: 1rem;
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  );
}

export default About;
