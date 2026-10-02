import React from "react";
import { Button, IMG, PageHero, SiteChrome } from "../components/SiteChrome.jsx";

export default function About() {
  const values = [
    ["01", "Clarity", "Simple advice, transparent communication and solutions you can understand."],
    ["02", "Craft", "Quality products, careful design and professional installation."],
    ["03", "Continuity", "We stay connected beyond installation, with dependable support for the long run."],
  ];
  const team = [
    ["Founder", "Evelin","Every big journey begins with a small step. In 2011, I took that first step and started Ever Green Solar System from a small 300 sq.ft. space. I was entering a field that was still growing, with a lot to learn and many challenges ahead.The journey was not easy. There were financial struggles, uncertainties and moments when I had to find the courage to keep moving forward. But I believed in the business, believed in solar and most importantly, believed that with hard work and integrity, we could build something meaningful.Over the years, every customer, every project and every challenge taught me something new. From our early installations to working on projects that I once only dreamed of, the journey has been incredibly rewarding.Receiving recognition and awards along the way was special, but the greatest achievement has been earning the trust of our customers and building a team that shares the same vision.Today, EGS is more than the business I started. It is a journey of perseverance, learning and growth.I started with a dream. Today, I am building that dream into a legacy.", "/founder.jpeg"],
    ["Co-founder", "Edwin Inbaraj ", "Behind every growing journey is the strength to keep moving forward.”My journey with Ever Green Solar System has been about being part of something we believe in and building it together.As Co-Founder, I have been involved in the company's growth, supporting its operations, projects and the many decisions that shape our future.The solar industry is constantly evolving, and so is EGS. Every project brings a new challenge, every customer brings a new responsibility, and every experience helps us become better.Together, Evelin and I have shared the challenges, celebrated the milestones and continued to move forward with one common vision — to build a solar company that customers can trust for the long term.For us, EGS is not just a business.It is something we are building together, one project, one customer and one step at a time.", "co-founder.jpeg"],
    ["People & Projects", "Our solar crew", "Designers, engineers and installers who care about the detail.", "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=700&q=85"],
  ];

  return (
    <SiteChrome>
      <PageHero
        eyebrow="About Ever Green Solar"
        title="Solar Should Feel Clear, Considered and Built to Last."
        copy="We help Indian homes and businesses move toward cleaner, more independent energy with practical advice and careful execution."
        image={IMG.hero}
      />

      <section data-page-reveal>
        <div className="container two-col">
          <div>
            <div className="eyebrow">Our point of view</div>
            <h2>Good solar starts with listening.</h2>
          </div>
          <div className="page-copy">
            <p>
              Every customer has different energy needs. We listen,
              understand your requirements and design the rig tcht solar solution for your home or business.
            </p>
            <p>
              We listen. We understand. We design. We deliver.
            </p>
          </div>
        </div>
      </section>

      <section className="team-section" data-page-reveal>
        <div className="container team-intro"><div className="eyebrow">The people behind the panels</div><h2>A small team with a long-term view.</h2></div>
        {team.map(([role, name, copy, image], index) => <section className={`person-feature ${index % 2 ? "reverse" : ""}`} key={role}><div className="container person-feature-inner"><img src={image} alt={name} loading="lazy" /><div><span className="eyebrow">{role}</span><h3>{name}</h3><p className="muted">{copy}</p><Button href="/contact" variant="dark">Connect with our team →</Button></div></div></section>)}
      </section>

      <section className="dark-band" data-page-reveal>
        <div className="container">
          <div className="eyebrow">What guides us</div>
          <div className="values-grid">
            {values.map(([number, title, copy]) => (
              <div className="value" data-card key={number}>
                <b>{number}</b>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-page-reveal>
        <div className="container stats-strip">
          <div><strong>500+</strong><span>Installations</span></div>
          <div><strong>5+ MW</strong><span>Clean energy installed</span></div>
          <div><strong>25 yrs</strong><span>Designed for the long term</span></div>
        </div>
      </section>
    </SiteChrome>
  );
}
