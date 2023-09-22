import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "List of site links/pages",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
