import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Guia de viagens- FAQ",
  description: "Guia de viagens- FAQ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${montserrat.className} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
