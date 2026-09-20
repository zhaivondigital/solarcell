import React, { useState } from "react";
import { IMG, PageHero, SiteChrome } from "../components/SiteChrome.jsx";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const params = new URLSearchParams(window.location.search);
  const hasEstimate = params.has("bill") && params.has("savings");
  const estimate = {
    bill: Number(params.get("bill") || 0).toLocaleString("en-IN"),
    capacity: params.get("capacity"),
    generation: Number(params.get("generation") || 0).toLocaleString("en-IN"),
    savings: Number(params.get("savings") || 0).toLocaleString("en-IN"),
    lifetime: params.get("lifetime"),
  };

  return (
    <SiteChrome>
      <PageHero
        eyebrow="Start your solar journey"
        title="Let's Make Your Rooftop Work Harder."
        copy="Tell us a little about your property and we'll help you understand the next sensible step."
        image={IMG.cta}
      />

      <section data-page-reveal>
        <div className="container contact-layout">
          <div>
            <div className="eyebrow">Get in touch</div>
            <h2>Bring us your questions. We will bring a clear plan.</h2>
            {hasEstimate && (
              <div className="solar-summary">
                <div className="eyebrow">Your solar estimate</div>
                <p>Based on an estimated monthly bill of ₹{estimate.bill}.</p>
                <div className="summary-grid">
                  <span><b>{estimate.capacity} kW</b>Recommended capacity</span>
                  <span><b>₹{estimate.savings}</b>Potential annual savings</span>
                  <span><b>{estimate.generation}+ kWh</b>Annual generation</span>
                  <span><b>₹{estimate.lifetime}L+</b>25-year potential</span>
                </div>
                <small>Indicative only. We will confirm your personalised system after a site assessment.</small>
              </div>
            )}
            <div className="contact-details">
              <div className="contact-detail">
                <b>Call us</b>
                <a href="tel:+910000000000">+91 00000 00000</a>
              </div>
              <div className="contact-detail">
                <b>Email</b>
                <a href="mailto:hello@evergreensolar.in">
                  hello@evergreensolar.in
                </a>
              </div>
              <div className="contact-detail">
                <b>Hours</b>
                <span>Mon-Sat · 9:00 AM-6:00 PM</span>
              </div>
            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={(event) => { event.preventDefault(); setSent(true); }}
          >
            <label>
              Name
              <input required placeholder="Your name" />
            </label>
            <label>
              Phone number
              <input required type="tel" placeholder="Your phone number" />
            </label>
            <label>
              Property type
              <select defaultValue="Home">
                <option>Home</option>
                <option>Villa</option>
                <option>Apartment</option>
                <option>Commercial property</option>
                <option>Industrial facility</option>
              </select>
            </label>
            <label>
              How can we help?
              <textarea
                rows="4"
                placeholder="Tell us about your property or electricity bill"
              />
            </label>
            <button className="btn dark" type="submit">
              {sent ? "Request received ✓" : "Request a free consultation →"}
            </button>
            <small>We will only use your details to respond to this enquiry.</small>
          </form>
        </div>
      </section>
      <section className="map-section" data-page-reveal>
        <div className="container map-wrap">
          <div className="eyebrow">Find us</div>
          <h3>Let’s talk solar, in person or online.</h3>
          <p className="muted">Visit us, call us, or share your property details and our team will guide you through the next step.</p>
          <iframe title="Ever Green Solar location map" src="https://www.google.com/maps?q=New+Delhi+India&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </section>
    </SiteChrome>
  );
}
