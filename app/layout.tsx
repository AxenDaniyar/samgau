import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ПРБ «Самғау» — Палата Развития Бизнеса",
  description: "Палата Развития Бизнеса «Самғау» — защита интересов предпринимателей, законодательные инициативы, стандарты и развитие бизнеса в Казахстане",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>{children}</body>
    </html>
  );
}
