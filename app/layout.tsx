import type { Metadata, Viewport } from "next";
import { Heebo, Rubik } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["hebrew", "latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const SITE_TITLE = "קרן — פתרונות AI לעסקים";
const SITE_DESCRIPTION =
  "צ׳אטבוטים, סוכני AI, אוטומציות והטמעת בינה מלאכותית לעסקים — עם ליווי אישי וחשיבה עסקית.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | קרן AI",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "פתרונות AI לעסקים",
    "אוטומציות לעסקים",
    "צ׳אטבוט AI",
    "סוכני AI",
    "הטמעת AI",
    "אוטומציה עסקית",
    "AI consulting",
  ],
  authors: [{ name: "קרן" }],
  creator: "קרן",
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "/",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "קרן AI",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${heebo.variable} ${rubik.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster
          position="top-center"
          dir="rtl"
          theme="dark"
          richColors
          closeButton
        />
      </body>
    </html>
  );
}
