export default function Footer() {
  const navLinks = [
    { href: "#about",   label: "Про мене" },
    { href: "#services", label: "Послуги" },
    { href: "#how",     label: "Як проходить терапія" },
    { href: "#pricing", label: "Тарифи" },
    { href: "#reviews", label: "Відгуки" },
    { href: "#faq",     label: "FAQ" },
  ];

  const socials = [
    {
      href: "#",
      label: "Instagram",
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="3" y="3" width="12" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.3"/>
          <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.3"/>
          <circle cx="12.8" cy="5.2" r="0.8" fill="currentColor"/>
        </svg>
      ),
    },
    {
      href: "#",
      label: "Telegram",
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M2 9L15.5 3.5 10 15.5 8.5 10 2 9Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.5 10L15.5 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  return (
    <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <style>{`
        .footer-nav-link {
          font-size: 13px;
          color: var(--muted);
          text-decoration: none;
          transition: color 0.2s ease;
          font-weight: 300;
        }
        .footer-nav-link:hover { color: var(--text); }
        .footer-social {
          width: 40px; height: 40px;
          border-radius: 50%;
          border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          color: var(--muted);
          text-decoration: none;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .footer-social:hover {
          border-color: var(--sage);
          color: var(--sage);
        }
      `}</style>

      {/* Main footer */}
      <div style={{ padding: "64px 80px 48px", maxWidth: "1280px", margin: "0 auto" }}>
        <div className="footer-grid">

          {/* Col 1 — Brand */}
          <div>
            <a href="#" style={{ fontFamily: "var(--font-playfair), serif", fontSize: "22px", color: "var(--text)", textDecoration: "none", fontWeight: 500, letterSpacing: "-0.01em", display: "block", marginBottom: "16px" }}>
              Ірина Коваленко
            </a>
            <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, fontWeight: 300, maxWidth: "260px", marginBottom: "28px" }}>
              Психолог і коуч. Допомагаю знайти опору, ясність і рухатись вперед із внутрішньою свободою.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              {socials.map((s) => (
                <a key={s.label} href={s.href} className="footer-social" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <span style={{ fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)", fontWeight: 500, display: "block", marginBottom: "20px" }}>
              Навігація
            </span>
            <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="footer-nav-link">{l.label}</a>
              ))}
            </nav>
          </div>

          {/* Col 3 — Contacts */}
          <div>
            <span style={{ fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)", fontWeight: 500, display: "block", marginBottom: "20px" }}>
              Контакти
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { label: "Телефон", value: "+380 (99) 123 45 67" },
                { label: "Email", value: "hello@psychologist.com" },
                { label: "Telegram", value: "@your_therapist" },
                { label: "Графік", value: "Пн–Пт, 10:00–20:00" },
              ].map((c) => (
                <div key={c.label}>
                  <div style={{ fontSize: "10px", color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "2px" }}>{c.label}</div>
                  <div style={{ fontSize: "13px", color: "var(--text)", fontWeight: 300 }}>{c.value}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "var(--border)", marginBottom: "28px" }} />

        {/* Bottom bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: "12px", color: "var(--muted)", fontWeight: 300 }}>
            © 2026 · Ірина Коваленко · Психолог і Коуч · Київ, Україна
          </p>
          <a href="#" style={{ fontSize: "12px", color: "var(--muted)", textDecoration: "none", fontWeight: 300, transition: "color 0.2s ease" }}>
            Політика конфіденційності
          </a>
        </div>
      </div>
    </footer>
  );
}
