import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import Products from "./pages/Products.jsx";
import About from "./pages/About.jsx";
import Gallery from "./pages/Gallery.jsx";
import CalculatorRoute from "./pages/Calculator.jsx";
import Contact from "./pages/Contact.jsx";
import { IMG } from "./components/SiteChrome.jsx";
import ContactForm from "./components/ContactForm.jsx";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaWhatsapp, FaPhone, FaArrowUp, FaBars, FaXmark } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const HOME_IMG = {
  roof: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
  residential: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1300&q=85",
  commercial: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85",
  industrial: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1100&q=85",
  cta: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85",
};

const brandLogos = [
  { name: "Tata Power Solar", image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Tata_Power_Logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original", website: "https://www.tatapowersolar.com/" },
  { name: "Saatwik Solar", image: "https://pub-11fc126ddbd04b8d8cc2825534e3c479.r2.dev/saatvik/images/logo-full-hires.png", website: "https://www.saatvikgroup.com/" },
  { name: "Adani Solar", image: "https://static.wixstatic.com/media/03163e_774ec5f7dcae4ca387d7a04cb0b83b9d~mv2.png", website: "https://www.adanisolar.com/" },
  { name: "Vikram Solar", image: "https://thumb.wikimedia.org/wikipedia/en/thumb/7/76/Vikram_Solar_logo.svg/1280px-Vikram_Solar_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail", website: "https://www.vikramsolar.com/" },
  { name: "Waaree", image: "https://i.pinimg.com/736x/c1/45/fb/c145fb77e37a599d2eb2c67a37fa9dc6.jpg", website: "https://www.waaree.com/" },
  { name: "Power One", image: "https://media.licdn.com/dms/image/v2/C510BAQF9cYCQ1UE7oQ/company-logo_200_200/company-logo_200_200/0/1630566498993/power_one_micro_systems_private_limited_logo?e=2147483647&v=beta&t=pLuvLc42fctpIFJeauDlBAV-wa7m-rUQX3wHCiEyJec", website: "https://poweroneups.com/" },
  { name: "Deye", image: "https://www.deyeinverter.com/template/en/images/logo.svg", website: "https://www.deyeinverter.com/" },
  { name: "VSOLE", image: "https://www.vsolesolar.com/img/vsole_loging_logo.png", website: "https://www.vsolesolar.com/" },
  { name: "Polycab", image: "https://www.wirecable.in/wp-content/uploads/2023/09/polycab-logo.jpg", website: "https://www.polycab.com/" },
  { name: "Larsen & Toubro", image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/L%26T.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original", website: "https://www.larsentoubro.com/" },
];

const trustSectionImages = [
  {
    title: "Quality Installation",
    description: "Professional workmanship.",
    image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=900&q=80",
    alt: "Solar technicians securing a rooftop solar panel installation",
  },
  {
    title: "Transparent Communication",
    description: "Clear recommendations and quotations.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
    alt: "Consultants discussing a proposal together at a desk",
  },
  {
    title: "End-to-End Assistance",
    description: "From assessment to commissioning.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
    alt: "Engineer inspecting technical equipment during an assessment",
  },
  {
    title: "After-Sales Support",
    description: "Support after your system goes live.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    alt: "Customer receiving technical assistance using a tablet",
  },
  {
    title: "Performance Monitoring",
    description: "Understand how your system is performing.",
    image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=900&q=80",
    alt: "Smartphone used to check system performance",
  },
  {
    title: "Long-Term Thinking",
    description: "Systems designed around durability and value.",
    image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=900&q=80",
    alt: "Rooftop solar panels installed for reliable long-term energy",
  },
];

function Brand() {
  return (
    <span className="brand brand-logo-wrap">
      <img className="brand-logo" src="/egs-house-of-solar-logo.png" alt="EGS House of Solar" />
    </span>
  );
}

function Button({ href = "#", variant = "primary", children, ...props }) {
  return (
    <a className={`btn ${variant}`} href={href} {...props}>
      {children}
    </a>
  );
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const nav = document.getElementById("nav");
    const onScroll = () =>
      nav?.classList.toggle("scrolled", window.scrollY > 30);

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (window.AOS) {
      AOS.init({
        duration: 800,
        easing: "ease-out-cubic",
        once: true,
        offset: 80,
        disable: "mobile",
      });
    }

    if (reduceMotion) {
      return () => window.removeEventListener("scroll", onScroll);
    }

    const ctx = gsap.context(() => {
      const hero = document.querySelector(".hero");
      const heroTL = gsap.timeline({ defaults: { ease: "power3.out" } });

      heroTL
        .from(".nav", { y: -35, opacity: 0, duration: 0.8 })
        .from(".hero .eyebrow", { y: 30, opacity: 0, duration: 0.65 }, "-=.35")
        .from(".hero h1", { y: 55, opacity: 0, duration: 1 }, "-=.45")
        .from(".hero-copy", { y: 30, opacity: 0, duration: 0.65 }, "-=.55")
        .fromTo(
          ".hero .hero-buttons .btn",
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.55,
            clearProps: "opacity,transform",
          },
          "-=.35"
        )
        .from(
          ".checks span",
          { y: 18, opacity: 0, stagger: 0.08, duration: 0.4 },
          "-=.25"
        )
        .from(
          ".hero-contact-form",
          { x: 70, opacity: 0, scale: 0.94, duration: 0.8 },
          "-=.7"
        );

      if (hero) {
        gsap.to(".hero:before", {
          yPercent: 12,
          scale: 1.1,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.to(".hero-contact-form", {
          y: 35,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      document
        .querySelectorAll("[data-reveal-section]")
        .forEach((section) => {
          const heading = section.querySelector("h2");
          const eyebrow = section.querySelector(".eyebrow");
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 78%",
              once: true,
            },
          });

          if (eyebrow) tl.from(eyebrow, { y: 20, opacity: 0, duration: 0.45 });
          if (heading)
            tl.from(
              heading,
              { y: 45, opacity: 0, duration: 0.8 },
              "-=.25"
            );

          const items = section.querySelectorAll(
            "[data-card], .component, .trust-card"
          );
          if (items.length) {
            tl.from(
              items,
              {
                y: 45,
                opacity: 0,
                scale: 0.97,
                stagger: 0.09,
                duration: 0.6,
                ease: "power2.out",
              },
              "-=.35"
            );
          }
        });

      document.querySelectorAll("[data-count]").forEach((el) => {
        const target = Number(el.dataset.count);
        const suffix = el.dataset.suffix || "";
        const decimals = Number(el.dataset.decimals || 0);
        const obj = { value: 0 };

        gsap.to(obj, {
          value: target,
          duration: 1.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = obj.value.toFixed(decimals) + suffix;
          },
        });
      });

      document.querySelectorAll("[data-card]").forEach((card) => {
        const move = (e) => {
          const r = card.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          gsap.to(card, {
            rotateY: x * 5,
            rotateX: -y * 5,
            y: -6,
            duration: 0.35,
            overwrite: true,
          });
        };

        const leave = () =>
          gsap.to(card, {
            rotateY: 0,
            rotateX: 0,
            y: 0,
            duration: 0.5,
          });

        card.addEventListener("mousemove", move);
        card.addEventListener("mouseleave", leave);
      });

      gsap.utils.toArray("[data-step]").forEach((step, i) => {
        ScrollTrigger.create({
          trigger: step,
          start: "top 78%",
          once: true,
          onEnter: () => {
            step.classList.add("is-active");
            gsap.fromTo(
              step,
              { x: -35, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: 0.65,
                delay: i * 0.02,
                ease: "power3.out",
              }
            );
          },
        });
      });

      gsap.utils.toArray("[data-float]").forEach((label, i) => {
        gsap.from(label, {
          scale: 0.65,
          opacity: 0,
          y: 25,
          duration: 0.7,
          delay: i * 0.12,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".roof-visual",
            start: "top 70%",
            once: true,
          },
        });

        gsap.to(label, {
          y: "+=10",
          duration: 2.2 + i * 0.35,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.15,
        });
      });

      gsap.from(".component", {
        x: 55,
        opacity: 0,
        stagger: 0.12,
        duration: 0.65,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".component-list",
          start: "top 72%",
          once: true,
        },
      });

      gsap.utils.toArray(".project img").forEach((img) => {
        gsap.fromTo(
          img,
          { scale: 1.12, yPercent: -4 },
          {
            scale: 1,
            yPercent: 4,
            ease: "none",
            scrollTrigger: {
              trigger: img.closest(".project"),
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      });

      const comparison = document.querySelector(".comparison");
      if (comparison) {
        gsap.from(".compare.before", {
          x: -70,
          opacity: 0,
          duration: 0.9,
          scrollTrigger: {
            trigger: comparison,
            start: "top 78%",
            once: true,
          },
        });

        gsap.from(".compare.after", {
          x: 70,
          opacity: 0,
          duration: 0.9,
          scrollTrigger: {
            trigger: comparison,
            start: "top 78%",
            once: true,
          },
        });
      }

      const nodes = gsap.utils.toArray(".solar-chain .node");
      nodes.forEach((node, i) => {
        ScrollTrigger.create({
          trigger: ".solar-chain",
          start: "top 72%",
          once: true,
          onEnter: () => {
            setTimeout(() => {
              node.classList.add("is-active");
              gsap.fromTo(
                node,
                { scale: 0.82, opacity: 0.2 },
                { scale: 1, opacity: 1, duration: 0.45, ease: "back.out(2)" }
              );
            }, i * 180);
          },
        });
      });

      document.querySelectorAll(".faq details").forEach((detail) => {
        detail.addEventListener("toggle", () => {
          const p = detail.querySelector("p");
          if (detail.open) gsap.from(p, { y: -10, opacity: 0, duration: 0.3 });
        });
      });

      const cta = document.querySelector(".cta");
      if (cta) {
        gsap.from(cta.querySelectorAll(".eyebrow,h2,p,.btn,.checks"), {
          y: 45,
          opacity: 0,
          stagger: 0.1,
          duration: 0.7,
          scrollTrigger: {
            trigger: cta,
            start: "top 72%",
            once: true,
          },
        });
      }

      document.querySelectorAll(".btn").forEach((btn) => {
        btn.addEventListener("mousemove", (e) => {
          const r = btn.getBoundingClientRect();
          gsap.to(btn, {
            x: (e.clientX - r.left - r.width / 2) * 0.12,
            y: (e.clientY - r.top - r.height / 2) * 0.12,
            duration: 0.25,
          });
        });

        btn.addEventListener("mouseleave", () => {
          gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.4,
            ease: "elastic.out(1,.45)",
          });
        });
      });

      gsap.utils.toArray("section:not(.hero)").forEach((section) => {
        gsap.fromTo(
          section,
          { backgroundPositionY: "-15px" },
          {
            backgroundPositionY: "15px",
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          }
        );
      });

      const rippleHandler = (e) => {
        const btn = e.target.closest(".btn");
        if (!btn) return;

        const r = btn.getBoundingClientRect();
        const ripple = document.createElement("span");
        ripple.className = "btn-ripple";
        ripple.style.width = ripple.style.height =
          Math.max(r.width, r.height) * 0.35 + "px";
        ripple.style.left = e.clientX - r.left - ripple.offsetWidth / 2 + "px";
        ripple.style.top = e.clientY - r.top - ripple.offsetHeight / 2 + "px";
        btn.appendChild(ripple);

        setTimeout(() => ripple.remove(), 700);
      };

      document.addEventListener("click", rippleHandler);
      window.addEventListener("load", () => ScrollTrigger.refresh());

      return () => {
        document.removeEventListener("click", rippleHandler);
      };
    });

    return () => {
      ctx.revert();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <header className="nav" id="nav">
        <div className="container nav-inner">
          <a className="brand-link" href="/">
            <Brand />
          </a>

          <nav className={`links ${menuOpen ? "is-open" : ""}`}>
            <a href="/about" onClick={() => setMenuOpen(false)}>About Us</a>
            <a href="/products" onClick={() => setMenuOpen(false)}>Products</a>
            <a href="/gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
            <a href="/calculator" onClick={() => setMenuOpen(false)}>Calculator</a>
            <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>

          <div className="nav-actions">
            <a className="mini" href="tel:+919884044588" aria-label="Call us">
              ☎ Call
            </a>
            <Button href="/contact" variant="dark">
              Get Free Quote
            </Button>
            <button className="menu" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)}>
              {menuOpen ? <FaXmark /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-inner hero-layout">
            <div className="hero-content">
              <div className="eyebrow">Rooftop solar for Every Space</div>
              <h1>
                Evergreen Solar System
                <br />
                <span>Energy Without Limits.</span>
              </h1>
              <p className="hero-copy">
                Solar solutions designed for Residential,Commercial and Industrial Customers..
                Generate clean electricity and make your rooftop work harder.
              </p>
              <div className="hero-buttons">
                <Button href="/calculator">
                  Calculate My Solar Savings →
                </Button>
                <Button href="/contact" variant="ghost">
                  Book a Free Home Visit
                </Button>
              </div>
              <div className="checks">
                <span>Personalised system design</span>
                <span>Professional installation</span>
                <span>Subsidy assistance</span>
                <span>Long-term support</span>
              </div>
            </div>
            <ContactForm className="hero-contact-form" />
          </div>
        </section>

        <div className="trust" data-reveal-section>
          <div className="container trust-grid">
            <h3>
              Powering a smarter tomorrow,
              <br />
              one rooftop at a time.
            </h3>

            <div className="metric">
              <strong data-count="500" data-suffix="+">
                0
              </strong>
              <small>Solar Installations*</small>
            </div>
            <div className="metric">
              <strong data-count="5" data-suffix="+ MW">
                0
              </strong>
              <small>Clean Energy Installed*</small>
            </div>
            <div className="metric">
              <strong data-count="25" data-suffix="+ Years">
                0
              </strong>
              <small>Panel Performance</small>
            </div>
            <div className="metric">
              <strong data-count="100" data-suffix="%">
                0
              </strong>
              <small>End-to-End Assistance</small>
            </div>
          </div>
        </div>

        <section className="subsidy" data-reveal-section>
          <div className="container subsidy-grid">
            <div>
              <div className="eyebrow">Government subsidy</div>
              <h2>Going Solar Can Come With Government Support.</h2>
              <p className="muted section-copy">
                Eligible residential customers may be able to access applicable
                government rooftop-solar incentives or subsidies depending on
                current policy and eligibility.
              </p>

              <div className="subsidy-list">
                <div>✓ Eligibility</div>
                <div>✓ Documentation</div>
                <div>✓ Application</div>
                <div>✓ Installation requirements</div>
                <div>✓ Grid coordination</div>
                <div>✓ Subsidy process</div>
              </div>

              <Button href="/contact" variant="dark">
                Check My Solar Eligibility →
              </Button>
            </div>

            <div className="important-card">
              <div className="eyebrow">Important</div>
              <h3>Policy changes. We verify before advising.</h3>
              <p className="muted">
                Actual subsidy figures should be confirmed against current
                official government information before publication or quotation.
              </p>
            </div>
          </div>
        </section>

        <section
          className="solutions"
          id="solutions"
          data-reveal-section
        >
          <div className="container">
            <div className="solutions-head">
              <div>
                <div className="eyebrow">Solar solutions</div>
                <h2>One Sun. Different Energy Needs.</h2>
              </div>
              <p className="muted">
              Solar options for Chennai homes and businesses, from residential rooftops to larger commercial installations.
              </p>
            </div>

            <div className="solution-grid">
              {[
                [
                  "01 — RESIDENTIAL",
                  "Residential Solar",
                  "For homes that want lower electricity bills and greater energy independence.",
                  HOME_IMG.residential,
                  "Power My Home →",
                ],
                [
                  "02 — COMMERCIAL",
                  "Commercial Solar",
                  "Turn unused rooftop space into a long-term energy asset.",
                  HOME_IMG.commercial,
                  "Explore →",
                ],
                [
                  "03 — INDUSTRIAL",
                  "Industrial Solar",
                  "High-capacity systems engineered around your facility's energy demand.",
                  HOME_IMG.industrial,
                  "Talk to Us →",
                ],
              ].map(([eyebrow, title, copy, src, cta]) => (
                <article className="solution" data-card key={title}>
                  <img src={src} alt={title} />
                  <div className="solution-content">
                    <span className="eyebrow">{eyebrow}</span>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                    <Button href="/contact">{cta}</Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="difference" id="journey" data-reveal-section>
          <div className="container">
            <div className="eyebrow">The Ever Green difference</div>
            <h2>
              We Don't Just Install Panels. We Build Your Solar System Around
              You.
            </h2>

            <div className="journey">
              {[
                ["01", "Understand", "We study your electricity consumption."],
                [
                  "02",
                  "Assess",
                  "We inspect your rooftop, orientation, shade and available space.",
                ],
                ["03", "Design", "We create the right system for your property."],
                [
                  "04",
                  "Install",
                  "Professional installation with attention to safety and workmanship.",
                ],
                [
                  "05",
                  "Connect",
                  "Support through grid connection and applicable documentation.",
                ],
                [
                  "06",
                  "Support",
                  "Post-installation assistance and system monitoring.",
                ],
              ].map(([num, title, text]) => (
                <div className="step" data-step key={num}>
                  <b>{num}</b>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="visual" data-reveal-section>
          <div className="container">
            <div className="eyebrow">Rooftop assessment</div>
            <h2>Know Exactly What You're Getting.</h2>
            <p className="muted section-copy">
              Every rooftop is different. Your solar system should be too.
            </p>
            <div
              className="roof-visual"
              style={{ backgroundImage: `url(${HOME_IMG.roof})` }}
            >
              <div className="roof-label label1" data-float>
                ROOF AREA
              </div>
              <div className="roof-label label2" data-float>
                SUN EXPOSURE + SHADING
              </div>
              <div className="roof-label label3" data-float>
                PANEL PLACEMENT
              </div>
            </div>
            <div className="assessment-action">
              <Button href="/contact" variant="dark" className="assessment-btn">
                Request a Rooftop Assessment <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>
        </section>

        <section className="component-quality-section" data-reveal-section>
          <div className="container components">
            <div>
              <div className="eyebrow">Component quality</div>
              <h2>Every Component Has a Job. Every Detail Matters.</h2>
              <p className="muted section-copy">
                A rooftop solar system is more than panels. Each component
                works together to safely generate, manage and monitor
                electricity.
              </p>
            </div>

            <div className="component-quality-visual">
              <img src={IMG.project2} alt="Solar panels installed on a rooftop" loading="lazy" />
              <span>Reliable components. Thoughtful installation.</span>
            </div>

          </div>
        </section>

        <section className="brand-showcase" data-reveal-section>
          <div className="container">
            <div className="eyebrow">Trusted technology</div>
            <h2>World Best Brands</h2>
            <p className="muted brand-showcase-copy">
              Powered by trusted brands for quality, performance, and reliability.
            </p>
            <div className="brand-showcase-grid">
              {brandLogos.map((brand) => {
                const logo = (
                  <>
                    <div className="brand-logo-display">
                      <img
                        src={brand.image}
                        alt={`${brand.name} logo`}
                        loading="lazy"
                        decoding="async"
                        onError={(event) => {
                          event.currentTarget.hidden = true;
                          event.currentTarget.nextElementSibling.hidden = false;
                        }}
                      />
                      <span className="brand-logo-fallback" hidden>
                        {brand.name}
                      </span>
                    </div>
                    <span className="brand-showcase-name">{brand.name}</span>
                  </>
                );

                return (
                  <article className="brand-showcase-card" key={brand.name}>
                    {brand.website ? (
                      <a href={brand.website} target="_blank" rel="noopener noreferrer">
                        {logo}
                      </a>
                    ) : (
                      logo
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="eyebrow">Illustrative comparison</div>
            <h2>The Difference Shows Up on the Bill.</h2>

            <div className="comparison">
              <div className="compare before">
                <span className="eyebrow">Before solar</span>
                <div className="price">₹7,850</div>
                <p>Monthly electricity cost</p>
              </div>
              <div className="compare after">
                <span className="eyebrow">After solar</span>
                <div className="price">₹350</div>
                <p>Illustrative remaining grid bill</p>
              </div>
            </div>

            <p className="muted comparison-note">
              Illustrative example — actual savings vary.
            </p>
          </div>
        </section>

        <section className="trust2" id="about" data-reveal-section>
          <div className="container">
            <div className="eyebrow">Why customers trust Ever Green</div>
            <h2>Good Solar Doesn't End at Installation.</h2>

            <div className="trust-cards">
              {trustSectionImages.map(({ title, description, image, alt }) => (
                <div className="trust-card" data-card key={title}>
                  <div className="trust-card-image">
                    <img
                      src={image}
                      alt={alt}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.hidden = true;
                        event.currentTarget.nextElementSibling.hidden = false;
                      }}
                    />
                    <span className="trust-card-image-fallback" hidden>
                      {title}
                    </span>
                  </div>
                  <b>{title}</b>
                  <span className="muted">{description}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonial" data-reveal-section>
          <div className="container">
            <div className="eyebrow">Customer stories</div>
            <h2>Real Homes. Real Solar. Real Experiences.</h2>
            <div className="testimonial-grid">
              {[
                [
                  "“The entire process was explained clearly, from the rooftop assessment to installation.”",
                  "JAYAKUMAR .A.S",
                ],
                [
                  "“We finally understood how much of our everyday electricity use solar could support.”",
                  "GOPAL RAMACHNANDRAN",
                ],
                [
                  "“The team helped us make a practical decision without overcomplicating the process.”",
                  "JULIAN GILBERT E",
                ],
              ].map(([quote, details], index) => (
                <article className="testimonial-card" data-card key={index}>
                  <span className="testimonial-label"> Testimonials</span>
                  <div className="quote">{quote}</div>
                  <p className="muted">{details}</p>
                </article>
              ))}
            </div>
            <p className="testimonial-note">
              Sample copy shown for layout purposes. Replace with verified
              customer feedback before publishing.
            </p>
          </div>
        </section>

        <section className="faq" id="faq" data-reveal-section>
          <div className="container">
            <div className="eyebrow">FAQ</div>
            <h2>Questions, answered simply.</h2>

            <div className="faq-list">
              {[
                [
                  "How many solar panels does my home need?",
                  "It depends on your electricity usage, roof space, location and chosen system capacity.",
                ],
                [
                  "How much rooftop space is required?",
                  "The required area varies by system size and panel technology. A rooftop assessment gives a more accurate answer.",
                ],
                [
                  "How much can I potentially save with solar?",
                  "Savings depend on usage, tariff, solar generation, system design and applicable grid policies.",
                ],
                [
                  "How long does installation take?",
                  "The timeline depends on system size, site readiness and grid or documentation requirements.",
                ],
                [
                  "What happens during a power cut?",
                  "Standard grid-connected solar systems typically shut down during a grid outage for safety. Backup requires an appropriately designed storage or backup system.",
                ],
                [
                  "What is net metering?",
                  "Net metering can allow eligible grid-connected customers to account for electricity exported to the grid, subject to applicable local rules.",
                ],
                [
                  "Can I get a government subsidy?",
                  "Eligible residential customers may qualify under current schemes. We verify the latest official policy before advising.",
                ],
              ].map(([question, answer]) => (
                <details key={question}>
                  <summary>
                    {question}
                    <span>+</span>
                  </summary>
                  <p className="muted">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          className="cta"
          id="contact"
          style={{ backgroundImage: `linear-gradient(90deg,rgba(10,35,24,.9),rgba(10,35,24,.2)),url("${HOME_IMG.cta}")` }}
          data-reveal-section
        >
          <div className="container">
            <div className="eyebrow">Start your solar journey</div>
            <h2>
              The Sun Is Already Working.
              <br />
              Let Your Roof Work With It.
            </h2>
            <p className="cta-copy">
              Start with a free consultation and discover what solar could look
              like for your property.
            </p>
            <div className="hero-buttons">
              <Button href="/contact">
                Get My Free Solar Assessment →
              </Button>
              <Button href="/contact" variant="ghost">
                Talk to a Solar Expert →
              </Button>
            </div>
            <div className="checks">
              <span>No-obligation consultation</span>
              <span>Personalised recommendation</span>
              <span>Professional installation</span>
            </div>
            <div className="contact-cta-visual">
              <img src={HOME_IMG.roof} alt="A family home ready for rooftop solar" loading="lazy" />
              <div><strong>Ready to make your rooftop work harder?</strong><span>Start with a clear, no-obligation conversation.</span></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <a className="brand-link footer-brand" href="/">
                <Brand />
              </a>
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
              <a href="tel:+919884044588 ">+91 98840 44588</a>
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
                <a href="https://www.instagram.com/evergreen_solar_system/" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram"><FaInstagram /></a>
                <a href="https://www.facebook.com/profile.php?id=100072452646473" target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook"><FaFacebookF /></a>
                <a href="https://www.youtube.com/@evergreensolaregs712" target="_blank" rel="noreferrer" aria-label="YouTube" title="YouTube"><FaYoutube /></a>
              </div>
            </div>
          </div>

          <div className="bottom">
            <span>© 2026 Ever Green Solar · Crafted by <a href="http://zhaivondigital.com/" target="_blank" rel="noreferrer">Zhaivon Digital</a></span>
            <span>Made for a cleaner, more independent tomorrow.</span>
          </div>
        </div>
      </footer>

      <div className="mobile-bar">
        <a href="https://wa.me/9884044588" target="_blank" rel="noreferrer">WhatsApp</a>
        <a href="tel:+919884044588 " target="_blank" rel="noreferrer">Call</a>
              <a href="/contact">Get Quote</a>
      </div>
      <div className="floating-actions" aria-label="Quick contact actions">
        <a className="fab whatsapp" href="https://wa.me/9884044588" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" title="Chat on WhatsApp"><FaWhatsapp /></a>
        <a className="fab call" href="tel:+919884044588 " target="_blank" rel="noreferrer" aria-label="Call Ever Green Solar" title="Call us"><FaPhone /></a>
        <button className="fab top visible" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Return to top" title="Return to top"><FaArrowUp /></button>
      </div>
    </>
  );
}

function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  if (path === "/products") return <Products />;
  if (path === "/about") return <About />;
  if (path === "/gallery") return <Gallery />;
  if (path === "/calculator") return <CalculatorRoute />;
  if (path === "/contact") return <Contact />;
  return <HomePage />;
}

export default App;
