import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scam Alerts",
  description: "Scam Alerts",
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
