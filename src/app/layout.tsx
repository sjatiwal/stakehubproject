import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={inter.className}>
      <div>
        <Header />
      </div>
      <div> {children}</div>
    </div>
  );
}
