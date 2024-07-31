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
      <Header />
      <main className="relative z-10">{children}</main>
      <Footer />
      {/* <div
        id="bg-image"
        className={"absolute top-0 left-0 w-full h-full"}
        style={{
          opacity: 0.3,
          backgroundImage: "url('/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
        }}
      /> */}
      <BGVisuals />
    </React.Fragment>
  );
}
