import type { Metadata } from "next";
import { Poppins, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { ChildProps } from "@/types";
import { ThemeProvider } from "@/components/providers/theme-provider";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const sourceSans = Source_Sans_3({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-source-sans-3",
});

export const metadata: Metadata = {
  title: "Begzod's blog",
  description:
    "Dasturlash haqida maqolalar, turli xil chellangelar va foydali maslahatlar.",
};

function RootLayout({ children }: ChildProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${sourceSans.variable} overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
