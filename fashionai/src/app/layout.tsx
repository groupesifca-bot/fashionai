import type { Metadata } from "next";
import Link from "next/link";
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
  title: "FASHIONAI.AGENCY — Studio Éditorial IA",
  description: "Production photo et vidéo de mode assistée par IA pour marques africaines et internationales.",
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
      <body suppressHydrationWarning className="bg-[#F6F6F8] text-[#0B0B0D]">
        {/* HEADER TOP APP BAR */}
        <header className="bg-surface h-[56px] w-full sticky top-0 z-50 border-b border-rule flex items-center justify-between px-margin-mobile md:px-margin-desktop">
          <Link href="/studio" className="font-body-sm text-[15px] font-semibold text-ink uppercase tracking-widest hover:opacity-70 transition-opacity duration-600">
            FASHIONAI.AGENCY
          </Link>
          <nav className="hidden md:flex items-center gap-stack-md">
            <Link href="/studio" className="font-utility-label text-utility-label uppercase tracking-widest text-ink font-bold border-b border-ink pb-0.5">
              STUDIO
            </Link>
            <span className="font-utility-label text-utility-label uppercase tracking-widest text-[#56565F] opacity-40 cursor-not-allowed select-none flex items-center gap-1.5" title="Disponible en Phase 2">
              KITS <span className="text-[9px] bg-neutral-200 text-neutral-600 px-1 py-0.2 font-mono">BIENTÔT</span>
            </span>
            <span className="font-utility-label text-utility-label uppercase tracking-widest text-[#56565F] opacity-40 cursor-not-allowed select-none flex items-center gap-1.5" title="Disponible en Phase 2">
              SÉANCE <span className="text-[9px] bg-neutral-200 text-neutral-600 px-1 py-0.2 font-mono">BIENTÔT</span>
            </span>
            <span className="font-utility-label text-utility-label uppercase tracking-widest text-[#56565F] opacity-40 cursor-not-allowed select-none flex items-center gap-1.5" title="Disponible en Phase 2">
              TRAVAILLER ENSEMBLE <span className="text-[9px] bg-neutral-200 text-neutral-600 px-1 py-0.2 font-mono">BIENTÔT</span>
            </span>
          </nav>
        </header>

        {children}

        {/* FOOTER */}
        <footer className="bg-background text-ink w-full border-t border-rule flex flex-col items-start gap-stack-md px-margin-mobile md:px-margin-desktop py-stack-lg mt-auto">
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-stack-md">
            <nav className="flex flex-col md:flex-row md:items-center gap-stack-sm md:gap-stack-md w-full">
              <Link href="/studio" className="font-utility-label text-[10px] uppercase tracking-widest text-ink hover:opacity-70 transition-opacity duration-600">
                STUDIO
              </Link>
              <span className="text-rule hidden md:inline">|</span>
              <span className="font-utility-label text-[10px] uppercase tracking-widest text-ink-soft opacity-40 cursor-not-allowed select-none">
                KITS (BIENTÔT)
              </span>
              <span className="text-rule hidden md:inline">|</span>
              <span className="font-utility-label text-[10px] uppercase tracking-widest text-ink-soft opacity-40 cursor-not-allowed select-none">
                SÉANCE (BIENTÔT)
              </span>
              <span className="text-rule hidden md:inline">|</span>
              <span className="font-utility-label text-[10px] uppercase tracking-widest text-ink-soft opacity-40 cursor-not-allowed select-none">
                TRAVAILLER ENSEMBLE (BIENTÔT)
              </span>
              <span className="text-rule hidden md:inline">|</span>
              <span className="font-utility-label text-[10px] uppercase tracking-widest text-ink-soft opacity-40 cursor-not-allowed select-none">
                MENTIONS LÉGALES
              </span>
            </nav>
          </div>
          <div className="w-full border-t border-rule pt-stack-sm mt-stack-sm">
            <div className="font-utility-label text-[10px] font-bold text-ink uppercase tracking-widest">
              © 2026 FASHIONAI.AGENCY · PHASE 1 LAUNCH
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
