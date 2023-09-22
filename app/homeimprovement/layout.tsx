import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Improvement",
  description:
    "Home remodels and repairs can be extremely costly, generally much more than we have lying around as disposable income.",
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
