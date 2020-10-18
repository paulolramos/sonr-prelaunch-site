import React, { useState } from "react";
import styles from "./contact-us.module.css";

export const ContactUs = ({ headline, callToAction, width }) => {
  const [feedback, setFeedback] = useState({
    email: "",
    phone: "",
    message: "",
  });
  const [msg, setMsg] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    document.getElementById("sub-btn").disabled = false;
    if (msg !== "") {
      setMsg("");
    }
    setFeedback(state => ({
      email: name === "email" ? value : state.email,
      phone: name === "phone" ? value : state.phone,
      message: name === "message" ? value : state.message,
    }));
  };

  const handleSumbit = e => {
    e.preventDefault();
    document.getElementById("sub-btn").disabled = true;
    if (
      feedback.email === "" ||
      feedback.phone === "" ||
      feedback.message === ""
    ) {
      return setMsg("Fields cannot be blank");
    } else {
      // handle contact us form
      setMsg("Thank you for contacting SONR. We'll be in touch!");
    }
  };

  return (
    <div className={styles.container} style={{ width: width }}>
      <span className={styles.headline}>{headline}</span>
      {msg === "" ? null : (
        <p style={{ marginBottom: "0px", color: "#56ccf2" }}>{msg}</p>
      )}
      <form
        method="post"
        name="contact-sonr"
        className={styles.form}
        onSubmit={handleSumbit}
      >
        <div className={styles.formItem}>
          <label htmlFor="contact-us-email">Email</label>
          <input
            type="email"
            name="email"
            id="contact-us-email"
            onChange={handleChange}
          />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="phone">Phone</label>
          <input type="phone" name="phone" id="phone" onChange={handleChange} />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="3"
            style={{ height: "initial", resize: "none" }}
            onChange={handleChange}
            autoComplete="STOP"
          ></textarea>
        </div>
        <button type="submit" id="sub-btn" className={styles.submitButton}>
          {callToAction}
        </button>
      </form>
    </div>
  );
};
