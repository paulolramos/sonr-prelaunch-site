import React from "react";
import { Container } from "react-simple-layouts";
import styles from "./footer.module.css";

export const Footer = () => (
  <footer className={styles.footer}>
    <Container bgColor="#181818" top="1%" bottom="3%">
      <hr />
      <div className={styles.links}>
        <a href="#top">SONR</a>
        <a href="#fans">Fans</a>
        <a href="#artists">Artists</a>
        <span className={styles.socialMedia}>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </span>
      </div>
    </Container>
  </footer>
);
