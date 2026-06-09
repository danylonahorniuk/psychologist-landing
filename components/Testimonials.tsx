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
  return (
    <section id="reviews" style={{ padding: "120px 80px", background: "var(--bg-warm)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(36px, 3.5vw, 52px)", fontWeight: 500, lineHeight: 1.12, letterSpacing: "-0.01em", marginBottom: "56px" }}>
          Що кажуть<br />ті, хто пройшов шлях
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-hover"
              style={{
                background: "#fff",
                borderRadius: "28px",
                padding: "44px 40px",
                border: "1px solid var(--border)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ fontFamily: "var(--font-playfair), serif", fontSize: "52px", color: "var(--sage)", lineHeight: 0.8, marginBottom: "20px", opacity: 0.6 }}>
                "
              </div>
              <p style={{ fontSize: "16px", color: "var(--text)", lineHeight: 1.72, fontStyle: "italic", fontWeight: 300, flex: 1, marginBottom: "32px" }}>
                {t.quote}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{
                  width: "44px", height: "44px", borderRadius: "50%",
                  background: "var(--sage)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff",
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "18px", fontWeight: 500, flexShrink: 0,
                }}>
                  {t.initial}
                </div>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--text)", letterSpacing: "0.02em" }}>{t.name}</div>
                  <div style={{ fontSize: "12px", color: "var(--muted)", marginTop: "2px" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
