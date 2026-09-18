import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export const IMG = {
  hero: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=2200&q=85",
  roof: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=1800&q=85",
  residential: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&w=1300&q=85",
  commercial: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85",
  industrial: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1100&q=85",
  project1: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=85",
  project2: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1000&q=85",
  project3: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=85",
  cta: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=2200&q=85",
};

export function Brand() {
  return <span className="brand"><span className="sunleaf" /><span>EVER GREEN<br /><small>SOLAR</small></span></span>;
}

export function Button({ href = "#", variant = "primary", children, ...props }) {
  return <a className={`btn ${variant}`} href={href} {...props}>{children}</a>;
}

export function Calculator() {
  const [bill, setBill] = useState(7500);
  const k = Math.max(1, Math.min(30, Math.ceil(bill / 1500)));
  const annual = Math.round(bill * 12 * 0.78);
  const generation = k * 1400;
  const lifetime = (annual * 25) / 100000;
  const co2 = k * 1.14;
  const reportHref = `/contact?bill=${bill}&capacity=${k}&generation=${generation}&savings=${annual}&lifetime=${lifetime.toFixed(1)}&co2=${co2.toFixed(1)}`;

  return <div className="calc-box"><div><div className="field"><label htmlFor="bill">MONTHLY ELECTRICITY BILL</label><div className="money">₹{bill.toLocaleString("en-IN")}</div><input id="bill" className="range" type="range" min="1000" max="50000" step="500" value={bill} onChange={(e) => setBill(Number(e.target.value))} /></div><div className="field"><label>PROPERTY</label><div className="selects"><select className="select" defaultValue="Home"><option>Home</option><option>Villa</option><option>Apartment</option><option>Shop</option><option>Office</option><option>Factory</option></select><select className="select" defaultValue="Flat roof"><option>Flat roof</option><option>Sloped roof</option></select></div></div><div className="field"><label htmlFor="pin">PIN CODE (OPTIONAL)</label><input id="pin" className="select full-width" placeholder="Enter PIN code" /></div><Button href={reportHref} variant="dark">Show My Solar Savings →</Button></div><div className="result"><h3>Your indicative solar picture</h3><div className="result-grid"><div className="result-item"><small>Recommended Capacity</small><strong>{k} kW</strong></div><div className="result-item"><small>Annual Generation</small><strong>{generation.toLocaleString("en-IN")}+ kWh</strong></div><div className="result-item"><small>Potential Annual Savings</small><strong>₹{annual.toLocaleString("en-IN")}</strong></div><div className="result-item"><small>Estimated Payback</small><strong>4–6 yrs</strong></div><div className="result-item"><small>25-Year Potential</small><strong>₹{lifetime.toFixed(1)}L+</strong></div><div className="result-item"><small>CO₂ Avoided</small><strong>{co2.toFixed(1)} t</strong></div></div><p className="result-note">Indicative only. Actual results depend on location, usage, roof conditions, tariffs, system design and applicable policies.</p><Button href={reportHref}>Get My Personalised Solar Report</Button></div></div>;
}

export function usePageMotion() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nav = document.getElementById("nav");
    const onScroll = () => nav?.classList.toggle("scrolled", window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    if (!reduceMotion) {
      const ctx = gsap.context(() => {
        gsap.from(".page-hero .eyebrow", { y: 24, opacity: 0, duration: 0.55 });
        gsap.from(".page-hero h1", { y: 45, opacity: 0, duration: 0.85, delay: 0.1 });
        gsap.from(".page-hero-copy", { y: 24, opacity: 0, duration: 0.6, delay: 0.25 });
        gsap.utils.toArray("[data-page-reveal]").forEach((section) => {
          const revealItems = section.querySelectorAll("h2, .eyebrow, [data-card], .page-panel, .contact-form, .contact-detail");
          if (!revealItems.length) return;
          gsap.from(revealItems, { y: 38, opacity: 0, stagger: 0.08, duration: 0.65, ease: "power3.out", scrollTrigger: { trigger: section, start: "top 80%", once: true } });
        });
      });
      return () => ctx.revert();
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}

export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <a className="brand-link footer-brand" href="/"><Brand /></a>
              <p className="footer-tagline">
                Clean energy, smarter savings and thoughtful solar systems for
                Indian homes and businesses.
              </p>
              <a className="footer-cta" href="/contact">Start your solar journey →</a>
            </div>
            <div>
              <h4>Company</h4>
              <a href="/about">About Us</a>
              <a href="/gallery">Gallery</a>
              <a href="/contact">Contact</a>
              <a href="tel:+910000000000">+91 00000 00000</a>
            </div>
            <div>
              <h4>Resources</h4>
              <a href="/calculator">Solar Calculator</a>
              <a href="/#faq">Solar Guide</a>
              <a href="/#faq">FAQs</a>
              <a href="mailto:hello@evergreensolar.in">Email us</a>
            </div>
            <div className="footer-connect">
              <h4>Connect</h4>
              <span className="footer-section-label">Social media</span>
              <div className="footer-social" aria-label="Social media links">
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram"><FaInstagram /></a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><FaLinkedinIn /></a>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook"><FaFacebookF /></a>
                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube" title="YouTube"><FaYoutube /></a>
              </div>
            </div>
          </div>
          <div className="bottom">
            <span>© 2026 Ever Green Solar · Crafted by Zhaivon Digital</span>
            <span>Made for a cleaner, more independent tomorrow.</span>
          </div>
        </div>
      </footer>
      <div className="mobile-bar">
        <a href="https://wa.me/910000000000">WhatsApp</a>
        <a href="tel:+910000000000">Call</a>
        <a href="/contact">Get Quote</a>
      </div>
    </>
  );
}

export function SiteChrome({ children }) {
  usePageMotion();
  return (
    <>
      <header className="nav" id="nav">
        <div className="container nav-inner">
          <a className="brand-link" href="/"><Brand /></a>
          <nav className="links">
            <a href="/products">Products</a>
            <a href="/about">About Us</a>
            <a href="/gallery">Gallery</a>
            <a href="/calculator">Calculator</a>
            <a href="/contact">Contact</a>
          </nav>
          <div className="nav-actions">
            <a className="mini" href="tel:+910000000000">☎ Call</a>
            <Button href="/contact" variant="dark">Get Free Quote</Button>
            <button className="menu" aria-label="Menu">☰</button>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
}

export function PageHero({ eyebrow, title, copy, image = IMG.cta }) {
  return <section className="page-hero" style={{ backgroundImage: `linear-gradient(90deg,rgba(10,35,24,.94),rgba(10,35,24,.38)),url("${image}")` }}><div className="container"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p className="page-hero-copy">{copy}</p></div></section>;
}
