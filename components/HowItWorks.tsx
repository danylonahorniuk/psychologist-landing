import Image from "next/image";

const items = [
  {
    title: "Онлайн або офлайн",
    text: "Зустрічаємось там, де вам комфортно — у відеодзвінку або особисто в моєму кабінеті в Києві.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="14" height="9.5" rx="1.5" stroke="white" strokeWidth="1.3"/>
        <path d="M6 15.5H12M9 12.5V15.5" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Тривалість сесії",
    text: "Кожна сесія триває 50–60 хвилин — достатньо, щоб зосередитись, поговорити і відчути зрушення.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <circle cx="9" cy="9.5" r="6.5" stroke="white" strokeWidth="1.3"/>
        <path d="M9 6.5V9.5L11 11.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Регулярність зустрічей",
    text: "Зазвичай зустрічаємось раз на тиждень. Ритм обираємо разом — залежно від вашого запиту і темпу.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="14" height="12" rx="2" stroke="white" strokeWidth="1.3"/>
        <path d="M2 8H16" stroke="white" strokeWidth="1.3"/>
        <path d="M6 2V5M12 2V5" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M5.5 11H6.5M8.5 11H9.5M11.5 11H12.5" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Конфіденційність",
    text: "Те, що ви говорите на сесії, залишається між нами. Я дотримуюсь принципу повної конфіденційності та етичного кодексу психолога.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="4.5" y="8.5" width="9" height="7" rx="1.5" stroke="white" strokeWidth="1.3"/>
        <path d="M6.5 8.5V6C6.5 4.6 7.6 3.5 9 3.5C10.4 3.5 11.5 4.6 11.5 6V8.5" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="9" cy="12" r="1" fill="white"/>
      </svg>
    ),
  },
  {
    title: "Підтримка між сесіями",
    text: "Між сесіями ви можете написати мені, якщо виникне щось важливе — я відповім і підтримаю.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M9 15C9 15 3 11 3 6.5C3 4.6 4.6 3 6.5 3C7.7 3 8.8 3.6 9 4.5C9.2 3.6 10.3 3 11.5 3C13.4 3 15 4.6 15 6.5C15 11 9 15 9 15Z" stroke="white" strokeWidth="1.3" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Перша зустріч",
    text: "На першій сесії ми знайомимось, ви розповідаєте, що привело, а я пояснюю, як можу допомогти. Разом намічаємо шлях.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <circle cx="9" cy="7" r="2.8" stroke="white" strokeWidth="1.3"/>
        <path d="M3.5 15.5C3.5 12.7 6 10.5 9 10.5C12 10.5 14.5 12.7 14.5 15.5" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section
        id="how"
        style={{ position: "relative", overflow: "hidden", minHeight: "640px", background: "var(--bg-warm)" }}
      >
        {/* Background image — hidden on mobile via .how-bg */}
        <div className="how-bg" style={{ position: "absolute", inset: 0 }}>
          <Image
            src="/how-bg.jpg"
            alt=""
            fill
            style={{ objectFit: "cover", objectPosition: "center 40%" }}
            sizes="100vw"
          />
          {/* subtle warm overlay so left text is readable */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(250,245,238,0.55) 0%, rgba(250,245,238,0.15) 50%, transparent 100%)" }} />
        </div>

        {/* Content */}
        <div className="how-content-pad how-grid" style={{ position: "relative", zIndex: 1, maxWidth: "1280px", margin: "0 auto" }}>

          {/* LEFT: heading */}
          <div style={{ paddingBottom: "40px" }}>

            <h2 style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--text)",
              marginBottom: "24px",
            }}>
              Як я<br />працюю з вами
            </h2>

            <p style={{
              fontSize: "15px",
              color: "var(--muted)",
              lineHeight: 1.75,
              fontWeight: 300,
              maxWidth: "380px",
            }}>
              Терапія будується навколо вас — не навпаки. Я підлаштовуюсь під ваш темп, формат і потреби.
            </p>
          </div>

          {/* RIGHT: card with items */}
          <div className="how-card" style={{
            background: "rgba(250,248,245,0.90)",
            backdropFilter: "blur(12px)",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}>
            {items.map((item) => (
              <div key={item.title} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  background: "var(--sage)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: "14.5px", fontWeight: 600, color: "var(--text)", marginBottom: "3px", letterSpacing: "-0.01em" }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6, fontWeight: 300 }}>
                    {item.text}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Top wave */}
        <div style={{ position: "absolute", top: -1, left: 0, right: 0, lineHeight: 0, zIndex: 2 }}>
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "90px" }} aria-hidden="true">
            <path d="M0,0 L0,55 C360,90 900,10 1440,60 L1440,0 Z" fill="var(--bg)" />
          </svg>
        </div>

        {/* Bottom wave */}
        <div style={{ position: "absolute", bottom: -1, left: 0, right: 0, lineHeight: 0, zIndex: 2 }}>
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "100px" }} aria-hidden="true">
            <path d="M0,100 L0,45 C300,100 700,10 1440,55 L1440,100 Z" fill="var(--bg)" />
          </svg>
        </div>
      </section>

  );
}
