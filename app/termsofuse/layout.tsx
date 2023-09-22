import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use",
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
