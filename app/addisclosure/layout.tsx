import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ad Disclosure",
  description: "Ad Disclosure",
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
