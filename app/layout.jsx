import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/ThemeSwitch";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quan | Web Developer",
  description: "Quan is a full-stack Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-stone-50 text-gray-700 dark:bg-gray-900 dark:text-gray-50`}
      >
        <ActiveSectionContextProvider>
          <Navbar />
          {children}
          <Footer />
        </ActiveSectionContextProvider>

        <ThemeSwitch />
      </body>
    </html>
  );
}
