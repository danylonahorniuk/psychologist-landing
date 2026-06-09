const contactDetails = [
  { icon: "📧", label: "Email",              value: "iryna@psychology.ua"   },
  { icon: "📱", label: "Telegram / Viber",   value: "+38 067 000 00 00"     },
  { icon: "🕐", label: "Графік прийому",     value: "Пн–Пт, 10:00–20:00"   },
];

export default function Contact() {
  return (
    <section id="contact" className="py-[120px] px-20 bg-bg-warm">
      <div className="max-w-[1280px] mx-auto grid grid-cols-[1fr_1.2fr] gap-20 items-start">
        {/* Left */}
        <div>
          <h2 className="font-serif text-[48px] font-medium leading-[1.12] tracking-[-0.01em] mb-6">
            Зробимо<br />перший крок
          </h2>
          <p className="text-[16px] text-muted leading-[1.72] font-light mb-12">
            Заповни форму або напиши напряму — я відповідаю протягом 24 годин і
            ми разом знайдемо зручний час для нашої першої зустрічі.
          </p>

          <div className="flex flex-col gap-5">
            {contactDetails.map((d) => (
              <div key={d.label} className="flex items-center gap-4 text-[15px] text-muted">
                <div className="w-11 h-11 rounded-xl bg-bg flex items-center justify-center text-[18px] flex-shrink-0">
                  {d.icon}
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.08em] text-muted mb-0.5">
                    {d.label}
                  </div>
                  {d.value}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 w-full h-[200px] bg-sand rounded-[20px] flex items-center justify-center text-[13px] text-muted opacity-60">
            📍 Карта розташування кабінету
          </div>
        </div>

        {/* Form */}
        <div className="bg-bg rounded-[32px] px-12 py-14">
          <h3 className="font-serif text-[26px] font-medium mb-8">
            Записатись на сесію
          </h3>

          <div className="flex flex-col gap-5">
            <div>
              <label className="block text-[11px] font-semibold tracking-[0.08em] uppercase text-muted mb-2">
                Ваше ім&apos;я
              </label>
              <input
                type="text"
                placeholder="Як до вас звертатись?"
                className="w-full px-[18px] py-3.5 border-[1.5px] border-border rounded-xl text-[15px] text-ink bg-bg outline-none transition-colors focus:border-sage font-sans"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold tracking-[0.08em] uppercase text-muted mb-2">
                Телефон або email
              </label>
              <input
                type="text"
                placeholder="+38 0__ ___ ____"
                className="w-full px-[18px] py-3.5 border-[1.5px] border-border rounded-xl text-[15px] text-ink bg-bg outline-none transition-colors focus:border-sage font-sans"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold tracking-[0.08em] uppercase text-muted mb-2">
                Формат роботи
              </label>
              <select className="w-full px-[18px] py-3.5 border-[1.5px] border-border rounded-xl text-[15px] text-ink bg-bg outline-none transition-colors focus:border-sage font-sans">
                <option>Індивідуальна терапія</option>
                <option>Робота з парою</option>
                <option>Онлайн-коучинг</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-semibold tracking-[0.08em] uppercase text-muted mb-2">
                Коротко про запит (необов&apos;язково)
              </label>
              <textarea
                placeholder="З чим ви хочете попрацювати?"
                rows={4}
                className="w-full px-[18px] py-3.5 border-[1.5px] border-border rounded-xl text-[15px] text-ink bg-bg outline-none transition-colors focus:border-sage resize-y font-sans"
              />
            </div>
            <button className="w-full py-4 bg-ink text-white rounded-xl text-[15px] font-medium tracking-[0.03em] transition-colors hover:bg-sage cursor-pointer mt-2 border-none">
              Надіслати заявку →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
