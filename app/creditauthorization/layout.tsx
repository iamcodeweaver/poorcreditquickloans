import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Credit Authorization",
  description: "Credit Authorization",
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
