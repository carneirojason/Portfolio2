import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jason CARNEIRO | Portfolio",
  description:
    "Data Engineer, ML Engineer, and Software & AI Engineer. Mathematics, optimization, and predictable systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakarta.variable} antialiased`}
    >
      <body className="min-h-screen min-w-0 bg-background font-body">
        <Nav />
        <div className="min-w-0">{children}</div>
      </body>
    </html>
  );
}
