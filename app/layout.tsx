import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { siteContent } from "@/data/site-content";

export const metadata: Metadata = {
  title: "yeziii",
  description: siteContent.metaDescription,
  icons: {
    icon: "/assets/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
