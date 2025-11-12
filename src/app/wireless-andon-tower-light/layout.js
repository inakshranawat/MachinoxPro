// src/app/wireless-andon-tower-light/layout.js
import React from "react";
import Script from "next/script";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
  title: "Signal Tower Light For Manufacturing | LED Andon Tower Lights | Stack Lights For Industry",
  description:
    "Optimize factory signaling with LED Andon tower lights. Improve workflow visibility with wireless stack lights for enhanced industrial efficiency.",
  keywords:
    "Wireless Andon Tower Lights, signal tower light for manufacturing, LED Andon tower lights, stack lights for industry",
  authors: [{ name: "Robato Systems Pvt. Ltd." }],
  publisher: "Robato Systems Pvt. Ltd.",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: `${baseUrl}/wireless-andon-tower-light`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${baseUrl}/wireless-andon-tower-light`,
    siteName: "Robato Systems Pvt. Ltd.",
    title:
      "Signal Tower Light For Manufacturing | LED Andon Tower Lights | Stack Lights For Industry",
    description:
      "Optimize factory signaling with LED Andon tower lights. Improve workflow visibility with wireless stack lights for enhanced industrial efficiency.",
    images: [
      {
        url: `${baseUrl}/images/MachinoX%20Pro.png`,
        width: 1200,
        height: 630,
        alt: "Wireless Andon Tower Light | MachinoX Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Signal Tower Light For Manufacturing | LED Andon Tower Lights | Stack Lights For Industry",
    description:
      "Optimize factory signaling with LED Andon tower lights. Improve workflow visibility with wireless stack lights for enhanced industrial efficiency.",
    images: [`${baseUrl}/images/MachinoX%20Pro.png`],
    site: "@robatosystems",
  },
  icons: {
    icon: {
      url:"/favicon.ico",sizes:"any"
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

export default function WirelessAndonTowerLightLayout({ children }) {
  const articleSchema = {
    "@context": "https://schema.org/",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/wireless-andon-tower-light`,
    },
    headline: "Robato Wireless Andon Tower Lights | Industrial Signal Solutions",
    description:
      "Improve industrial processes with MachinoX pro's wireless Andon tower lights. Experience efficient communication and real-time status updates for enhanced productivity.",
    image: {
      "@type": "ImageObject",
      url: `${baseUrl}/images/WIRELESS-ANDON-TOWER-LIGHT.png`,
      width: 696,
      height: 525,
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
        id="wireless-andon-tower-light-article-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {children}
    </>
  );
}