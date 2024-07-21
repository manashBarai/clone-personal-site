"use client";
import { useState } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuWidth, setMenuWidth] = useState<boolean>(true);

  const widthsubstract = (v: boolean) => {
    setMenuWidth(v);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar widthsubstract={widthsubstract} />
          <div
            style={{
              marginLeft: menuWidth ? "255px" : "60px",
              padding: menuWidth ? "0 200px" : "0 280px",
              backgroundImage:
                "linear-gradient( to right, transparent, transparent 20%, rgba(45,45,45,0.3) 100%)",
              transition: "margin-left 0.3s ease",
            }}
          >
            {children}
          </div>
          <div
            style={{
              marginLeft: menuWidth ? "255px" : "60px",
              transition: "margin-left 0.3s ease", // Smooth transition
            }}
          >
            <Footer menuWidth={menuWidth} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
