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
    title: "Solar Water Heater 01",
    description: "Add a product description here.",
    images: [
      "https://images.unsplash.com/photo-1787672358142-95e697dacd81?auto=format&fit=crop&w=1000&q=85",
      IMG.roof,
    ],
    buyNow: { label: "Buy now", href: "/contact" },
  },
  {
    category: "Solar Water Heater",
    tags: ["Bestseller"],
    title: "Solar Water Heater 02",
    description: "Add a product description here.",
    images: [IMG.roof, IMG.commercial],
    buyNow: { label: "Buy now", href: "/contact" },
  },
  {
    category: "Solar Water Heater",
    tags: ["Bestseller"],
    title: "Solar Water Heater 03",
    description: "Add a product description here.",
    images: [IMG.commercial, IMG.roof],
    buyNow: { label: "Buy now", href: "/contact" },
  },
  {
    category: "Solar Water Heater",
    tags: [],
    title: "Solar Water Heater 04",
    description: "Add a product description here.",
    images: [
      "https://images.unsplash.com/photo-1787672358142-95e697dacd81?auto=format&fit=crop&w=1000&q=85",
      IMG.commercial,
    ],
    buyNow: { label: "Buy now", href: "/contact" },
  },
  {
    category: "Solar Water Heater",
    tags: [],
    title: "Solar Water Heater 05",
    description: "Add a product description here.",
    images: [IMG.roof, IMG.commercial],
    buyNow: { label: "Buy now", href: "/contact" },
  },

  {
    category: "Solar Water Heater",
    tags: [],
    title: "Solar Water Heater 06",
    description: "Add a product description here.",
    images: [IMG.commercial, IMG.roof],
    buyNow: { label: "Buy now", href: "/contact" },
  },
  {
    category: "Solar Water Heater",
    tags: [],
    title: "Solar Water Heater 07",
    description: "Add a product description here.",
    images: [
      "https://images.unsplash.com/photo-1787672358142-95e697dacd81?auto=format&fit=crop&w=1000&q=85",
      IMG.roof,
    ],
    buyNow: { label: "Buy now", href: "/contact" },
  },
  {
    category: "Solar Water Heater",
    tags: [],
    title: "Solar Water Heater 08",
    description: "Add a product description here.",
    images: [IMG.roof, IMG.commercial],
    buyNow: { label: "Buy now", href: "/contact" },
  },
  {
    category: "Solar Water Heater",
    tags: [],
    title: "Solar Water Heater 09",
    description: "Add a product description here.",
    images: [IMG.commercial, IMG.roof],
    buyNow: { label: "Buy now", href: "/contact" },
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
    title: "Solar Heating Element 01",
    description: "Add a product description here.",
    images: [
      "https://images.unsplash.com/photo-1787672358142-95e697dacd81?auto=format&fit=crop&w=1000&q=85",
      IMG.project2,
    ],
    buyNow: { label: "Buy now", href: "/contact" },
  },
  {
    category: "Solar Heating Element",
    tags: [],
    title: "Solar Heating Element 02",
    description: "Add a product description here.",
    images: [IMG.project2, IMG.roof],
    buyNow: { label: "Buy now", href: "/contact" },
  },
  {
    category: "Heat Pump",
    tags: ["Bestseller"],
    title: "Heat Pump 01",
    description: "Add a product description here.",
    images: [
      "https://images.unsplash.com/photo-1776860150305-108ed577d7d4?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1776860155275-eee24bfb1dee?auto=format&fit=crop&w=1000&q=85",
    ],
    buyNow: { label: "Buy now", href: "/contact" },
  },
  {
    category: "Heat Pump",
    tags: ["New"],
    title: "Heat Pump 02",
    description: "Add a product description here.",
    images: [
      "https://images.unsplash.com/photo-1776860155275-eee24bfb1dee?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1780445392462-b7761551820c?auto=format&fit=crop&w=1000&q=85",
    ],
    buyNow: { label: "Buy now", href: "/contact" },
  },
  {
    category: "Heat Pump",
    tags: ["Trending"],
    title: "Heat Pump 03",
    description: "Add a product description here.",
    images: [
      "https://images.unsplash.com/photo-1780445392462-b7761551820c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1776860150305-108ed577d7d4?auto=format&fit=crop&w=1000&q=85",
    ],
    buyNow: { label: "Buy now", href: "/contact" },
  },
  {
    category: "Heat Pump",
    tags: [],
    title: "Heat Pump 04",
    description: "Add a product description here.",
    images: [
      "https://images.unsplash.com/photo-1776860150305-108ed577d7d4?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1780445392462-b7761551820c?auto=format&fit=crop&w=1000&q=85",
    ],
    buyNow: { label: "Buy now", href: "/contact" },
  },
  {
    category: "Heat Pump",
    tags: [],
    title: "Heat Pump 05",
    description: "Add a product description here.",
    images: [
      "https://images.unsplash.com/photo-1776860155275-eee24bfb1dee?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1780445392462-b7761551820c?auto=format&fit=crop&w=1000&q=85",
    ],
    buyNow: { label: "Buy now", href: "/contact" },
  },
  {
    category: "Heat Pump",
    tags: [],
    title: "Heat Pump 06",
    description: "Add a product description here.",
    images: [
      "https://images.unsplash.com/photo-1780445392462-b7761551820c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1776860155275-eee24bfb1dee?auto=format&fit=crop&w=1000&q=85",
    ],
    buyNow: { label: "Buy now", href: "/contact" },
  },
  {
    category: "Heating Element",
    tags: [],
    title: "Heating Element 01",
    description: "Add a product description here.",
    images: [
      "https://images.unsplash.com/photo-1787672358142-95e697dacd81?auto=format&fit=crop&w=1000&q=85",
      IMG.project2,
    ],
    buyNow: { label: "Buy now", href: "/contact" },
  },
  {
    category: "ETC TUBE",
    tags: [],
    title: "ETC TUBE 01",
    description: "Add a product description here.",
    images: [
      "https://images.unsplash.com/photo-1787672358142-95e697dacd81?auto=format&fit=crop&w=1000&q=85",
      IMG.roof,
    ],
    buyNow: { label: "Buy now", href: "/contact" },
  },
  {
    category: "Solar valve",
    tags: [],
    title: "Solar valve 01",
    description: "Add a product description here.",
    images: [IMG.project2, IMG.industrial],
    buyNow: { label: "Buy now", href: "/contact" },
  },
  {
    category: "Solar valve",
    tags: [],
    title: "Solar valve 02",
    description: "Add a product description here.",
    images: [IMG.industrial, IMG.commercial],
    buyNow: { label: "Buy now", href: "/contact" },
  },
  {
    category: "Solar valve",
    tags: [],
    title: "Solar valve 03",
    description: "Add a product description here.",
    images: [IMG.commercial, IMG.project2],
    buyNow: { label: "Buy now", href: "/contact" },
  },
  {
    category: "Solar valve",
    tags: [],
    title: "Solar valve 04",
    description: "Add a product description here.",
    images: [IMG.project2, IMG.roof],
    buyNow: { label: "Buy now", href: "/contact" },
  },
  {
    category: "Solar On Grid",
    tags: ["Bestseller"],
    title: "Solar On Grid 01",
    description: "Add a product description here.",
    images: [IMG.roof, IMG.residential],
    buyNow: { label: "Buy now", href: "/contact" },
  },
  {
    category: "Solar On Grid",
    tags: ["Recommended"],
    title: "Solar On Grid 02",
    description: "Add a product description here.",
    images: [IMG.residential, IMG.project2],
    buyNow: { label: "Buy now", href: "/contact" },
  },
  {
    category: "Solar On Grid",
    tags: ["New"],
    title: "Solar On Grid 03",
    description: "Add a product description here.",
    images: [IMG.project2, IMG.industrial],
    buyNow: { label: "Buy now", href: "/contact" },
  },
  {
    category: "Solar On Grid",
    tags: [],
    title: "Solar On Grid 04",
    description: "Add a product description here.",
    images: [IMG.industrial, IMG.roof],
    buyNow: { label: "Buy now", href: "/contact" },
  },
  {
    category: "Service",
    tags: [],
    title: "Service 01",
    description: "Add a product description here.",
    images: [IMG.industrial, IMG.commercial],
    buyNow: { label: "Buy now", href: "/contact" },
  },
  {
    category: "More Items",
    tags: [],
    title: "More Items 01",
    description: "Add a product description here.",
    images: [IMG.project2, IMG.roof],
    buyNow: { label: "Buy now", href: "/contact" },
  },
  {
    category: "More Items",
    tags: [],
    title: "More Items 02",
    description: "Add a product description here.",
    images: [IMG.roof, IMG.commercial],
    buyNow: { label: "Buy now", href: "/contact" },
  },
  {
    category: "More Items",
    tags: [],
    title: "More Items 03",
    description: "Add a product description here.",
    images: [IMG.commercial, IMG.residential],
    buyNow: { label: "Buy now", href: "/contact" },
  },
  {
    category: "More Items",
    tags: [],
    title: "More Items 04",
    description: "Add a product description here.",
    images: [IMG.residential, IMG.project2],
    buyNow: { label: "Buy now", href: "/contact" },
  },
  {
    category: "More Items",
    tags: [],
    title: "More Items 05",
    description: "Add a product description here.",
    images: [IMG.project2, IMG.roof],
    buyNow: { label: "Buy now", href: "/contact" },
  },
  {
    category: "More Items",
    tags: [],
    title: "More Items 06",
    description: "Add a product description here.",
    images: [IMG.roof, IMG.commercial],
    buyNow: { label: "Buy now", href: "/contact" },
  },
  {
    category: "More Items",
    tags: [],
    title: "More Items 07",
    description: "Add a product description here.",
    images: [IMG.commercial, IMG.residential],
    buyNow: { label: "Buy now", href: "/contact" },
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
