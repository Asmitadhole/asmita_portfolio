import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./ui/footer/Footer";
import Navbar from "./ui/navbar/Navbar";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asmita Dhole - Portfolio",
  description: "Welcome to Asmita Dhole's portfolio, featuring expertise in modern web development and innovative projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider attribute="class">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </ ThemeProvider >
      </body>
    </html>
  );
}
