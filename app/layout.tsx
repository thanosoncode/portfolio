import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./footer/Footer";
import ToastProvider from "./components/toast/ToastProvider";
import { FOOTER_HEIGHT, NAVBAR_HEIGHT } from "./utils/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "thanosweb.dev",
  description: "thanosweb.dev",
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
        <div className={`min-h-[calc(100vh-184px)]`}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
