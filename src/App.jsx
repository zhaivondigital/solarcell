import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import Products from "./pages/Products.jsx";
import About from "./pages/About.jsx";
import Gallery from "./pages/Gallery.jsx";
import CalculatorRoute from "./pages/Calculator.jsx";
import Contact from "./pages/Contact.jsx";
import ContactForm from "./components/ContactForm.jsx";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaWhatsapp, FaPhone, FaArrowUp, FaBars, FaXmark } from "react-icons/fa6";
import {
  FaBuilding,
  FaCircleCheck,
  FaHouse,
  FaIndustry,
  FaLandmark,
  FaMagnifyingGlass,
  FaPlug,
  FaRulerCombined,
  FaShieldHalved,
  FaScrewdriverWrench,
  FaWind,
} from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const projectImages = {
  rooftop: "https://clusterenergy.in/img/about.jpg",
  crew: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=900&q=85",
  roofWide: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1400&q=85",
  cityRoof: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1300&q=85",
  panels: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=85",
  rooftopView: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1800&q=85",
  maintenance: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1200&q=85",
  teamRoof: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=85",
};

const employeeImages = [
  {
    src: "/gallery%20section/WhatsApp%20Image%202026-09-30%20at%207.16.52%20PM.jpeg",
    alt: "Ever Green Solar technicians wearing branded shirts at a rooftop installation",
  },
  {
    src: "/gallery%20section/WhatsApp%20Image%202026-09-30%20at%207.29.05%20PM.jpeg",
    alt: "Ever Green Solar team member at a completed rooftop installation",
  },
];

const HOME_IMG = {
  roof: projectImages.rooftop,
  residential: "https://cdn.mos.cms.futurecdn.net/R7nuCF8AAgqBmMMdbyUkj7.jpg",
  commercial: "https://www.jakson.com/wp-content/uploads/2025/03/Choosing-the-Right-Solar-Solutions-for-Your-Commercial-Needs.jpg",
  industrial: "https://chandradaya-investasi.com/_next/image?url=https%3A%2F%2Fchandradaya-investasi.com%2Ffile-storage%2FQ3YzYzFZb3k0WmJpbWZEd21abkFpUUlkbnZxRDhkR2pndEI0MjUrMG11Z1Z4ZXM5VXA0U0plcHhlU1JKKzUrRS9MdUU4cEUrTy8rR1cxL0JnK1dqSEE9PQ&w=3840&q=75",
  cta: projectImages.rooftopView,
};

function GovernmentSubsidyCard() {
  const [amount, setAmount] = useState(() =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 100000 : 0
  );
  const [sealStamped, setSealStamped] = useState(() =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const cardRef = useRef(null);
  const sealRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const seal = sealRef.current;
    if (!card || !seal) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAmount(100000);
      setSealStamped(true);
      return undefined;
    }

    let animationFrame = 0;
    const countObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        countObserver.disconnect();

        const startedAt = performance.now();
        const animateCount = (now) => {
          const progress = Math.min((now - startedAt) / 1700, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          setAmount(Math.round(100000 * easedProgress));
          if (progress < 1) {
            animationFrame = requestAnimationFrame(animateCount);
          }
        };

        animationFrame = requestAnimationFrame(animateCount);
      },
      { threshold: 0.25 }
    );
    const sealObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setSealStamped(true);
        sealObserver.disconnect();
      },
      { threshold: 0.4 }
    );

    countObserver.observe(card);
    sealObserver.observe(seal);

    return () => {
      countObserver.disconnect();
      sealObserver.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      className="subsidy-amount-card gov-subsidy-card"
      ref={cardRef}
      style={{ backgroundImage: `url("${HOME_IMG.roof}")` }}
    >
      <div className="subsidy-card-content gov-subsidy-card-content">
        <div className="gov-subsidy-authorities">
          <div className="gov-subsidy-authority">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
              alt="State Emblem of India"
              loading="lazy"
            />
            <strong>Government of India</strong>
          </div>
          <div className="gov-subsidy-authority">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/83/Emblem_of_Tamil_Nadu.svg"
              alt="Emblem of Tamil Nadu"
              loading="lazy"
            />
            <strong>Government of Tamil Nadu</strong>
          </div>
        </div>
        <div className="gov-subsidy-amount-row">
          <div>
            <small>Central Subsidy</small>
            <strong>₹78,000</strong>
          </div>
          <span aria-hidden="true">+</span>
          <div>
            <small>State Subsidy</small>
            <strong>₹22,000</strong>
          </div>
        </div>
        <div
          className={`gov-subsidy-total${amount === 100000 ? " gov-subsidy-counted" : ""}`}
        >
          <span>Potential Combined Subsidy</span>
          <strong aria-label="₹1,00,000">
            <span aria-hidden="true">
              ₹{new Intl.NumberFormat("en-IN").format(amount)}
            </span>
          </strong>
        </div>
        <div
          className={`gov-subsidy-seal-wrap${sealStamped ? " gov-subsidy-stamped" : ""}`}
          ref={sealRef}
        >
          <img
            className="gov-subsidy-seal"
            src="/mnre-approved-seal.png"
            alt="MNRE Approved"
            loading="lazy"
          />
        </div>
        <p className="subsidy-disclaimer gov-subsidy-disclaimer">
          Indicative amounts for eligible residential systems. Final support
          depends on current scheme rules, system capacity and official approval.
        </p>
      </div>
    </div>
  );
}

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
    image: projectImages.crew,
    alt: "Residential rooftop solar panels on an Indian home",
  },
  {
    title: "Transparent Communication",
    description: "Clear plans for your rooftop and energy needs.",
    image: projectImages.teamRoof,
    alt: "Rooftop solar array on a home in India",
  },
  {
    title: "End-to-End Assistance",
    description: "From assessment to commissioning.",
    image: projectImages.cityRoof,
    alt: "Solar panels on a modern Indian home rooftop",
  },
  {
    title: "After-Sales Support",
    description: "Support after your system goes live.",
    image: projectImages.roofWide,
    alt: "Solar panels installed across a flat-roof home",
  },
  {
    title: "Performance Monitoring",
    description: "Understand how your system is performing.",
    image: projectImages.panels,
    alt: "Residential solar modules on a flat rooftop in India",
  },
  {
    title: "Long-Term Thinking",
    description: "Systems designed around durability and value.",
    image: projectImages.rooftopView,
    alt: "Flat-roof household solar installation in India",
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
              <div className="eyebrow">Ever Green Solar · India</div>
              <h1>
                Evergreen Solar Solutions .
                <br />
                <span>Built Around Your Home.</span>
              </h1>
              <p className="hero-copy">
                Solar solutions for Indian homes, businesses and industries.
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
          <div className="trust-marquee" role="region" aria-label="Solar service highlights">
            <div className="trust-marquee-track">
              {[0, 1].map((copy) => (
                <div className="trust-marquee-group" aria-hidden={copy === 1} key={copy}>
                  {[
                    ["500+", "Solar installations"],
                    ["5+ MW", "Clean energy installed"],
                    ["25+ years", "Panel performance"],
                    ["100%", "End-to-end assistance"],
                  ].map(([value, label]) => (
                    <div className="trust-marquee-item" key={label}>
                      <strong>{value}</strong>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="subsidy gov-subsidy" data-reveal-section>
          <div className="container subsidy-grid">
            <div>
              <div className="eyebrow">Government subsidy</div>
              <h2>Solar Subsidy Support for Eligible Indian Homes.</h2>
              <p className="muted section-copy">
                Get help understanding central and state rooftop solar subsidy
                portions, documents and application steps for your home.
              </p>

              <div className="subsidy-list">
                <div><FaCircleCheck aria-hidden="true" /><span>Home eligibility check</span><FaLandmark aria-hidden="true" /></div>
                <div><FaCircleCheck aria-hidden="true" /><span>Document preparation</span><FaRulerCombined aria-hidden="true" /></div>
                <div><FaCircleCheck aria-hidden="true" /><span>Application guidance</span><FaCircleCheck aria-hidden="true" /></div>
                <div><FaCircleCheck aria-hidden="true" /><span>MNRE-approved components</span><FaPlug aria-hidden="true" /></div>
                <div><FaCircleCheck aria-hidden="true" /><span>Installation &amp; grid coordination</span><FaScrewdriverWrench aria-hidden="true" /></div>
              </div>

              <Button href="/contact" variant="dark">
                Check My Solar Eligibility →
              </Button>
            </div>

            <GovernmentSubsidyCard />
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
              Rooftop solar for Indian homes, businesses and industries, designed around each property's energy needs.
              </p>
            </div>

            <div className="solution-grid">
              {[
                [
                  "01 — RESIDENTIAL",
                  "Residential Solar",
                  "Flat-roof solar for Indian homes looking for lower electricity bills and energy independence.",
                  HOME_IMG.residential,
                  "Power My Home →",
                  <FaHouse />,
                ],
                [
                  "02 — COMMERCIAL",
                  "Commercial Solar",
                  "Turn unused rooftop space into a long-term energy asset.",
                  HOME_IMG.commercial,
                  "Explore →",
                  <FaBuilding />,
                ],
                [
                  "03 — INDUSTRIAL",
                  "Industrial Solar",
                  "High-capacity systems engineered around your facility's energy demand.",
                  "https://bhumipolymers.com/wp-content/uploads/2026/01/07-Bhumi-Irrigation-Solar-Industrial-Blog.jpg",
                  "Talk to Us →",
                  <FaIndustry />,
                ],
              ].map(([eyebrow, title, copy, src, cta, icon]) => (
                <article className="solution" data-card key={title}>
                  <img src={src} alt={title} />
                  <div className="solution-content">
                    <span className="solution-icon" aria-hidden="true">{icon}</span>
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
              We Don't Just Install Solar Panels. We Build Your Solar System
              Around You.
            </h2>

            <div className="journey">
              {[
                ["01", "Understand", "We study your electricity consumption.", "https://img.magnific.com/free-vector/man-shows-gesture-great-idea_10045-637.jpg?semt=ais_hybrid&w=740&q=80", <FaMagnifyingGlass />, "Man showing a gesture for a great idea"],
                [
                  "02",
                  "Assess",
                  "We inspect your rooftop, orientation, shade and available space.",
                  "https://img.magnific.com/free-vector/business-people-stand-clipboard-with-checklist_74855-4772.jpg?semt=ais_hybrid&w=740&q=80",
                  <FaHouse />,
                  "Solar engineer surveying a rooftop with a tablet and measuring roof space",
                ],
                ["03", "Design", "We create the right system for your property.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTCQmE56t1D4D1UFu0sw-nSgSWhI1ieoO4M761sJcV2d0FUV_QU6Q98sN8&s=10", <FaRulerCombined />, "Solar system design illustration"],
                [
                  "04",
                  "Install",
                  "Professional installation with attention to safety and workmanship.",
                  "/step-install.png",
                  <FaScrewdriverWrench />,
                  "Solar technicians in safety gear installing rooftop solar panels",
                ],
                [
                  "05",
                  "Connect",
                  "Support through grid connection and applicable documentation.",
                  "https://cdn.prod.website-files.com/65b3e159d25a6097b6ca5815/66ffb74b88d48eb178a4ba2a_65b3e15ad25a6097b6ca6664_grid%2520connected%2520pv%2520system%2520with%2520ems.png",
                  <FaPlug />,
                  "Grid-connected photovoltaic system with energy management",
                ],
                [
                  "06",
                  "Support",
                  "Post-installation assistance and system monitoring.",
                  "https://st2.depositphotos.com/3591429/6010/i/450/depositphotos_60107153-People-Discussing-About-Support.jpg",
                  <FaCircleCheck />,
                  "Support team discussing customer assistance",
                ],
              ].map(([num, title, text, image, icon, imageAlt]) => (
                <article className={`step difference-step${num === "01" ? " difference-step-understand" : ""}`} data-step data-card key={num}>
                  <div className="step-copy">
                    <h3><span>{num}</span>{title}</h3>
                    <p>{text}</p>
                  </div>
                  <div className="step-image difference-step-image">
                    <img className="difference-step-photo" src={image} alt={imageAlt} width="1200" height="750" loading={num === "01" ? "eager" : "lazy"} />
                    <span className="step-icon" aria-hidden="true">{icon}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="why-egs" data-reveal-section>
          <div className="container why-egs-layout">
            <header className="why-egs-heading">
              <h2>Why choose Ever Green Solar for your home</h2>
              <p>Book a FREE solar consultation at home!</p>
              <Button href="/contact" variant="dark" className="why-egs-quote">
                Get Quote
              </Button>
            </header>
            <div className="why-egs-grid">
              <article className="why-egs-card expert" data-card>
                <img
                  className="why-egs-card-image"
                  src="/gallery%20section/WhatsApp%20Image%202026-09-30%20at%207.16.50%20PM.jpeg"
                  alt="Technicians installing rooftop solar panels"
                  loading="lazy"
                />
                <div className="why-egs-card-copy">
                  <h3>Installation by Experts</h3>
                  <p>
                    Get your solar system installed in just 24 hours with a
                    smooth, seamless installation process.
                  </p>
                </div>
              </article>
              <article className="why-egs-card finance" data-card>
                <span className="why-egs-finance-mark" aria-hidden="true">
                  0<small>%</small>
                </span>
                <div className="why-egs-card-copy">
                  <h3>0% EMI Financing Plan</h3>
                  <p>Your solar journey made easy and affordable with our EMI plans.</p>
                </div>
              </article>
              <article className="why-egs-card maintenance" data-card>
                <img
                  className="why-egs-card-image"
                  src={employeeImages[1].src}
                  alt={employeeImages[1].alt}
                  loading="lazy"
                />
                <div className="why-egs-card-copy">
                  <h3>5-Year Professional Maintenance</h3>
                  <p>Monthly deep cleaning, health checks and repairs included.</p>
                </div>
              </article>
              <article className="why-egs-card structure" data-card>
                <span className="why-egs-icon" aria-hidden="true">
                  <FaWind />
                  <FaShieldHalved />
                </span>
                <div className="why-egs-card-copy">
                  <h3>Windproof &amp; Corrosion-Free Structure</h3>
                  <p>
                    Engineered to withstand winds up to 175 km/h and resist
                    corrosion for long-term safety and performance.
                  </p>
                </div>
              </article>
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
              style={{ backgroundImage: 'url("/rooftop-assessment.png")' }}
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
              <img src="https://gosmartroof.com/wp-content/uploads/2026/02/blog-image-Different-Components-of-a-Solar-PV-System-Importance-and-Operation.webp" alt="Components of a solar PV system" loading="lazy" />
              <span>Reliable components. Thoughtful installation.</span>
            </div>
          </div>
          <div className="container brand-marquee-section">
            <div className="brand-marquee-heading">
              <div>
                <div className="eyebrow">Trusted technology</div>
                <h3>Quality components. Trusted solar brands.</h3>
              </div>
              <p className="muted">
                Reliable products selected to suit your roof and energy needs.
              </p>
            </div>
            <div className="brand-marquee" aria-label="Solar technology brands">
              <div className="brand-marquee-track">
                {[0, 1].map((copy) => (
                  <div className="brand-marquee-group" aria-hidden={copy === 1} key={copy}>
                    {brandLogos.map((brand) => (
                      <a
                        className="brand-marquee-card"
                        href={brand.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={brand.name}
                        tabIndex={copy === 1 ? -1 : undefined}
                      >
                        <img
                          src={brand.image}
                          alt={copy === 1 ? "" : `${brand.name} logo`}
                          loading="lazy"
                          decoding="async"
                          onError={(event) => {
                            event.currentTarget.hidden = true;
                            event.currentTarget.nextElementSibling.hidden = false;
                          }}
                        />
                        <span className="brand-logo-fallback" hidden>{brand.name}</span>
                        <span className="brand-showcase-name">{brand.name}</span>
                      </a>
                    ))}
                  </div>
                ))}
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
              <img src={HOME_IMG.roof} alt="Flat-roof solar installation in India" loading="lazy" />
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
