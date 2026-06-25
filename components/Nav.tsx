"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#about",    label: "Про мене" },
  { href: "#services", label: "Послуги" },
  { href: "#how",      label: "Як проходить терапія" },
  { href: "#reviews",  label: "Відгуки" },
  { href: "#faq",      label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className="nav-bar"
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          background: scrolled ? "rgba(240,235,227,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          boxShadow: scrolled ? "0 2px 24px rgba(44,44,44,0.07)" : "none",
          transition: "background 0.35s ease",
        }}
      >
        <div className="nav-inner">
          {/* Name */}
          <a href="#" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-playfair), serif", fontSize: "20px", fontWeight: 500, color: "var(--text)", letterSpacing: "-0.01em", lineHeight: 1 }}>
              Ірина Коваленко
            </span>
          </a>

          {/* Nav links */}
          <ul className="nav-links-list">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="nav-link" style={{ fontSize: "14px", color: "var(--text)", textDecoration: "none", letterSpacing: "0.01em", fontWeight: 400 }}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a href="#contact" className="btn-sage nav-cta-btn" style={{ display: "inline-block", padding: "10px 24px", borderRadius: "10px", fontSize: "13px", fontWeight: 500, letterSpacing: "0.01em", whiteSpace: "nowrap" }}>
            Записатись на консультацію
          </a>

          {/* Burger */}
          <button className="nav-burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Меню">
            <span style={{ transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none", transition: "transform 0.25s ease" }} />
            <span style={{ opacity: menuOpen ? 0 : 1, transition: "opacity 0.25s ease" }} />
            <span style={{ transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none", transition: "transform 0.25s ease" }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`nav-mobile-menu${menuOpen ? " open" : ""}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} className="nav-mobile-link" onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className="btn-sage" style={{ display: "block", padding: "13px 24px", borderRadius: "10px", fontSize: "14px", fontWeight: 500, textAlign: "center", marginTop: "8px" }} onClick={() => setMenuOpen(false)}>
          Записатись на консультацію
        </a>
      </div>
    </>
  );
}
