import React from "react";
import { Grid } from "react-simple-layouts";
import IconOne from "../../images/icons/music.svg";
import IconTwo from "../../images/icons/equalizer.svg";
import IconThree from "../../images/icons/wifi.svg";
import IconFour from "../../images/icons/hearing.svg";
import styles from "../artists/artists.module.css";

export const Artists = () => {
  return (
    <div id="artists" className={styles.wrapper}>
      <h1 className="section-heading">For Artists</h1>
      <p className="deck" style={{ marginBottom: "6rem" }}>
        Gain access to your local scene like never before.
      </p>
      <Grid columns="4" gap="3rem">
        <div className={styles.box}>
          <h3 className={styles.boxHeader}>
            <IconOne className="icon" />
            Play More Shows
          </h3>
          <p>
            Search for shows in your genre that are in need of supporting acts.
            Easily contact the show provider and get placed on the bill in no
            time.
          </p>
        </div>
        <div className={styles.box}>
          <h3 className={styles.boxHeader}>
            <IconTwo className="icon" />
            Connect with Peers
          </h3>
          <p>
            Discover other local artists in your genre and reach out to
            collaborate, set up an event, or simply chat about music.
          </p>
        </div>
        <div className={styles.box}>
          <h3 className={styles.boxHeader}>
            <IconThree className="icon" />
            Gain Exposure
          </h3>
          <p>
            Telegraph your music and up-coming shows not only to your personal
            fans, but all concert-goers and fans of your genre.
          </p>
        </div>
        <div className={styles.box}>
          <h3 className={styles.boxHeader}>
            <IconFour className="icon" />
            Get Discovered
          </h3>
          <p>
            Get discovered by the people most likely to support what you do -
            die-hard music fans.
          </p>
        </div>
      </Grid>
    </div>
  );
};
