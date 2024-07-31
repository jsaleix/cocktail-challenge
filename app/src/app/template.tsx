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
            <main>{children}</main>
            <Footer />
        </React.Fragment>
    );
}
