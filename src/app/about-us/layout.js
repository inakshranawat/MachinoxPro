// src/app/about-us/layout.js
import React from "react";
import Script from "next/script";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
  title: "About IIoT Robato Systems | Smart Manufacturing Solutions | Production Monitoring Systems",
  description:
    "Discover how IIoT Robato Systems is revolutionizing smart manufacturing with production monitoring, OEE tracking, Andon tower lights, and downtime tracking solutions. Learn more about us!",
  keywords:
    "Production monitoring and downtime tracking experts, Andon tower light and OEE tracking solutions, Andon DIsplay Boards, Robato Systems",
  authors: [{ name: "Robato Systems Pvt. Ltd." }],
  publisher: "Robato Systems Pvt. Ltd.",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: `${baseUrl}/about-us`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${baseUrl}/about-us`,
    siteName: "Robato Systems Pvt. Ltd.",
    title:
      "About Robato Systems: Innovating Tomorrow, Today",
    description:
      "Discover how IIoT Robato Systems is revolutionizing smart manufacturing with production monitoring, OEE tracking, Andon tower lights, and downtime tracking solutions. Learn more about us!",
    images: [
      {
        url: `${baseUrl}/images/MachinoX%20Pro.png`,
        width: 1200,
        height: 630,
        alt: "About Robato Systems | MachinoX Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "About Robato Systems: Innovating Tomorrow, Today",
    description:
      "Discover how IIoT Robato Systems is revolutionizing smart manufacturing with production monitoring, OEE tracking, Andon tower lights, and downtime tracking solutions. Learn more about us!",
    images: [`${baseUrl}/images/MachinoX%20Pro.png`],
    site: "@robatosystems",
  },
  icons: {
    icon: {
      url:"/favicon.ico", sizes:"any"
    },
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function AboutUsLayout({ children }) {
  const articleSchema = {
    "@context": "https://schema.org/",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/about-us`,
    },
    headline: "About Robato Systems: Innovating Tomorrow, Today",
    description:
      "Explore the cutting-edge journey with MachinoX pro. Join us in shaping the future with state-of-the-art robotic solutions and innovation.",
    image: {
      "@type": "ImageObject",
      url: `${baseUrl}/images/CNC-tablet.png`,
      width: 2370,
      height: 1614,
    },
    author: {
      "@type": "Organization",
      name: "Robato Systems Pvt. Ltd.",
    },
    publisher: {
      "@type": "Organization",
      name: "Robato Systems Pvt. Ltd.",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/MachinoX%20Pro.png`,
        width: 350,
        height: 60,
      },
    },
    datePublished: "2025-11-10",
    dateModified: "2025-11-10",
  };

  return (
    <>
      <Script
        id="about-us-article-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {children}
    </>
  );
}