import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "ScheduleThyme - Mobile-Friendly Scheduling",
  description:
    "Professional scheduling for facilities, training, and consulting services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
