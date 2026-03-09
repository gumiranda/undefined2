import type { Metadata } from "next";
import {
  Geist,
  Bricolage_Grotesque,
  JetBrains_Mono,
  Instrument_Serif,
  Plus_Jakarta_Sans,
  Instrument_Sans,
  IBM_Plex_Sans,
} from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fontVariables = [
  geist.variable,
  bricolageGrotesque.variable,
  jetbrainsMono.variable,
  instrumentSerif.variable,
  plusJakartaSans.variable,
  instrumentSans.variable,
  ibmPlexSans.variable,
].join(" ");

export const metadata: Metadata = {
  title: "SaaS Design System — Pattern Library",
  description:
    "A SaaS-ready design system with multiple theme presets and pattern variants built with Next.js and Aceternity UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${fontVariables}`} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem={false}
          themes={["midnight", "terminal", "ceramic", "graphite"]}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
