// src/app/automotive-manufacturing/layout.js
import React from "react";
import Script from "next/script";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
  title: "Automotive Production Monitoring | Automotive manufacturing solutions",
  description:
    "Optimize automotive production with digital twin technology. Enhance predictive maintenance and streamline operations for maximum efficiency.",
  keywords:
    "Smart manufacturing for automotive, Automotive production monitoring, Automotive manufacturing solutions",
  authors: [{ name: "Robato Systems Pvt. Ltd." }],
  publisher: "Robato Systems Pvt. Ltd.",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: `${baseUrl}/automotive`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${baseUrl}/automotive`,
    siteName: "Robato Systems Pvt. Ltd.",
    title:
      "Automotive Manufacturing | Predictive Maintenance Using a Digital Twin",
    description:
      "Optimize automotive production with digital twin technology. Enhance predictive maintenance and streamline operations for maximum efficiency.",
    images: [
      {
        url: `${baseUrl}/images/MachinoX%20Pro.png`,
        width: 1200,
        height: 630,
        alt: "Automotive Manufacturing | MachinoX Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Automotive Manufacturing | Predictive Maintenance Using a Digital Twin",
    description:
      "Optimize automotive production with digital twin technology. Enhance predictive maintenance and streamline operations for maximum efficiency.",
    images: [`${baseUrl}/images/MachinoX%20Pro.png`],
    site: "@robatosystems",
  },
  icons: {
    icon: {
      url:"/favicon.ico"
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

export default function AutomotiveManufacturingLayout({ children }) {
  const articleSchema = {
    "@context": "https://schema.org/",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/automotive`,
    },
    headline: "MachinoX Pro - Automotive Manufacturing Solutions",
    description:
      "Optimize precision and efficiency in automotive manufacturing with MachinoX pro. Explore cutting-edge machine metric solutions for automation excellence",
    image: {
      "@type": "ImageObject",
      url: `${baseUrl}/images/Integration-laptop.png`,
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
        name: "What is machine monitoring, and why is it important in automotive manufacturing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Machine monitoring involves real-time tracking and analysis of machines and equipment on the production floor. It is crucial in automotive manufacturing to ensure optimal production efficiency, reduce downtime, and maintain product quality.",
        },
      },
      {
        "@type": "Question",
        name: "How can machine monitoring benefit my automotive manufacturing business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Machine monitoring can help you improve overall equipment effectiveness (OEE), reduce maintenance costs, prevent unplanned downtime, enhance product quality, and increase production output.",
        },
      },
      {
        "@type": "Question",
        name: "What types of machines and equipment can be monitored using your service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our machine monitoring service is versatile and can monitor a wide range of machines used in automotive manufacturing, including CNC machines, robotic assembly lines, injection molding machines, and more.",
        },
      },
      {
        "@type": "Question",
        name: "Is your machine monitoring system compatible with existing manufacturing equipment and systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our system is designed to integrate seamlessly with your existing equipment and manufacturing software, making it easy to implement without major disruptions.",
        },
      },
      {
        "@type": "Question",
        name: "How do I access real-time data from the monitored machines?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can access real-time data through our user-friendly web interface or mobile app. Our system provides live dashboards and reports to keep you informed at all times.",
        },
      },
      {
        "@type": "Question",
        name: "Can your system predict machine failures or maintenance needs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our advanced analytics and machine learning algorithms can predict potential machine failures and maintenance needs, allowing you to schedule maintenance proactively and avoid costly downtime.",
        },
      },
      {
        "@type": "Question",
        name: "Is data security a concern with machine monitoring?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We prioritize data security and use industry-standard encryption and authentication protocols to protect your data. Our system is designed to comply with data privacy regulations.",
        },
      },
      {
        "@type": "Question",
        name: "What kind of technical support and training do you offer to users of your machine monitoring service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide comprehensive training to help you get started with our system, and our technical support team is available to assist with any questions or issues you may encounter.",
        },
      },
      {
        "@type": "Question",
        name: "Can I customize the alerts and notifications I receive from the machine monitoring system?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can customize alerts and notifications based on your specific preferences and production goals. You can choose to receive alerts for various events, such as machine downtime, production deviations, or maintenance reminders.",
        },
      },
      {
        "@type": "Question",
        name: "How can I get started with your machine monitoring service for my automotive manufacturing facility?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Getting started is easy. Contact our sales team, and we will schedule a consultation to understand your needs and provide a tailored solution to optimize your automotive manufacturing processes using machine monitoring.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="automotive-article-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="automotive-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}