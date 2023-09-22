import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Debt Consolidation",
  description:
    "It is easy to become overwhelmed by debt, especially when dealing with multiple accounts, payment deadlines, high-interest rates, and fees.",
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
