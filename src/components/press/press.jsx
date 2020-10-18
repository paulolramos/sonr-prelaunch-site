import React from "react";
import { Container, Grid } from "react-simple-layouts";
import { ContactUs } from "../contact-us/contact-us";
import { heading, deckOverride, wrapper } from "./press.module.css";

export const Press = () => {
  return (
    <div id="press" className={wrapper}>
      <Container
        bgColor="transparent"
        textColor="white"
        top="65px"
        bottom="65px"
      >
        <Grid columns="2">
          <div>
            <h1 className={`section-heading ${heading}`}>
              Press and Inquiries
            </h1>
            <p className={`deck ${deckOverride}`}>
              Interested in covering SONR for a story, or just want to ask us a
              question? <br />
              <br /> We want to hear from you.
            </p>
          </div>
          <ContactUs headline="Contact Us" callToAction="Submit" width="70%" />
        </Grid>
      </Container>
    </div>
  );
};
