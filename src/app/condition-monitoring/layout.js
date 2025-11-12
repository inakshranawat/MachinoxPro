// src/app/condition-monitoring/layout.js
import React from "react";
import Script from "next/script";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
  title: "MachinoX Pro: Expert Condition Monitoring Services",
  description:
    "Transform operations with MachinoX pro's advanced condition monitoring services. Optimize equipment performance and minimize downtime.",
  keywords:
    "condition monitoring services, advanced technology solutions, operational optimization, Robato Systems",
  authors: [{ name: "Robato Systems Pvt. Ltd." }],
  publisher: "Robato Systems Pvt. Ltd.",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: `${baseUrl}/condition-monitoring`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${baseUrl}/condition-monitoring`,
    siteName: "Robato Systems Pvt. Ltd.",
    title: "MachinoX Pro: Expert Condition Monitoring Services",
    description:
      "Transform operations with MachinoX pro's advanced condition monitoring services. Optimize equipment performance and minimize downtime.",
    images: [
      {
        url: `${baseUrl}/images/MachinoX%20Pro.png`,
        width: 1200,
        height: 630,
        alt: "Condition Monitoring Services | MachinoX Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MachinoX Pro: Expert Condition Monitoring Services",
    description:
      "Transform operations with MachinoX pro's advanced condition monitoring services. Optimize equipment performance and minimize downtime.",
    images: [`${baseUrl}/images/MachinoX%20Pro.png`],
    site: "@robatosystems",
  },
  icons: {
    icon: 
      { url: "/favicon.ico", sizes: "any" },  
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

export default function ConditionMonitoringLayout({ children }) {
  const articleSchema = {
    "@context": "https://schema.org/",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/condition-monitoring`,
    },
    headline: "MachinoX Pro: Expert Condition Monitoring Services",
    description:
      "Transform operations with MachinoX pro's advanced condition monitoring services. Optimize equipment performance and minimize downtime.",
    image: {
      "@type": "ImageObject",
      url: `${baseUrl}/images/brother-laptop.png`,
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
        name: "What is condition monitoring, and why is it important for my machinery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Condition monitoring is the process of regularly assessing the health and performance of your machinery to detect issues early and prevent costly breakdowns. It helps ensure uninterrupted operations and reduces maintenance costs.",
        },
      },
      {
        "@type": "Question",
        name: "How does machine monitoring work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Machine monitoring involves the use of sensors and data analysis tools to continuously collect data from your machines. This data is then analyzed to identify abnormal patterns or signs of wear and tear.",
        },
      },
      {
        "@type": "Question",
        name: "What types of machines can benefit from condition monitoring services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Condition monitoring services are versatile and can be applied to various types of machinery, including industrial equipment, manufacturing machines, HVAC systems, and more.",
        },
      },
      {
        "@type": "Question",
        name: "What are the key benefits of using condition monitoring services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Condition monitoring services provide benefits such as increased machine uptime, reduced maintenance costs, improved safety, and enhanced overall equipment efficiency (OEE).",
        },
      },
      {
        "@type": "Question",
        name: "Is it necessary to install additional equipment or sensors for condition monitoring?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, in most cases, sensors or monitoring equipment need to be installed on your machinery to collect relevant data. These sensors are non-invasive and can be retrofitted to existing machines.",
        },
      },
      {
        "@type": "Question",
        name: "How often should I perform condition monitoring on my machines?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The frequency of condition monitoring depends on factors such as the type of machinery, its criticality to your operations, and environmental conditions. It can range from continuous monitoring to periodic checks.",
        },
      },
      {
        "@type": "Question",
        name: "What types of data are collected during condition monitoring?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Condition monitoring collects data on various parameters, including vibration, temperature, pressure, oil analysis, electrical currents, and more, depending on the specific needs of your machinery.",
        },
      },
      {
        "@type": "Question",
        name: "How do I interpret the data collected from condition monitoring?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most condition monitoring services provide user-friendly dashboards and reports that highlight abnormal conditions or trends. You can also receive alerts when critical issues are detected.",
        },
      },
      {
        "@type": "Question",
        name: "Can condition monitoring services integrate with my existing maintenance systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, many condition monitoring solutions can integrate with your existing maintenance and asset management systems to streamline maintenance workflows and enhance data-driven decision-making.",
        },
      },
      {
        "@type": "Question",
        name: "What is the return on investment (ROI) for implementing condition monitoring services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The ROI for condition monitoring services can be significant, as it helps reduce downtime, extend machine life, and minimize maintenance costs. The exact ROI will vary based on your specific circumstances but is typically realized relatively quickly.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="condition-monitoring-article-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="condition-monitoring-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}