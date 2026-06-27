import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Ірина Коваленко — Психолог",
  description:
    "Психолог і гештальт-терапевт із 7-річним досвідом. Допомагаю знайти внутрішню опору, розібратися в собі та побудувати гармонійні стосунки. Київ та онлайн.",
  openGraph: {
    title: "Ірина Коваленко — Психолог",
    description:
      "Психолог і гештальт-терапевт із 7-річним досвідом. Допомагаю знайти внутрішню опору, розібратися в собі та побудувати гармонійні стосунки. Київ та онлайн.",
    type: "website",
    locale: "uk_UA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ірина Коваленко — Психолог",
    description:
      "Психолог і гештальт-терапевт із 7-річним досвідом. Київ та онлайн.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
