import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Container } from "react-simple-layouts";
import Spotify from "../../images/icons/spotify.svg";
import SoundCloud from "../../images/icons/soundcloud.svg";
import YouTube from "../../images/icons/youtube.svg";
import Arrow from "../../images/icons/arrow_downward-24px.svg";
import Dash from "../../images/icons/remove-24px.svg";
import styles from "./how-it-works.module.css";

export const HowItWorks = () => {
  const { sonr } = useStaticQuery(graphql`
    query {
      sonr: file(relativePath: { eq: "sonr.png" }) {
        childImageSharp {
          fixed(width: 120) {
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
      top="5rem"
      bottom="5rem"
      textColor="white"
    >
      <h1 className="section-heading">How it Works</h1>
      <p className="deck">
        SONR uses machine learning to determine which local artists are gaining
        the most traction, so you can see them live before they become famous.
      </p>
      <section className={styles.contentContainer}>
        <article className={styles.contentBox}>
          <Spotify style={{ width: "8rem", height: "4.5rem" }} />
          <p>
            SONR tracks shifts in monthly listens, relevance of playlists that
            include the artists’ tracks, and general relevance score, among
            other data.
          </p>
        </article>
        <div className={styles.dash}>
          <Dash />
        </div>
        <article className={styles.contentBox}>
          <SoundCloud style={{ width: "6rem", height: "4.5rem" }} />
          <p>
            Our algorithm considers recent influx in plays, reposts and
            downloads, among other general data points.
          </p>
        </article>
        <div className={styles.dash}>
          <Dash />
        </div>
        <article className={styles.contentBox}>
          <YouTube style={{ width: "10rem", height: "4.5rem" }} />
          <p>
            We gather data on subscriber increases, video view count and overall
            vitality, among other data points.
          </p>
        </article>
      </section>
      <div className={styles.arrow}>
        <Arrow />
      </div>
      <section className={styles.contentContainer}>
        <article className={styles.contentBox + " " + styles.sonr}>
          <Img
            fixed={sonr.childImageSharp.fixed}
            style={{ margin: "15px auto" }}
          />
          <p>
            SONR allows users to “like”, follow, and rate live performances of
            local artists. This data is combined with data collected that
            week/month from the artist's music-streaming platforms. SONR then
            uses machine learning to give each artist a “SONR score” based on
            the likelihood that their music will enter the charts.
          </p>
          <p>
            Artist profiles with the highest scores are pushed to the top of
            search results and the top 5% are promoted on the app within their
            respective genres. Events with the most user engagement and top-tier
            artists performing receive similar treatment.
          </p>
        </article>
      </section>
    </Container>
  );
};
