import React from "react";

export default function ContactForm({ estimate, className = "" }) {
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
      ...(estimate
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
    <form
      className={`contact-form ${className}`.trim()}
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
        WhatsApp will open with your enquiry ready to send. Please review the
        message and tap Send to submit it.
      </small>
    </form>
  );
}
