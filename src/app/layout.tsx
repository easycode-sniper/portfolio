import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { SkipLink } from "@/components/SkipLink";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Souhaib Ferdjallah — Logistique, flotte & outils métier",
  description:
    "Spécialiste du suivi de flotte et de la logistique. Analyse de données, contrôle des opérations de transport et développement d'outils métier.",
  metadataBase: new URL("https://easycode-sniper.github.io/portfolio/"),
  openGraph: {
    title: "Souhaib Ferdjallah — Logistique, flotte & outils métier",
    description:
      "Spécialiste du suivi de flotte et de la logistique. Analyse de données, contrôle des opérations de transport et développement d'outils métier.",
    type: "website",
    locale: "fr_FR",
  },
};

const themeScript = `try{var l=localStorage.getItem('lang');if(l==='fr'||l==='en'){document.documentElement.lang=l}var s=localStorage.getItem('theme');var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d){document.documentElement.classList.add('dark')}}catch(e){}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <ThemeProvider>
          <LangProvider>
            <SkipLink />
            {children}
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
