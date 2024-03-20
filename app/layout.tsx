import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Image from "next/image";
import image from "@/public/colores.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Colores Coffee",
  description: "Coffee Roasters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={` ${inter.className} bg-colores-background bg-no-repeat bg-cover bg-center bg-fixed`}>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
