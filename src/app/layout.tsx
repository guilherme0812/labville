"use client";

import { Poppins } from "next/font/google";
import "./globals.css";
import { useTheme } from "@/context/theme";

const mainFontFamily = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useTheme((state) => state.theme);

  return (
    <html lang="pt" className={theme}>
      <body className={`${mainFontFamily.className}`}>{children}</body>
    </html>
  );
}
