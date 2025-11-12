// src/app/cloud-andon-tower-light/layout.js
import React from "react";
import Script from "next/script";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
  title: "Cloud Andon Tower Light | Smart Wireless Andon for Manufacturing",
  description:
    "Enhance factory efficiency with Smart Cloud Andon Tower Lights. Get real-time production monitoring, OEE tracking, and downtime alerts with IIoT-based wireless Andon solutions.",
  keywords:
    "Cloud Andon Tower Light, Smart Andon tower light system, Wireless Andon signal tower",
  authors: [{ name: "Robato Systems Pvt. Ltd." }],
  publisher: "Robato Systems Pvt. Ltd.",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: `${baseUrl}/cloud-andon-tower-light`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${baseUrl}/cloud-andon-tower-light`,
    siteName: "Robato Systems Pvt. Ltd.",
    title:
      "Cloud Andon Tower Light | Smart Wireless Andon for Manufacturing",
    description:
      "Enhance factory efficiency with Smart Cloud Andon Tower Lights. Get real-time production monitoring, OEE tracking, and downtime alerts with IIoT-based wireless Andon solutions.",
    images: [
      {
        url: `${baseUrl}/images/MachinoX%20Pro.png`,
        width: 1200,
        height: 630,
        alt: "Cloud Andon Tower Light | MachinoX Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Cloud Andon Tower Light | Smart Wireless Andon for Manufacturing",
    description:
      "Enhance factory efficiency with Smart Cloud Andon Tower Lights. Get real-time production monitoring, OEE tracking, and downtime alerts with IIoT-based wireless Andon solutions.",
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

export default function CloudAndonTowerLightLayout({ children }) {
  const articleSchema = {
    "@context": "https://schema.org/",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/cloud-andon-tower-light`,
    },
    headline: "MachinoX Pro: Cloud Andon Tower Light Services",
    description:
      "Discover cloud-based Andon tower light solutions with MachinoX pro. Streamline processes, enhance visibility, and boost productivity with our cutting-edge services.",
    image: {
      "@type": "ImageObject",
      url: `${baseUrl}/images/CLOUD-ANDON-TOWER-LIGHT.png`,
      width: 2500,
      height: 1385,
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
        id="cloud-andon-tower-light-article-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {children}
    </>
  );
}