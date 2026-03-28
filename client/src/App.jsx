import { useState, useEffect, useRef } from "react";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg"
import img3 from "./images/img3.jpg"

import hero1 from "./images/hero1.png"
import hero2 from "./images/hero2.png"


const G = "#64748b";      // Balanced slate gray
const CREAM = "#f8fafc";  // Bright, cool white
const INK = "#0f172a";    // Deep navy-ink

const ANNOUNCEMENTS = [
  "ODINARY NATIONS",
  "MADE FOR INDIA",
];

const PRODUCTS = [
  {
    id: 1, name: "Pawan Kalyan printed TShirt", subtitle: "",
    price: 799, originalPrice: 1299, soldOut: false, badge: "On stock",
    images: [
      img3, img1, img2,
    ],
    sizes: ["S", "M", "L", "XL"], fabric: "100% Cotton", weight: "210 GSM", knit: "Single Jersey", fit: "Regular",
    description: "Built for comfort and made to last. Power Star Pawan Kalyan T-shirt feels soft on the skin while offering a sturdy structure . Its breathable weave keeps you cool in warm Indian weather and cozy when it's mild, making it ideal for year round use.",
  },
];

const HERO_IMGS = [
  hero1, "https://images.pexels.com/photos/975006/pexels-photo-975006.jpeg?cs=srgb&dl=pexels-godisable-jacob-226636-975006.jpg&fm=jpg"
];

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Jost:wght@300;400;500;600;700&display=swap');
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
    background-color: ${CREAM};
    /* Subtle mesh gradient for depth */
    background-image: radial-gradient(at 0% 0%, rgba(203, 213, 225, 0.3) 0, transparent 50%),
                      radial-gradient(at 100% 100%, rgba(203, 213, 225, 0.3) 0, transparent 50%);
    font-family: 'Jost', sans-serif;
    color: ${INK};
    line-height: 1.6;
}

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }

input, select, button { font-family: 'Jost', sans-serif; }

/* Animations */
@keyframes fadeUp { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
@keyframes borderFlow { 0% { border-color: transparent; } 100% { border-color: ${G}; } }

.fu { animation: fadeUp .6s cubic-bezier(0.16, 1, 0.3, 1) both; }
.fu1 { animation-delay: 0.1s; }
.fu2 { animation-delay: 0.2s; }
.fu3 { animation-delay: 0.3s; }

/* Refined Aesthetic Cards */
.card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.4);
    transition: all .3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    border-radius: 12px;
}
.card:hover {
    transform: translateY(-4px) scale(1.01);
    background: #ffffff;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02);
    border-color: ${G};
}

.nlink {
    position: relative;
    transition: color .2s ease;
    text-decoration: none;
}
.nlink::after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    bottom: -2px;
    left: 0;
    background-color: ${G};
    transition: width 0.3s ease;
}
.nlink:hover::after { width: 100%; }
.nlink:hover { color: ${G} !important; }

/* Interactive Elements */
.szb {
    transition: all .2s ease;
    border: 1px solid #e2e8f0;
    background: #ffffff;
}
.szb:hover:not([disabled]) {
    border-color: ${INK} !important;
    background: ${CREAM} !important;
    box-shadow: inset 0 0 0 1px ${INK};
}

.addbtn {
    background: ${INK};
    color: #fff;
    border-radius: 8px;
    transition: transform .2s, filter .2s;
}
.addbtn:hover:not([disabled]) { filter: brightness(1.2); transform: translateY(-1px); }
.addbtn:active:not([disabled]) { transform: scale(0.98); }

.ci {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    transition: all .2s ease;
}
.ci:focus {
    border-color: ${G} !important;
    box-shadow: 0 0 0 4px rgba(71, 85, 105, 0.15) !important;
    outline: none;
    background: #fff;
}

.acbtn { transition: all .2s; border-radius: 6px; }
.acbtn:hover { background: #e2e8f0 !important; transform: translateX(3px); }
`;

/* ── helpers ── */
const STATES = ["Andhra Pradesh", "Telangana", "Karnataka", "Tamil Nadu", "Maharashtra", "Delhi", "Kerala", "West Bengal", "Rajasthan", "Gujarat", "Uttar Pradesh", "Madhya Pradesh", "Punjab", "Haryana", "Bihar", "Odisha", "Jharkhand", "Assam", "Chhattisgarh", "Other"];

/* ── AnnouncementBar ── */
function AnnouncementBar() {
  const [idx, setIdx] = useState(0);
  const [vis, setVis] = useState(true);

  useEffect(() => {
    if (!ANNOUNCEMENTS.length) return;

    const interval = setInterval(() => {
      setVis(false);

      setIdx((prev) => (prev + 1) % ANNOUNCEMENTS.length);

      setTimeout(() => setVis(true), 50);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      background: G,
      color: "#fff",
      textAlign: "center",
      padding: "10px 16px",
      fontSize: "11.5px",
      letterSpacing: ".14em",
      fontWeight: 500
    }}>
      <span style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(-5px)",
        transition: "opacity .3s ease, transform .3s ease",
        display: "inline-block"
      }}>
        {ANNOUNCEMENTS[idx]}
      </span>
    </div>
  );
}

/* ── Nav ── */
function Nav({ count, onCart, page, setPage }) {
  const iconStroke = "#94a3b8";

  return (
    <nav style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 clamp(24px, 6vw, 80px)",
      height: "72px",
      background: "rgba(255, 255, 255, 0.9)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      borderBottom: "1px solid #f1f5f9",
      position: "sticky",
      top: 0,
      zIndex: 100
    }}>
      {/* Left Section */}
      <div style={{ display: "flex", alignItems: "center", gap: "50px" }}>
        {/* Brand Name - Clean Serif */}
        <div
          onClick={() => setPage("home")}
          style={{
            cursor: "pointer",
            fontSize: "19px",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            letterSpacing: "0.01em",
            color: INK
          }}
        >
          Ordinary Nation
        </div>

        {/* Navigation Links */}
        <div style={{ display: "flex", gap: "28px" }}>
          {["home", "catalog"].map(p => (
            <span
              key={p}
              className="nlink"
              onClick={() => setPage(p)}
              style={{
                fontSize: "12px",
                fontWeight: 500,
                color: page === p ? INK : "#94a3b8",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                position: "relative",
                padding: "4px 0",
                transition: "color 0.2s ease"
              }}>
              {p}
              {/* Persistent Underline for Selected State */}
              {page === p && (
                <div style={{
                  position: "absolute",
                  bottom: "-2px",
                  left: "0",
                  width: "100%",
                  height: "1.5px",
                  background: G,
                  animation: "fadeIn 0.3s ease"
                }} />
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {/* Search & Profile Icons */}
        {[
          { icon: <circle cx="11" cy="11" r="8" />, path: "m21 21-4.35-4.35" },
          { path: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2", circle: <circle cx="12" cy="7" r="4" /> }
        ].map((item, idx) => (
          <div key={idx} className="szb" style={{ padding: "10px", borderRadius: "50%" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={iconStroke} strokeWidth="1.2">
              {item.circle} {item.icon} <path d={item.path} />
            </svg>
          </div>
        ))}

        {/* Cart Container */}
        <div
          onClick={onCart}
          className="szb"
          style={{
            position: "relative",
            padding: "10px",
            borderRadius: "50%",
            marginLeft: "4px"
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={INK} strokeWidth="1.2">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          {count > 0 && (
            <span style={{
              position: "absolute",
              top: "2px",
              right: "2px",
              background: INK,
              color: "#fff",
              borderRadius: "50%",
              width: "16px",
              height: "16px",
              fontSize: "9px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 600,
              border: `2px solid #fff` // Creates a "cutout" effect against the white nav
            }}>
              {count}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}

/* ── Hero ── */
function Hero({ onShop }) {
  const [idx, setIdx] = useState(0);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setIdx((prev) => (prev + 1) % HERO_IMGS.length);
    }, 4600);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (!HERO_IMGS.length) return;
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const handleDotClick = (i) => {
    setIdx(i);
    startAutoSlide(); // reset timer on manual change
  };

  return (
    <section
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
      style={{
        position: "relative",
        height: "clamp(440px,72vh,780px)",
        overflow: "hidden",
      }}
    >
      {HERO_IMGS.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          loading={i === 0 ? "eager" : "lazy"}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 30%",
            opacity: i === idx ? 1 : 0,
            transform: i === idx ? "scale(1)" : "scale(1.05)",
            transition: "opacity 1.2s ease, transform 1.6s ease",
            willChange: "opacity, transform",
          }}
        />
      ))}

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(130deg,rgba(15,23,42,.75) 0%,rgba(0,0,0,.25) 55%,transparent 100%)",
        }}
      />

      {/* Content */}
      <div
        className="fu"
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 clamp(24px,7vw,100px)",
          maxWidth: "640px",
        }}
      >
        <p
          style={{
            fontSize: "10.5px",
            letterSpacing: ".22em",
            color: "rgba(255,255,255,.7)",
            fontWeight: 500,
            marginBottom: "14px",
            textTransform: "uppercase",
          }}
        >
          From Telugu Yuvatha
        </p>

        <h1
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(40px, 6vw, 76px)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            color: "#fff",
            lineHeight: 1.08,
            fontWeight: 400,
            marginBottom: "20px",
          }}
        >
          Oridinay<br />
          <em>Nation</em>
        </h1>

        <p
          style={{
            fontSize: "14px",
            color: "rgba(255,255,255,.80)",
            lineHeight: 1.72,
            marginBottom: "34px",
            maxWidth: "400px",
            fontWeight: 300,
          }}
        >
        Indian weather - Budget Friendly - Peak Quality
          <br />
        </p>

        <button
          onClick={onShop}
          style={{
            alignSelf: "flex-start",
            padding: "14px 38px",
            background: "#fff",
            color: INK,
            border: "none",
            borderRadius: "2px",
            fontSize: "12.5px",
            fontWeight: 700,
            letterSpacing: ".12em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "transform .2s ease",
          }}
          onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.96)")}
          onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Shop All
        </button>
      </div>

      {/* Dots */}
      <div
        style={{
          position: "absolute",
          bottom: "22px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
        }}
      >
        {HERO_IMGS.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            style={{
              width: i === idx ? "24px" : "8px",
              height: "8px",
              borderRadius: "4px",
              background:
                i === idx ? "#fff" : "rgba(255,255,255,.4)",
              border: "none",
              cursor: "pointer",
              transition: "all .3s ease",
              padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
}

/* ── Marquee ── */
function Marquee() {
  const items = ["100% COTTON", "210 GSM", "MADE FOR INDIA", "FREE RETURNS", "SINGLE JERSEY KNIT", "YEAR-ROUND COMFORT"];
  const rep = [...items, ...items];
  return (
    <div style={{ background: G, overflow: "hidden", padding: "12px 0", borderTop: "1px solid rgba(255,255,255,.08)" }}>
      <div style={{ display: "flex", animation: "marquee 22s linear infinite", width: "max-content" }}>
        {rep.map((t, i) => (
          <span key={i} style={{ fontSize: "11px", letterSpacing: ".18em", fontWeight: 500, color: "rgba(255,255,255,.88)", padding: "0 32px", whiteSpace: "nowrap" }}>
            {t}<span style={{ opacity: .35, marginLeft: "32px" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── ProductCard ── */
function ProductCard({ p, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <div className="card" onClick={() => onClick(p)} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: "#eeeee9", borderRadius: "8px", overflow: "hidden" }}>
      <div style={{ position: "relative", paddingTop: "118%", overflow: "hidden" }}>
        <img src={p.images[hov && p.images[1] ? 1 : 0]} alt={p.name}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "transform .4s ease", transform: hov ? "scale(1.05)" : "scale(1)" }} />
        {p.badge && <span style={{ position: "absolute", top: "12px", right: "12px", background: "#fff", borderRadius: "20px", padding: "4px 12px", fontSize: "11px", fontWeight: 600, letterSpacing: ".03em" }}>{p.badge}</span>}
      </div>
      <div style={{ padding: "14px 16px 18px", background: CREAM }}>
        <p style={{ fontSize: "13.5px", fontWeight: 500, marginBottom: "5px" }}>{p.name} — {p.subtitle}</p>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <span style={{ fontSize: "14px", fontWeight: 700 }}>₹{p.price}.00</span>
          <span style={{ fontSize: "12px", color: "#aaa", textDecoration: "line-through" }}>₹{p.originalPrice}.00</span>
        </div>
      </div>
    </div>
  );
}

/* ── CatalogGrid ── */
function CatalogGrid({ onProduct }) {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(24px,4vw,56px) clamp(16px,4vw,40px)" }}>
      <h2 className="fu" style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(26px,4vw,38px)", fontWeight: 400, marginBottom: "36px" }}>All Products</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(230px,1fr))", gap: "20px" }}>
        {PRODUCTS.map((p, i) => (
          <div key={p.id} className={`fu${i % 4}`}><ProductCard p={p} onClick={onProduct} /></div>
        ))}
      </div>
    </div>
  );
}

/* ── Accordion ── */
function Accordion({ title, content }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderTop: "1px solid #e0dfd8" }}>
      <button className="acbtn" onClick={() => setOpen(o => !o)}
        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", background: "none", border: "none", cursor: "pointer", fontSize: "13.5px", fontWeight: 500, textAlign: "left", borderRadius: "4px" }}>
        {title}
        <span style={{ transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform .22s", fontSize: "15px", color: "#888" }}>⌄</span>
      </button>
      <div style={{ maxHeight: open ? "200px" : "0", overflow: "hidden", transition: "max-height .32s ease" }}>
        <p style={{ fontSize: "13px", color: "#666", lineHeight: "1.75", paddingBottom: "16px" }}>{content}</p>
      </div>
    </div>
  );
}

/* ── ProductPage ── */
function ProductPage({ p, onAdd, onBack }) {
  const [aImg, setAImg] = useState(0);
  const [size, setSize] = useState(null);
  const [qty, setQty] = useState(1);
  const [szErr, setSzErr] = useState(false);
  const [added, setAdded] = useState(false);
  const [zoom, setZoom] = useState(false);

  const handleAdd = () => {
    if (!size) { setSzErr(true); setTimeout(() => setSzErr(false), 2000); return; }
    onAdd({ product: p, size, qty });
    setAdded(true); setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(20px,4vw,52px) clamp(16px,4vw,40px)" }}>
      <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "13px", color: "#888", marginBottom: "24px", display: "flex", alignItems: "center", gap: "6px" }}>
        ← Back
      </button>
      <div style={{ display: "flex", gap: "clamp(24px,4vw,52px)", flexWrap: "wrap" }}>
        {/* images */}
        <div style={{ flex: "1 1 50%", minWidth: "280px", display: "flex", gap: "10px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {p.images.map((src, i) => (
              <div key={i} onClick={() => setAImg(i)}
                style={{ width: "64px", height: "76px", borderRadius: "6px", overflow: "hidden", border: i === aImg ? `2.5px solid ${INK}` : "2.5px solid transparent", cursor: "pointer", flexShrink: 0, transition: "border-color .15s" }}>
                <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            ))}
          </div>
          <div onClick={() => setZoom(z => !z)}
            style={{ flex: 1, borderRadius: "10px", overflow: "hidden", background: "#e8e8e3", cursor: zoom ? "zoom-out" : "zoom-in", minHeight: "480px", position: "relative" }}>
            <img src={p.images[aImg]} alt={p.name}
              style={{ width: "100%", height: "100%", objectFit: "cover", transform: zoom ? "scale(1.45)" : "scale(1)", transition: "transform .38s ease" }} />
            <span style={{ position: "absolute", bottom: "12px", right: "12px", background: "rgba(255,255,255,.8)", borderRadius: "20px", padding: "3px 11px", fontSize: "11px", color: "#555" }}>
              {aImg + 1} / {p.images.length}
            </span>
          </div>
        </div>
        {/* details */}
        <div className="fu" style={{ flex: "1 1 310px", minWidth: "260px" }}>
          <p style={{ fontSize: "10.5px", letterSpacing: ".18em", color: "#999", textTransform: "uppercase", marginBottom: "8px" }}>Ordinary Nation</p>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(24px,4vw,33px)", fontWeight: 400, lineHeight: 1.18, marginBottom: "16px" }}>
            {p.name}<br /><em style={{ color: "#777" }}>— {p.subtitle}</em>
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
            <span style={{ fontSize: "22px", fontWeight: 700 }}>₹{p.price}.00</span>
            <span style={{ fontSize: "15px", color: "#aaa", textDecoration: "line-through" }}>₹{p.originalPrice}.00</span>
            <span style={{ background: G, color: "#fff", borderRadius: "20px", padding: "3px 10px", fontSize: "11px", fontWeight: 600 }}>{p.badge}</span>
          </div>

          {/* sizes */}
          <div style={{ marginBottom: "24px" }}>
            <p style={{ fontSize: "11.5px", fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: szErr ? "#c0392b" : "#888", marginBottom: "10px", transition: "color .2s" }}>
              {szErr ? "⚠ Please select a size" : `Size${size ? " — " + size : ""}`}
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {p.sizes.map(s => (
                <button key={s} className="szb" disabled={p.soldOut} onClick={() => !p.soldOut && setSize(s)}
                  style={{
                    width: "52px", height: "52px", borderRadius: "6px",
                    border: size === s ? `2px solid ${INK}` : `1px solid ${szErr ? "#c0392b" : "#d0cfc8"}`,
                    background: size === s ? INK : "#fff", color: size === s ? "#fff" : INK,
                    fontSize: "13px", fontWeight: 500,
                    opacity: p.soldOut ? .45 : 1, cursor: p.soldOut ? "not-allowed" : "pointer", position: "relative"
                  }}>
                  {s}
                  {p.soldOut && <span style={{ position: "absolute", top: "50%", left: "50%", width: "70%", height: "1px", background: "#999", transform: "translate(-50%,-50%) rotate(-45deg)" }} />}
                </button>
              ))}
            </div>
          </div>

          {/* qty + add */}
          <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", border: "1px solid #d0cfc8", borderRadius: "6px", overflow: "hidden", height: "52px" }}>
              <button onClick={() => setQty(q => Math.max(1, q - 1))} style={{ width: "42px", height: "100%", background: "none", border: "none", cursor: "pointer", fontSize: "20px", color: "#555" }}>−</button>
              <span style={{ width: "32px", textAlign: "center", fontSize: "14px" }}>{qty}</span>
              <button onClick={() => setQty(q => q + 1)} style={{ width: "42px", height: "100%", background: "none", border: "none", cursor: "pointer", fontSize: "20px", color: "#555" }}>+</button>
            </div>
            <button className="addbtn" onClick={handleAdd} disabled={p.soldOut}
              style={{
                flex: 1, height: "52px", borderRadius: "6px",
                background: p.soldOut ? "#e0dfd8" : added ? G : INK,
                color: p.soldOut ? "#aaa" : "#fff", border: "none",
                cursor: p.soldOut ? "not-allowed" : "pointer",
                fontSize: "13px", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase"
              }}>
              {p.soldOut ? "Sold Out" : added ? "Added ✓" : "Add to Cart"}
            </button>
          </div>

          <p style={{ fontSize: "12px", color: G, textAlign: "center", marginBottom: "28px" }}>🚚 Free shipping on orders above ₹1000</p>
          <p style={{ fontSize: "13px", color: "#555", lineHeight: "1.78", marginBottom: "20px" }}>{p.description}</p>

          {/* pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "28px" }}>
            {[["Fabric", p.fabric], ["Weight", p.weight], ["Knit", p.knit], ["Fit", p.fit]].map(([k, v]) => (
              <span key={k} style={{ padding: "5px 14px", border: "1px solid #e0dfd8", borderRadius: "20px", fontSize: "12px", color: "#555" }}>
                <span style={{ color: "#aaa" }}>{k}:</span> <strong style={{ color: INK }}>{v}</strong>
              </span>
            ))}
          </div>

          <div style={{ borderBottom: "1px solid #e0dfd8" }}>
            {[
              ["Materials & Care", "100% combed ring-spun cotton, 210 GSM single jersey knit. Machine wash cold. Tumble dry low. Do not bleach or iron on print."],
              ["When will I get my order?", "Orders dispatched within 2–3 business days. Standard delivery 5–7 business days across India."],
              ["Shipping & Returns", "Free shipping above ₹1000. Easy 7-day returns on unworn items. COD available. Refund within 5–7 business days."],
            ].map(([t, c]) => <Accordion key={t} title={t} content={c} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── CartDrawer ── */
function CartDrawer({ open, onClose, items, onRemove, onCheckout }) {
  const total = items.reduce((s, i) => s + i.product.price * i.qty, 0);
  return (
    <>
      {open && <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.38)", zIndex: 200, animation: "fadeIn .22s ease" }} />}
      <div style={{
        position: "fixed", top: 0, right: 0, bottom: 0, width: "min(400px,100vw)", background: "#fff", zIndex: 201,
        transform: open ? "translateX(0)" : "translateX(100%)", transition: "transform .33s cubic-bezier(.4,0,.2,1)",
        display: "flex", flexDirection: "column", boxShadow: "-6px 0 40px rgba(0,0,0,.10)"
      }}>
        <div style={{ padding: "22px 24px", borderBottom: "1px solid #e8e8e3", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "'Playfair Display',serif", fontSize: "20px" }}>Your Cart</span>
          <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "20px", color: "#888", lineHeight: 1 }}>✕</button>
        </div>
        <div style={{ flex: 1, padding: "20px 24px", overflowY: "auto" }}>
          {items.length === 0 ? (
            <div style={{ textAlign: "center", paddingTop: "60px" }}>
              <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "22px", marginBottom: "8px" }}>Your cart is empty</p>
              <p style={{ fontSize: "13px", color: "#888", marginBottom: "28px" }}>Have an account? <span style={{ textDecoration: "underline", cursor: "pointer" }}>Log in</span> to check out faster.</p>
              <button onClick={onClose} style={{ background: INK, color: "#fff", border: "none", padding: "14px 36px", borderRadius: "6px", fontSize: "13px", fontWeight: 600, cursor: "pointer", letterSpacing: ".06em" }}>Continue Shopping</button>
            </div>
          ) : items.map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "14px", marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid #f0f0ea" }}>
              <img src={item.product.images[0]} alt="" style={{ width: "70px", height: "82px", objectFit: "cover", borderRadius: "6px", background: "#f0efea", flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: "13.5px", fontWeight: 600, marginBottom: "4px" }}>{item.product.name} — {item.product.subtitle}</p>
                <p style={{ fontSize: "12px", color: "#888", marginBottom: "8px" }}>Size: {item.size} · Qty: {item.qty}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "14px", fontWeight: 700 }}>₹{item.product.price * item.qty}</span>
                  <button onClick={() => onRemove(i)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "12px", color: "#bbb", textDecoration: "underline" }}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {items.length > 0 && (
          <div style={{ padding: "20px 24px", borderTop: "1px solid #e8e8e3" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
              <span style={{ fontSize: "13px", color: "#666" }}>Subtotal</span>
              <span style={{ fontSize: "13px" }}>₹{total}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "18px" }}>
              <span style={{ fontSize: "13px", color: "#666" }}>Shipping</span>
              <span style={{ fontSize: "13px", color: total >= 1000 ? G : "#888" }}>{total >= 1000 ? "FREE" : "Calculated at checkout"}</span>
            </div>
            <button onClick={onCheckout} style={{ width: "100%", background: G, color: "#fff", border: "none", padding: "16px", borderRadius: "6px", fontSize: "14px", fontWeight: 700, cursor: "pointer", letterSpacing: ".06em" }}>
              Checkout — ₹{total}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

/* ── CheckoutPage ── */
function CheckoutPage({ items, onSuccess }) {
  const total = items.reduce((s, i) => s + i.product.price * i.qty, 0);
  const shipping = total >= 1000 ? 0 : 80;
  const [f, setF] = useState({ email: "", firstName: "", lastName: "", address: "", apt: "", city: "", state: "Andhra Pradesh", pin: "", phone: "", payment: "razorpay", billing: "same", discount: "" });
  const [err, setErr] = useState({});
  const [done, setDone] = useState(false);

  const upd = (k, v) => setF(prev => ({ ...prev, [k]: v }));
  const inSt = (k) => ({ width: "100%", padding: "13px 16px", border: `1px solid ${err[k] ? "#c0392b" : "#d5d4ce"}`, borderRadius: "8px", fontSize: "13.5px", background: "#fff", color: INK });

  const validate = () => {
    const e = {};
    if (!f.email) e.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(f.email) && !/^\d{10}$/.test(f.email)) e.email = "Enter valid email or 10-digit phone";
    if (!f.lastName) e.lastName = "Required";
    if (!f.address) e.address = "Required";
    if (!f.city) e.city = "Required";
    if (!f.pin || !/^\d{6}$/.test(f.pin)) e.pin = "Enter 6-digit PIN";
    if (!f.phone || !/^\d{10}$/.test(f.phone)) e.phone = "Enter 10-digit number";
    setErr(e);
    return Object.keys(e).length === 0;
  };

  const handlePay = () => { if (validate()) { setDone(true); setTimeout(onSuccess, 1200); } };

  if (done) return (
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "16px", padding: "60px 24px" }}>
      <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: G, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ color: "#fff", fontSize: "28px" }}>✓</span>
      </div>
      <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "22px" }}>Redirecting to payment…</p>
    </div>
  );

  return (
    <div style={{ maxWidth: "1060px", margin: "0 auto", padding: "clamp(20px,4vw,48px) clamp(16px,4vw,40px)", display: "flex", gap: "clamp(24px,4vw,48px)", flexWrap: "wrap-reverse", alignItems: "flex-start" }}>
      {/* form */}
      <div style={{ flex: "1 1 380px", minWidth: "260px" }}>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "22px", fontWeight: 400, marginBottom: "28px" }}>Ordinary nation</h2>

        {/* Contact */}
        <div style={{ marginBottom: "28px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: 600 }}>Contact</h3>
            <span style={{ fontSize: "12px", color: G, cursor: "pointer", textDecoration: "underline" }}>Sign in</span>
          </div>
          <input className="ci" value={f.email} onChange={e => upd("email", e.target.value)} placeholder="Email or mobile phone number" style={inSt("email")} />
          {err.email && <p style={{ fontSize: "11px", color: "#c0392b", marginTop: "4px" }}>{err.email}</p>}
          <label style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "10px", fontSize: "12px", color: "#666", cursor: "pointer" }}>
            <input type="checkbox" style={{ accentColor: G }} /> Email me with news and offers
          </label>
        </div>

        {/* Delivery */}
        <div style={{ marginBottom: "28px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "16px" }}>Delivery</h3>
          <select className="ci" value="India" style={{ ...inSt(), appearance: "none", cursor: "pointer", marginBottom: "12px" }}>
            <option>India</option>
          </select>
          <div style={{ display: "flex", gap: "12px", marginBottom: "12px" }}>
            <input className="ci" placeholder="First name (optional)" value={f.firstName} onChange={e => upd("firstName", e.target.value)} style={{ ...inSt(), flex: 1 }} />
            <div style={{ flex: 1 }}>
              <input className="ci" placeholder="Last name" value={f.lastName} onChange={e => upd("lastName", e.target.value)} style={{ ...inSt("lastName"), width: "100%" }} />
              {err.lastName && <p style={{ fontSize: "11px", color: "#c0392b", marginTop: "4px" }}>{err.lastName}</p>}
            </div>
          </div>
          <div style={{ marginBottom: "12px" }}>
            <input className="ci" placeholder="Address" value={f.address} onChange={e => upd("address", e.target.value)} style={inSt("address")} />
            {err.address && <p style={{ fontSize: "11px", color: "#c0392b", marginTop: "4px" }}>{err.address}</p>}
          </div>
          <input className="ci" placeholder="Apartment, suite, etc. (optional)" value={f.apt} onChange={e => upd("apt", e.target.value)} style={{ ...inSt(), marginBottom: "12px" }} />
          <div style={{ display: "flex", gap: "12px", marginBottom: "12px" }}>
            <div style={{ flex: 1 }}>
              <input className="ci" placeholder="City" value={f.city} onChange={e => upd("city", e.target.value)} style={{ ...inSt("city"), width: "100%" }} />
              {err.city && <p style={{ fontSize: "11px", color: "#c0392b", marginTop: "4px" }}>{err.city}</p>}
            </div>
            <select className="ci" value={f.state} onChange={e => upd("state", e.target.value)} style={{ flex: 1, ...inSt(), appearance: "none" }}>
              {STATES.map(s => <option key={s}>{s}</option>)}
            </select>
            <div style={{ flex: 1 }}>
              <input className="ci" placeholder="PIN code" value={f.pin} onChange={e => upd("pin", e.target.value.replace(/\D/g, "").slice(0, 6))} style={{ ...inSt("pin"), width: "100%" }} />
              {err.pin && <p style={{ fontSize: "11px", color: "#c0392b", marginTop: "4px" }}>{err.pin}</p>}
            </div>
          </div>
          <div>
            <input className="ci" placeholder="Phone" value={f.phone} onChange={e => upd("phone", e.target.value.replace(/\D/g, "").slice(0, 10))} style={inSt("phone")} />
            {err.phone && <p style={{ fontSize: "11px", color: "#c0392b", marginTop: "4px" }}>{err.phone}</p>}
          </div>
          <label style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "12px", fontSize: "12px", color: "#666", cursor: "pointer" }}>
            <input type="checkbox" style={{ accentColor: G }} /> Save this information for next time
          </label>
        </div>

        {/* Shipping method */}
        <div style={{ marginBottom: "28px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "16px" }}>Shipping method</h3>
          <div style={{ background: "#f7f6f2", border: "1px solid #e0dfd8", borderRadius: "8px", padding: "16px", fontSize: "13px", color: "#888" }}>
            Enter your shipping address to view available shipping methods.
          </div>
        </div>

        {/* Payment */}
        <div style={{ marginBottom: "28px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "6px" }}>Payment</h3>
          <p style={{ fontSize: "12px", color: "#888", marginBottom: "14px" }}>All transactions are secure and encrypted.</p>
          <div style={{ border: "1px solid #d0cfc8", borderRadius: "8px", overflow: "hidden" }}>
            {[
              { id: "razorpay", label: "Razorpay Secure (UPI, Cards, Int'l Cards, Wallets)", icons: ["UPI", "VISA", "MC"] },
              { id: "cod", label: "Cash on Delivery (COD)", icons: [] },
            ].map((opt, i) => (
              <label key={opt.id} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "16px", background: f.payment === opt.id ? "#f7faf8" : "#fff", cursor: "pointer", borderTop: i > 0 ? "1px solid #e8e8e3" : "none" }}>
                <input type="radio" name="payment" value={opt.id} checked={f.payment === opt.id} onChange={() => upd("payment", opt.id)} style={{ accentColor: G, width: "16px", height: "16px" }} />
                <span style={{ flex: 1, fontSize: "13.5px", fontWeight: 500 }}>{opt.label}</span>
                <div style={{ display: "flex", gap: "6px" }}>
                  {opt.icons.map(ic => <span key={ic} style={{ background: "#f0f0ea", border: "1px solid #e0e0d8", borderRadius: "4px", padding: "2px 7px", fontSize: "10px", fontWeight: 700, color: "#555" }}>{ic}</span>)}
                </div>
              </label>
            ))}
          </div>
          {f.payment === "razorpay" && <p style={{ fontSize: "12px", color: "#888", textAlign: "center", marginTop: "10px" }}>You'll be redirected to Razorpay Secure to complete your purchase.</p>}
        </div>

        {/* Billing */}
        <div style={{ marginBottom: "32px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "16px" }}>Billing address</h3>
          <div style={{ border: "1px solid #d0cfc8", borderRadius: "8px", overflow: "hidden" }}>
            {[{ id: "same", label: "Same as shipping address" }, { id: "different", label: "Use a different billing address" }].map((opt, i) => (
              <label key={opt.id} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "16px", background: f.billing === opt.id ? "#f7faf8" : "#fff", cursor: "pointer", borderTop: i > 0 ? "1px solid #e8e8e3" : "none" }}>
                <input type="radio" name="billing" value={opt.id} checked={f.billing === opt.id} onChange={() => upd("billing", opt.id)} style={{ accentColor: G, width: "16px", height: "16px" }} />
                <span style={{ fontSize: "13.5px", fontWeight: 500 }}>{opt.label}</span>
              </label>
            ))}
          </div>
        </div>

        <button onClick={handlePay} style={{ width: "100%", background: "#1b6be8", color: "#fff", border: "none", padding: "17px", borderRadius: "8px", fontSize: "15px", fontWeight: 700, cursor: "pointer", letterSpacing: ".04em", marginBottom: "24px", transition: "background .2s" }}>
          Pay now
        </button>

        <div style={{ display: "flex", gap: "18px", flexWrap: "wrap", justifyContent: "center" }}>
          {["Refund policy", "Shipping", "Privacy policy", "Terms of service", "Contact"].map(l => (
            <span key={l} style={{ fontSize: "11.5px", color: "#bbb", cursor: "pointer", textDecoration: "underline" }}>{l}</span>
          ))}
        </div>
      </div>

      {/* order summary */}
      <div style={{ flex: "0 1 340px", minWidth: "260px", position: "sticky", top: "76px" }}>
        <div style={{ background: "#f7f6f2", borderRadius: "10px", padding: "24px", border: "1px solid #e5e4df" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 600, marginBottom: "20px", letterSpacing: ".04em" }}>Order Summary</h3>
          {items.map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "14px", marginBottom: "16px" }}>
              <div style={{ position: "relative", flexShrink: 0 }}>
                <img src={item.product.images[0]} alt="" style={{ width: "56px", height: "66px", objectFit: "cover", borderRadius: "6px", background: "#e8e8e3" }} />
                <span style={{ position: "absolute", top: "-6px", right: "-6px", background: INK, color: "#fff", borderRadius: "50%", width: "18px", height: "18px", fontSize: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>{item.qty}</span>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: "13px", fontWeight: 600, marginBottom: "3px" }}>{item.product.name} — {item.product.subtitle}</p>
                <p style={{ fontSize: "12px", color: "#888" }}>{item.size}</p>
              </div>
              <span style={{ fontSize: "14px", fontWeight: 600 }}>₹{item.product.price * item.qty}</span>
            </div>
          ))}
          <div style={{ borderTop: "1px solid #e0dfd8", paddingTop: "16px", marginTop: "8px" }}>
            <div style={{ display: "flex", gap: "8px", marginBottom: "14px" }}>
              <input className="ci" placeholder="Discount code" value={f.discount} onChange={e => upd("discount", e.target.value)}
                style={{ flex: 1, padding: "11px 14px", border: "1px solid #d5d4ce", borderRadius: "6px", fontSize: "13px", background: "#fff" }} />
              <button style={{ padding: "11px 18px", border: "1px solid #d5d4ce", borderRadius: "6px", background: "#fff", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>Apply</button>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <span style={{ fontSize: "13px", color: "#666" }}>Subtotal</span>
              <span style={{ fontSize: "13px", fontWeight: 500 }}>₹{total}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
              <span style={{ fontSize: "13px", color: "#666" }}>Shipping</span>
              <span style={{ fontSize: "13px", color: shipping === 0 ? G : "#888" }}>{shipping === 0 ? "FREE" : "₹" + shipping}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #e0dfd8", paddingTop: "14px" }}>
              <span style={{ fontSize: "15px", fontWeight: 700 }}>Total</span>
              <div style={{ textAlign: "right" }}>
                <p style={{ fontSize: "11px", color: "#aaa", marginBottom: "2px" }}>INR</p>
                <span style={{ fontSize: "18px", fontWeight: 800 }}>₹{total + shipping}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── OrderSuccess ── */
function OrderSuccess({ onHome }) {
  return (
    <div className="fu" style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "20px", padding: "60px 24px", textAlign: "center" }}>
      <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: G, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ color: "#fff", fontSize: "34px" }}>✓</span>
      </div>
      <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(28px,5vw,40px)", fontWeight: 400 }}>Order Placed!</h2>
      <p style={{ fontSize: "14px", color: "#666", maxWidth: "380px", lineHeight: 1.7 }}>Thank you for shopping with Ordinary Nation. A confirmation will be sent to your email/phone shortly.</p>
      <button onClick={onHome} style={{ marginTop: "8px", padding: "14px 40px", background: INK, color: "#fff", border: "none", borderRadius: "6px", fontSize: "13px", fontWeight: 600, cursor: "pointer", letterSpacing: ".08em" }}>
        Continue Shopping
      </button>
    </div>
  );
}

/* ── Footer ── */
function Footer() {
  return (
    <footer style={{ background: "#fff", borderTop: "1px solid #f1f5f9" }}>
      {/* Top Section: Branding & Links */}
      <div style={{
        padding: "clamp(60px, 8vw, 100px) clamp(24px, 5vw, 80px)",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "48px"
      }}>
        {/* Brand Column */}
        <div style={{ maxWidth: "300px" }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "24px",
            fontWeight: 700,
            marginBottom: "16px",
            color: INK
          }}>
            Ordinary Nation
          </h2>
          <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.8" }}>
            Curating objects of quiet utility and timeless form. Designed for the deliberate life.
          </p>
        </div>

        {/* Quick Links */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: ".1em", color: INK, textTransform: "uppercase", marginBottom: "8px" }}>Shop</span>
          {["New Arrivals", "Catalog", "Archives", "Essentials"].map(link => (
            <a key={link} className="nlink" style={{ fontSize: "13px", color: "#64748b", textDecoration: "none" }}>{link}</a>
          ))}
        </div>

        {/* Support */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: ".1em", color: INK, textTransform: "uppercase", marginBottom: "8px" }}>Assistance</span>
          {["Shipping", "Returns", "Contact", "Size Guide"].map(link => (
            <a key={link} className="nlink" style={{ fontSize: "13px", color: "#64748b", textDecoration: "none" }}>{link}</a>
          ))}
        </div>

        {/* Newsletter Column */}
        <div style={{ minWidth: "280px" }}>
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: ".1em", color: INK, textTransform: "uppercase", marginBottom: "16px", display: "block" }}>The Bulletin</span>
          <p style={{ fontSize: "13px", color: "#64748b", marginBottom: "20px" }}>Sign up for early access and studio updates.</p>
          <div style={{ display: "flex", borderBottom: `1px solid ${INK}`, paddingBottom: "8px" }}>
            <input
              placeholder="Email address"
              style={{
                flex: 1,
                border: "none",
                fontSize: "13px",
                background: "transparent",
                outline: "none",
                fontFamily: "'Jost', sans-serif"
              }}
            />
            <button style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: ".1em",
              textTransform: "uppercase",
              color: INK
            }}>
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section: Copyright & Social */}
      <div style={{
        padding: "32px clamp(24px, 5vw, 80px)",
        borderTop: "1px solid #f1f5f9",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "20px"
      }}>
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <span style={{ fontSize: "11px", color: "#94a3b8", letterSpacing: ".05em" }}>© 2026 ORDINARY NATION</span>
          <span className="nlink" style={{ fontSize: "11px", color: "#94a3b8", cursor: "pointer" }}>Privacy</span>
          <span className="nlink" style={{ fontSize: "11px", color: "#94a3b8", cursor: "pointer" }}>Terms</span>
        </div>

        {/* Social Icons */}
        <div style={{ display: "flex", gap: "16px" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.5" style={{ cursor: "pointer" }}>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>

        </div>
      </div>
    </footer>
  );
}
/* ── APP ── */
export default function App() {
  const [page, setPage] = useState("home");
  const [selProduct, setSelProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const goTo = (p, scroll = true) => {
    setPage(p);
    if (scroll) window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const addToCart = (item) => {
    setCartItems(prev => {
      const idx = prev.findIndex(i => i.product.id === item.product.id && i.size === item.size);
      if (idx >= 0) { const u = [...prev]; u[idx] = { ...u[idx], qty: u[idx].qty + item.qty }; return u; }
      return [...prev, item];
    });
    setCartOpen(true);
  };

  const removeFromCart = (idx) => setCartItems(prev => prev.filter((_, i) => i !== idx));

  const openProduct = (p) => { setSelProduct(p); goTo("product"); };

  return (
    <>
      <style>{CSS}</style>
      <AnnouncementBar />
      <Nav count={cartItems.reduce((s, i) => s + i.qty, 0)} onCart={() => setCartOpen(true)} page={page} setPage={p => goTo(p)} />
      <main>
        {page === "home" && <><Hero onShop={() => goTo("catalog")} /><Marquee /><CatalogGrid onProduct={openProduct} /></>}
        {page === "catalog" && <CatalogGrid onProduct={openProduct} />}
        {page === "product" && selProduct && <ProductPage p={selProduct} onAdd={addToCart} onBack={() => goTo("catalog")} />}
        {page === "checkout" && <CheckoutPage items={cartItems} onSuccess={() => { setCartItems([]); goTo("success"); }} />}
        {page === "success" && <OrderSuccess onHome={() => goTo("home")} />}
      </main>
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} items={cartItems} onRemove={removeFromCart}
        onCheckout={() => { setCartOpen(false); goTo("checkout"); }} />
    </>
  );
}
