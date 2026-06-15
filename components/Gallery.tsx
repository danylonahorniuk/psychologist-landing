import Image from "next/image";

const features = [
  {
    label: "Затишна атмосфера",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M4 18V10L11 4L18 10V18" stroke="var(--sage)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="8" y="13" width="6" height="5" rx="1" stroke="var(--sage)" strokeWidth="1.3"/>
        <path d="M7 7.5V6" stroke="var(--sage)" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="15" cy="8" r="1" fill="var(--sage)" fillOpacity="0.5"/>
      </svg>
    ),
  },
  {
    label: "Спокій та приватність",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M5 10C5 7.2 7.2 5 10 5C10 5 10 8 13 9C14.5 9.6 16 9 16 9C16 12 13.8 14.5 11 15C8.2 15.5 5 13.5 5 10Z" stroke="var(--sage)" strokeWidth="1.3" strokeLinejoin="round"/>
        <path d="M11 15V18" stroke="var(--sage)" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M8 18H14" stroke="var(--sage)" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Підтримка і повага",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M4 9.5C4 7.6 5.6 6 7.5 6C8.6 6 9.6 6.5 10.2 7.3L11 8.2L11.8 7.3C12.4 6.5 13.4 6 14.5 6C16.4 6 18 7.6 18 9.5C18 13.5 11 18 11 18C11 18 4 13.5 4 9.5Z" stroke="var(--sage)" strokeWidth="1.3" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const LeafDivider = () => (
  <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "20px 0" }}>
    <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 17C10 17 3 13 3 8C3 5.2 5.2 3 8 3C9.2 3 10.3 3.5 11 4.3C11.7 3.5 12.8 3 14 3C16.8 3 19 5.2 19 8" stroke="var(--sage)" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M10 17V9" stroke="var(--sage)" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
    <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
  </div>
);

export default function Gallery() {
  return (
    <section style={{ background: "var(--bg)", padding: "100px 80px 100px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Main grid: left text + right photos */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "360px 1fr",
          gap: "64px",
          alignItems: "center",
        }}>

          {/* LEFT: text content */}
          <div>
            <h2 style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(42px, 4.5vw, 64px)",
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--text)",
              marginBottom: "0",
            }}>
              Простір<br />для змін
            </h2>

            <p style={{ marginTop: "24px", fontSize: "14.5px", color: "var(--muted)", lineHeight: 1.75, fontWeight: 300, marginBottom: "14px" }}>
              Тут ви можете зупинитися, видихнути та повернутися до себе.
            </p>
            <p style={{ fontSize: "14.5px", color: "var(--muted)", lineHeight: 1.75, fontWeight: 300, marginBottom: "40px" }}>
              Кабінет створений для того, щоб ви відчували себе у безпеці, комфорті та довірі.
            </p>

            {/* Features as text */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {features.map((f) => (
                <div key={f.label} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ color: "var(--sage)", fontSize: "18px", lineHeight: 1 }}>—</span>
                  <span style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "16px",
                    fontWeight: 400,
                    fontStyle: "italic",
                    color: "var(--text)",
                    letterSpacing: "-0.01em",
                  }}>
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: photo layout — large left + 2 small right */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 0.6fr", gap: "14px" }}>
            {/* Main big photo */}
            <div style={{ borderRadius: "20px", overflow: "hidden", position: "relative", aspectRatio: "3/2.5" }}>
              <Image
                src="/space1.png"
                alt="Кабінет психолога"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="600px"
              />
            </div>

            {/* Two small photos stacked */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ borderRadius: "20px", overflow: "hidden", position: "relative", flex: 1 }}>
                <Image
                  src="/space2.png"
                  alt="Атмосфера кабінету"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  sizes="280px"
                />
              </div>
              <div style={{ borderRadius: "20px", overflow: "hidden", position: "relative", flex: 1 }}>
                <Image
                  src="/space3.png"
                  alt="Деталі простору"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  sizes="280px"
                />
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
