import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harmonie Collab",
  description: "A collaboration tool, usefull for studying, work, and friends to share ideas together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
