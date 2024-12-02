import "./About.scss";

import { useEffect, useRef } from "react";
import { Grid } from "@mui/material";
import { useStore } from "../components/Stores/store";

declare global {
  interface Window {
    Flourish?: {
      init: () => void;
    };
  }
}

function About() {
  const { activeSection } = useStore();
  const flourishContainerRef = useRef(null) as any;
  const scriptRef = useRef(null) as any;

  useEffect(() => {
    // Function to load Flourish script
    const loadFlourishScript = () => {
      // Check if script is already loaded
      if (
        document.querySelector(
          'script[src="https://public.flourish.studio/resources/embed.js"]'
        )
      ) {
        return Promise.resolve();
      }

      return new Promise((resolve, reject) => {
        scriptRef.current = document.createElement("script");
        scriptRef.current.src =
          "https://public.flourish.studio/resources/embed.js";
        scriptRef.current.async = true;
        scriptRef.current.onload = () => {
          // Call Flourish init if it exists
          if (window.Flourish && window.Flourish.init) {
            window.Flourish.init();
          }
          resolve(null);
        };
        scriptRef.current.onerror = reject;
        document.body.appendChild(scriptRef.current);
      });
    };

    // Load script
    loadFlourishScript().catch((error) =>
      console.error("Failed to load Flourish script:", error)
    );

    // Cleanup function
    return () => {
      if (scriptRef.current) {
        document.body.removeChild(scriptRef.current);
      }
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div id="about" className={activeSection === "about" ? "" : "hidden"}>
      <Grid container spacing={4} className="about-grid">
        <Grid item xs={6} md={6} className="about-title">
          <h3>About Me</h3>
        </Grid>
        <Grid item xs={6} md={6} className="about-desc">
          <p>
            As a junior at Stanford studying Design (with a focus on AI and UX)
            and Computer Science (HCI), I am passionate about the intersection
            of design, marketing, and human-AI interaction. My interest in
            creating accessible solutions for friends during my childhood
            sparked my exploration of medical technology and applications
            through design. I am driven by the potential of these fields to
            foster meaningful connections and develop innovative solutions.
          </p>
        </Grid>
      </Grid>

      <div
        ref={flourishContainerRef}
        className="flourish-embed flourish-network"
        data-src="visualisation/20571875"
      >
        <noscript>
          <img
            src="https://public.flourish.studio/visualisation/20571875/thumbnail"
            width="100%"
            alt="network visualization"
          />
        </noscript>
      </div>
    </div>
  );
}

export default About;
