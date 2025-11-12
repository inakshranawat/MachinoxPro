// src/app/contract-manufacturers/layout.js
import React from "react";
import Script from "next/script";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
  title: "Contract Manufacturers | Production Monitoring & Andon Solutions | OEE Tracking",
  description:
    "Optimize contract manufacturing with real-time production monitoring, downtime tracking, and smart Andon display systems. Improve efficiency with IIoT-powered production management software.",
  keywords:
    "Industrial contract manufacturers, Production monitoring for contract manufacturers, Manufacturing process optimization",
  authors: [{ name: "Robato Systems Pvt. Ltd." }],
  publisher: "Robato Systems Pvt. Ltd.",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: `${baseUrl}/contract-manufacturers`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${baseUrl}/contract-manufacturers`,
    siteName: "Robato Systems Pvt. Ltd.",
    title:
      "Contract Manufacturers | Production Monitoring & Andon Solutions",
    description:
      "Optimize contract manufacturing with real-time production monitoring, downtime tracking, and smart Andon display systems. Improve efficiency with IIoT-powered production management software.",
    images: [
      {
        url: `${baseUrl}/images/MachinoX%20Pro.png`,
        width: 1200,
        height: 630,
        alt: "Contract Manufacturers | MachinoX Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Contract Manufacturers | Production Monitoring & Andon Solutions",
    description:
      "Optimize contract manufacturing with real-time production monitoring, downtime tracking, and smart Andon display systems. Improve efficiency with IIoT-powered production management software.",
    images: [`${baseUrl}/images/MachinoX%20Pro.png`],
    site: "@robatosystems",
  },
  icons: {
    icon: { url: "/favicon.ico", sizes: "any" },
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

export default function ContractManufacturersLayout({ children }) {
  const articleSchema = {
    "@context": "https://schema.org/",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/contract-manufacturers`,
    },
    headline: "MachinoX Pro: Precision Contract Manufacturing Services",
    description:
      "Partner with MachinoX pro for top-tier contract manufacturing. Our expertise delivers precision and reliability tailored to diverse industries.",
    image: {
      "@type": "ImageObject",
      url: `${baseUrl}/images/downtime-laptop.png`,
      width: 1260,
      height: 815,
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

  const faqSchema = {
    "@context": "https://schema.org/",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is machine monitoring, and why do contract manufacturers need it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Machine monitoring is a service that tracks the performance and health of manufacturing equipment. Contract manufacturers benefit from it by optimizing production, reducing downtime, and enhancing overall efficiency.",
        },
      },
      {
        "@type": "Question",
        name: "How does machine monitoring work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Machine monitoring relies on sensors and software to collect real-time data from manufacturing equipment. This data is then analyzed to provide insights into machine performance and maintenance needs.",
        },
      },
      {
        "@type": "Question",
        name: "What types of manufacturing equipment can be monitored using your service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our machine monitoring services are compatible with a wide range of manufacturing equipment, including CNC machines, injection molding machines, 3D printers, and more.",
        },
      },
      {
        "@type": "Question",
        name: "What are the key benefits of using machine monitoring for contract manufacturers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Machine monitoring helps contract manufacturers improve productivity, reduce operational costs, extend the lifespan of equipment, and make data-driven decisions to enhance production efficiency.",
        },
      },
      {
        "@type": "Question",
        name: "Is machine monitoring suitable for small contract manufacturing businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our machine monitoring services can be tailored to the needs of both small and large contract manufacturing businesses, ensuring scalability and cost-effectiveness.",
        },
      },
      {
        "@type": "Question",
        name: "How can machine monitoring help with predictive maintenance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Machine monitoring can predict equipment failures and maintenance needs based on real-time data analysis, allowing contract manufacturers to perform maintenance tasks proactively and avoid costly downtime.",
        },
      },
      {
        "@type": "Question",
        name: "Is the data collected through machine monitoring secure and confidential?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we take data security and confidentiality seriously. Our systems use robust encryption and access controls to protect your manufacturing data.",
        },
      },
      {
        "@type": "Question",
        name: "Can I access machine monitoring data remotely?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our machine monitoring platform provides real-time access to data and performance metrics through a secure online portal, accessible from anywhere with an internet connection.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get started with your machine monitoring services for my contract manufacturing business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To get started, simply contact our team, and we will work with you to assess your specific needs and develop a tailored monitoring solution for your equipment.",
        },
      },
      {
        "@type": "Question",
        name: "What kind of customer support and training do you provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer comprehensive customer support, including onboarding assistance, training sessions, and ongoing technical support to ensure that you get the most out of our machine monitoring services.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="contract-manufacturers-article-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="contract-manufacturers-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}