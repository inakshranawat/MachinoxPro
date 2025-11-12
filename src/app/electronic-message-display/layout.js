// src/app/electronic-message-display/layout.js
import React from "react";
import Script from "next/script";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
  title: "Electronic Message Display | Real-Time Production & Andon Boards",
  description:
    "Enhance messaging with MachinoX pro's electronic message displays. Explore innovative solutions for seamless communication and dynamic content delivery.",
  keywords:
    "Electronic message display boards, Industrial LED message display, Factory production display system",
  authors: [{ name: "Robato Systems Pvt. Ltd." }],
  publisher: "Robato Systems Pvt. Ltd.",
  metadataBase: baseUrl ? new URL(baseUrl) : undefined,
  alternates: {
    canonical: baseUrl ? `${baseUrl}/electronic-message-display` : "/electronic-message-display",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl ? `${baseUrl}/electronic-message-display` : "/electronic-message-display",
    siteName: "Robato Systems Pvt. Ltd.",
    title: "Electronic Message Display | Real-Time Production & Andon Boards",
    description:
      "Enhance messaging with MachinoX pro's electronic message displays. Explore innovative solutions for seamless communication and dynamic content delivery.",
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
    title: "Electronic Message Display | Real-Time Production & Andon Boards",
    description:
      "Enhance messaging with MachinoX pro's electronic message displays. Explore innovative solutions for seamless communication and dynamic content delivery.",
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

export default function ElectronicMessageDisplayLayout({ children }) {
  const articleSchema = {
    "@context": "https://schema.org/",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": baseUrl ? `${baseUrl}/electronic-message-display` : "/electronic-message-display",
    },
    headline: "MachinoX Pro: Elevate Communication with Advanced Electronic Message Displays",
    description:
      "Enhance messaging with MachinoX pro's electronic message displays. Explore innovative solutions for seamless communication and dynamic content delivery.",
    image: {
      "@type": "ImageObject",
      url: baseUrl
        ? `${baseUrl}/images/CNC-dashboard.png`
        : "/images/CNC-dashboard.png",
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
        url: baseUrl
          ? `${baseUrl}/images/MachinoX%20Pro.png`
          : "/images/MachinoX%20Pro.png",
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
        name: "What is Product-Centric Monitoring?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Product-Centric Monitoring focuses on tracking the remaining actual time, production downtime, and displaying OEE details for efficient production processes.",
        },
      },
      {
        "@type": "Question",
        name: "How does the system calculate Remaining Actual Time?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The system calculates Remaining Actual Time based on real-time production data, analyzing the current speed, and estimating the time required to complete the remaining tasks for specific products.",
        },
      },
      {
        "@type": "Question",
        name: "What is Production Downtime Monitoring, and why is it important?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Production Downtime Monitoring tracks and analyzes periods when production is halted. It is crucial as it helps identify bottlenecks, reduce downtime, and optimize overall production efficiency.",
        },
      },
      {
        "@type": "Question",
        name: "Can you explain OEE (Overall Equipment Efficiency) and its significance in detail?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "OEE measures the overall performance of production equipment by combining factors like availability, performance, and quality. It provides insights into how effectively equipment is utilized, enabling improvements in productivity and profitability.",
        },
      },
      {
        "@type": "Question",
        name: "How is OEE Details Displayed in the system?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "OEE details are displayed through intuitive dashboards and graphs, showcasing metrics such as availability, performance, and quality. These visual representations help users quickly understand the efficiency of their production processes.",
        },
      },
      {
        "@type": "Question",
        name: "Is the Product-Centric Monitoring system customizable for different types of products?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the system is highly customizable. It can be tailored to monitor various product types, allowing businesses to adapt the monitoring parameters according to their specific production requirements.",
        },
      },
      {
        "@type": "Question",
        name: "Can the system predict potential downtime and provide proactive alerts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely, the system employs predictive algorithms to anticipate potential downtime scenarios. It sends proactive alerts, enabling timely interventions to prevent disruptions and maintain seamless production.",
        },
      },
      {
        "@type": "Question",
        name: "How user-friendly is the interface for accessing real-time production data and reports?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The interface is designed to be user-friendly, providing easy navigation and quick access to real-time production data, reports, and detailed analytics. Users can efficiently monitor and analyze production metrics.",
        },
      },
      {
        "@type": "Question",
        name: "Is historical data stored, and can it be used for performance analysis and trend forecasting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the system stores historical data, allowing businesses to conduct in-depth performance analysis and trend forecasting. Historical data provides valuable insights, aiding in strategic decision-making for future production planning.",
        },
      },
      {
        "@type": "Question",
        name: "Does the Product-Centric Monitoring system integrate with other software and manufacturing tools?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the system is designed to integrate seamlessly with various software and manufacturing tools. This integration enhances overall operational efficiency by enabling data exchange and coordination between different aspects of the production process.",
        },
      },
    ],
  };

  return (
    <>
      {/* JSON-LD schemas */}
      <Script
        id="electronic-message-article-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="electronic-message-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {children}
    </>
  );
}
