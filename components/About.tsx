import Image from "next/image";

const PHOTO_URL =
  "https://images.unsplash.com/photo-1582896911227-c966f6e7fb93?w=900&q=85&fit=crop&crop=faces,top";

const creds = [
  "Диплом практичного психолога, Київський національний університет",
  "Сертифікація КПТ, Інститут когнітивно-поведінкової терапії",
  "Гештальт-терапія, 4-річна програма МІГТ",
  "Член Асоціації психологів України",
];

export default function About() {
  return (
    <section id="about" className="py-[120px] px-20 bg-bg">
      <div className="max-w-[1280px] mx-auto grid grid-cols-[1fr_1.25fr] gap-24 items-center">
        {/* Photo */}
        <div className="relative">
          <div className="w-full aspect-[3/4] rounded-[220px_220px_180px_180px] relative overflow-hidden">
            <Image
              src={PHOTO_URL}
              alt="Ірина Коваленко — психолог і коуч"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              sizes="500px"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(212,197,176,0.25)]" />
          </div>
          <div className="absolute bottom-[-16px] right-[-16px] bg-sage text-white rounded-full w-[118px] h-[118px] flex flex-col items-center justify-center text-[11.5px] font-medium text-center leading-[1.3]">
            <strong className="font-serif text-[24px] font-medium block">7+</strong>
            років<br />досвіду
          </div>
        </div>

        {/* Content */}
        <div>
          <h2 className="font-serif text-[48px] font-medium leading-[1.12] tracking-[-0.01em] mb-4">
            Ірина<br />Коваленко
          </h2>
          <p className="text-[16px] text-muted leading-[1.78] font-light mb-10">
            Привіт, я Ірина — психолог і коуч із 7-річним досвідом роботи з
            дорослими. Я допомагаю людям розібратись у собі, позбутися
            внутрішніх бар&apos;єрів і почати жити більш свідомо та наповнено.
            <br />
            <br />
            Я вірю, що кожна людина має в собі ресурс для змін. Моє завдання —
            допомогти тобі до нього дістатись. У роботі я поєдную
            когнітивно-поведінкову терапію, гештальт і елементи коучингу.
          </p>
          <div className="flex flex-col gap-3">
            {creds.map((c) => (
              <div key={c} className="flex items-start gap-3 text-[14px] text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-sage mt-[7px] flex-shrink-0" />
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
