import React from 'react';
import logo from '../../logo.svg';
import styles from './header.module.css'; // Assuming your CSS file is named header.module.css

function Header() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="/" className={styles.navbarBrand}>
          <img src={logo} className={styles.navbarLogo} alt="logo" />
          Johannes hjemmeside
        </a>
        <ul className={styles.navbarNav}>
        <li className={`${styles.navItem} ${styles.dropdown}`}>
            <a href="/about" className={styles.navLink}>Prosjekter</a>
            <div className={styles.dropdownContent}>
              <a href="/project1">Project 1</a>
              <a href="/project2">Project 2</a>
              <a href="/project3">Project 3</a>
            </div>
          </li>
          <li className={styles.navItem}>
            <a href="/contact" className={styles.navLink}>Annet</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
