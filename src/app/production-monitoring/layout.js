// src/app/production-monitoring/layout.js
import React from "react";
import Script from "next/script";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
  title: "Production Monitoring System | REAL-TIME Production Tracking | Manufacturing Performance Monitoring",
  description:
    "Track real-time production performance with advanced monitoring solutions. Improve efficiency, reduce bottlenecks, and maximize output with smart analytics.",
  keywords:
    "production monitoring system, real-time production tracking, manufacturing performance monitoring",
  authors: [{ name: "Robato Systems Pvt. Ltd." }],
  publisher: "Robato Systems Pvt. Ltd.",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: `${baseUrl}/production-monitoring`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${baseUrl}/production-monitoring`,
    siteName: "Robato Systems Pvt. Ltd.",
    title:
      "Production Monitoring System | REAL-TIME Production Tracking | Manufacturing Performance Monitoring",
    description:
      "Track real-time production performance with advanced monitoring solutions. Improve efficiency, reduce bottlenecks, and maximize output with smart analytics.",
    images: [
      {
        url: `${baseUrl}/images/MachinoX%20Pro.png`,
        width: 1200,
        height: 630,
        alt: "Production Monitoring System | MachinoX Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Production Monitoring System | REAL-TIME Production Tracking | Manufacturing Performance Monitoring",
    description:
      "Track real-time production performance with advanced monitoring solutions. Improve efficiency, reduce bottlenecks, and maximize output with smart analytics.",
    images: [`${baseUrl}/images/MachinoX%20Pro.png`],
    site: "@robatosystems",
  },
  icons: {
    icon: {

      url:"/favicon.ico", sizes:"any"
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

export default function ProductionMonitoringLayout({ children }) {
  const articleSchema = {
    "@context": "https://schema.org/",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/production-monitoring`,
    },
    headline: "MachinoX Pro: Elevate Efficiency with Precision Production Monitoring Services",
    description:
      "Optimize production processes with MachinoX pro's cutting-edge monitoring services. Gain real-time insights for enhanced efficiency and precision.",
    image: {
      "@type": "ImageObject",
      url: `${baseUrl}/images/CNC-dashboard.png`,
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

  const faqSchema = {
    "@context": "https://schema.org/",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is production monitoring, and why is it important for my manufacturing business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Production monitoring involves real-time tracking and analysis of your manufacturing processes. It's crucial because it helps optimize productivity, reduce downtime, and enhance overall efficiency.",
        },
      },
      {
        "@type": "Question",
        name: "How does machine monitoring work, and what types of data can I collect?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Machine monitoring uses sensors and software to gather data on machine performance, such as cycle times, downtime reasons, and production rates. It can also track quality metrics and operator productivity.",
        },
      },
      {
        "@type": "Question",
        name: "What are the key benefits of using a machine monitoring service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Machine monitoring services provide insights into production bottlenecks, improve resource allocation, enhance quality control, reduce maintenance costs, and increase overall equipment effectiveness (OEE).",
        },
      },
      {
        "@type": "Question",
        name: "Can I integrate machine monitoring into my existing production equipment and systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, many machine monitoring solutions are designed for easy integration with various manufacturing equipment and software, making it adaptable to your specific needs.",
        },
      },
      {
        "@type": "Question",
        name: "How can machine monitoring help reduce production downtime and improve uptime?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "By identifying the root causes of downtime, machine monitoring enables proactive maintenance, reduces unplanned stoppages, and maximizes equipment uptime.",
        },
      },
      {
        "@type": "Question",
        name: "What analytics and reporting features can I expect from a machine monitoring service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Machine monitoring services typically offer real-time dashboards, historical performance analysis, customizable reports, and predictive analytics to help you make data-driven decisions.",
        },
      },
      {
        "@type": "Question",
        name: "Is machine monitoring suitable for small and medium-sized manufacturing businesses, or is it primarily for larger enterprises?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Machine monitoring is beneficial for businesses of all sizes. It can be scaled to meet the needs and budget of smaller manufacturers and is especially valuable for improving efficiency.",
        },
      },
      {
        "@type": "Question",
        name: "How can machine monitoring contribute to improving product quality and reducing defects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Machine monitoring can detect deviations from quality standards in real-time, enabling quick interventions and reducing the likelihood of defective products reaching customers.",
        },
      },
      {
        "@type": "Question",
        name: "Is machine monitoring secure, and how is my data protected?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Machine monitoring services prioritize data security and often include encryption, access controls, and compliance with industry standards to protect your sensitive production data.",
        },
      },
      {
        "@type": "Question",
        name: "What is the typical ROI (Return on Investment) for implementing a machine monitoring service in a manufacturing facility?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The ROI of machine monitoring can vary depending on factors like the size of your operation, current efficiency levels, and goals. However, many businesses experience a rapid ROI through increased productivity and reduced downtime. A machine monitoring provider can help you estimate your potential ROI based on your specific circumstances.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="production-monitoring-article-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="production-monitoring-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}