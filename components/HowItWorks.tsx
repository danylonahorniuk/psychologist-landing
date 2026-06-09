const steps = [
  {
    num: "1",
    title: "Перший контакт",
    text: "Ти пишеш або телефонуєш. Ми коротко знайомимось і домовляємось про зручний час для першої сесії.",
  },
  {
    num: "2",
    title: "Діагностична сесія",
    text: "На першій зустрічі я слухаю твою ситуацію і разом ми визначаємо запит та цілі подальшої роботи.",
  },
  {
    num: "3",
    title: "Регулярна робота",
    text: "Ми зустрічаємось 1–2 рази на тиждень. Кожна сесія будується на твоїх потребах тут і зараз.",
  },
  {
    num: "4",
    title: "Результат",
    text: "Відчутні зміни, нові стратегії поведінки і підтримка на шляху до стабільного внутрішнього добробуту.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-[120px] px-20 bg-bg">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-[88px]">
          <h2 className="font-serif text-[48px] font-medium leading-[1.12] tracking-[-0.01em]">
            Чотири кроки до змін
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-4 relative">
          {/* Connector line */}
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-sand to-transparent" />

          {steps.map((s) => (
            <div key={s.num} className="px-7 text-center group">
              <div className="w-20 h-20 rounded-full bg-bg-warm flex items-center justify-center font-serif text-[28px] font-medium mx-auto mb-7 relative z-10 border-4 border-bg transition-all duration-300 group-hover:bg-sage group-hover:text-white group-hover:border-sage">
                {s.num}
              </div>
              <h3 className="font-serif text-[18px] font-medium mb-2.5">{s.title}</h3>
              <p className="text-[13px] text-muted leading-[1.68] font-light">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
