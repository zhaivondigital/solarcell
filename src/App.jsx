import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";

gsap.registerPlugin(ScrollTrigger);

const IMG = {
  hero:
    "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=2200&q=85",
  roof:
    "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=1800&q=85",
  residential:
    "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&w=1300&q=85",
  commercial:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85",
  industrial:
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1100&q=85",
  project1:
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=85",
  project2:
    "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1000&q=85",
  project3:
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=85",
  cta:
    "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=2200&q=85",
};

function Brand() {
  return (
    <span className="brand">
      <span className="sunleaf" />
      <span>
        EVER GREEN
        <br />
        <small>SOLAR</small>
      </span>
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

function Calculator() {
  const [bill, setBill] = useState(7500);

  const k = Math.max(1, Math.min(30, Math.ceil(bill / 1500)));
  const annual = Math.round(bill * 12 * 0.78);
  const generation = k * 1400;
  const lifetime = (annual * 25) / 100000;
  const co2 = k * 1.14;

  return (
    <div className="calc-box">
      <div>
        <div className="field">
          <label htmlFor="bill">MONTHLY ELECTRICITY BILL</label>
          <div className="money">
            ₹{bill.toLocaleString("en-IN")}
          </div>
          <input
            id="bill"
            className="range"
            type="range"
            min="1000"
            max="50000"
            step="500"
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
          />
        </div>

        <div className="field">
          <label>PROPERTY</label>
          <div className="selects">
            <select className="select" defaultValue="Home">
              <option>Home</option>
              <option>Villa</option>
              <option>Apartment</option>
              <option>Shop</option>
              <option>Office</option>
              <option>Factory</option>
            </select>
            <select className="select" defaultValue="Flat roof">
              <option>Flat roof</option>
              <option>Sloped roof</option>
            </select>
          </div>
        </div>

        <div className="field">
          <label htmlFor="pin">PIN CODE (OPTIONAL)</label>
          <input
            id="pin"
            className="select full-width"
            placeholder="Enter PIN code"
          />
        </div>

        <Button href="#contact" variant="dark">
          Show My Solar Savings →
        </Button>
      </div>

      <div className="result">
        <h3>Your indicative solar picture</h3>
        <div className="result-grid">
          <div className="result-item">
            <small>Recommended Capacity</small>
            <strong>{k} kW</strong>
          </div>
          <div className="result-item">
            <small>Annual Generation</small>
            <strong>{generation.toLocaleString("en-IN")}+ kWh</strong>
          </div>
          <div className="result-item">
            <small>Potential Annual Savings</small>
            <strong>₹{annual.toLocaleString("en-IN")}</strong>
          </div>
          <div className="result-item">
            <small>Estimated Payback</small>
            <strong>4–6 yrs</strong>
          </div>
          <div className="result-item">
            <small>25-Year Potential</small>
            <strong>₹{lifetime.toFixed(1)}L+</strong>
          </div>
          <div className="result-item">
            <small>CO₂ Avoided</small>
            <strong>{co2.toFixed(1)} t</strong>
          </div>
        </div>
        <p className="result-note">
          Indicative only. Actual results depend on location, usage, roof
          conditions, tariffs, system design and applicable policies.
        </p>
        <Button href="#contact">Get My Personalised Solar Report</Button>
      </div>
    </div>
  );
}

function App() {
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
        .from(
          ".hero-buttons .btn",
          { y: 25, opacity: 0, stagger: 0.12, duration: 0.55 },
          "-=.35"
        )
        .from(
          ".checks span",
          { y: 18, opacity: 0, stagger: 0.08, duration: 0.4 },
          "-=.25"
        )
        .from(
          ".potential",
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

        gsap.to(".potential", {
          y: 70,
          rotate: 1.5,
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
          <a className="brand-link" href="#">
            <Brand />
          </a>

          <nav className="links">
            <a href="#solutions">Solutions</a>
            <a href="#why">Why Us</a>
            <a href="#journey">How It Works</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#faq">Resources</a>
          </nav>

          <div className="nav-actions">
            <a className="mini" href="tel:+910000000000">
              ☎ Call
            </a>
            <Button href="#contact" variant="dark">
              Get Free Quote
            </Button>
            <button className="menu" aria-label="Menu">
              ☰
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-inner">
            <div>
              <div className="eyebrow">Smart rooftop solar for India</div>
              <h1>
                Your Roof Can Do More Than Protect Your Home.
                <br />
                <span>It can power it.</span>
              </h1>
              <p className="hero-copy">
                Generate clean electricity, reduce your dependence on rising
                power costs and make your rooftop work harder for you.
              </p>
              <div className="hero-buttons">
                <Button href="#calculator">
                  Calculate My Solar Savings →
                </Button>
                <Button href="#contact" variant="ghost">
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

            <div className="potential">
              <span className="potential-label">YOUR POTENTIAL</span>
              <strong>25+ YEARS</strong>
              <p>
                Designed for long-term energy generation and smarter rooftop
                use.
              </p>
            </div>
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

        <section id="why" data-reveal-section>
          <div className="container editorial">
            <div>
              <div className="eyebrow">Why solar now?</div>
              <h2>
                Electricity Bills Don't Have to Keep Growing With Your Family.
              </h2>
              <p className="muted">
                The sun sends you energy every day. Why keep paying for all of
                it?
              </p>
            </div>

            <div className="bill">
              <h3>THE OLD WAY</h3>
              <div className="bill-num">₹7,850</div>
              <p className="muted">Illustrative monthly electricity bill</p>
              <div className="flow">
                <div className="flow-row">
                  <b>01</b>
                  <span>Electricity consumption</span>
                </div>
                <div className="flow-row">
                  <b>02</b>
                  <span>Monthly bill</span>
                </div>
                <div className="flow-row">
                  <b>03</b>
                  <span>Tariff increases</span>
                </div>
                <div className="flow-row">
                  <b>04</b>
                  <span>More expense</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="calculator" id="calculator" data-reveal-section>
          <div className="container">
            <div className="eyebrow">Solar savings calculator</div>
            <h2>Let's Put a Number on Your Solar Future.</h2>
            <p className="muted calculator-intro">
              Tell us what you're currently paying for electricity. We'll
              estimate the solar system your property may need and potential
              savings.
            </p>
            <Calculator />
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
                Engineered around the way your property consumes energy.
              </p>
            </div>

            <div className="solution-grid">
              {[
                [
                  "01 — RESIDENTIAL",
                  "Residential Solar",
                  "For homes that want lower electricity bills and greater energy independence.",
                  IMG.residential,
                  "Power My Home →",
                ],
                [
                  "02 — COMMERCIAL",
                  "Commercial Solar",
                  "Turn unused rooftop space into a long-term energy asset.",
                  IMG.commercial,
                  "Explore →",
                ],
                [
                  "03 — INDUSTRIAL",
                  "Industrial Solar",
                  "High-capacity systems engineered around your facility's energy demand.",
                  IMG.industrial,
                  "Talk to Us →",
                ],
              ].map(([eyebrow, title, copy, src, cta]) => (
                <article className="solution" data-card key={title}>
                  <img src={src} alt={title} />
                  <div className="solution-content">
                    <span className="eyebrow">{eyebrow}</span>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                    <Button href="#contact">{cta}</Button>
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
              style={{ backgroundImage: `url(${IMG.roof})` }}
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
            <Button href="#contact" variant="dark" className="assessment-btn">
              Request a Rooftop Assessment
            </Button>
          </div>
        </section>

        <section data-reveal-section>
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

            <div className="component-list">
              {[
                ["Solar Panels", "Convert sunlight into electricity."],
                ["Inverter", "Converts and manages generated power."],
                [
                  "Mounting Structure",
                  "Keeps the system secure on your rooftop.",
                ],
                [
                  "Protection System",
                  "Helps protect your installation and electrical network.",
                ],
                ["Monitoring", "Track system performance and generation."],
              ].map(([name, text]) => (
                <div className="component" data-reveal key={name}>
                  <b>{name}</b>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="projects" id="projects" data-reveal-section>
          <div className="container">
            <div className="eyebrow">Project showcase</div>
            <h2>From Rooftops to Real Results.</h2>
            <p className="muted section-copy">
              A portfolio structure ready for verified Ever Green Solar
              projects.
            </p>

            <div className="project-grid">
              <div className="project" data-card>
                <img src={IMG.project1} alt="Rooftop solar installation" />
                <span>01 — Residential · [Verified Size] · [City]</span>
              </div>
              <div className="project" data-card>
                <img src={IMG.project2} alt="Solar panels" />
                <span>02 — Commercial · [Verified Size]</span>
              </div>
              <div className="project" data-card>
                <img src={IMG.project3} alt="Solar energy" />
                <span>03 — Industrial · [Verified Size]</span>
              </div>
              <div className="project project-note">
                <div>
                  <div className="eyebrow">REAL PROJECTS</div>
                  <h3>Only verified project information belongs here.</h3>
                </div>
              </div>
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
                <div className="price">₹X,XXX</div>
                <p>Monthly electricity cost</p>
              </div>
              <div className="compare after">
                <span className="eyebrow">After solar</span>
                <div className="price">₹X,XXX</div>
                <p>Illustrative remaining grid bill</p>
              </div>
            </div>

            <p className="muted comparison-note">
              Illustrative example — actual savings vary.
            </p>
          </div>
        </section>

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

              <Button href="#contact" variant="dark">
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

        <section className="trust2" id="about" data-reveal-section>
          <div className="container">
            <div className="eyebrow">Why customers trust Ever Green</div>
            <h2>Good Solar Doesn't End at Installation.</h2>

            <div className="trust-cards">
              {[
                ["Quality Installation", "Professional workmanship."],
                [
                  "Transparent Communication",
                  "Clear recommendations and quotations.",
                ],
                [
                  "End-to-End Assistance",
                  "From assessment to commissioning.",
                ],
                ["After-Sales Support", "Support after your system goes live."],
                [
                  "Performance Monitoring",
                  "Understand how your system is performing.",
                ],
                [
                  "Long-Term Thinking",
                  "Systems designed around durability and value.",
                ],
              ].map(([title, text]) => (
                <div className="trust-card" data-card key={title}>
                  <b>{title}</b>
                  <span className="muted">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonial" data-reveal-section>
          <div className="container">
            <div className="eyebrow">Customer stories</div>
            <h2>Real Homes. Real Solar. Real Experiences.</h2>
            <div className="quote">
              “The entire process was explained clearly, from the rooftop
              assessment to installation.”
            </div>
            <span className="placeholder">
              Customer testimonial — replace with verified customer feedback.
            </span>
            <p className="muted">[Customer Name] · [Location] · [System Size]</p>
          </div>
        </section>

        <section className="solar-flow" data-reveal-section>
          <div className="container">
            <div className="eyebrow">Solar journey</div>
            <h2>From Sunlight to Savings</h2>

            <div className="solar-chain">
              {["SUN", "SOLAR PANELS", "INVERTER", "YOUR HOME", "ELECTRICITY", "SAVINGS"].map(
                (node, index, arr) => (
                  <React.Fragment key={node}>
                    <span className="node">{node}</span>
                    {index < arr.length - 1 && <span className="arrow">→</span>}
                  </React.Fragment>
                )
              )}
            </div>
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
                  "Eligible residential customers may qualify under current schemes. Eligibility and amounts should be checked against current official policy.",
                ],
                [
                  "How long do solar panels last?",
                  "Quality solar panels are designed for long-term operation; exact performance and warranty terms depend on the selected product.",
                ],
                [
                  "Do you provide maintenance?",
                  "Ever Green Solar can provide post-installation assistance and monitoring; confirm the exact service package in your quotation.",
                ],
                [
                  "Can solar power my AC and heavy appliances?",
                  "Yes, with appropriate system sizing and electrical design. Usage patterns and backup requirements should be assessed.",
                ],
                [
                  "What information do I need to get a quotation?",
                  "Your recent electricity bill, property details, approximate roof information and location are useful starting points.",
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
          style={{ backgroundImage: `linear-gradient(90deg,rgba(10,35,24,.9),rgba(10,35,24,.2)),url("${IMG.cta}")` }}
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
              <Button href="mailto:hello@evergreensolar.in">
                Get My Free Solar Assessment →
              </Button>
              <Button href="tel:+910000000000" variant="ghost">
                Talk to a Solar Expert
              </Button>
            </div>
            <div className="checks">
              <span>No-obligation consultation</span>
              <span>Personalised recommendation</span>
              <span>Professional installation</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <a className="brand-link footer-brand" href="#">
                <Brand />
              </a>
              <p className="footer-tagline">
                Clean Energy. Smarter Savings. A Greener Tomorrow.
              </p>
            </div>

            <div>
              <h4>Company</h4>
              <a href="#about">About Us</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
              <a href="#">Careers</a>
            </div>

            <div>
              <h4>Solutions</h4>
              <a href="#solutions">Residential</a>
              <a href="#solutions">Commercial</a>
              <a href="#solutions">Industrial</a>
            </div>

            <div>
              <h4>Resources</h4>
              <a href="#calculator">Solar Calculator</a>
              <a href="#faq">Solar Guide</a>
              <a href="#faq">FAQs</a>
              <a href="#">Blog</a>
            </div>
          </div>

          <div className="bottom">
            <span>© 2026 Ever Green Solar</span>
            <span>Privacy Policy · Terms & Conditions</span>
          </div>
        </div>
      </footer>

      <div className="mobile-bar">
        <a href="https://wa.me/910000000000">WhatsApp</a>
        <a href="tel:+910000000000">Call</a>
        <a href="#contact">Get Quote</a>
      </div>
    </>
  );
}

export default App;
