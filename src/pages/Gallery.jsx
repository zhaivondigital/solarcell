import React, { useState } from "react";
import { Button, IMG, PageHero, SiteChrome } from "../components/SiteChrome.jsx";

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const gallery = [
    [IMG.project1, "Residential rooftop solar", "A considered solar system for Chennai homes and villas."],
    [IMG.project2, "Commercial rooftop solar", "Making productive use of commercial rooftop space."],
    [IMG.project3, "Solar energy systems", "Solar solutions designed around larger energy needs."],
    [IMG.roof, "Rooftop assessment", "Every system starts with the roof, its sunlight and available space."],
  ];

  return (
    <SiteChrome>
      <PageHero
        eyebrow="Solar gallery"
        title="Thoughtful Solar for Chennai Rooftops."
        copy="Explore the kinds of residential, commercial and industrial solar solutions we design for Chennai properties."
        image={IMG.project1}
      />

      <section data-page-reveal>
        <div className="container">
          <div className="page-intro">
            <div className="eyebrow">Solar solutions in focus</div>
            <h2>From home rooftops to larger energy needs.</h2>
            <p className="muted gallery-intro">
              These images illustrate the property types and solar systems we
              work with. Project-specific details are shared only when verified
              and approved.
            </p>
          </div>
          <div className="gallery-grid">
            {gallery.map(([image, title, copy]) => (
              <article className="gallery-item" data-card key={title}>
                <button className="gallery-image-button" onClick={() => setSelected([image, title])} aria-label={`Open ${title}`}><img src={image} alt={title} loading="lazy" /><span className="gallery-view">View image ↗</span></button>
                <div className="gallery-item-copy">
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {selected && <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setSelected(null)}><button className="lightbox-close" onClick={() => setSelected(null)} aria-label="Close gallery">×</button><img src={selected[0]} alt={selected[1]} /></div>}

      <section
        className="cta compact-cta"
        style={{
          backgroundImage: `linear-gradient(90deg,rgba(10,35,24,.9),rgba(10,35,24,.25)),url("${IMG.cta}")`,
        }}
      >
        <div className="container">
          <div className="eyebrow">Your property could be next</div>
          <h2>Let's look at what your rooftop can do.</h2>
          <Button href="/contact">Book a free site visit →</Button>
        </div>
      </section>
    </SiteChrome>
  );
}
