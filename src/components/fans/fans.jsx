import React from "react";
import { Grid } from "react-simple-layouts";
import IconOne from "../../images/icons/music.svg";
import IconTwo from "../../images/icons/equalizer.svg";
import IconThree from "../../images/icons/wifi.svg";
import IconFour from "../../images/icons/hearing.svg";
import styles from "./fans.module.css";

export const Fans = () => {
  return (
    <div id="fans" className={styles.wrapper}>
      <h1 className="section-heading">For Fans</h1>
      <p className="deck" style={{ marginBottom: "6rem" }}>
        Welcome to the new home of the underground.
      </p>
      <Grid columns="4" gap="3rem">
        <div className={styles.box}>
          <h3 className={styles.boxHeader}>
            <IconOne className="icon" />
            Best Local Shows
          </h3>
          <p>
            Automatically discover all the hottest, most attended local shows in
            your area, and for any genre, so you never miss another show.
          </p>
        </div>
        <div className={styles.box}>
          <h3 className={styles.boxHeader}>
            <IconTwo className="icon" />
            Best Local Artists
          </h3>
          <p>
            SONR uses its sophisticated sorting algorithm to hand-pick the best
            artists in your area, and the ones most likely to break out first.
          </p>
        </div>
        <div className={styles.box}>
          <h3 className={styles.boxHeader}>
            <IconThree className="icon" />
            Your key to the scene
          </h3>
          <p>
            Search through a complete catalogue of local music artists and
            events in your area, both active and inactive.
          </p>
        </div>
        <div className={styles.box}>
          <h3 className={styles.boxHeader}>
            <IconFour className="icon" />
            Support the Locals
          </h3>
          <p>
            Actively support the music that you love and help your favorites
            rise to the top.
          </p>
        </div>
      </Grid>
    </div>
  );
};
