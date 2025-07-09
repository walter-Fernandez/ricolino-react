import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.info}>
        <p style={styles.text}>📞 (123) 456-7890</p>
        <div style={styles.socials}>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" style={styles.icon}>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" style={styles.icon}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" style={styles.icon}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <p style={styles.copy}>© {new Date().getFullYear()} Ricolino. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#222',
    color: 'white',
    padding: '1.5rem',
    textAlign: 'center',
    width: '100%',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '1rem',
  },
  text: {
    margin: 0,
    fontSize: '1rem',
  },
  socials: {
    display: 'flex',
    gap: '1.5rem',
  },
  icon: {
    fontSize: '1.5rem',
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
  copy: {
    fontSize: '0.9rem',
    color: '#aaa',
  },
};

export default Footer;
