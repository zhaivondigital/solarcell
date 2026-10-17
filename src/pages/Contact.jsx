import React, { useState } from "react";
import { IMG, PageHero, SiteChrome } from "../components/SiteChrome.jsx";

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
  const sendWhatsAppEnquiry = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      "Hello, I would like to request a free solar consultation.",
      "",
      `Name: ${formData.get("name")}`,
      `Phone: ${formData.get("phone")}`,
      `Property type: ${formData.get("propertyType")}`,
      `Enquiry: ${formData.get("message") || "Not provided"}`,
      ...(hasEstimate
        ? [
            "",
            "Solar estimate from the website:",
            `Monthly bill: ₹${estimate.bill}`,
            `Recommended capacity: ${estimate.capacity} kW`,
            `Potential annual savings: ₹${estimate.savings}`,
          ]
        : []),
    ].join("\n");

    window.open(
      `https://wa.me/9884044588?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
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
                <a href="tel:+919884044588 ">+91 98840 44588</a>
              </div>
              <div className="contact-detail contact-card">
                <b>Email</b>
                <a href="mailto:sales@evergreensolars.com">
                  sales@evergreensolars.com
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
            onSubmit={sendWhatsAppEnquiry}
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
            <button className="btn dark" type="submit">
              Continue on WhatsApp →
            </button>
            <small>
              WhatsApp will open with your enquiry ready to send. Please review
              the message and tap Send to submit it.
            </small>
          </form>
        </div>
      </section>
      <section className="map-section" data-page-reveal>
        <div className="container map-wrap">
          <div className="eyebrow">Find us</div>
          <h3>Visit our Chennai locations.</h3>
          <p className="muted">Find our office or warehouse in Chennai, Tamil Nadu.</p>
          <div className="contact-map-grid">
            <article className="contact-map">
              <h5>Office</h5>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4113.971075786233!2d80.22598427527211!3d13.082662712433224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526571e9d1f483%3A0x548500a21a35bbf9!2sEver%20Green%20Solar%20System!5e1!3m2!1sen!2sin!4v1792246086374!5m2!1sen!2sin"
               loading="lazy" 
               referrerpolicy="strict-origin-when-cross-origin"
              />
            </article>
            <article className="contact-map">
              <h5>Warehouse</h5>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26528.464548972315!2d80.18396235166762!3d13.112647828290845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52657b16eb1813%3A0x3f4fbf2197b5b92d!2sEver%20Green%20Solar%20System!5e1!3m2!1sen!2sin!4v1792246589444!5m2!1sen!2sin"
               loading="lazy" 
               referrerpolicy="strict-origin-when-cross-origin"
               />
            </article>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
