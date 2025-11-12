// src/app/contact/layout.js
import React from "react";
import Script from "next/script";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
  title: "Contact IIoT Robato Systems | Industrial Automation Experts",
  description:
    "Get in touch with IIoT Robato Systems for smart factory solutions, production monitoring, OEE tracking, Andon tower lights, and downtime tracking systems. Connect with our experts today!",
  keywords:
    "Robato Systems, IIoT, contact, smart factory solutions, production monitoring, OEE tracking, Andon tower lights, downtime tracking",
  authors: [{ name: "Robato Systems Pvt. Ltd." }],
  publisher: "Robato Systems Pvt. Ltd.",
  generator: "HubSpot",
  metadataBase: baseUrl ? new URL(baseUrl) : undefined,
  alternates: {
    canonical: baseUrl ? `${baseUrl}/contact-us` : "/contact-us",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl ? `${baseUrl}/contact-us` : "/contact-us",
    siteName: "Robato Systems Pvt. Ltd.",
    title: "Contact IIoT Robato Systems | Industrial Automation Experts",
    description:
      "Get in touch with IIoT Robato Systems for smart factory solutions, production monitoring, OEE tracking, Andon tower lights, and downtime tracking systems. Connect with our experts today!",
    images: [
      {
        url: baseUrl
          ? `${baseUrl}/images/MachinoX%20Pro.png`
          : "/images/MachinoX%20Pro.png",
        width: 1200,
        height: 630,
        alt: "MachinoX Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact IIoT Robato Systems | Industrial Automation Experts",
    description:
      "Get in touch with IIoT Robato Systems for smart factory solutions, production monitoring, OEE tracking, Andon tower lights, and downtime tracking systems. Connect with our experts today!",
    images: [
      baseUrl ? `${baseUrl}/images/MachinoX%20Pro.png` : "/images/MachinoX%20Pro.png",
    ],
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

export default function ContactLayout({ children }) {
  const articleSchema = {
    "@context": "https://schema.org/",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": baseUrl ? `${baseUrl}/contact-us` : "/contact-us",
    },
    headline: "Contact Us | MachinoX Pro",
    description:
      "Connect effortlessly with MachinoX pro on our contact page. Experience swift communication for inquiries, support, and collaboration. Let's build something great together!",
    image: {
      "@type": "ImageObject",
      url: baseUrl
        ? `${baseUrl}/images/MachinoX%20Pro.png`
        : "/images/MachinoX%20Pro.png",
      width: 1200,
      height: 630,
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
        url: baseUrl
          ? `${baseUrl}/images/MachinoX%20Pro.png`
          : "/images/MachinoX%20Pro.png",
        width: "350",
        height: "60",
      },
    },
    datePublished: "2025-11-10",
    dateModified: "2025-11-10",
  };

  return (
    <>
     

      {/* JSON-LD Article schema */}
      <Script
        id="contact-article-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {children}
    </>
  );
}
