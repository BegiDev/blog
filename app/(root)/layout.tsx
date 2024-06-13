import React from "react";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import { ChildProps } from "@/types";

function PageLayout({ children }: ChildProps) {
  return (
    <main>
      <Navbar />
      <div className="container">{children}</div>
      <Footer />
    </main>
  );
}

export default PageLayout;
