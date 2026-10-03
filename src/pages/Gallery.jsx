import React, { useState } from "react";
import { Button, IMG, PageHero, SiteChrome } from "../components/SiteChrome.jsx";

const categories = [
  {
    id: "commercial-rooftop",
    title: "Solar Rooftop — Commercial",
    description: "Commercial rooftop solar projects across Chennai and beyond.",
    projects: [
      {
        name: "Mall",
        location: "Purasalwalkam",
        capacity: "35 kW",
        image: IMG.project2,
        alt: "Illustrative solar panels installed across a commercial rooftop",
        detail: "A commercial rooftop solar installation planned for the property's energy needs.",
      },
      {
        name: "Chennai Airport",
        location: "Chennai",
        capacity: "35 kW",
        image: IMG.hero,
        alt: "Illustrative rooftop solar array for a large facility",
        detail: "A rooftop solar system for a high-use commercial environment.",
      },
      {
        name: "Embassy",
        location: "Pallavaram",
        capacity: "558 kW",
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=85",
        alt: "Illustrative large-scale solar panels",
        detail: "A large-capacity rooftop project designed around site requirements.",
      },
      {
        name: "Ramana Vidyalaya School",
        location: "Sholinganallur",
        capacity: "24 kW",
        image: IMG.roof,
        alt: "Illustrative solar panels at an educational facility",
        detail: "A school rooftop solar installation supporting on-site energy use.",
      },
    ],
  },
  {
    id: "domestic-rooftop",
    title: "Solar Rooftop — Domestic",
    description: "Residential rooftop systems for homes across Chennai.",
    projects: [
      {
        name: "Ponnaparaj",
        location: "Vyasarpadi",
        capacity: "5 kW",
        image: IMG.roof,
        alt: "Illustrative residential rooftop solar panels",
        detail: "A residential rooftop system sized for the household's solar requirements.",
      },
      {
        name: "Saravanan",
        location: "Madhavaram",
        capacity: "5 kW",
        image: IMG.residential,
        alt: "Illustrative home solar installation",
        detail: "A home solar installation planned around available roof area.",
      },
      {
        name: "Sam",
        location: "Location not specified",
        capacity: "5 kW",
        image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&q=85",
        alt: "Illustrative rooftop solar panels for a home",
        detail: "A residential rooftop project with a 5 kW system.",
      },
      {
        name: "Julian Gilbert",
        location: "Tambaram",
        capacity: "5 kW",
        image: IMG.hero,
        alt: "Illustrative residential solar panels",
        detail: "A residential solar system planned for the property.",
      },
    ],
  },
  {
    id: "solar-water-heating",
    title: "Solar Water Heating — Commercial",
    description: "Commercial solar water-heating systems for campuses, residences and facilities.",
    projects: [
      {
        name: "IIT Tirupathi",
        location: "Tirupati",
        capacity: "34,000 L",
        image: "https://images.unsplash.com/photo-1787672358142-95e697dacd81?auto=format&fit=crop&w=1200&q=85",
        alt: "Illustrative rooftop solar water heater on a modern building",
        detail: "A large-capacity solar water-heating system for an institutional campus.",
      },
      {
        name: "Veltech College",
        location: "Avadi",
        capacity: "50,000 L",
        image: "https://images.unsplash.com/photo-1787672358142-95e697dacd81?auto=format&fit=crop&w=1200&q=85",
        alt: "Illustrative solar hot-water equipment on a rooftop",
        detail: "A high-volume hot-water system for a college campus.",
      },
      {
        name: "Sriram Properties",
        location: "Guduvancherry",
        capacity: "50,000 L",
        image: IMG.roof,
        alt: "Illustrative rooftop solar hot-water system",
        detail: "A commercial solar water-heating project designed for substantial demand.",
      },
      {
        name: "Puravankara",
        location: "Guindy",
        capacity: "3,200 L",
        image: "https://images.unsplash.com/photo-1787672358142-95e697dacd81?auto=format&fit=crop&w=1200&q=85",
        alt: "Illustrative solar water heater serving a commercial building",
        detail: "A solar hot-water system for a commercial property.",
      },
      {
        name: "Kalpataru",
        location: "Bangalore",
        capacity: "11,200 L",
        image: IMG.hero,
        alt: "Illustrative rooftop solar hot-water installation",
        detail: "A commercial solar water-heating installation for daily hot-water use.",
      },
    ],
  },
  {
    id: "heat-pump",
    title: "Heat Pump",
    description: "Efficient hot-water solutions for homes and hospitality properties.",
    projects: [
      {
        name: "CM Thiru Vijay Joseph",
        location: "Neelankarai",
        capacity: "300 L",
        image: "https://images.unsplash.com/photo-1776860150305-108ed577d7d4?auto=format&fit=crop&w=1200&q=85",
        alt: "Illustrative outdoor heat pump unit beside a building",
        detail: "A 300-litre heat pump water-heating installation.",
      },
      {
        name: "Nest Builder",
        location: "Nungambakkam",
        capacity: "200 L",
        image: "https://images.unsplash.com/photo-1776860155275-eee24bfb1dee?auto=format&fit=crop&w=1200&q=85",
        alt: "Illustrative modern home exterior with a heat pump",
        detail: "A 200-litre heat pump system for a residential development.",
      },
      {
        name: "Resort",
        location: "Tirupati",
        capacity: "300 L",
        image: "https://images.unsplash.com/photo-1780445392462-b7761551820c?auto=format&fit=crop&w=1200&q=85",
        alt: "Illustrative residential water heater and outdoor heat pump equipment",
        detail: "A 300-litre hot-water heat pump solution for a hospitality property.",
      },
    ],
  },
];

const onsiteImages = [
  [IMG.hero, "Solar panels across a rooftop"],
  [IMG.roof, "Rooftop solar array"],
  [IMG.project1, "Solar modules installed on site"],
  [IMG.project2, "Solar panels in sunlight"],
  [IMG.project3, "Solar installation landscape"],
  ["https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=85", "Rooftop solar project"],
  ["https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=85", "Solar energy equipment"],
  ["https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1000&q=85", "Solar panels under a clear sky"],
  ["https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=85", "Solar installation at golden hour"],
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [selectedImage, setSelectedImage] = useState(null);
  const active = categories.find((category) => category.id === activeCategory);

  return (
    <SiteChrome>
      <PageHero
        eyebrow="Projects & installations"
        title="Turnkey Solutions."
        copy="Explore selected rooftop solar, solar water-heating and heat-pump projects delivered for homes, institutions and businesses."
        image={IMG.project1}
      />

      <section className="turnkey-section" data-page-reveal>
        <div className="container">
          <div className="turnkey-heading">
            <div>
              <div className="eyebrow">Selected works</div>
              <h2>Turnkey Solutions</h2>
            </div>
            <p className="muted">
              Project details are shown as provided. Images are representative
              visuals and are not confirmed photographs of these individual
              installations.
            </p>
          </div>

          <div className="project-category-tabs" role="group" aria-label="Filter projects by category">
            {categories.map((category) => (
              <button
                className={activeCategory === category.id ? "active" : ""}
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={activeCategory === category.id}
              >
                {category.title}
              </button>
            ))}
          </div>

          {active && (
            <div
              className="selected-projects"
              id="selected-projects"
              aria-live="polite"
              key={active.id}
            >
              <div className="selected-category-heading">
                <div>
                  <span className="eyebrow">Category {String(categories.indexOf(active) + 1).padStart(2, "0")}</span>
                  <h3>{active.title}</h3>
                </div>
                <p className="muted">{active.description}</p>
              </div>
              <div className="turnkey-project-grid">
                {active.projects.map((project, index) => (
                  <article className="turnkey-project-card" key={project.name}>
                    <button
                      className="turnkey-project-image"
                      onClick={() => setSelectedImage([project.image, project.alt])}
                      aria-label={`View image for ${project.name}`}
                    >
                      <img src={project.image} alt={project.alt} loading="lazy" />
                      <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
                      <span className="project-image-open" aria-hidden="true">↗</span>
                    </button>
                    <div className="turnkey-project-copy">
                      <div className="project-meta">
                        <span>{project.location}</span>
                        <strong>{project.capacity}</strong>
                      </div>
                      <h4>{project.name}</h4>
                      <p>{project.detail}</p>
                      {active.id === "domestic-rooftop" && (
                        <div className="testimonial-pending">
                          Homeowner testimonial can be added with approval.
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          <p className="media-note">
            Customer testimonials and project videos will be added when
            approved media is available.
          </p>
        </div>
      </section>

      <section className="onsite-section" data-page-reveal>
        <div className="container">
          <div className="onsite-heading">
            <div className="eyebrow">On the ground</div>
            <h2>Our Onsite Duties</h2>
          </div>
          <div className="onsite-image-grid">
            {onsiteImages.map(([image, alt], index) => (
              <button
                className={`onsite-image onsite-image-${index + 1}`}
                key={alt}
                onClick={() => setSelectedImage([image, alt])}
                aria-label={`View image: ${alt}`}
              >
                <img src={image} alt={alt} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage[1]}
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            ×
          </button>
          <img src={selectedImage[0]} alt={selectedImage[1]} />
        </div>
      )}

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
