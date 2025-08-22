import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

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
    <html lang="en" className="dark">
      <body className="bg-zinc-950 text-white min-h-screen min-w-screen">
        <div className="drawer">
          <input id="navigation-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <NavBar />
            {children}
          </div>
          <div className="drawer-side">
            <label htmlFor="navigation-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-zinc-900 min-h-full w-70 p-4">
              {/* Sidebar content */}
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}
