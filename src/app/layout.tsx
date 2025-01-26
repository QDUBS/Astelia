import SidebarProvider from "@/context/SidebarContext";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Astelia | Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </SidebarProvider>
  );
}
