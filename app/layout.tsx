import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Newsreader } from "next/font/google";
import { profile, links } from "@/lib/content";
import { CommandPaletteProvider } from "@/components/site/CommandPalette";
import { Footer } from "@/components/site/Footer";
import { Nav } from "@/components/site/Nav";
import { ProfilePanelInline, ProfilePanelRail } from "@/components/site/ProfilePanel";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-newsreader",
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono-jb",
});

const siteUrl = "https://sasiniwanigathunga.github.io/sasiniwanigathunga";
const description =
  "Sasini Wanigathunga — AI Research Engineer at Robotic Assistance Devices. B.Sc. Engineering (Hons) in Electronic and Telecommunication Engineering, University of Moratuwa. Computer Vision and Natural Language Processing.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — AI Research Engineer`,
    template: `%s — ${profile.name}`,
  },
  description,
  keywords: [
    "Sasini Wanigathunga",
    "AI Research Engineer",
    "Computer Vision",
    "Natural Language Processing",
    "Open Vocabulary Segmentation",
    "Seg-TTO",
    "Robotic Assistance Devices",
    "University of Moratuwa",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  openGraph: {
    type: "profile",
    url: siteUrl,
    title: `${profile.name} — AI Research Engineer`,
    description,
    siteName: profile.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — AI Research Engineer`,
    description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#121c33" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

/**
 * Resolves the theme before first paint. Without this the browser renders
 * the light palette for a frame before React hydrates, which reads as a
 * flash on dark-mode machines.
 */
const themeInit = `(function(){try{var s=localStorage.getItem('sw-theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.setAttribute('data-theme',s||(d?'dark':'light'));}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "AI Research Engineer",
  worksFor: { "@type": "Organization", name: "Robotic Assistance Devices" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of Moratuwa" },
  url: siteUrl,
  email: profile.email,
  knowsAbout: [...profile.interests],
  sameAs: [links.linkedin, links.github, links.scholar],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${newsreader.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="grain flex min-h-screen flex-col antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>

        {/* Chrome is shared by every route so it survives client navigation. */}
        <CommandPaletteProvider>
          <ScrollProgress />
          <Nav />
          <ProfilePanelRail />
          {/* The left offset matches the rail's width; the top padding clears
              the fixed nav on every page. */}
          <main id="main" className="flex-1 pt-20 lg:pl-[var(--rail-w)] lg:pt-24">
            <ProfilePanelInline />
            {children}
          </main>
          <div className="lg:pl-[var(--rail-w)]">
            <Footer />
          </div>
        </CommandPaletteProvider>
      </body>
    </html>
  );
}
