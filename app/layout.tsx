import type { Metadata, Viewport } from "next";
import { SiteNav } from "@/components/site-nav";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://akshat-agency.vercel.app"),
  title: "Akshat Lakhera | White-Label Agency Platform",
  description:
    "Premium web architecture, polymorphic demo layouts, dashboards, and conversion systems for modern businesses.",
  openGraph: {
    title: "Akshat Lakhera | White-Label Agency Platform",
    description:
      "High-performance, end-to-end web applications engineered to convert.",
    type: "website"
  }
};

export const viewport: Viewport = {
  themeColor: "#07080b"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
    >
      <body className="antialiased">
        <ThemeProvider>
          <SiteNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
