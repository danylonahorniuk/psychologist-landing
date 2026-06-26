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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

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
          <a href="#" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-playfair), serif", fontSize: "20px", fontWeight: 500, color: "var(--text)", letterSpacing: "-0.01em", lineHeight: 1 }}>
              Ірина Коваленко
            </span>
          </a>

          <ul className="nav-links-list">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="nav-link" style={{ fontSize: "14px", color: "var(--text)", textDecoration: "none", letterSpacing: "0.01em", fontWeight: 400 }}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn-sage nav-cta-btn" style={{ display: "inline-block", padding: "10px 24px", borderRadius: "10px", fontSize: "13px", fontWeight: 500, letterSpacing: "0.01em", whiteSpace: "nowrap" }}>
            Записатись на консультацію
          </a>

          {/* Burger */}
          <button className="nav-burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Меню">
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <path d="M3 7h18M3 12h18M3 17h18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className={`nav-backdrop${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Sidebar drawer */}
      <div className={`nav-sidebar${menuOpen ? " open" : ""}`}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "44px" }}>
          <span style={{ fontFamily: "var(--font-playfair), serif", fontSize: "18px", fontWeight: 500, color: "var(--text)", letterSpacing: "-0.01em" }}>
            Ірина Коваленко
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Закрити меню"
            style={{ background: "none", border: "none", cursor: "pointer", padding: "6px", color: "var(--text)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "8px" }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <nav style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="sidebar-link"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, opacity: 0.3 }}>
                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </nav>

        {/* CTA at bottom */}
        <a
          href="#contact"
          className="btn-sage"
          style={{ display: "block", textAlign: "center", padding: "11px 24px", borderRadius: "10px", fontSize: "14px", fontWeight: 500, letterSpacing: "0.01em", marginTop: "28px" }}
          onClick={() => setMenuOpen(false)}
        >
          Записатись на консультацію
        </a>
      </div>
    </>
  );
}
