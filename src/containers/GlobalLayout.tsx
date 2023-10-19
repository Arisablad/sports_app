import React from "react";
import Navigation from "@/components/Navigation.tsx";
import MaxWidthWrapper from "@/containers/MaxWidthWrapper.tsx";
import Footer from "@/components/Footer.tsx";

function GlobalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={"max-w-screen overflow-x-hidden bg-[#111111] min-h-screen"}>
      <Navigation />
      <MaxWidthWrapper className={"mt-8"}>{children}</MaxWidthWrapper>
      <Footer />
    </div>
  );
}

export default GlobalLayout;
