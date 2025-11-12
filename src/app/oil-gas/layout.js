// src/app/oil-gas-manufacturing/layout.js
import React from "react";
import Script from "next/script";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
  title: "Oil & Gas Manufacturing | Production Monitoring & Andon Solutions | Downtime Tracking",
  description:
    "Optimize oil & gas manufacturing with real-time production monitoring, downtime tracking, and smart Andon display systems. Improve efficiency with IIoT-powered production management software for refinery automation.",
  keywords:
    "Production monitoring for oil & gas industry, Downtime tracking for oil & gas equipment, Andon display for oil & gas manufacturing",
  authors: [{ name: "Robato Systems Pvt. Ltd." }],
  publisher: "Robato Systems Pvt. Ltd.",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: `${baseUrl}/oil-gas`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${baseUrl}/oil-gas`,
    siteName: "Robato Systems Pvt. Ltd.",
    title:
      "Oil & Gas Manufacturing | Production Monitoring & Andon Solutions | Downtime Tracking",
    description:
      "Optimize oil & gas manufacturing with real-time production monitoring, downtime tracking, and smart Andon display systems. Improve efficiency with IIoT-powered production management software for refinery automation.",
    images: [
      {
        url: `${baseUrl}/images/MachinoX%20Pro.png`,
        width: 1200,
        height: 630,
        alt: "Oil & Gas Manufacturing | MachinoX Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Oil & Gas Manufacturing | Production Monitoring & Andon Solutions | Downtime Tracking",
    description:
      "Optimize oil & gas manufacturing with real-time production monitoring, downtime tracking, and smart Andon display systems. Improve efficiency with IIoT-powered production management software for refinery automation.",
    images: [`${baseUrl}/images/MachinoX%20Pro.png`],
    site: "@robatosystems",
  },
  icons: {
    icon:{
     url:"/favicon.ico" , sizes:"any"
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

export default function OilGasLayout({ children }) {
  const articleSchema = {
    "@context": "https://schema.org/",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/oil-gas`,
    },
    headline: "MachinoX Pro: Precision for Oil & Gas Manufacturing",
    description:
      "Experience unparalleled MachinoX pro excellence in oil and gas manufacturing. Optimize efficiency and performance with our advanced technologies.",
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
        name: "What is machine monitoring, and why is it essential for the oil, gas, and manufacturing sectors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Machine monitoring is the process of continuously tracking the performance and condition of industrial machinery. It is vital for these industries because it helps prevent costly downtime, enhances operational efficiency, and ensures workplace safety.",
        },
      },
      {
        "@type": "Question",
        name: "What types of equipment can be monitored with your services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our machine monitoring services can be applied to a wide range of equipment, including pumps, compressors, turbines, generators, CNC machines, and more.",
        },
      },
      {
        "@type": "Question",
        name: "How does your machine monitoring system work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We utilize a combination of sensors, data collection devices, and advanced analytics software to gather real-time data from your machines. This data is then analyzed to detect anomalies and predict potential issues.",
        },
      },
      {
        "@type": "Question",
        name: "What benefits can I expect from using your machine monitoring services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "By using our services, you can expect reduced downtime, increased equipment lifespan, improved maintenance planning, and enhanced overall operational efficiency, leading to cost savings and higher profitability.",
        },
      },
      {
        "@type": "Question",
        name: "Is your machine monitoring system compatible with existing industrial control systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our system is designed to be compatible with a wide range of industrial control systems and can be seamlessly integrated into your existing infrastructure.",
        },
      },
      {
        "@type": "Question",
        name: "How secure is the data collected through your machine monitoring system?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Data security is a top priority for us. We employ industry-standard encryption and security measures to protect your data from unauthorized access or cyber threats.",
        },
      },
      {
        "@type": "Question",
        name: "Can your system provide remote monitoring capabilities?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our machine monitoring system offers remote monitoring, allowing you to access real-time data and receive alerts from anywhere with an internet connection.",
        },
      },
      {
        "@type": "Question",
        name: "How does predictive maintenance work, and how can it benefit my business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Predictive maintenance uses data analytics to predict when equipment is likely to fail, enabling you to schedule maintenance proactively, avoid unexpected breakdowns, and reduce maintenance costs.",
        },
      },
      {
        "@type": "Question",
        name: "What kind of support and training do you provide to your clients?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer comprehensive training and support to ensure that your team can effectively use our machine monitoring system. Our experts are available to assist with setup, troubleshooting, and data interpretation.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get started with your machine monitoring services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To get started, simply reach out to our team, and we will schedule a consultation to discuss your specific needs and tailor a solution that best fits your organization's requirements.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="oil-gas-article-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="oil-gas-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}