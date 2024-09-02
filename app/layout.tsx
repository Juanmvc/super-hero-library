import type { Metadata } from "next";
import React from "react";
import { Anek_Latin } from "next/font/google";
import "./globals.css";
import { FavoritesProvider } from './ui/hooks/useFavorites';

const inter = Anek_Latin({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Super Hero database",
  description: "A super hero database to make Lex Luthor wotk easier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <FavoritesProvider>
          {children}
        </FavoritesProvider>
      </body>
    </html>
  );
}
