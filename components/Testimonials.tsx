const testimonials = [
  {
    quote: "Після 3 місяців роботи з Іриною я нарешті почала розуміти, звідки береться моя тривога. Це змінило все — стосунки, роботу, відчуття себе.",
    name: "Марія, 31 рік",
    role: "Маркетинг-менеджер",
    initial: "М",
  },
  {
    quote: "Прийшов із вигоранням і відчуттям, що все безглуздо. Через 4 місяці змінив роботу, налагодив стосунки з родиною і нарешті сплю нормально.",
    name: "Олег, 38 років",
    role: "IT-підприємець",
    initial: "О",
  },
  {
    quote: "Ірина — один із тих терапевтів, де відчуваєш себе почутим з першої хвилини. Безпечно, без засуджень, з реальними змінами.",
    name: "Катерина, 26 років",
    role: "Дизайнерка-фрилансер",
    initial: "К",
  },
  {
    quote: "Я довго відкладала терапію, думала — впораюсь сама. Але саме з Іриною я зрозуміла: просити допомоги — це сила, а не слабкість.",
    name: "Соломія, 29 років",
    role: "Лікарка",
    initial: "С",
  },
  {
    quote: "Працювали над моєю самооцінкою і стосунками з батьками. Вперше в житті я відчуваю, що маю право на власні кордони.",
    name: "Андрій, 34 роки",
    role: "Архітектор",
    initial: "А",
  },
  {
    quote: "Після розлучення здавалось, що все скінчилось. Ірина допомогла мені побачити це як початок — і я їй дуже вдячна за це.",
    name: "Тетяна, 42 роки",
    role: "Підприємиця",
    initial: "Т",
  },
];

export default function Testimonials() {
  const [featured, ...rest] = testimonials;
  const cards = rest.slice(0, 3);

  return (
    <section id="reviews" style={{ padding: "100px 80px", background: "var(--bg-warm)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Section header */}
        <div style={{ marginBottom: "64px" }}>
          <span style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "var(--sage)", fontWeight: 500 }}>
            Відгуки
          </span>
          <div style={{ width: "32px", height: "2px", background: "var(--sage)", marginTop: "12px", marginBottom: "20px", borderRadius: "1px" }} />
          <h2 style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(36px, 3.5vw, 52px)",
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: "-0.015em",
            color: "var(--text)",
          }}>
            Що кажуть<br /><em style={{ fontStyle: "italic", color: "var(--sage)" }}>клієнти</em>
          </h2>
        </div>

        {/* Featured testimonial */}
        <div style={{
          background: "var(--sage)",
          borderRadius: "28px",
          padding: "60px 72px",
          marginBottom: "20px",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "60px",
          alignItems: "center",
        }}>
          <div>
            <div style={{ fontFamily: "var(--font-playfair), serif", fontSize: "64px", color: "rgba(255,255,255,0.22)", lineHeight: 0.8, marginBottom: "20px" }}>
              "
            </div>
            <p style={{
              fontFamily: "var(--font-playfair), serif",
              fontStyle: "italic",
              fontSize: "clamp(18px, 1.8vw, 24px)",
              color: "#fff",
              lineHeight: 1.55,
              fontWeight: 400,
              marginBottom: "28px",
            }}>
              {featured.quote}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{
                width: "44px", height: "44px", borderRadius: "50%",
                background: "rgba(255,255,255,0.18)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#fff",
                fontFamily: "var(--font-playfair), serif",
                fontSize: "18px", fontWeight: 500,
              }}>
                {featured.initial}
              </div>
              <div>
                <div style={{ fontSize: "13px", fontWeight: 600, color: "#fff" }}>{featured.name}</div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", marginTop: "2px" }}>{featured.role}</div>
              </div>
            </div>
          </div>
          {/* Decorative circle */}
          <div style={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.18)",
            flexShrink: 0,
          }} />
        </div>

        {/* 3 smaller cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {cards.map((t) => (
            <div
              key={t.name}
              className="card-hover"
              style={{
                background: "var(--bg)",
                borderRadius: "24px",
                padding: "36px 32px",
                border: "1px solid var(--border)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p style={{
                fontSize: "15px",
                color: "var(--text)",
                lineHeight: 1.7,
                fontStyle: "italic",
                fontWeight: 300,
                flex: 1,
                marginBottom: "24px",
              }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{
                  width: "36px", height: "36px", borderRadius: "50%",
                  background: "var(--sage)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff",
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "15px", fontWeight: 500, flexShrink: 0,
                }}>
                  {t.initial}
                </div>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--text)" }}>{t.name}</div>
                  <div style={{ fontSize: "12px", color: "var(--muted)", marginTop: "1px" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
