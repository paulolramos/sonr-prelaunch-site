import React, { useState } from "react";
import styles from "./reminder-form.module.css";
import { Grid } from "react-simple-layouts";

export const ReminderForm = ({ callToAction }) => {
  const [email, setEmail] = useState("");

  const handleChange = e => {
    setEmail(e.target.value);
  };

  const handleSumbit = async e => {
    alert(`sending email to: ${email}`);
  };

  return (
    <div className={styles.container}>
      <span className={styles.newsletterText}>
        See the best local artists... <br />
        Before they become famous.
      </span>
      <form className={styles.form} onSubmit={handleSumbit}>
        <label htmlFor="reminder-email">Email</label>
        <Grid columns="2">
          <input
            type="email"
            id="reminder-email"
            value={email}
            onChange={handleChange}
            className={styles.input}
          />
          <button type="submit" className={styles.submitButton}>
            {callToAction}
          </button>
        </Grid>
      </form>
    </div>
  );
};
