import React from 'react';
import '../App.css';
import backgroundImage from '../assets/background_restaurant.jpeg';

function Home() {
  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <div className="home-content" style={{ maxWidth: '800px', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '2rem', borderRadius: '10px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Welcome to Ricolino</h1>
        <p style={{ fontSize: '1.5rem', marginTop: '1rem' }}>
          Experience the finest Latin American flavors, prepared with love and the freshest ingredients.
          Whether you're here for a quick bite or a full family meal, Ricolino is your go-to destination
          for delicious tacos, pizza, and homemade desserts.
        </p>
        <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
          Come taste the culture. Come feel at home. ¡Bienvenidos a Ricolino!
        </p>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .home-content {
            padding: 1rem;
          }
          h1 {
            font-size: 2rem;
          }
          p {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 1.5rem;
          }
          p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
