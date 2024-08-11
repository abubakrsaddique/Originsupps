import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "@/src/components/navbar/Navbar";
import Footer from "@/src/components/footer/Footer";
import TanstackProvider from "../provider/TanstackProvider";
import Cart from "../components/cartpage/Cart";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const organetto = localFont({
  src: [
    {
      path: "../../public/font/Organetto/BoldOrganetto.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/Organetto/ExtraBoldOrganetto.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-organetto",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${organetto.variable} `}>
        <TanstackProvider>
          <Cart />
          <Navbar />
          {children}
          <Footer />
          <ToastContainer position="top-center" />
        </TanstackProvider>
      </body>
    </html>
  );
}
