import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ScheduleThyme - Mobile-Friendly Scheduling",
  description: "Professional scheduling for facilities, training, and consulting services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body
        className={`${poppins.variable} ${geistMono.variable} antialiased bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100`}
      >
        <>
          <Navbar />
          {children}
        </>
      </body>
    </html>
  );
}
