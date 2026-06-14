"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Як я зрозумію, що мені потрібна психотерапія?",
    a: "Якщо ти відчуваєш, що певна ситуація або стан повторюється по колу і власних зусиль не вистачає — це вже привід звернутись. Не потрібно чекати кризи. Терапія — це інструмент для будь-кого, хто хоче жити краще і якісніше.",
  },
  {
    q: "Скільки сесій мені знадобиться?",
    a: "Все залежить від запиту. Короткострокові завдання — 5–10 сесій. Глибша трансформаційна робота займає більше часу. Ми завжди обговорюємо це на першій зустрічі і плануємо разом.",
  },
  {
    q: "Чи безпечно проходити терапію онлайн?",
    a: "Так. Онлайн-формат повністю конфіденційний і такий само ефективний, як і очні зустрічі. Дослідження підтверджують, що більшість людей отримують рівноцінну допомогу в обох форматах.",
  },
  {
    q: "Як відбувається перша сесія?",
    a: "Перша зустріч — це знайомство. Ти розповідаєш про себе стільки, скільки хочеш, ми разом формулюємо запит і домовляємось про подальший план. Ніякого тиску — тільки твій темп.",
  },
  {
    q: "Чи зберігається конфіденційність?",
    a: "Абсолютно. Все, що ти говориш на сесії, залишається між нами. Я дотримуюсь кодексу етики психолога і не розголошую жодної інформації без твоєї згоди.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-[120px] px-20 bg-bg-warm">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-0">
          <h2 className="font-serif text-[48px] font-medium leading-[1.12] tracking-[-0.01em]">
            Часті запитання
          </h2>
        </div>

        <div className="max-w-[780px] mx-auto mt-16">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-border">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center gap-6 py-6 text-left font-medium text-[16px] text-ink bg-transparent border-none cursor-pointer transition-colors hover:text-sage"
              >
                {f.q}
                <span
                  className={`w-8 h-8 rounded-full border-[1.5px] flex items-center justify-center text-[18px] text-muted flex-shrink-0 transition-all duration-300 ${
                    open === i
                      ? "bg-sage border-sage text-white rotate-45"
                      : "border-sand"
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <p className="text-[15px] text-muted leading-[1.72] font-light pb-6">
                  {f.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
