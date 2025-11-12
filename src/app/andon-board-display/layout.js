// src/app/andon-board-display/layout.js
import React from "react";
import Script from "next/script";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
  title: "Andon Display Board | Factory Alert Display Boards | Real-Time Andon Displays",
  description:
    "Improve factory communication with real-time Andon display boards. Get instant alerts for faster issue resolution and enhanced production workflow.",
  keywords:
    "Robato Systems, Andon display board, factory alert display boards, real-time Andon displays",
  authors: [{ name: "Robato Systems Pvt. Ltd." }],
  publisher: "Robato Systems Pvt. Ltd.",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: `${baseUrl}/andon-board-display`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${baseUrl}/andon-board-display`,
    siteName: "Robato Systems Pvt. Ltd.",
    title:
      "Andon Display Board | Factory Alert Display Boards | Real-Time Andon Displays",
    description:
      "Improve factory communication with real-time Andon display boards. Get instant alerts for faster issue resolution and enhanced production workflow.",
    images: [
      {
        url: `${baseUrl}/images/MachinoX%20Pro.png`,
        width: 1200,
        height: 630,
        alt: "Andon Board Display | MachinoX Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Andon Display Board | Factory Alert Display Boards | Real-Time Andon Displays",
    description:
      "Improve factory communication with real-time Andon display boards. Get instant alerts for faster issue resolution and enhanced production workflow.",
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

export default function AndonBoardDisplayLayout({ children }) {
  const articleSchema = {
    "@context": "https://schema.org/",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/andon-board-display`,
    },
    headline: "MachinoX pro: Elevate Efficiency with Andon Board Displays",
    description:
      "Enhance industrial communication with MachinoX pro. Explore digital message display boards for indoor and outdoor use, including electronic scrolling signs and programmable LED message boards.",
    image: {
      "@type": "ImageObject",
      url: `${baseUrl}/images/Andon-Board-Displays.webp`,
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
        id="andon-board-display-article-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {children}
    </>
  );
}