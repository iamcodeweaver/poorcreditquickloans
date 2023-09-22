import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Loans",
  description:
    "Looking for personal loans online is a great way to find lenders that may be willing to extend a loan offer to you.",
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
