// src/app/andon-signal-tower-light/layout.js
import React from "react";
import Script from "next/script";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
  title: "MachinoX Pro: Your Solution for Industrial Parameter Display with Digital LED Message Boards",
  description:
    "Explore our Andon signal tower lights for efficient communication and enhanced productivity at MachinoX pro. Elevate your operations with innovative technology and unparalleled support.",
  keywords:
    "Robato Systems, Industrial Parameter Display, Digital LED Message Board, Real-time Data, Precision Technology, Industrial Monitoring, Smart Display Solutions, Advanced LED Displays",
  authors: [{ name: "Robato Systems Pvt. Ltd." }],
  publisher: "Robato Systems Pvt. Ltd.",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: `${baseUrl}/andon-signal-tower-light`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${baseUrl}/andon-signal-tower-light`,
    siteName: "Robato Systems Pvt. Ltd.",
    title:
      "MachinoX Pro: Your Solution for Industrial Parameter Display with Digital LED Message Boards",
    description:
      "Explore our Andon signal tower lights for efficient communication and enhanced productivity at MachinoX pro. Elevate your operations with innovative technology and unparalleled support.",
    images: [
      {
        url: `${baseUrl}/images/MachinoX%20Pro.png`,
        width: 1200,
        height: 630,
        alt: "Andon Signal Tower Light | MachinoX Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MachinoX Pro: Your Solution for Industrial Parameter Display with Digital LED Message Boards",
    description:
      "Explore our Andon signal tower lights for efficient communication and enhanced productivity at MachinoX pro. Elevate your operations with innovative technology and unparalleled support.",
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

export default function AndonSignalTowerLightLayout({ children }) {
  const articleSchema = {
    "@context": "https://schema.org/",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/andon-signal-tower-light`,
    },
    headline: "MachinoX Pro: Your Solution for Industrial Parameter Display with Digital LED Message Boards",
    description:
      "Explore our Andon signal tower lights for efficient communication and enhanced productivity at MachinoX pro. Elevate your operations with innovative technology and unparalleled support.",
    image: {
      "@type": "ImageObject",
      url: `${baseUrl}/images/ANDON-TOWER-LIGHT.png`,
      width: 1200,
      height: 1200,
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
        id="andon-signal-tower-light-article-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {children}
    </>
  );
}