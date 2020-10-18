import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Container, Grid } from "react-simple-layouts";
import styles from "./coming-soon.module.css";

export const ComingSoon = () => {
  const { artists, events } = useStaticQuery(graphql`
    query {
      artists: file(relativePath: { eq: "artists-app.png" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      events: file(relativePath: { eq: "events-app.png" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Container
      bgColor="#181818"
      initialSides="0px"
      top="0px"
      bottom="0px"
      textColor="white"
    >
      <Grid columns="3" gap="0px">
        <Img
          fixed={artists.childImageSharp.fixed}
          className={styles.artistImage}
        />
        <Img
          fixed={events.childImageSharp.fixed}
          className={styles.eventImage}
        />
        <div className={styles.text}>
          <span className={styles.comingSoon}>Coming 2020</span>
          to iOS, Andriod, and the Web!
        </div>
      </Grid>
    </Container>
  );
};
