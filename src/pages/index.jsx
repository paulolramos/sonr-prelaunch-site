import React, { useEffect } from "react";
import { makeJumpLinkSmoothScroll } from "../utils";
import "../global.css";

import { SEO } from "../components/seo.js";
import { Hero } from "../components/hero/hero";
import { Fans } from "../components/fans/fans";
import { Artists } from "../components/artists/artists";
import { Press } from "../components/press/press";
import { Reminder } from "../components/reminder/reminder";
import { Footer } from "../components/footer/footer";
import { ComingSoon } from "../components/coming-soon/coming-soon";
import { HowItWorks } from "../components/how-it-works/how-it-works";

export default () => {
  useEffect(() => {
    makeJumpLinkSmoothScroll();
  }, []);

  return (
    <main id="top">
      <SEO
        title="Home"
        description="Landing page for SONR. A revolutionary way to experience your favorite music."
      />
      <Hero />
      <HowItWorks />
      <Fans />
      <ComingSoon />
      <Artists />
      <Press />
      <Reminder />
      <Footer />
    </main>
  );
};
