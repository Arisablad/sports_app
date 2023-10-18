import React from "react";
import Navigation from "@/components/Navigation.tsx";
import MaxWidthWrapper from "@/containers/MaxWidthWrapper.tsx";

function GlobalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={"max-w-screen overflow-x-hidden bg-[#EEEEEE] min-h-screen"}>
      <Navigation />
      <MaxWidthWrapper>{children}</MaxWidthWrapper>
    </div>
  );
}

export default GlobalLayout;
