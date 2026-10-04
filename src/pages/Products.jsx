import React, { useMemo, useState } from "react";
import { Button, IMG, PageHero, SiteChrome } from "../components/SiteChrome.jsx";

const badgeLabels = ["Trending", "Bestseller", "New", "Recommended"];
const productsPerPage = 9;

// Edit products here. Copy a record to add a product; add image URLs to images
// to make its card gallery interactive.
const products = [
  {
    category: "Solar Water Heater",
    tags: ["Trending"],
    title: "Racold Solar Water Heater 500 Lpd ETC System",
    description: "Specifications: For family 10-15 person Warranty : 5 Years (on-Tank) Tank Volume- 500 LPD",
    images: [
      "https://images.unsplash.com/photo-1787672358142-95e697dacd81?auto=format&fit=crop&w=1000&q=85",
      IMG.roof,
    ],
    buyNow: { label: "Buy now", href: "https://www.egssolar.co.in/product/28959249/Racold-Solar-Water-Heater-500-Lpd-ETC-System" },
  },
  {
    category: "Solar Water Heater",
    tags: ["Bestseller"],
    title: "Racold Solar Water Heater Omega 500 Pressure System",
    description: "500 LPD Racold FPC Omega Max8 Solar Water Heater.",
    images: [IMG.roof, IMG.commercial],
    buyNow: { label: "Buy now", href: "https://www.egssolar.co.in/product/28959284/Racold-Solar-Water-Heater-Omega-500-Pressure-System" },
  },
  {
    category: "Solar Water Heater",
    tags: ["Bestseller"],
    title: "Racold Solar Water Heater 300Lpd Etc System",
    description: "300 LPD Racold ETC Alpha Plus Solar Water Heater",
    images: [IMG.commercial, IMG.roof],
    buyNow: { label: "Buy now", href: "https://www.egssolar.co.in/product/28960015/Racold-Solar-Water-Heater-300Lpd-Etc-System" },
  },
  {
    category: "Solar Water Heater",
    tags: [],
    title: "Racold Solar Omega FPC 100 Pressure",
    description: "100 LPD Racold FPC Omega Neo Solar Water BRAND: RACOLD PRODUCT CODE: RA-100FPC1.2",
    images: [
      "https://images.unsplash.com/photo-1787672358142-95e697dacd81?auto=format&fit=crop&w=1000&q=85",
      IMG.commercial,
    ],
    buyNow: { label: "Buy now", href: "https://www.egssolar.co.in/product/28975222/Racold-Solar-Omega-FPC-100-Pressure" },
  },
  {
    category: "Solar Water Heater",
    tags: [],
    title: "Racold Solar Omega 300 Lpd Pressure FPC",
    description: "300 LPD Racold FPC Omega Solar Water Heater Specifications: For family 7-10person .",
    images: [IMG.roof, IMG.commercial],
    buyNow: { label: "Buy now", href: "https://www.egssolar.co.in/product/28975233/Racold-Solar-Omega-300-Lpd-Pressure-FPC" },
  },

  {
    category: "Solar Water Heater",
    tags: [],
    title: "Racold Solar Geyser 200 Ltr Pressure. Model FPC",
    description: "Specifications:For family 4-5 person Warranty : 5 Years (on-Tank),Tank Volume- 200 LPD",
    images: [IMG.commercial, IMG.roof],
    buyNow: { label: "Buy now", href: "https://www.egssolar.co.in/product/29003941/Racold-Solar-Geyser-200-Ltr-Pressure--Model-FPC" },
  },
  {
    category: "Solar Water Heater",
    tags: [],
    title: "Racold 200 LPD ETC Solar Water Heater Alpha System",
    description: "Specifications:For family 4-5 person Warranty : 5 Years (on-Tank)",
    images: [
      "https://images.unsplash.com/photo-1787672358142-95e697dacd81?auto=format&fit=crop&w=1000&q=85",
      IMG.roof,
    ],
    buyNow: { label: "Buy now", href: "https://www.egssolar.co.in/product/29005504/Racold-200-LPD-ETC-Solar-Water-Heater-Alpha-System" },
  },
  {
    category: "Solar Water Heater",
    tags: [],
    title: "Supreme Solar Water Heater 200 ETC System",
    description: "SPECIFICATION For family of 4-5 person 5 Years Warranty (on-Tank)Tank Volume- 200 LPD",
    images: [IMG.roof, IMG.commercial],
    buyNow: { label: "Buy now", href: "https://www.egssolar.co.in/product/29021629/Supreme-Solar-Water-Heater-200-ETC-System" },
  },
  {
    category: "Solar Water Heater",
    tags: [],
    title: "V Guard Solar Water Heater 300 Ltr Pressure Model",
    description: "Generates hot water without electricity ",
    images: [IMG.commercial, IMG.roof],
    buyNow: { label: "Buy now", href: "https://www.egssolar.co.in/product/30570051/V-Guard-Solar-Water-Heater-300-Ltr-Pressure-Model" },
  },
  {
    category: "Solar Water Heater",
    tags: [],
    title: "Solar Water Heater 10",
    description: "Add a product description here.",
    images: [
      "https://images.unsplash.com/photo-1787672358142-95e697dacd81?auto=format&fit=crop&w=1000&q=85",
      IMG.commercial,
    ],
    buyNow: { label: "Buy now", href: "/contact" },
  },
  {
    category: "Solar Heating Element",
    tags: [],
    title: "Racold solar Omega Heating Element 3kw With Thermostat",
    description: "2kw Element with Thermostatand Auto flange",
    images: [
      "https://images.unsplash.com/photo-1787672358142-95e697dacd81?auto=format&fit=crop&w=1000&q=85",
      IMG.project2,
    ],
    buyNow: { label: "Buy now", href: "https://www.egssolar.co.in/product/28975183/Racold-solar--Omega-Heating-Element-3kw-With-Thermostat" },
  },
  {
    category: "Solar Heating Element",
    tags: [],
    title: "Racold Solar Alpha ETC Model Heating Element With Thermostat",
    description: "2kw Heating Element with Thermoset 55 60 degree",
    images: [IMG.project2, IMG.roof],
    buyNow: { label: "Buy now", href: "https://www.egssolar.co.in/product/28975187/Racold-Solar-Alpha-ETC-Model-Heating-Element-With-Thermostat" },
  },
  {
    category: "Heat Pump",
    tags: ["Bestseller"],
    title: "Racold 300L Air to Heat Pump",
    description: "Heat Pumps automatically switches to electrical mode when it is not able to meet your requirement naturally.",
    images: [
      "https://images.unsplash.com/photo-1776860150305-108ed577d7d4?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1776860155275-eee24bfb1dee?auto=format&fit=crop&w=1000&q=85",
    ],
    buyNow: { label: "Buy now", href: "https://www.egssolar.co.in/product/29005636/Racold-300L-Air-to-Heat-Pump" },
  },
  {
    category: "Heat Pump",
    tags: ["New"],
    title: "Racold Heat Pump 150L Save 70% EB FREE",
    description: "Heat Pumps automatically switches to electrical mode when it is not able to meet your requirement naturally.",
    images: [
      "https://images.unsplash.com/photo-1776860155275-eee24bfb1dee?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1780445392462-b7761551820c?auto=format&fit=crop&w=1000&q=85",
    ],
    buyNow: { label: "Buy now", href: "https://www.egssolar.co.in/product/29005646/Racold-Heat-Pump-150L-Save-70--EB-FREE" },
  },
  {
    category: "Heat Pump",
    tags: ["Trending"],
    title: "Racold Heat Pump 200 L 70 % SAVE EB",
    description: "Heat Pumps automatically switches to electrical mode when it is not able to meet your requirement naturally.",
    images: [
      "https://images.unsplash.com/photo-1780445392462-b7761551820c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1776860150305-108ed577d7d4?auto=format&fit=crop&w=1000&q=85",
    ],
    buyNow: { label: "Buy now", href: "https://www.egssolar.co.in/product/29005687/Racold-Heat-Pump-200-L-70---SAVE-EB" },
  },
  {
    category: "Heat Pump",
    tags: [],
    title: "Geyser 500 L Tank with 6kw kw Heat Pump Water Heater Racold 70% EB FREE",
    description: "This tank and compressor duo is eco-friendly and the perfect choice of water heater for every home!",
    images: [
      "https://images.unsplash.com/photo-1776860150305-108ed577d7d4?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1780445392462-b7761551820c?auto=format&fit=crop&w=1000&q=85",
    ],
    buyNow: { label: "Buy now", href: "https://www.egssolar.co.in/product/29005727/Geyser-500-L-Tank-with-6kw-kw-Heat-Pump-Water-Heater-Racold--70--EB-FREE" },
  },
  {
    category: "Heat Pump",
    tags: [],
    title: "1000 Ltr Racold Tank with 12HPW Heat Pump Water Heater",
    description: "This tank and compressor duo is eco-friendly and the perfect choice of water heater for every home!",
    images: [
      "https://images.unsplash.com/photo-1776860155275-eee24bfb1dee?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1780445392462-b7761551820c?auto=format&fit=crop&w=1000&q=85",
    ],
    buyNow: { label: "Buy now", href: "https://www.egssolar.co.in/product/29005748/1000-Ltr-Racold-Tank-with-12HPW-Heat-Pump-Water-Heater" },
  },
  {
    category: "Heat Pump",
    tags: [],
    title: "Jaquar Electric Floor Mounting Vertical 200 Ltr Heat Pump Integra-X Monobloc Heat Pump HPM-WHT-P200 in White",
    description: "Integra-X Monobloc Heat Pump 200 Ltr",
    images: [
      "https://images.unsplash.com/photo-1780445392462-b7761551820c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1776860155275-eee24bfb1dee?auto=format&fit=crop&w=1000&q=85",
    ],
    buyNow: { label: "Buy now", href: "https://www.egssolar.co.in/product/30830959/Jaquar-Electric-Floor-Mounting-Vertical-200-Ltr-Heat-Pump-Integra-X-Monobloc-Heat-Pump-HPM-WHT-P200-in-White" },
  },
  {
    category: "Heating Element",
    tags: [],
    title: "Supreme solar Heating Element 2kw with thermostat",
    description: "supreme solar Etc system Heating Element 2kw coil with auto thermostat",
    images: [
      "https://images.unsplash.com/photo-1787672358142-95e697dacd81?auto=format&fit=crop&w=1000&q=85",
      IMG.project2,
    ],
    buyNow: { label: "Buy now", href: "https://www.egssolar.co.in/product/29005820/Supreme-solar-Heating-Element-2kw-with-thermostat" },
  },
  {
    category: "ETC TUBE",
    tags: [],
    title: "ETC tube 58mm DIA Length 1800mm",
    description: "58mm Dia 1800mm Length,Available in 58mm Dia 2100 length also",
    images: [
      "https://images.unsplash.com/photo-1787672358142-95e697dacd81?auto=format&fit=crop&w=1000&q=85",
      IMG.roof,
    ],
    buyNow: { label: "Buy now", href: "https://www.egssolar.co.in/product/29005834/ETC-tube-58mm-DIA--Length-1800mm" },
  },
  {
    category: "Solar valve",
    tags: [],
    title: "Solar Safety Valve 5Bar,3,Bar",
    description: "Pressure fixing bar 3 bar / 5bar",
    images: [IMG.project2, IMG.industrial],
    buyNow: { label: "Buy now", href: "https://www.egssolar.co.in/product/29017732/Solar-Safety-Valve-5Bar-3-Bar" },
  },
  {
    category: "Solar valve",
    tags: [],
    title: "Solar Air Released Valve",
    description: "Ensuring maximum efficiency and performance..",
    images: [IMG.industrial, IMG.commercial],
    buyNow: { label: "Buy now", href: "https://www.egssolar.co.in/product/29017748/Solar-Air-Released-Valve" },
  },
  {
    category: "Solar valve",
    tags: [],
    title: "Solar Safety Valve And Air Release Valve",
    description: "",
    images: [IMG.commercial, IMG.project2],
    buyNow: { label: "Buy now", href: "https://www.egssolar.co.in/product/29017753/Solar-Safety-Valve-And-Air-Release-Valve" },
  },
  {
    category: "Solar valve",
    tags: [],
    title: "Racold Solar Omega Safety Valve 8 Bar",
    description: "IT help the system run good, Racold Solar Omega Model & NEO",
    images: [IMG.project2, IMG.roof],
    buyNow: { label: "Buy now", href: "https://www.egssolar.co.in/product/29034646/Racold-Solar-Omega-Safety-Valve-8-Bar" },
  },
  {
    category: "Solar On Grid",
    tags: ["Bestseller"],
    title: "Solar Roof Top On Grid 5kw Power System Installation & Testing",
    description: "Solar DCR 585 Wp PV Panel TOPCON Wp",
    images: [IMG.roof, IMG.residential],
    buyNow: { label: "Buy now", href: "https://www.egssolar.co.in/product/29361740/Solar-Roof-Top-On-Grid-5kw-Power-System-Installation---Testing" },
  },
  {
    category: "Solar On Grid",
    tags: ["Recommended"],
    title: "EGS SOLAR Supply, Installation,Testing And Commissioning Of 10 Kw 3 Phase On-Grid",
    description: "",
    images: [IMG.residential, IMG.project2],
    buyNow: { label: "Buy now", href: "https://www.egssolar.co.in/product/29363168/EGS-SOLAR-Supply--Installation-Testing-And-Commissioning-Of-10-Kw-3-Phase-On-Gri" },
  },
  {
    category: "Solar On Grid",
    tags: ["New"],
    title: "5kw on Grid solar Panels set",
    description: "",
    images: [IMG.project2, IMG.industrial],
    buyNow: { label: "Buy now", href: "https://www.egssolar.co.in/product/31652178/5kw-on-Grid-solar-Panels-set" },
  },
  {
    category: "Solar On Grid",
    tags: [],
    title: "solar On Grid with subsidies availability",
    description: "Add a product description here.",
    images: [IMG.industrial, IMG.roof],
    buyNow: { label: "Buy now", href: "https://www.egssolar.co.in/product/32288813/solar-On-Grid-with-subsidies-availability" },
  },
  {
    category: "Service",
    tags: [],
    title: "Solar service charges",
    description: "",
    images: [IMG.industrial, IMG.commercial],
    buyNow: { label: "Buy now", href: "https://www.egssolar.co.in/product/32804482/Solar-service-charges" },
  },
  {
    category: "More Items",
    tags: [],
    title: "Racold Solar Heating Element 2Kw with thermostat",
    description: "",
    images: [IMG.project2, IMG.roof],
    buyNow: { label: "Buy now", href: "https://www.egssolar.co.in/product/33228240/Racold-Solar-Heating-Element-2Kw-with-thermostat" },
  },
  {
    category: "More Items",
    tags: [],
    title: "Involties Solar Grid Inverter 5kw",
    description: "",
    images: [IMG.roof, IMG.commercial],
    buyNow: { label: "Buy now", href: "https://www.egssolar.co.in/product/33110054/Involties-Solar-Grid-Inverter-5kw" },
  },
  {
    category: "More Items",
    tags: [],
    title: "SAATVIK UDHY SERIES SOLAR ON GRID INVERTER 3.3KW",
    description: "SAATVIK ON GRID INVERTER",
    images: [IMG.commercial, IMG.residential],
    buyNow: { label: "Buy now", href: "https://www.egssolar.co.in/product/33040203/SAATVIK-UDHY-SERIES-SOLAR-ON-GRID-INVERTER-3-3KW" },
  },
  {
    category: "More Items",
    tags: [],
    title: "Service charge",
    description: "",
    images: [IMG.residential, IMG.project2],
    buyNow: { label: "Buy now", href: "https://www.egssolar.co.in/product/32617100/Service-charge" },
  },
  {
    category: "More Items",
    tags: [],
    title: "100 LPD ETC V-Guard Win hot Plus H Solar Water Heater",
    description: "",
    images: [IMG.project2, IMG.roof],
    buyNow: { label: "Buy now", href: "https://www.egssolar.co.in/product/30571976/100-LPD-ETC-V-Guard-Win-hot--Plus-H--Solar-Water-Heater" },
  },
  {
    category: "More Items",
    tags: [],
    title: "200 LPD Vguard Solar Water Heater Hot Plus Pressure 8 Bar",
    description: "",
    images: [IMG.roof, IMG.commercial],
    buyNow: { label: "Buy now", href: "https://www.egssolar.co.in/product/30572002/200-LPD-Vguard-Solar-Water-Heater-Hot-Plus-Pressure-8-Bar-" },
  },
  {
    category: "More Items",
    tags: [],
    title: "Heating elements fixing and testing charges",
    description: "",
    images: [IMG.commercial, IMG.residential],
    buyNow: { label: "Buy now", href: "https://www.egssolar.co.in/product/30578093/Heating-elements-fixing-and-testing-charges" },
  },
];

const categoryDefinitions = [...new Set(products.map((product) => product.category))].map((name) => ({
  name,
  count: products.filter((product) => product.category === name).length,
}));

export default function Products() {
  const [category, setCategory] = useState("All products");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeProductImages, setActiveProductImages] = useState({});
  const filteredProducts = useMemo(
    () =>
      category === "All products"
        ? products
        : products.filter((product) => product.category === category),
    [category]
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const pageProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );
  const chooseCategory = (value) => {
    setCategory(value);
    setCurrentPage(1);
  };
  const changePage = (page) => {
    setCurrentPage(page);
    document.querySelector(".catalog-section")?.scrollIntoView({ behavior: "smooth" });
  };
  const changeProductImage = (product, imageIndex) => {
    setActiveProductImages((current) => ({
      ...current,
      [product.title]: imageIndex,
    }));
  };
  const categories = categoryDefinitions.map(({ name, count }) => ({ name, count }));
  const badgeCounts = products.reduce((counts, product) => {
    product.tags.forEach((tag) => {
      if (tag in counts) counts[tag] += 1;
    });
    return counts;
  }, Object.fromEntries(badgeLabels.map((badge) => [badge, 0])));

  return (
    <SiteChrome>
      <PageHero
        eyebrow="Solar solutions"
        title="Products for warmer water and smarter energy."
        copy="Browse our product catalogue by category. Product specifications and product links will be added as they become available."
        image={IMG.roof}
      />
      <section className="catalog-section" data-page-reveal>
        <div className="container">
          <div className="catalog-heading">
            <div>
              <div className="eyebrow">Solar product catalogue</div>
              <h2>Find the right fit for your system.</h2>
            </div>
            <div className="catalog-total" aria-label={`${products.length} products`}>
              <strong>{products.length}</strong>
              <span>Products</span>
            </div>
          </div>

          <div className="catalog-badge-legend" aria-label="Product labels">
            {badgeLabels.map((badge) => (
              <span className={`catalog-badge badge-${badge.toLowerCase()}`} key={badge}>
                <b>{badge.charAt(0)}</b>
                {badge}
                <small>{badgeCounts[badge]}</small>
              </span>
            ))}
          </div>

          <div className="products-browser">
            <aside className="category-sidebar" aria-label="Product categories">
              <span className="category-label">Categories</span>
              <button
                className={category === "All products" ? "active" : ""}
                onClick={() => chooseCategory("All products")}
              >
                <span>All products</span>
                <small>{products.length}</small>
              </button>
              {categories.map(({ name, count }) => (
                <button
                  className={category === name ? "active" : ""}
                  key={name}
                  onClick={() => chooseCategory(name)}
                >
                  <span>{name}</span>
                  <small>{count}</small>
                </button>
              ))}
            </aside>

            <div className="catalog-results">
              <select
                className="category-select"
                value={category}
                onChange={(event) => chooseCategory(event.target.value)}
                aria-label="Filter products by category"
              >
                <option value="All products">All products ({products.length})</option>
                {categories.map(({ name, count }) => (
                  <option value={name} key={name}>{name} ({count})</option>
                ))}
              </select>

              <div className="catalog-results-heading" aria-live="polite">
                <h3>{category}</h3>
                <span>{filteredProducts.length} products</span>
              </div>

              <div className="catalog-product-grid">
                {pageProducts.map((product) => {
                  const imageIndex = activeProductImages[product.title] || 0;
                  return (
                    <article className="catalog-product-card" key={product.title}>
                      <a
                        className="catalog-product-card-link"
                        href={product.buyNow.href}
                        aria-label={`${product.buyNow.label}: ${product.title}`}
                      >
                        <div className="catalog-product-image">
                          <img
                            src={product.images[imageIndex]}
                            alt={`${product.title} image ${imageIndex + 1}`}
                            loading="lazy"
                          />
                          {product.tags.length > 0 && (
                            <div className="catalog-product-badges" aria-label="Product labels">
                              {product.tags.map((tag) => (
                                <span className={`catalog-badge badge-${tag.toLowerCase()}`} key={tag}>
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="catalog-product-content">
                          <div className="catalog-product-name">
                            <span className="eyebrow">{product.category}</span>
                            <h4>{product.title}</h4>
                          </div>
                          <p className="catalog-product-description">{product.description}</p>
                          <span className="catalog-buy-button">
                            {product.buyNow.label} <span aria-hidden="true">→</span>
                          </span>
                        </div>
                      </a>
                      {product.images.length > 1 && (
                        <div className="catalog-image-controls" aria-label={`${product.title} images`}>
                          <button
                            className="catalog-image-arrow"
                            type="button"
                            aria-label={`Previous ${product.title} image`}
                            onClick={() =>
                              changeProductImage(
                                product,
                                (imageIndex - 1 + product.images.length) % product.images.length
                              )
                            }
                          >
                            ‹
                          </button>
                          <div className="catalog-image-dots">
                            {product.images.map((image, index) => (
                              <button
                                className={`catalog-image-dot${index === imageIndex ? " active" : ""}`}
                                type="button"
                                key={`${product.title}-image-${index}`}
                                aria-label={`Show ${product.title} image ${index + 1}`}
                                aria-pressed={index === imageIndex}
                                onClick={() => changeProductImage(product, index)}
                              />
                            ))}
                          </div>
                          <button
                            className="catalog-image-arrow"
                            type="button"
                            aria-label={`Next ${product.title} image`}
                            onClick={() =>
                              changeProductImage(
                                product,
                                (imageIndex + 1) % product.images.length
                              )
                            }
                          >
                            ›
                          </button>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
              {totalPages > 1 && (
                <nav className="catalog-pagination" aria-label="Product pages">
                  <span className="catalog-pagination-summary">
                    Showing {(currentPage - 1) * productsPerPage + 1}–
                    {Math.min(currentPage * productsPerPage, filteredProducts.length)} of{" "}
                    {filteredProducts.length} products
                  </span>
                  <div className="catalog-pagination-controls">
                    <button
                      className="catalog-page-button catalog-page-direction"
                      type="button"
                      onClick={() => changePage(currentPage - 1)}
                      disabled={currentPage === 1}
                      aria-label="Previous page"
                    >
                      ← <span>Previous</span>
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                      <button
                        className={`catalog-page-button${page === currentPage ? " active" : ""}`}
                        type="button"
                        key={page}
                        onClick={() => changePage(page)}
                        aria-label={`Page ${page}`}
                        aria-current={page === currentPage ? "page" : undefined}
                      >
                        {page}
                      </button>
                    ))}
                    <button
                      className="catalog-page-button catalog-page-direction"
                      type="button"
                      onClick={() => changePage(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      aria-label="Next page"
                    >
                      <span>Next</span> →
                    </button>
                  </div>
                </nav>
              )}
              <p className="catalog-note">
                Product names are temporary catalogue labels. Product details
                and links will be added later.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sage-band" data-page-reveal>
        <div className="container two-col">
          <div>
            <div className="eyebrow">Need help choosing?</div>
            <h2>Tell us what you need. We will match the right product.</h2>
          </div>
          <Button href="/contact" variant="dark">Talk to an expert →</Button>
        </div>
      </section>
    </SiteChrome>
  );
}