import React, { useState } from "react";
import { Button, IMG, PageHero, SiteChrome } from "../components/SiteChrome.jsx";

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const gallery = [
    [IMG.project1, "Residential rooftop", "A considered system for everyday home energy."],
    [IMG.project2, "Commercial generation", "Making productive use of a working rooftop."],
    [IMG.project3, "Industrial scale", "A larger footprint for a larger energy demand."],
    [IMG.roof, "The rooftop assessment", "Every installation starts with the site itself."],
  ];

  return (
    <SiteChrome>
      <PageHero
        eyebrow="Project gallery"
        title="Real Rooftops. Thoughtful Solar."
        copy="A visual look at the kinds of properties and possibilities we design for. Verified project details are shared with permission."
        image={IMG.project1}
      />

      <section data-page-reveal>
        <div className="container">
          <div className="page-intro">
            <div className="eyebrow">Selected work</div>
            <h2>Solar that belongs to the place it powers.</h2>
          </div>
          <div className="gallery-grid">
            {gallery.map(([image, title, copy]) => (
              <article className="gallery-item" data-card key={title}>
                <button className="gallery-image-button" onClick={() => setSelected([image, title])} aria-label={`Open ${title}`}><img src={image} alt={title} loading="lazy" /><span className="gallery-view">View project ↗</span></button>
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
