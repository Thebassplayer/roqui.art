import type { Metadata } from "next";
import { Inter, Poppins, Pangolin } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { cx } from "@/utils";
import Footer from "@/components/Footer";

const pangolin = Pangolin({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pan",
});
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pop",
});
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});

export const metadata: Metadata = {
  title: "ROQI.art",
  description: "Romina Quiroga Art Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cx(
          pangolin.variable,
          poppins.variable,
          inter.variable,
          "relative grid w-screen grid-rows-[auto,1fr,auto] bg-light font-in dark:bg-dark",
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
