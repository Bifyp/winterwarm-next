import type { Metadata, Viewport } from "next";
import { siteUrl } from "@/lib/site";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: "Winterwarm Polska", template: "%s | Winterwarm" },
  icons: { icon: "/assets/favicon.svg" },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071623",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
