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
        eyebrow="Solar enquiries in Chennai"
        title="Let's Plan a Better Energy Future."
        copy="Tell us about your property and our team will help you understand the right next step for your solar journey."
        image={IMG.roof}
      />

      <section className="contact-section" data-page-reveal>
        <div className="container contact-layout">
          <div className="contact-intro">
            <div className="eyebrow">Get in touch</div>
            <h2>Clear answers. A solar plan made for your property.</h2>
            <p className="muted contact-lead">
              Share a few details and we will help you explore a practical
              rooftop solar solution for your home or business in Chennai.
            </p>
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
            <div className="contact-details" aria-label="Contact information">
              <div className="contact-detail contact-card">
                <b>Call us</b>
                <a href="tel:+910000000000">+91 00000 00000</a>
              </div>
              <div className="contact-detail contact-card">
                <b>Email</b>
                <a href="mailto:hello@evergreensolar.in">
                  hello@evergreensolar.in
                </a>
              </div>
              <div className="contact-detail contact-card">
                <b>Hours</b>
                <span>Mon-Sat · 9:00 AM-6:00 PM</span>
              </div>
              <div className="contact-detail contact-card">
                <b>Service area</b>
                <span>Chennai, Tamil Nadu</span>
              </div>
            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={(event) => { event.preventDefault(); setSent(true); }}
          >
            <div className="contact-form-heading">
              <span className="eyebrow">Start a conversation</span>
              <h3>Request a free consultation</h3>
              <p className="muted">We’ll get back to you to discuss your solar needs.</p>
            </div>
            <div className="contact-form-fields">
              <label>
                Name
                <input name="name" required placeholder="Your name" />
              </label>
              <label>
                Phone number
                <input name="phone" required type="tel" placeholder="Your phone number" />
              </label>
              <label className="contact-form-wide">
                Property type
                <select name="propertyType" defaultValue="Home">
                  <option>Home</option>
                  <option>Villa</option>
                  <option>Apartment</option>
                  <option>Commercial property</option>
                  <option>Industrial facility</option>
                </select>
              </label>
              <label className="contact-form-wide">
                How can we help?
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about your property or electricity bill"
                />
              </label>
            </div>
            <button className="btn dark" type="submit" aria-live="polite">
              {sent ? "Request received ✓" : "Request a free consultation →"}
            </button>
            <small>We will only use your details to respond to this enquiry.</small>
          </form>
        </div>
      </section>
      <section className="map-section" data-page-reveal>
        <div className="container map-wrap">
          <div className="eyebrow">Find us</div>
          <h3>Serving Chennai homes and businesses.</h3>
          <p className="muted">Get in touch to discuss your rooftop and arrange a solar assessment in Chennai.</p>
          <iframe title="Map of Chennai, India" src="https://www.google.com/maps?q=Chennai%2C+Tamil+Nadu%2C+India&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </section>
    </SiteChrome>
  );
}
