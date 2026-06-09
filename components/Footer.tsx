export default function Footer() {
  return (
    <footer className="bg-ink px-20 py-11 flex justify-between items-center">
      <a href="#" className="font-serif text-[19px] text-bg no-underline">
        Ірина Коваленко
      </a>
      <p className="text-[12px] text-[rgba(250,248,245,0.35)]">
        © 2024 · Психолог і Коуч · Київ, Україна
      </p>
      <div className="flex gap-6">
        {["Instagram", "Telegram", "Конфіденційність"].map((l) => (
          <a
            key={l}
            href="#"
            className="text-[12px] text-[rgba(250,248,245,0.45)] no-underline transition-colors hover:text-bg"
          >
            {l}
          </a>
        ))}
      </div>
    </footer>
  );
}
