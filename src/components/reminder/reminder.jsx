import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Container, Grid } from "react-simple-layouts";
import { ReminderForm } from "./reminder-form";

export const Reminder = () => {
  const { app } = useStaticQuery(graphql`
    query {
      app: file(relativePath: { eq: "homepage-app.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Container bgColor="#181818" top="0px" bottom="0px" textColor="white">
      <Grid columns="2">
        <Img fluid={app.childImageSharp.fluid} />
        <ReminderForm callToAction="Subscribe" />
      </Grid>
    </Container>
  );
};
