import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Application form",
  description: "provide basic information to get us started",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>{children}</body>
    </html>
  );
}
