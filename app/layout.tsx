import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ToastProvider from "./components/toast/ToastProvider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thanosjs | Software engineer",
  description: "Building with React, Typescript, Next and Node",
  keywords:
    "Software engineer, portfolio,Freelancer, React developer, projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="canonical" href="https://www.thanosjs.com/" />
      </Head>
      <body className={inter.className}>
        <ToastProvider />
        <Navbar />
        <div className={`min-h-[calc(100dvh-184px)]`}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
