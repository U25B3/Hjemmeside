import React from 'react';
import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.footerText}>Kontaktinfo?</p>
      </div>
    </footer>
  );
}

export default Footer;