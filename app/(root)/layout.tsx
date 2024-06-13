import React from "react";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import { ChildProps } from "@/types";

function PageLayout({ children }: ChildProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">{children}</div>
      <div className="mb-2">
        <Footer />
      </div>
    </div>
  );
}

export default PageLayout;
