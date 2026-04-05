import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  metadataBase: new URL("https://toughtorq.com"),
  title: {
    default: "ToughTorq | Industrial Bolting Tools",
    template: "%s | ToughTorq",
  },
  description:
    "ToughTorq is a developing industrial bolting brand focused on battery torque guns, hydraulic torque wrenches, distributor growth, and practical field-ready tooling solutions.",
  keywords: [
    "ToughTorq",
    "industrial bolting tools",
    "battery torque guns",
    "hydraulic torque wrenches",
    "industrial torque tools",
    "torque wrench distributor",
    "bolting tools",
    "industrial tooling",
  ],
  openGraph: {
    title: "ToughTorq | Industrial Bolting Tools",
    description:
      "Industrial bolting tools built for real work. Explore ToughTorq battery torque guns, hydraulic torque wrenches, and distributor opportunities.",
    url: "https://toughtorq.com",
    siteName: "ToughTorq",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}