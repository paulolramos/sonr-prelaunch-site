import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import styles from "./hero.module.css";
import { Newsletter } from "../newsletter/newsletter";
import { SocialMedia } from "../social-media/social-media";

export const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "sonr.png" }) {
        childImageSharp {
          fixed(quality: 100, width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={data.logo.childImageSharp.fixed.src} alt="SONR Logo" />
        </Link>
      </div>
      <nav className={styles.rightLinks}>
        <a href="#fans">Fans</a>
        <a href="#artists">Artist</a>
        <a href="#press">Press</a>
      </nav>
      <hr />
      <SocialMedia />
      <div className={styles.headLine}>
        <h1>Revolutionizing your local music scene</h1>
      </div>
      <Newsletter
        headline="Get exclusive early access by joining our newsletter!"
        callToAction="Get Early Access"
        width="30%"
      />
    </div>
  );
};
