import type { Metadata } from "next";
import "./globals.css";

import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

export const metadata: Metadata = {
  title: {
    default: "ToughTorq | Industrial Torque, Bolting & Hydraulic Tools",
    template: "%s | ToughTorq",
  },
  description:
    "Industrial torque tools, hydraulic bolting systems, tensioning equipment, hydraulic pumps, cylinders, flange tools, portable valve actuators, and specialty maintenance tooling.",
  metadataBase: new URL("https://toughtorq.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#f2f2f2] text-[#252525] antialiased">
        <SiteHeader />

        <div className="min-h-[70vh]">{children}</div>

        <SiteFooter />
      </body>
    </html>
  );
}