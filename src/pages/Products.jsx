import React, { useMemo, useState } from "react";
import { Button, IMG, PageHero, SiteChrome } from "../components/SiteChrome.jsx";

const categoryDefinitions = [
  { name: "Solar Water Heater", count: 10, badges: { 1: ["Trending"], 2: ["Bestseller"], 3: ["Bestseller"] } },
  { name: "Solar Heating Element", count: 2 },
  { name: "Heat Pump", count: 6, badges: { 1: ["Bestseller"], 2: ["New"], 3: ["Trending"] } },
  { name: "Heating Element", count: 1 },
  { name: "ETC TUBE", count: 1 },
  { name: "Solar valve", count: 4 },
  { name: "Solar On Grid", count: 4, badges: { 1: ["Bestseller"], 2: ["Recommended"], 3: ["New"] } },
  { name: "Service", count: 1 },
  { name: "More Items", count: 7 },
];

const badgeLabels = ["Trending", "Bestseller", "New", "Recommended"];
const productsPerPage = 9;

const categoryImages = {
  "Solar Water Heater": [
    "https://images.unsplash.com/photo-1787672358142-95e697dacd81?auto=format&fit=crop&w=1000&q=85",
    IMG.roof,
    IMG.commercial,
  ],
  "Solar Heating Element": [
    "https://images.unsplash.com/photo-1787672358142-95e697dacd81?auto=format&fit=crop&w=1000&q=85",
    IMG.project2,
  ],
  "Heat Pump": [
    "https://images.unsplash.com/photo-1776860150305-108ed577d7d4?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1776860155275-eee24bfb1dee?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1780445392462-b7761551820c?auto=format&fit=crop&w=1000&q=85",
  ],
  "Heating Element": [
    "https://images.unsplash.com/photo-1787672358142-95e697dacd81?auto=format&fit=crop&w=1000&q=85",
  ],
  "ETC TUBE": [
    "https://images.unsplash.com/photo-1787672358142-95e697dacd81?auto=format&fit=crop&w=1000&q=85",
  ],
  "Solar valve": [IMG.project2, IMG.industrial, IMG.commercial],
  "Solar On Grid": [IMG.roof, IMG.residential, IMG.project2, IMG.industrial],
  Service: [IMG.industrial],
  "More Items": [IMG.project2, IMG.roof, IMG.commercial, IMG.residential],
};

const products = categoryDefinitions.flatMap(({ name, count, badges = {} }) =>
  Array.from({ length: count }, (_, index) => {
    const number = index + 1;
    return {
      id: `${name}-${number}`,
      category: name,
      name: `${name} ${String(number).padStart(2, "0")}`,
      image: categoryImages[name][index % categoryImages[name].length],
      badges: badges[number] || [],
    };
  })
);

export default function Products() {
  const [category, setCategory] = useState("All products");
  const [currentPage, setCurrentPage] = useState(1);
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
  const categories = categoryDefinitions.map(({ name, count }) => ({ name, count }));
  const badgeCounts = products.reduce((counts, product) => {
    product.badges.forEach((badge) => {
      counts[badge] += 1;
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
                {pageProducts.map((product) => (
                  <a
                    className="catalog-product-card"
                    href="/contact"
                    aria-label={`Enquire about ${product.name}`}
                    key={product.id}
                  >
                    <div className="catalog-product-image">
                      <img
                        src={product.image}
                        alt={`Representative ${product.category.toLowerCase()} product`}
                        loading="lazy"
                      />
                      {product.badges.length > 0 && (
                        <div className="catalog-product-badges" aria-label="Product labels">
                          {product.badges.map((badge) => (
                            <span className={`catalog-badge badge-${badge.toLowerCase()}`} key={badge}>
                              {badge}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="catalog-product-content">
                      <div className="catalog-product-name">
                        <span className="eyebrow">{product.category}</span>
                        <h4>{product.name}</h4>
                      </div>
                      <span className="catalog-buy-button">
                        Buy now <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </a>
                ))}
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
