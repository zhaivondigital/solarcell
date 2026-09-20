import React from "react";
import { Button, IMG, PageHero, SiteChrome } from "../components/SiteChrome.jsx";

export default function About() {
  const values = [
    ["01", "Clarity", "Straight answers and recommendations you can understand."],
    ["02", "Craft", "Careful installation, considered details and dependable components."],
    ["03", "Continuity", "A solar partner who stays useful after the panels go live."],
  ];
  const team = [
    ["Founder", "Aarav Mehta", "Building a cleaner, more independent energy future.", "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=85"],
    ["Co-founder", "Meera Nair", "Making every solar decision feel simple and human.", "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=85"],
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
              Every property has a different roof, rhythm and ambition. We take
              the time to understand the electricity you use, the space you
              have and the outcome you want before recommending a system.
            </p>
            <p>
              That means transparent conversations, responsible design and
              support that continues after installation.
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
