"use client";

const links = [
  { href: "#about",    label: "Про мене" },
  { href: "#services", label: "Послуги" },
  { href: "#pricing",  label: "Ціни" },
  { href: "#faq",      label: "FAQ" },
];

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-20 py-[22px] bg-bg/90 backdrop-blur-md border-b border-border">
      <a
        href="#"
        className="font-serif text-[19px] text-ink tracking-[0.01em] no-underline"
      >
        Ірина Коваленко
      </a>

      <ul className="flex items-center gap-9 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-[13px] text-muted no-underline tracking-[0.02em] transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="text-[13px]! font-medium! text-white! bg-sage hover:bg-sage-dark px-[22px] py-[10px] rounded-full transition-all hover:-translate-y-0.5 no-underline"
          >
            Записатись
          </a>
        </li>
      </ul>
    </nav>
  );
}
