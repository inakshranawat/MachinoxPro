// src/app/heavy-machinery-manufacturing/layout.js
import React from "react";
import Script from "next/script";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
  title: "Heavy Machinery Manufacturing | Downtime Tracking & Andon Solutions",
  description:
    "Boost efficiency in heavy machinery manufacturing with real-time production monitoring, downtime tracking, and smart Andon tower lights. Optimize workflows with IIoT-powered production management software.",
  keywords:
    "Heavy machinery manufacturing solutions, Industrial production monitoring, Machine downtime tracking system",
  authors: [{ name: "Robato Systems Pvt. Ltd." }],
  publisher: "Robato Systems Pvt. Ltd.",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: `${baseUrl}/heavy-machinery`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${baseUrl}/heavy-machinery`,
    siteName: "Robato Systems Pvt. Ltd.",
    title:
      "Heavy Machinery Manufacturing | Downtime Tracking & Andon Solutions",
    description:
      "Boost efficiency in heavy machinery manufacturing with real-time production monitoring, downtime tracking, and smart Andon tower lights. Optimize workflows with IIoT-powered production management software.",
    images: [
      {
        url: `${baseUrl}/images/MachinoX%20Pro.png`,
        width: 1200,
        height: 630,
        alt: "Heavy Machinery Manufacturing | MachinoX Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Heavy Machinery Manufacturing | Downtime Tracking & Andon Solutions",
    description:
      "Boost efficiency in heavy machinery manufacturing with real-time production monitoring, downtime tracking, and smart Andon tower lights. Optimize workflows with IIoT-powered production management software.",
    images: [`${baseUrl}/images/MachinoX%20Pro.png`],
    site: "@robatosystems",
  },
  icons: {
    icon: 
      { url: "/favicon.ico", sizes: "any" },
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

export default function HeavyMachineryLayout({ children }) {
  const articleSchema = {
    "@context": "https://schema.org/",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/heavy-machinery-manufacturing`,
    },
    headline: "MachinoX Pro: Precision Heavy Machinery Manufacturing",
    description:
      "Craft precision-engineered heavy machinery with MachinoX pro. Explore advanced manufacturing services for excellence in machinery solutions.",
    image: {
      "@type": "ImageObject",
      url: `${baseUrl}/images/efficiency-report-laptop.png`,
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
        name: "What is machine monitoring, and why is it important for heavy machinery manufacturing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Machine monitoring is the process of real-time tracking and analysis of heavy machinery performance. It's crucial for heavy machinery manufacturing because it helps optimize production, reduce downtime, and enhance overall efficiency.",
        },
      },
      {
        "@type": "Question",
        name: "How does machine monitoring work in heavy machinery manufacturing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Machine monitoring involves installing sensors and software that collect data on machine performance, such as temperature, vibration, and energy consumption. This data is then analyzed to identify potential issues and make informed decisions.",
        },
      },
      {
        "@type": "Question",
        name: "What types of heavy machinery can benefit from machine monitoring services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Machine monitoring services can benefit a wide range of heavy machinery, including CNC machines, presses, forges, lathes, and more.",
        },
      },
      {
        "@type": "Question",
        name: "What are the key benefits of using machine monitoring services in heavy machinery manufacturing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Benefits include increased uptime, reduced maintenance costs, improved product quality, enhanced safety, and better resource utilization.",
        },
      },
      {
        "@type": "Question",
        name: "How does machine monitoring help in predictive maintenance for heavy machinery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Machine monitoring predicts when equipment is likely to fail, allowing for scheduled maintenance before a breakdown occurs, saving both time and money.",
        },
      },
      {
        "@type": "Question",
        name: "Is machine monitoring compatible with older heavy machinery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, machine monitoring solutions can often be retrofitted to older machinery to modernize and optimize their performance.",
        },
      },
      {
        "@type": "Question",
        name: "Is my data secure when using machine monitoring services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, reputable machine monitoring service providers employ robust security measures to protect your data from unauthorized access or breaches.",
        },
      },
      {
        "@type": "Question",
        name: "Can machine monitoring services integrate with other manufacturing systems and software?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, machine monitoring systems can often be integrated with existing manufacturing software, such as ERP or MES systems, to provide a comprehensive view of your operations.",
        },
      },
      {
        "@type": "Question",
        name: "How can I get started with machine monitoring services for my heavy machinery manufacturing facility?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To get started, you can contact a machine monitoring service provider for a consultation and customized solution based on your specific needs.",
        },
      },
      {
        "@type": "Question",
        name: "What is the typical return on investment (ROI) for implementing machine monitoring in heavy machinery manufacturing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The ROI varies depending on factors like the size of your operation and the current state of your machinery. However, many businesses experience a significant ROI within a relatively short time frame due to reduced downtime and maintenance costs.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="heavy-machinery-article-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="heavy-machinery-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}