import React from 'react';
import '../App.css';

import img1 from '../assets/interior_01.jpeg';
import img2 from '../assets/interior_02.jpeg';
import img3 from '../assets/interior_03.jpeg';
import img4 from '../assets/interior_04.jpeg';
import img5 from '../assets/interior_05.jpeg';
import img6 from '../assets/interior_06.jpeg';

const images = [img1, img2, img3, img4, img5, img6];

function Gallery() {
  return (
    <div className="gallery-container" style={{ padding: '2rem', backgroundColor: '#fff3e0' }}>
      <h2 className="text-center" style={{ fontWeight: 'bold', marginBottom: '2rem' }}>Gallery</h2>
      <div className="gallery-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1rem'
      }}>
        {images.map((src, index) => (
          <div key={index} className="gallery-item" style={{ overflow: 'hidden', borderRadius: '10px' }}>
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              style={{ width: '100%', height: '250px', objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .gallery-container {
            padding: 1rem;
          }
          .gallery-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .gallery-item img {
            height: 200px;
          }
        }
      `}</style>
    </div>
  );
}

export default Gallery;
