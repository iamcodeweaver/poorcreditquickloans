import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Loan",
  description:
    "Unfortunately, these incidents are quite common. Car repairs, medical bills, and unemployment sneak up on the best of us",
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
