import React from "react";
import styles from "../Header/Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.containerTop}>
        <div className={styles.logo}>
          <h1>Justice.</h1>
        </div>
        <nav>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Practice Areas</a>
            </li>
            <li>
              <a href=""></a>Services
            </li>
            <li>
              <a href="">Attorneys</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
