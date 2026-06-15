import Image from "next/image";

const topics = [
  {
    title: "Тривожність і стрес",
    text: "Допомагаю впоратися з тривогою, напруженням і нав'язливими думками",
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" aria-hidden="true">
        <path d="M19 33C19 19 9 10 5 8C5 8 19 8 27 16C35 24 33 33 19 33Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M19 33L19 20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M19 20C16 17 12 15 9 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Самооцінка та впевненість",
    text: "Працюємо над прийняттям себе та формуванням здорової самооцінки",
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" aria-hidden="true">
        <circle cx="19" cy="19" r="6.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M19 5V8.5M19 29.5V33M5 19H8.5M29.5 19H33M9.2 9.2L11.7 11.7M26.3 26.3L28.8 28.8M28.8 9.2L26.3 11.7M11.7 26.3L9.2 28.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Стосунки та комунікація",
    text: "Допомагаю будувати гармонійні стосунки та вирішувати конфлікти",
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" aria-hidden="true">
        <path d="M7 9C7 7.3 8.3 6 10 6H24C25.7 6 27 7.3 27 9V18C27 19.7 25.7 21 24 21H15L9 26V21H10C8.3 21 7 19.7 7 18V9Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M27 13H29C30.7 13 32 14.3 32 16V22C32 23.7 30.7 25 29 25H27V29L22 25H18" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Емоційні труднощі",
    text: "Робота з образами, провиною, страхами та іншими емоціями",
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" aria-hidden="true">
        <path d="M19 31C19 31 5 22 5 13C5 9.1 8.1 6 12 6C14.8 6 17.3 7.6 19 10C20.7 7.6 23.2 6 26 6C29.9 6 33 9.1 33 13C33 22 19 31 19 31Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Життєві кризи та зміни",
    text: "Підтримка у переходах, втратах, розлученнях та нових етапах",
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" aria-hidden="true">
        <path d="M4 31L15 11L21 22L26 16L34 31H4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M26 9L28 7L30 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M28 7V12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Пошук себе та сенсу",
    text: "Підтримую у пошуку власного шляху, цінностей і призначення",
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" aria-hidden="true">
        <circle cx="19" cy="19" r="12" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="19" cy="19" r="4.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M19 7V10M19 28V31M7 19H10M28 19H31" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Topics() {
  return (
    <section style={{ padding: "100px 80px", background: "var(--bg-warm)", position: "relative" }}>

      {/* Left branch */}
      <div style={{ position: "absolute", top: "60px", left: "-30px", width: "220px", height: "420px", pointerEvents: "none" }}>
        <Image src="/topics-left.png" alt="" fill style={{ objectFit: "contain", objectPosition: "top left" }} sizes="220px" />
      </div>

      {/* Right branch */}
      <div style={{ position: "absolute", bottom: 0, right: 0, width: "200px", height: "380px", pointerEvents: "none" }}>
        <Image src="/topics-right.png" alt="" fill style={{ objectFit: "contain", objectPosition: "bottom right" }} sizes="200px" />
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Centered heading */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <h2 style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(36px, 4vw, 56px)",
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--text)",
            marginBottom: "20px",
          }}>
            Як я можу вам допомогти
          </h2>
          <p style={{
            fontSize: "15px",
            color: "var(--muted)",
            fontWeight: 300,
            lineHeight: 1.7,
            maxWidth: "540px",
            margin: "0 auto",
          }}>
            Психологічна підтримка, що допомагає знайти опору всередині себе, подолати труднощі та повернути гармонію у життя.
          </p>
        </div>

        {/* 6-column grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "8px",
        }}>
          {topics.map((t) => (
            <div
              key={t.title}
              className="topic-card"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "28px 20px 32px",
                borderRadius: "16px",
                cursor: "default",
              }}
            >
              <div style={{
                color: "var(--sage)",
                marginBottom: "18px",
                opacity: 0.85,
              }}>
                {t.icon}
              </div>
              <h3 style={{
                fontSize: "14.5px",
                fontWeight: 600,
                color: "var(--text)",
                lineHeight: 1.35,
                marginBottom: "10px",
                letterSpacing: "-0.01em",
              }}>
                {t.title}
              </h3>
              <p style={{
                fontSize: "13px",
                color: "var(--muted)",
                lineHeight: 1.65,
                fontWeight: 300,
              }}>
                {t.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
