// src/app/production-counter-display/layout.js
import React from "react";
import Script from "next/script";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
  title: "Manufacturing Output Tracking | Digital Production Counting | Industrial Counting Solutions",
  description:
    "Enhance production visibility with digital counters. Track output accurately and improve manufacturing efficiency with real-time industrial counting solutions.",
  keywords:
    "manufacturing output tracking, digital production counting, industrial counting solutions",
  authors: [{ name: "Robato Systems Pvt. Ltd." }],
  publisher: "Robato Systems Pvt. Ltd.",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: `${baseUrl}/production-counter-display`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${baseUrl}/production-counter-display`,
    siteName: "Robato Systems Pvt. Ltd.",
    title:
      "Manufacturing Output Tracking | Digital Production Counting | Industrial Counting Solutions",
    description:
      "Enhance production visibility with digital counters. Track output accurately and improve manufacturing efficiency with real-time industrial counting solutions.",
    images: [
      {
        url: `${baseUrl}/images/MachinoX%20Pro.png`,
        width: 1200,
        height: 630,
        alt: "Production Counter Display | MachinoX Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Manufacturing Output Tracking | Digital Production Counting | Industrial Counting Solutions",
    description:
      "Enhance production visibility with digital counters. Track output accurately and improve manufacturing efficiency with real-time industrial counting solutions.",
    images: [`${baseUrl}/images/MachinoX%20Pro.png`],
    site: "@robatosystems",
  },
  icons: {
    icon: {
      url:"/favicon.ico" , sizes:"any"
    },
    shortcut: "/hubfs/Images/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function ProductionCounterDisplayLayout({ children }) {
  const articleSchema = {
    "@context": "https://schema.org/",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/production-counter-display`,
    },
    headline: "Optimize Production with LED Counter Display Boards | Digital Production Counters",
    description:
      "Explore Andon Board Displays by MachinoX pro. Streamline communication, enhance visibility, and boost productivity with our cutting-edge solutions.",
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

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Production Counter Display",
    image: `${baseUrl}/images/production-counter-display.png`,
    description:
      "Explore Andon Board Displays by MachinoX pro. Streamline communication, enhance visibility, and boost productivity with our cutting-edge solutions.",
    brand: "MachinoX Pro",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4",
      bestRating: "4",
      worstRating: "4",
      ratingCount: "5",
    },
    reviews: [
      {
        "@type": "Review",
        reviewBody: "",
        author: {
          "@type": "Person",
          name: "Robato Systems Pvt. Ltd.",
        },
        name: "Arun Kar",
        datePublished: "2022-09-16",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
      },
      {
        "@type": "Review",
        reviewBody: "",
        author: {
          "@type": "Person",
          name: "Robato Systems Pvt. Ltd.",
        },
        name: "Angat Dhillon",
        datePublished: "2023-05-09",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
      },
      {
        "@type": "Review",
        reviewBody: "",
        author: {
          "@type": "Person",
          name: "Robato Systems Pvt. Ltd.",
        },
        name: "Sk.Jalal",
        datePublished: "2023-08-08",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
      },
      {
        "@type": "Review",
        reviewBody: "",
        author: {
          "@type": "Person",
          name: "Robato Systems Pvt. Ltd.",
        },
        name: "Prince Kaur",
        datePublished: "2023-05-17",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
      },
      {
        "@type": "Review",
        reviewBody: "",
        author: {
          "@type": "Person",
          name: "Robato Systems Pvt. Ltd.",
        },
        name: "Suresh Yadav",
        datePublished: "2023-03-16",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="production-counter-display-article-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="production-counter-display-product-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {children}
    </>
  );
}

