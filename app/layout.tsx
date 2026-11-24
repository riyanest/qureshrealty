import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Cinzel } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#061735",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Sunteck Belvedere Park Mira Road | 2 & 3 BHK Deck Residences | Sultana Qureshi",
  description: "Sunteck Belvedere Park, Western Express Highway Mira Road. 50-storey luxury towers with 2 & 3 BHK Deck Residences offering lifetime Sanjay Gandhi National Park views. Direct advisory by Sultana Qureshi (Qureshh Global Realty) with Zero Brokerage.",
  keywords: [
    "Sunteck Belvedere Park",
    "Sunteck Mira Road",
    "Sultana Qureshi",
    "Qureshh Global Realty",
    "2 BHK Deck Mira Road",
    "3 BHK Deck Mira Road",
    "Luxury flats in Mira Road",
    "Western Express Highway properties",
  ],
  authors: [{ name: "Sultana Qureshi • Qureshh Global Realty" }],
  openGraph: {
    title: "Sunteck Belvedere Park | 2 & 3 BHK Deck Residences in Mira Road",
    description: "Mira Road's tallest 50-storey landmark on Western Express Highway with lifetime National Park views. Zero brokerage advisory by Sultana Qureshi.",
    url: "https://sunteckbelvederepark.com",
    siteName: "Sunteck Belvedere Park • Qureshh Global Realty",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${cinzel.variable}`}>
      <body className="font-sans antialiased bg-white text-ink selection:bg-gold-light selection:text-navy-deep">
        {children}
      </body>
    </html>
  );
}
