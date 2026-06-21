import Image from "next/image";

const navLinks = [
  { href: "#about",    label: "Про мене" },
  { href: "#services", label: "Послуги" },
  { href: "#how",      label: "Як проходить терапія" },
  { href: "#pricing",  label: "Тарифи" },
  { href: "#reviews",  label: "Відгуки" },
  { href: "#faq",      label: "FAQ" },
  { href: "#contact",  label: "Контакти" },
];

const services = [
  "Індивідуальна терапія",
  "Терапія для дорослих",
  "Підтримка при тривозі",
  "Робота з самооцінкою",
  "Емоційне вигорання",
  "Кризові стани",
  "Психологічне консультування",
];

const contacts = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
        <path d="M3.5 3h3l1.5 3.5-1.75 1.05A9 9 0 0 0 9.45 10.75L10.5 9l3.5 1.5v3c0 .83-.67 1.5-1.5 1.5A12 12 0 0 1 2 3.5C2 2.67 2.67 2 3.5 2z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    lines: ["+38 (097) 123 45 67"],
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M2 6l7 5 7-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    lines: ["hello@iryna-psychologist.com"],
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
        <path d="M9 2C6.24 2 4 4.24 4 7c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z" stroke="currentColor" strokeWidth="1.3"/>
        <circle cx="9" cy="7" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
      </svg>
    ),
    lines: ["м. Київ, вул. Хрещатик, 27", "офіс 612"],
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M9 5.5V9l2.5 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    lines: ["Пн – Пт: 10:00 – 19:00", "Сб: 10:00 – 15:00"],
  },
];

const socials = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="17" height="17" viewBox="0 0 18 18" fill="none">
        <rect x="3" y="3" width="12" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.3"/>
        <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.3"/>
        <circle cx="12.8" cy="5.2" r="0.8" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="17" height="17" viewBox="0 0 18 18" fill="none">
        <path d="M10.5 9H12.5L13 6.5H10.5V5C10.5 4.17 10.5 3.5 12 3.5H13V1.5C12.72 1.47 11.69 1.4 10.6 1.4C8.57 1.4 7.5 2.66 7.5 4.9V6.5H5.5V9H7.5V16.5H10.5V9Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: "#",
    icon: (
      <svg width="17" height="17" viewBox="0 0 18 18" fill="none">
        <path d="M2 9L15.5 3.5 10 15.5 8.5 10 2 9Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.5 10L15.5 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="17" height="17" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="4.5" width="14" height="9" rx="2.5" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M7.5 6.5L11.5 9L7.5 11.5V6.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>

      {/* Mountain background — subtle, right-aligned */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <Image
          src="/footer-mountains.png"
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "center bottom", opacity: 0.38 }}
          sizes="100vw"
        />
        {/* Fade from left so text columns stay readable */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, var(--bg) 0%, var(--bg) 15%, rgba(250,248,245,0.4) 45%, transparent 100%)",
        }} />
      </div>

      {/* Main content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "1280px", margin: "0 auto", padding: "72px 80px 48px" }}>
        <div className="footer-grid">

          {/* Col 1 — Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "var(--sage)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: "var(--font-playfair), serif", fontSize: "13px", color: "#fff", fontWeight: 600, letterSpacing: "0.03em" }}>ІК</span>
              </div>
              <div>
                <div style={{ fontSize: "13px", fontWeight: 500, color: "var(--text)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Ірина Коваленко
                </div>
                <div style={{ fontSize: "11px", color: "var(--muted)", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 300, marginTop: "2px" }}>
                  психолог
                </div>
              </div>
            </div>

            <h3 style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "22px",
              fontWeight: 500,
              color: "var(--text)",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
              marginBottom: "12px",
              maxWidth: "270px",
            }}>
              Психологічна підтримка для глибоких змін
            </h3>
            <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75, fontWeight: 300, maxWidth: "260px", marginBottom: "28px" }}>
              Допомагаю знайти опору всередині себе, відновити баланс і жити в гармонії з собою.
            </p>

            <div style={{ display: "flex", gap: "8px" }}>
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className="footer-social">
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
            <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="footer-nav-link">{l.label}</a>
              ))}
            </nav>
          </div>

          {/* Col 3 — Services */}
          <div>
            <span style={{ fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)", fontWeight: 500, display: "block", marginBottom: "20px" }}>
              Послуги
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {services.map((s) => (
                <span key={s} style={{ fontSize: "13px", color: "var(--muted)", fontWeight: 300, lineHeight: 1.5 }}>{s}</span>
              ))}
            </div>
          </div>

          {/* Col 4 — Contacts */}
          <div>
            <span style={{ fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)", fontWeight: 500, display: "block", marginBottom: "20px" }}>
              Контакти
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {contacts.map((c, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <div style={{
                    width: "32px", height: "32px", borderRadius: "50%",
                    border: "1px solid var(--border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, color: "var(--sage)",
                  }}>
                    {c.icon}
                  </div>
                  <div style={{ paddingTop: "6px" }}>
                    {c.lines.map((line, j) => (
                      <div key={j} style={{ fontSize: "13px", color: "var(--text)", fontWeight: 300, lineHeight: 1.6 }}>{line}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "var(--border)", margin: "52px 0 24px" }} />

        {/* Bottom bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: "12px", color: "var(--muted)", fontWeight: 300 }}>
            © 2025 Ірина Коваленко. Усі права захищені.
          </p>
          <a href="#" style={{ fontSize: "12px", color: "var(--muted)", textDecoration: "none", fontWeight: 300, display: "flex", alignItems: "center", gap: "5px", transition: "color 0.2s" }}>
            Політика конфіденційності
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

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
          width: 36px; height: 36px;
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
    </footer>
  );
}
