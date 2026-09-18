import React from "react";
import { IMG, PageHero, SiteChrome } from "../components/SiteChrome.jsx";

export default function Contact() {
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
            onSubmit={(event) => event.preventDefault()}
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
              Request a free consultation →
            </button>
            <small>We will only use your details to respond to this enquiry.</small>
          </form>
        </div>
      </section>
    </SiteChrome>
  );
}
