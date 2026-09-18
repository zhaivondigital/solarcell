import React from "react";
import { Calculator as SolarCalculator, IMG, PageHero, SiteChrome } from "../components/SiteChrome.jsx";

export default function Calculator() {
  return (
    <SiteChrome>
      <PageHero
        eyebrow="Solar savings calculator"
        title="See What Your Roof Could Return."
        copy="Start with your current electricity bill. This quick estimate gives you a useful first picture before a personalised site assessment."
        image={IMG.roof}
      />

      <section data-page-reveal>
        <div className="container">
          <div className="page-intro">
            <div className="eyebrow">Your indicative solar picture</div>
            <h2>A clearer next step starts with one number.</h2>
            <p className="muted">
              Use the slider below for an initial estimate. Actual results
              depend on location, usage, roof conditions, tariffs, system
              design and applicable policies.
            </p>
          </div>
          <SolarCalculator />
        </div>
      </section>
    </SiteChrome>
  );
}
