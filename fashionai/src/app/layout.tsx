import type { Metadata } from "next";
import { Archivo, Bodoni_Moda, DM_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({ 
  subsets: ["latin"], 
  variable: "--font-archivo",
  display: "swap" 
});

const bodoni = Bodoni_Moda({ 
  subsets: ["latin"], 
  variable: "--font-bodoni",
  display: "swap"
});

const dmMono = DM_Mono({ 
  weight: "500",
  subsets: ["latin"], 
  variable: "--font-dm-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: "FASHIONAI.AGENCY",
  description: "Production photo et vidéo de mode assistée par IA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${archivo.variable} ${bodoni.variable} ${dmMono.variable}`} suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <header className="bg-surface h-[56px] w-full sticky top-0 z-50 border-b border-rule flex items-center justify-between px-margin-mobile md:px-margin-desktop">
          <a href="/" className="font-body-sm text-[15px] font-semibold text-ink uppercase tracking-widest hover:opacity-70 transition-opacity duration-600">
            FASHIONAI.AGENCY
          </a>
          <nav className="hidden md:flex items-center gap-stack-md">
            <a href="/kits" className="font-utility-label text-utility-label uppercase tracking-widest text-ink hover:opacity-70 transition-opacity duration-600 underline underline-offset-4">KITS</a>
            <a href="/seance" className="font-utility-label text-utility-label uppercase tracking-widest text-ink-soft hover:text-ink transition-colors duration-600">SÉANCE</a>
            <a href="/travailler-ensemble" className="font-utility-label text-utility-label uppercase tracking-widest text-ink-soft hover:text-ink transition-colors duration-600">TRAVAILLER ENSEMBLE</a>
          </nav>
        </header>

        {children}

        <footer className="bg-background text-ink w-full border-t border-rule flex flex-col items-start gap-stack-md px-margin-mobile md:px-margin-desktop py-stack-lg mt-auto">
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-stack-md">
            <nav className="flex flex-col md:flex-row md:items-center gap-stack-sm md:gap-stack-md w-full">
              <a href="/kits" className="font-utility-label text-[10px] uppercase tracking-widest text-ink hover:opacity-70 transition-opacity duration-600">KITS</a>
              <span className="text-rule hidden md:inline">|</span>
              <a href="/seance" className="font-utility-label text-[10px] uppercase tracking-widest text-ink-soft hover:text-ink transition-colors duration-600">SÉANCE</a>
              <span className="text-rule hidden md:inline">|</span>
              <a href="/travailler-ensemble" className="font-utility-label text-[10px] uppercase tracking-widest text-ink-soft hover:text-ink transition-colors duration-600">TRAVAILLER ENSEMBLE</a>
              <span className="text-rule hidden md:inline">|</span>
              <a href="/mentions-legales" className="font-utility-label text-[10px] uppercase tracking-widest text-ink-soft hover:text-ink transition-colors duration-600">MENTIONS LÉGALES</a>
              <span className="text-rule hidden md:inline">|</span>
              <a href="/confidentialite" className="font-utility-label text-[10px] uppercase tracking-widest text-ink-soft hover:text-ink transition-colors duration-600">CONFIDENTIALITÉ</a>
            </nav>
          </div>
          <div className="w-full border-t border-rule pt-stack-sm mt-stack-sm">
            <div className="font-utility-label text-[10px] font-bold text-ink uppercase tracking-widest">
              ©2026 FASHIONAI.AGENCY
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
