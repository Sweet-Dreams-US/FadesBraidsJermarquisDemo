import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fades & Braids by Jermarquis Jones | Fort Wayne",
  description: "Haircuts, beard care, braids, twists, and loc services by Jermarquis Jones in Fort Wayne.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
