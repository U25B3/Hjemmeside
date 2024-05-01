import React from 'react';
import styles from './splash.module.css';

function Splash() {
  return (
    <div className={styles.splash}>
      <div className={styles.splashImg}>
        <h2 className={styles.title}>Hei!</h2>
        <p className={styles.description}>Litt usikker hva denne siden skal brukes til, men domenet kostet bare 9kr.</p>
      </div>
    </div>
  );
}

export default Splash;