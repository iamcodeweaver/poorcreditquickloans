import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Loans",
  description:
    "Many people count on their annual tax refund to pay for home projects, travel, or other bills that might be piling up over time.",
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
