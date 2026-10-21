import React from "react";
import { IMG, PageHero, SiteChrome } from "../components/SiteChrome.jsx";
import ContactForm from "../components/ContactForm.jsx";
import { FaClock, FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";

export default function Contact() {
  const params = new URLSearchParams(window.location.search);
  const hasEstimate = params.has("bill") && params.has("savings");
  const estimate = {
    bill: Number(params.get("bill") || 0).toLocaleString("en-IN"),
    capacity: params.get("capacity"),
    generation: Number(params.get("generation") || 0).toLocaleString("en-IN"),
    savings: Number(params.get("savings") || 0).toLocaleString("en-IN"),
    lifetime: params.get("lifetime"),
  };
  const contactIconStyle = {
    color: "var(--forest)",
    fontSize: "14px",
    marginRight: "8px",
    verticalAlign: "-2px",
  };

  return (
    <SiteChrome>
      <PageHero
        eyebrow="Solar Enquiries"
        title="Let’s Plan a Smarter Solar Future."
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
              rooftop solar solution for your home or business and industrial properties.
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
                <b><FaPhone aria-hidden="true" style={contactIconStyle} />Call us</b>
                <a href="tel:+919884044588 ">+91 98840 44588</a>
              </div>
              <div className="contact-detail contact-card">
                <b><FaEnvelope aria-hidden="true" style={contactIconStyle} />Email</b>
                <a href="mailto:sales@evergreensolars.com">
                  sales@evergreensolars.com
                </a>
              </div>
              <div className="contact-detail contact-card">
                <b><FaClock aria-hidden="true" style={contactIconStyle} />Hours</b>
                <span>Mon-Sat · 9:00 AM-6:00 PM</span>
              </div>
              <div className="contact-detail contact-card">
                <b><FaLocationDot aria-hidden="true" style={contactIconStyle} />Service area</b>
                <span>Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          <ContactForm estimate={hasEstimate ? estimate : null} />
        </div>
      </section>
      <section className="map-section" data-page-reveal>
        <div className="container map-wrap">
          <div className="eyebrow">Find us</div>
          <h3>Visit our Tamil Nadu locations.</h3>
          <p className="muted">Find our office or warehouse in Tamil Nadu, India.</p>
          <div className="contact-map-grid">
            <article className="contact-map">
              <h5>OFFICE : 3/9, Kilpauk Garden Road, Kalaignar Street, Kilpauk, Chennai, Tamil Nadu 600010</h5>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4113.971075786233!2d80.22598427527211!3d13.082662712433224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526571e9d1f483%3A0x548500a21a35bbf9!2sEver%20Green%20Solar%20System!5e1!3m2!1sen!2sin!4v1792246086374!5m2!1sen!2sin"
               loading="lazy" 
               referrerPolicy="strict-origin-when-cross-origin"
              />
            </article>
            <article className="contact-map">
              <h5>WAREHOUSE : Water Tank, 05, Kamakodi street, North, opp. Metro, Balaji Nagar, Korattur, Chennai, Tamil Nadu 600076</h5>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26528.464548972315!2d80.18396235166762!3d13.112647828290845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52657b16eb1813%3A0x3f4fbf2197b5b92d!2sEver%20Green%20Solar%20System!5e1!3m2!1sen!2sin!4v1792246589444!5m2!1sen!2sin"
               loading="lazy" 
               referrerPolicy="strict-origin-when-cross-origin"
               />
            </article>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
