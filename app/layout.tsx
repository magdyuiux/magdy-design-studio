import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohammed Magdy | UI/UX Designer & Frontend Developer",
  description:
    "Portfolio of Mohammed Magdy, a UI/UX designer and frontend developer focused on SaaS, product UX, and conversion-driven interfaces.",
  metadataBase: new URL("https://magdy-design-studio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mohammed Magdy | UI/UX Designer & Frontend Developer",
    description:
      "Case studies, product thinking, and frontend execution for SaaS teams and modern digital products.",
    url: "https://magdy-design-studio.vercel.app",
    siteName: "Magdy Design Studio",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mohammed Magdy Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Magdy | UI/UX Designer & Frontend Developer",
    description:
      "Conversion-focused UX, product design, and frontend delivery for startups and SaaS teams.",
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
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
