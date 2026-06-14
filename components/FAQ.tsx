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
    <section id="faq" style={{ padding: "100px 80px", background: "var(--bg-warm)" }}>
      <style>{`
        .faq-item {
          background: var(--bg);
          border-radius: 16px;
          border: 1px solid var(--border);
          overflow: hidden;
          transition: box-shadow 0.25s ease;
        }
        .faq-item:hover {
          box-shadow: 0 4px 24px rgba(44,44,44,0.06);
        }
        .faq-btn {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          padding: 24px 28px;
          text-align: left;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: color 0.2s ease;
        }
        .faq-btn:hover .faq-q {
          color: var(--sage);
        }
        .faq-toggle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1.5px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.3s ease;
          color: var(--muted);
          font-size: 20px;
          line-height: 1;
        }
        .faq-toggle.open {
          background: var(--sage);
          border-color: var(--sage);
          color: white;
          transform: rotate(45deg);
        }
      `}</style>

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(40px, 4.5vw, 60px)",
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--text)",
            marginBottom: "16px",
          }}>
            Часті запитання
          </h2>
          <p style={{
            fontSize: "15px",
            color: "var(--muted)",
            fontWeight: 300,
            lineHeight: 1.7,
            maxWidth: "480px",
            margin: "0 auto",
          }}>
            Відповіді на запитання, які виникають найчастіше перед початком терапії.
          </p>
        </div>

        {/* Accordion */}
        <div style={{
          maxWidth: "780px",
          margin: "0 auto",
          background: "var(--bg)",
          borderRadius: "20px",
          border: "1px solid var(--border)",
          padding: "0 40px",
          boxShadow: "0 4px 32px rgba(44,44,44,0.05)",
        }}>
          {faqs.map((f, i) => (
            <div key={i} style={{ borderBottom: i < faqs.length - 1 ? "1px solid var(--border)" : "none" }}>
              <button className="faq-btn" onClick={() => setOpen(open === i ? null : i)}>
                <span className="faq-q" style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "var(--text)",
                  lineHeight: 1.5,
                  transition: "color 0.2s ease",
                }}>
                  {f.q}
                </span>
                <span className={`faq-toggle${open === i ? " open" : ""}`}>+</span>
              </button>

              <div style={{
                maxHeight: open === i ? "200px" : "0",
                overflow: "hidden",
                transition: "max-height 0.45s ease-in-out",
              }}>
                <div style={{ padding: "0 0 24px 0" }}>
                  <div style={{
                    paddingLeft: "20px",
                    borderLeft: "2px solid var(--sage)",
                    marginLeft: "4px",
                  }}>
                    <p style={{
                      fontSize: "14px",
                      color: "var(--muted)",
                      lineHeight: 1.75,
                      fontWeight: 300,
                      margin: 0,
                    }}>
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
