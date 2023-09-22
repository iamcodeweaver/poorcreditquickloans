import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pay Day Loans",
  description:
    "How do payday loans work, should you submit a request for one, and what are the pros and cons?",
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
