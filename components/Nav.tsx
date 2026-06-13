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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px 80px 18px 140px",
        background: scrolled ? "rgba(250,248,245,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        transition: "background 0.35s ease, border-color 0.35s ease",
      }}
    >
      {/* Logo — circular sage badge */}
      <a href="#" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
        <div style={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          background: "var(--sage)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M9 2C5.5 2 3 5 3 8.5C3 12 6 15 9 16C12 15 15 12 15 8.5C15 5 12.5 2 9 2Z" stroke="white" strokeWidth="1.2" fill="none"/>
            <path d="M9 16V8M9 8C9 8 6 6 6 4M9 8C9 8 12 6 12 4" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </div>
      </a>

      {/* Nav links — centered */}
      <ul style={{ display: "flex", alignItems: "center", gap: "40px", listStyle: "none", margin: 0, padding: 0 }}>
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="nav-link"
              style={{
                fontSize: "13px",
                color: "var(--text)",
                textDecoration: "none",
                letterSpacing: "0.01em",
                fontWeight: 400,
              }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        className="btn-sage"
        style={{
          display: "inline-block",
          padding: "11px 24px",
          borderRadius: "48px",
          fontSize: "13px",
          fontWeight: 500,
          letterSpacing: "0.01em",
          whiteSpace: "nowrap",
        }}
      >
        Записатись на консультацію
      </a>
    </nav>
  );
}
