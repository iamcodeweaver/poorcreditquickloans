import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bad Credit",
  description:
    "The fact of the matter is that loans for people with bad credit usually come with costly terms–a high interest rate being one of them.",
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
