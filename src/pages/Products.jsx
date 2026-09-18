import React from "react";
import { Button, IMG, PageHero, SiteChrome } from "../components/SiteChrome.jsx";

export default function Products() {
  const products = [
    [
      "Residential Solar",
      "Lower monthly bills, more control and a cleaner energy future for your home.",
      IMG.residential,
      "Built around your family's daily rhythm.",
    ],
    [
      "Commercial Solar",
      "Turn unused rooftop space into a dependable long-term energy asset.",
      IMG.commercial,
      "Designed for businesses that keep moving.",
    ],
    [
      "Industrial Solar",
      "High-capacity systems shaped around facility demand, safety and uptime.",
      IMG.industrial,
      "Engineered for serious energy users.",
    ],
  ];

  return (
    <SiteChrome>
      <PageHero
        eyebrow="Solar solutions"
        title="The Right System for the Way You Use Energy."
        copy="From family homes to high-demand facilities, our solar solutions are designed around your property, your goals and your future."
        image={IMG.roof}
      />

      <section data-page-reveal>
        <div className="container">
          <div className="page-intro">
            <div className="eyebrow">Explore our products</div>
            <h2>One sun. Three ways to make it work harder.</h2>
          </div>

          <div className="product-page-grid">
            {products.map(([title, copy, image, note]) => (
              <article className="product-page-card" data-card key={title}>
                <img src={image} alt={title} />
                <div>
                  <span className="eyebrow">{note}</span>
                  <h3>{title}</h3>
                  <p className="muted">{copy}</p>
                  <Button href="/contact" variant="dark">
                    Talk to an expert →
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sage-band" data-page-reveal>
        <div className="container two-col">
          <div>
            <div className="eyebrow">Every system includes</div>
            <h2>Thoughtful design from first survey to final switch-on.</h2>
          </div>
          <div className="feature-list">
            <span>✓ Rooftop assessment</span>
            <span>✓ Performance-led design</span>
            <span>✓ Professional installation</span>
            <span>✓ Grid and subsidy guidance</span>
            <span>✓ Long-term support</span>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
