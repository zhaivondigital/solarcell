import React, { useMemo, useState } from "react";
import { Button, IMG, PageHero, SiteChrome } from "../components/SiteChrome.jsx";

const categories = [
  "Solar Water Heater",
  "Solar Heating Element",
  "Heat Pump",
  "Heating Element",
  "ETC TUBE",
  "Solar valve",
  "Solar On Grid",
  "Service",
];

const products = [
  ["Solar Water Heater", "Solar Water Heater", "Reliable hot water for homes and businesses.", IMG.roof, "From ₹64,999"],
  ["Solar Heating Element", "Solar Heating Element", "Efficient heating components made for solar systems.", IMG.project2, "From ₹8,999"],
  ["Heat Pump", "Heat Pump", "Energy-smart hot water with dependable year-round performance.", IMG.commercial, "From ₹1,29,999"],
  ["Heating Element", "Heating Element", "Replacement elements designed for consistent heat transfer.", IMG.industrial, "From ₹4,999"],
  ["ETC TUBE", "ETC TUBE", "High-efficiency evacuated tubes for better solar capture.", IMG.residential, "From ₹2,499"],
  ["Solar valve", "Solar valve", "Durable valves that keep your solar circulation precise.", IMG.project3, "From ₹1,299"],
  ["Solar On Grid", "Solar On Grid", "Turn your rooftop into a clean, connected power source.", IMG.hero, "From ₹1,49,999"],
  ["Solar Service", "Service", "Professional inspection, maintenance and system support.", IMG.cta, "Book a service"],
  ["Solar Heating Care", "Service", "Performance checks and seasonal care for existing systems.", IMG.roof, "From ₹2,999"],
  ["Home Solar Upgrade", "Solar On Grid", "A practical upgrade path for growing energy needs.", IMG.residential, "From ₹89,999"],
  ["Heat Pump Care", "Service", "Keep your heat pump efficient with expert servicing.", IMG.commercial, "Book a service"],
];

export default function Products() {
  const [category, setCategory] = useState("All products");
  const [page, setPage] = useState(1);
  const filtered = useMemo(
    () => category === "All products" ? products : products.filter((product) => product[1] === category),
    [category]
  );
  const pageCount = Math.max(1, Math.ceil(filtered.length / 9));
  const visibleProducts = filtered.slice((page - 1) * 9, page * 9);
  const chooseCategory = (value) => { setCategory(value); setPage(1); };

  return (
    <SiteChrome>
      <PageHero eyebrow="Solar solutions" title="Products for warmer water and smarter energy." copy="Explore efficient solar products and practical services designed around the way your property uses energy." image={IMG.roof} />
      <section data-page-reveal>
        <div className="container">
          <div className="page-intro">
            <div className="eyebrow">Solar product catalogue</div>
            <h2>Find the right fit for your system.</h2>
          </div>
          <div className="products-browser">
            <aside className="category-sidebar" aria-label="Product categories">
              <span className="category-label">Categories</span>
              {["All products", ...categories].map((item) => (
                <button className={category === item ? "active" : ""} key={item} onClick={() => chooseCategory(item)}>{item}</button>
              ))}
            </aside>
            <div>
              <select className="category-select" value={category} onChange={(event) => chooseCategory(event.target.value)} aria-label="Filter products">
                {["All products", ...categories].map((item) => <option key={item}>{item}</option>)}
              </select>
              <div className="product-page-grid compact-product-grid">
                {visibleProducts.map(([title, productCategory, copy, image, price]) => (
                  <article className="product-page-card" data-card key={title}>
                    <img src={image} alt={title} loading="lazy" />
                    <div>
                      <span className="eyebrow">{productCategory}</span>
                      <h3>{title}</h3>
                      <p className="muted">{copy}</p>
                      <strong className="product-price">{price}</strong>
                      <Button href="/contact" variant="dark">Buy now →</Button>
                    </div>
                  </article>
                ))}
              </div>
              {visibleProducts.length === 0 && <p className="muted empty-products">No products in this category yet.</p>}
              {pageCount > 1 && <div className="pagination" aria-label="Product pages">{Array.from({ length: pageCount }, (_, index) => index + 1).map((number) => <button className={page === number ? "active" : ""} key={number} onClick={() => setPage(number)}>{number}</button>)}</div>}
            </div>
          </div>
        </div>
      </section>
      <section className="sage-band" data-page-reveal>
        <div className="container two-col"><div><div className="eyebrow">Need help choosing?</div><h2>Tell us what you need. We will match the right product.</h2></div><Button href="/contact" variant="dark">Talk to an expert →</Button></div>
      </section>
    </SiteChrome>
  );
}
