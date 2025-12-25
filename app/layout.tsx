import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zestec Integrated",
  description: "Zestec Integrated Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/imgs/zi_logo.png" type="image/x-icon" />
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased`}
      >
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
