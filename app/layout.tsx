import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ToastProvider from "./components/toast/ToastProvider";
import { NAVBAR_PLUS_FOOTER_HEIGHT } from "./utils/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thanosjs | Software engineer",
  description: "Building with React, Typescript, Next.js and Node.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider />
        <Navbar />
        <div className={`min-h-[calc(100vh-${NAVBAR_PLUS_FOOTER_HEIGHT}px)]`}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
