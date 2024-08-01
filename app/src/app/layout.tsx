import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/contexts/react-query";
import React from "react";
import { AppContextProvider } from "@/contexts/app.context";
import Header from "@/components/layout/header";
import BGVisuals from "@/components/layout/bg-visuals";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zama challenge",
  description: "Cocktail Builder",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <AppContextProvider>
            <Header />
            <main className="relative z-10">{children}</main>
            <Footer />
            <BGVisuals /> {modal}
            <div id="modal-root"></div>
          </AppContextProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
