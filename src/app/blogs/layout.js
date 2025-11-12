// src/app/blogs/layout.js
import React from "react";
import Script from "next/script";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
  title: "Revolutionizing Efficiency: Explore Robato Systems on Our Blog",
  description:
    "Stay ahead with MachinoX pros' blog on automation and robotics. Dive into industry insights, cutting-edge technology, and innovation.",
  keywords:
    "Robato Systems, Robotics Technology, Automation Insights, Future Tech Trends, Industry Innovation, Robotics Blog, Advanced Automation",
  authors: [{ name: "Robato Systems Pvt. Ltd." }],
  publisher: "Robato Systems Pvt. Ltd.",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: `${baseUrl}/blogs`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${baseUrl}/blogs`,
    siteName: "Robato Systems Pvt. Ltd.",
    title:
      "Revolutionizing Efficiency: Explore Robato Systems on Our Blog",
    description:
      "Stay ahead with MachinoX pros' blog on automation and robotics. Dive into industry insights, cutting-edge technology, and innovation.",
    images: [
      {
        url: `${baseUrl}/images/MachinoX%20Pro.png`,
        width: 1200,
        height: 630,
        alt: "Robato Systems Blog | MachinoX Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Revolutionizing Efficiency: Explore Robato Systems on Our Blog",
    description:
      "Stay ahead with MachinoX pros' blog on automation and robotics. Dive into industry insights, cutting-edge technology, and innovation.",
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

export default function BlogsLayout({ children }) {
  const articleSchema = {
    "@context": "https://schema.org/",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blogs`,
    },
    headline: "Revolutionizing Efficiency: Explore Robato Systems on Our Blog",
    description:
      "Stay ahead with MachinoX pros' blog on automation and robotics. Dive into industry insights, cutting-edge technology, and innovation.",
    image: {
      "@type": "ImageObject",
      url: `${baseUrl}/images/MachinoX%20Pro.png`,
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
        id="blogs-article-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {children}
    </>
  );
}