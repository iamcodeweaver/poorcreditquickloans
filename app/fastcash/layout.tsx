import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fast Cash",
  description:
    "No matter how prepared you think you are, life is bound to catch you off guard at some point or another.",
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
