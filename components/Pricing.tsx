const plans = [
  {
    name: "Разова сесія",
    price: "1 500 ₴",
    period: "50 хвилин · одноразово",
    features: [
      "Індивідуальна консультація",
      "Онлайн або офлайн",
      "Конфіденційність гарантована",
      "Домашнє завдання та матеріали",
    ],
    featured: false,
  },
  {
    name: "Пакет 5 сесій",
    price: "6 500 ₴",
    period: "50 хвилин · 5 зустрічей",
    badge: "Найпопулярніше",
    features: [
      "Економія 1 000 ₴",
      "Системна робота над запитом",
      "Підтримка в чаті між сесіями",
      "Матеріали та практичні вправи",
      "Гнучкий графік",
    ],
    featured: true,
  },
  {
    name: "Пакет 10 сесій",
    price: "11 500 ₴",
    period: "50 хвилин · 10 зустрічей",
    features: [
      "Економія 3 500 ₴",
      "Глибока трансформаційна робота",
      "Підтримка між сесіями",
      "Персональна програма роботи",
      "Підсумкова діагностика",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-[120px] px-20 bg-bg-warm">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-[48px] font-medium leading-[1.12] tracking-[-0.01em]">
            Оберіть свій<br />формат роботи
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-6 items-center">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl px-10 py-[52px] border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)] ${
                p.featured
                  ? "bg-ink text-bg border-transparent scale-[1.03]"
                  : "bg-bg border-transparent hover:border-sand"
              }`}
            >
              {p.badge && (
                <span className="absolute -top-[14px] left-1/2 -translate-x-1/2 bg-sage text-white text-[10px] font-bold tracking-[0.1em] uppercase px-5 py-1.5 rounded-full whitespace-nowrap">
                  {p.badge}
                </span>
              )}

              <div
                className={`text-[12px] font-semibold tracking-[0.1em] uppercase mb-4 ${
                  p.featured ? "text-[rgba(250,248,245,0.45)]" : "text-muted"
                }`}
              >
                {p.name}
              </div>

              <div
                className={`font-serif text-[52px] font-medium leading-none mb-1.5 ${
                  p.featured ? "text-bg" : "text-ink"
                }`}
              >
                {p.price}
              </div>

              <div
                className={`text-[13px] mb-8 ${
                  p.featured ? "text-[rgba(250,248,245,0.45)]" : "text-muted"
                }`}
              >
                {p.period}
              </div>

              <ul className="flex flex-col gap-3 mb-10">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className={`text-[14px] flex items-start gap-2.5 leading-[1.5] ${
                      p.featured ? "text-[rgba(250,248,245,0.68)]" : "text-muted"
                    }`}
                  >
                    <span className="text-sage text-[12px] mt-px flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center px-8 py-3.5 rounded-full text-[14px] font-medium no-underline transition-all duration-300 ${
                  p.featured
                    ? "bg-bg text-ink hover:bg-bg-warm"
                    : "border-[1.5px] border-sand text-ink hover:border-ink"
                }`}
              >
                Записатись
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
