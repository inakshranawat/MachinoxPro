// src/app/industrial-parameter-display/layout.js
import React from "react";
import Script from "next/script";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
  title: "MachinoX Pro: Industrial Parameter Display Solutions with Digital LED Message Boards",
  description:
    "Optimize operations with MachinoX pro's industrial parameter display solutions. Elevate operations with our reliable digital LED message boards.",
  keywords:
    "digital message display board, digital scrolling message board, electronic message boards, electronic message display, industrial LED display board, industrial LED message display, LED display message board",
  authors: [{ name: "Robato Systems Pvt. Ltd." }],
  publisher: "Robato Systems Pvt. Ltd.",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: `${baseUrl}/industrial-parameter-display`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${baseUrl}/industrial-parameter-display`,
    siteName: "Robato Systems Pvt. Ltd.",
    title:
      "MachinoX Pro: Industrial Parameter Display Solutions with Digital LED Message Boards",
    description:
      "Optimize operations with MachinoX pro's industrial parameter display solutions. Elevate operations with our reliable digital LED message boards.",
    images: [
      {
        url: `${baseUrl}/images/MachinoX%20Pro.png`,
        width: 1200,
        height: 630,
        alt: "Industrial Parameter Display | MachinoX Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MachinoX Pro: Industrial Parameter Display Solutions with Digital LED Message Boards",
    description:
      "Optimize operations with MachinoX pro's industrial parameter display solutions. Elevate operations with our reliable digital LED message boards.",
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

export default function IndustrialParameterDisplayLayout({ children }) {
  const articleSchema = {
    "@context": "https://schema.org/",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/industrial-parameter-display`,
    },
    headline: "MachinoX Pro: Industrial Parameter Display Solutions with Digital LED Message Boards",
    description:
      "Optimize operations with MachinoX pro's industrial parameter display solutions. Elevate operations with our reliable digital LED message boards.",
    image: {
      "@type": "ImageObject",
      url: `${baseUrl}/images/production-counter-display.png`,
      width: 900,
      height: 485,
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
        id="industrial-parameter-display-article-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {children}
    </>
  );
}