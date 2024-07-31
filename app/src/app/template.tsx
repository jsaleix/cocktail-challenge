import { AppContextProvider } from "@/components/context/app.context";
import BGVisuals from "@/components/layout/bg-visuals";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import React from "react";

export default async function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.Fragment>
      <AppContextProvider>
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
        <BGVisuals />
      </AppContextProvider>
    </React.Fragment>
  );
}
