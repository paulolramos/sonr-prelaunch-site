import React, { useState } from "react";
import styles from "./newsletter.module.css";

export const Newsletter = ({ headline, callToAction, width }) => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleChange = e => {
    if (msg !== "") {
      setMsg("");
    }
    setEmail(e.target.value);
  };

  const handleSumbit = async e => {
    e.preventDefault();
    // handle newsletter
    setMsg("Success!");
    setEmail("");
  };

  return (
    <div className={styles.container} style={{ width: width }}>
      <span className={styles.newsletterText}>{headline}</span>
      {msg === "" ? null : (
        <p
          style={{ marginBottom: "0px" }}
          dangerouslySetInnerHTML={{ __html: msg }}
        ></p>
      )}
      <form className={styles.form} onSubmit={handleSumbit}>
        <label htmlFor="newsletter-email">Email</label>
        <input
          type="email"
          id="newsletter-email"
          value={email}
          onChange={handleChange}
        />
        <button type="submit" className={styles.submitButton}>
          {callToAction}
        </button>
      </form>
    </div>
  );
};
