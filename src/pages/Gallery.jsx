import React, { useMemo, useState } from "react";
import { Button, IMG, PageHero, SiteChrome } from "../components/SiteChrome.jsx";

const categories = [
  {
    id: "commercial-rooftop",
    title: "Solar Rooftop — Commercial",
    description: "Commercial rooftop solar projects across India.",
    projects: [
      {
        name: "Mall",
        location: "Purasalwalkam",
        capacity: "35 kW",
        image: "https://cdn.dotpe.in/longtail/additional_pages/7887284/WoIaiPha.jpeg",
        alt: "Illustrative solar panels installed across a commercial rooftop",
        detail: "A commercial rooftop solar installation planned for the property's energy needs.",
      },
      {
        name: "Airport rooftop",
        location: "Tamil Nadu",
        capacity: "35 kW",
        image: "https://cdn.dotpe.in/longtail/additional_pages/7887284/Cckp3t2g.jpeg",
        alt: "Illustrative rooftop solar array for a large facility",
        detail: "A rooftop solar system for a high-use commercial environment.",
      },
      {
        name: "Embassy",
        location: "Pallavaram",
        capacity: "558 kW",
        image: "https://cdn.dotpe.in/longtail/additional_pages/7887284/VwMgoOCo.webp",
        alt: "Illustrative large-scale solar panels",
        detail: "A large-capacity rooftop project designed around site requirements.",
      },
      {
        name: "Ramana Vidyalaya School",
        location: "Sholinganallur",
        capacity: "24 kW",
        image: "https://cdn.dotpe.in/longtail/additional_pages/7887284/F7pFWnYz.webp",
        alt: "Illustrative solar panels at an educational facility",
        detail: "A school rooftop solar installation supporting on-site energy use.",
      },
    ],
  },
  {
    id: "domestic-rooftop",
    title: "Solar Rooftop — Domestic",
    description: "Residential rooftop systems for homes across India.",
    projects: [
      {
        name: "Ponnaparaj",
        location: "Vyasarpadi",
        capacity: "5 kW",
        image: "https://cdn.dotpe.in/longtail/additional_pages/7887284/sumeUswf.webp",
        alt: "Illustrative residential rooftop solar panels",
        detail: "A residential rooftop system sized for the household's solar requirements.",
      },
      {
        name: "Saravanan",
        location: "Madhavaram",
        capacity: "5 kW",
        image: "https://cdn.dotpe.in/longtail/additional_pages/7887284/hALVqglo.jpeg",
        alt: "Illustrative home solar installation",
        detail: "A home solar installation planned around available roof area.",
      },
      {
        name: "Sam",
        location: "Location not specified",
        capacity: "5 kW",
        image: "https://cdn.dotpe.in/longtail/additional_pages/7887284/VRjHcDnd.jpeg",
        alt: "Illustrative rooftop solar panels for a home",
        detail: "A residential rooftop project with a 5 kW system.",
      },
      {
        name: "Julian Gilbert",
        location: "Tambaram",
        capacity: "5 kW",
        image: "https://cdn.dotpe.in/longtail/additional_pages/7887284/XXbcyMsj.webp",
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
        image: "https://cdn.dotpe.in/longtail/additional_pages/7887284/ag9560fv.png",
        alt: "Illustrative rooftop solar water heater on a modern building",
        detail: "A large-capacity solar water-heating system for an institutional campus.",
      },
      {
        name: "Veltech College",
        location: "Avadi",
        capacity: "50,000 L",
        image: "https://cdn.dotpe.in/longtail/additional_pages/7887284/PLXMp99L.jpeg",
        alt: "Illustrative solar hot-water equipment on a rooftop",
        detail: "A high-volume hot-water system for a college campus.",
      },
      {
        name: "Sriram Properties",
        location: "Guduvancherry",
        capacity: "50,000 L",
        image: "https://cdn.dotpe.in/longtail/additional_pages/7887284/K98aSdbq.jpeg",
        alt: "Illustrative rooftop solar hot-water system",
        detail: "A commercial solar water-heating project designed for substantial demand.",
      },
      {
        name: "Puravankara",
        location: "Guindy",
        capacity: "3,200 L",
        image: "https://cdn.dotpe.in/longtail/additional_pages/7887284/QP95pyLF.webp",
        alt: "Illustrative solar water heater serving a commercial building",
        detail: "A solar hot-water system for a commercial property.",
      },
      {
        name: "Kalpataru",
        location: "Bangalore",
        capacity: "11,200 L",
        image: "https://cdn.dotpe.in/longtail/additional_pages/7887284/jWwgJ1Zs.jpeg",
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
        image: "https://cdn.dotpe.in/longtail/additional_pages/7887284/Wf4bVyoG.webp",
        alt: "Illustrative outdoor heat pump unit beside a building",
        detail: "A 300-litre heat pump water-heating installation.",
      },
      {
        name: "Nest Builder",
        location: "Nungambakkam",
        capacity: "200 L",
        image: "https://cdn.dotpe.in/longtail/additional_pages/7887284/TjTuKNPs.jpeg",
        alt: "Illustrative modern home exterior with a heat pump",
        detail: "A 200-litre heat pump system for a residential development.",
      },
      {
        name: "Resort",
        location: "Tirupati",
        capacity: "300 L",
        image: "https://cdn.dotpe.in/longtail/additional_pages/7887284/Lw0HG1Ad.jpeg",
        alt: "Illustrative residential water heater and outdoor heat pump equipment",
        detail: "A 300-litre hot-water heat pump solution for a hospitality property.",
      },
    ],
  },
];

const inspirationImages = [
  "WhatsApp Image 2026-09-30 at 7.16.47 PM.jpeg",
  "WhatsApp Image 2026-09-30 at 7.16.49 PM.jpeg",
  "WhatsApp Image 2026-09-30 at 7.16.50 PM.jpeg",
  "WhatsApp Image 2026-09-30 at 7.16.52 PM.jpeg",
  "WhatsApp Image 2026-09-30 at 7.25.14 PM.jpeg",
  "WhatsApp Image 2026-09-30 at 7.29.01 PM (1).jpeg",
  "WhatsApp Image 2026-09-30 at 7.29.01 PM.jpeg",
  "WhatsApp Image 2026-09-30 at 7.29.05 PM.jpeg",
  "WhatsApp Image 2026-10-22 at 12.39.55 PM.jpeg",
  "WhatsApp Image 2026-10-22 at 12.39.57 PM.jpeg",
  "WhatsApp Image 2026-10-22 at 12.39.58 PM.jpeg",
  "WhatsApp Image 2026-10-22 at 12.39.59 PM.jpeg",
  "WhatsApp Image 2026-10-22 at 12.40.00 PM (1).jpeg",
  "WhatsApp Image 2026-10-22 at 12.40.00 PM (2).jpeg",
  "WhatsApp Image 2026-10-22 at 12.40.00 PM.jpeg",
  "WhatsApp Image 2026-10-22 at 12.40.01 PM (1).jpeg",
  "WhatsApp Image 2026-10-22 at 12.40.01 PM (2).jpeg",
  "WhatsApp Image 2026-10-22 at 12.40.01 PM (3).jpeg",
  "WhatsApp Image 2026-10-22 at 12.40.01 PM.jpeg",
  "WhatsApp Image 2026-10-22 at 12.40.02 PM (1).jpeg",
  "WhatsApp Image 2026-10-22 at 12.40.02 PM (2).jpeg",
  "WhatsApp Image 2026-10-22 at 12.40.02 PM.jpeg",
  "WhatsApp Image 2026-10-22 at 12.40.03 PM (1).jpeg",
  "WhatsApp Image 2026-10-22 at 12.40.03 PM (2).jpeg",
  "WhatsApp Image 2026-10-22 at 12.40.03 PM.jpeg",
  "WhatsApp Image 2026-10-22 at 12.40.04 PM (1).jpeg",
  "WhatsApp Image 2026-10-22 at 12.40.04 PM (2).jpeg",
  "WhatsApp Image 2026-10-22 at 12.40.04 PM.jpeg",
  "WhatsApp Image 2026-10-22 at 12.40.05 PM (1).jpeg",
  "WhatsApp Image 2026-10-22 at 12.40.05 PM (2).jpeg",
  "WhatsApp Image 2026-10-22 at 12.40.05 PM (3).jpeg",
  "WhatsApp Image 2026-10-22 at 12.40.05 PM.jpeg",
  "WhatsApp Image 2026-10-22 at 12.40.06 PM (1).jpeg",
  "WhatsApp Image 2026-10-22 at 12.40.06 PM (2).jpeg",
  "WhatsApp Image 2026-10-22 at 12.40.06 PM.jpeg",
  "WhatsApp Image 2026-10-22 at 12.40.07 PM (1).jpeg",
  "WhatsApp Image 2026-10-22 at 12.40.07 PM (2).jpeg",
  "WhatsApp Image 2026-10-22 at 12.40.07 PM.jpeg",
  "WhatsApp Image 2026-10-22 at 12.40.08 PM (1).jpeg",
  "WhatsApp Image 2026-10-22 at 12.40.08 PM (2).jpeg",
  "WhatsApp Image 2026-10-22 at 12.40.08 PM.jpeg",
  "WhatsApp Image 2026-10-22 at 12.40.09 PM (1).jpeg",
  "WhatsApp Image 2026-10-22 at 12.40.09 PM (2).jpeg",
  "WhatsApp Image 2026-10-22 at 12.40.09 PM.jpeg",
];

const customerVideos = [
  { title: "Government Project", videoId: "wr8bLk7iwOQ" },
  { title: "Aero Hub Mall", videoId: "40UUsH1uWZ8" },
  { title: "Airport Project", videoId: "K4jGVf9xjuU" },
  { title: "VGP Project", videoId: "HplzNO9I1iU" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);
  const shuffledInspirationImages = useMemo(() => {
    const images = [...inspirationImages];
    for (let index = images.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [images[index], images[randomIndex]] = [images[randomIndex], images[index]];
    }
    return images;
  }, []);
  const active = categories.find((category) => category.id === activeCategory);

  return (
    <SiteChrome>
      <PageHero
        eyebrow="Projects & installations"
        title="Turnkey Solutions."
        copy="Explore selected rooftop solar, solar water-heating and heat-pump projects delivered for homes, institutions and businesses."
        image="https://cdn.dotpe.in/longtail/additional_pages/7887284/UVwGyP7G.webp"
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

        </div>
      </section>

      <section className="customer-videos" data-page-reveal>
        <div className="container">
          <div className="customer-videos-heading">
            <div className="eyebrow">Customer reviews</div>
            <h2>Hear from Our Customers</h2>
            <p className="muted">Watch customers share their experience with our solar projects.</p>
          </div>
          <div className="customer-video-list">
            {customerVideos.map((video) => (
              <article className="customer-video-card" key={video.videoId}>
                <div className="customer-video-frame">
                  {activeVideo === video.videoId ? (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1`}
                      title={`${video.title} customer video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  ) : (
                    <button
                      className="customer-video-thumbnail"
                      onClick={() => setActiveVideo(video.videoId)}
                      aria-label={`Play ${video.title} customer video`}
                    >
                      <img
                        src={`https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`}
                        alt={`${video.title} video thumbnail`}
                        loading="lazy"
                      />
                      <span className="customer-video-play" aria-hidden="true">▶</span>
                    </button>
                  )}
                </div>
                <h3>{video.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="onsite-section" data-page-reveal>
        <div className="container">
          <div className="onsite-heading">
            <div className="eyebrow">Solar inspiration</div>
            <h2>Household Rooftop Solar Across India</h2>
            <p className="muted">A photo gallery of our solar installations and projects.</p>
          </div>
          <div className="inspiration-carousel" aria-label="Solar inspiration photo carousel">
            {[0, 1, 2].map((row) => (
              <div className={`inspiration-row inspiration-row-${row + 1}`} key={row}>
                <div className="inspiration-track">
                  {[0, 1].map((copy) => (
                    <div className="inspiration-group" aria-hidden={copy === 1} key={copy}>
                      {shuffledInspirationImages
                        .filter((_, index) => index % 3 === row)
                        .map((filename, index) => {
                          const image = `/gallery%20section/${encodeURIComponent(filename)}`;
                          const alt = `Solar project photo ${row * 15 + index + 1}`;
                          return (
                            <button
                              className="inspiration-image"
                              key={`${copy}-${filename}`}
                              onClick={() => setSelectedImage([image, alt])}
                              aria-label={`View image: ${alt}`}
                              tabIndex={copy === 1 ? -1 : undefined}
                            >
                              <img src={image} alt={copy === 1 ? "" : alt} loading="lazy" />
                            </button>
                          );
                        })}
                    </div>
                  ))}
                </div>
              </div>
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
