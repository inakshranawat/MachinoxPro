// src/app/aerospace-defense-manufacturing/layout.js
import React from "react";
import Script from "next/script";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
  title: "Aerospace Defense Manufacturing | Downtime Monitoring Solutions | Real-Time Production Tracking",
  description:
    "Improve aerospace manufacturing with precision monitoring and digital display solutions. Ensure compliance and boost production efficiency.",
  keywords:
    "Aerospace Defense Manufacturing, Production monitoring solutions, real-time production tracking",
  authors: [{ name: "Robato Systems Pvt. Ltd." }],
  publisher: "Robato Systems Pvt. Ltd.",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: `${baseUrl}/aerospace-defense`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${baseUrl}/aerospace-defense`,
    siteName: "Robato Systems Pvt. Ltd.",
    title:
      "Aerospace Defense Manufacturing | Downtime Monitoring Solutions | Real-Time Production Tracking",
    description:
      "Improve aerospace manufacturing with precision monitoring and digital display solutions. Ensure compliance and boost production efficiency.",
    images: [
      {
        url: `${baseUrl}/images/MachinoX%20Pro.png`,
        width: 1200,
        height: 630,
        alt: "Aerospace Defense Manufacturing | MachinoX Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Aerospace Defense Manufacturing | Downtime Monitoring Solutions | Real-Time Production Tracking",
    description:
      "Improve aerospace manufacturing with precision monitoring and digital display solutions. Ensure compliance and boost production efficiency.",
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

export default function AerospaceDefenseLayout({ children }) {
  const articleSchema = {
    "@context": "https://schema.org/",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/aerospace-defense`,
    },
    headline: "MachinoX pro for Aerospace Defense Monitoring",
    description:
      "Explore aerospace defense monitoring at MachinoX pro. Elevate operational efficiency with cutting-edge technology and expert services.",
    image: {
      "@type": "ImageObject",
      url: `${baseUrl}/images/CNC-tablet.png`,
      width: 2370,
      height: 1614,
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
        name: "What is Robato Systems, and what services do you offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Robato Systems is a leading provider of machine monitoring services tailored to the aerospace, defense, and manufacturing sectors. We offer real-time monitoring, data analytics, and predictive maintenance solutions to optimize machine performance and minimize downtime.",
        },
      },
      {
        "@type": "Question",
        name: "How can machine monitoring benefit my aerospace, defense, or manufacturing business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Machine monitoring provides crucial insights into equipment health, efficiency, and production quality. By leveraging our services, you can enhance operational efficiency, reduce unplanned downtime, and improve overall productivity.",
        },
      },
      {
        "@type": "Question",
        name: "What types of machines can Robato Systems monitor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We can monitor a wide range of machines and equipment commonly found in aerospace, defense, and manufacturing settings. This includes CNC machines, robotics, 3D printers, milling machines, and more.",
        },
      },
      {
        "@type": "Question",
        name: "Is your monitoring system compatible with existing equipment and systems in my facility?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our monitoring systems are designed to integrate seamlessly with your existing machinery and systems. We can adapt to various communication protocols and equipment types to ensure a smooth integration process.",
        },
      },
      {
        "@type": "Question",
        name: "How does real-time monitoring work, and what data can I access in real time?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Real-time monitoring involves continuous data collection from your machines. You can access live information about machine status, performance metrics, production rates, and any anomalies or issues as they occur.",
        },
      },
      {
        "@type": "Question",
        name: "Can Robato Systems predict maintenance needs and prevent unexpected breakdowns?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our advanced analytics and machine learning algorithms enable us to predict maintenance requirements. By identifying potential issues early, we help you schedule maintenance proactively, reducing costly unplanned downtime.",
        },
      },
      {
        "@type": "Question",
        name: "Is data security a concern with Robato Systems' monitoring services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We take data security seriously. Our systems are designed with robust security measures to protect your data. We use encryption, access controls, and industry best practices to ensure the confidentiality and integrity of your data.",
        },
      },
      {
        "@type": "Question",
        name: "How can I access and analyze the data collected by Robato Systems' monitoring solutions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can access and analyze the data through our user-friendly web-based dashboard and mobile app. Our platform provides customizable reports and visualizations to help you make informed decisions.",
        },
      },
      {
        "@type": "Question",
        name: "What level of technical support and training does Robato Systems provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer comprehensive technical support and training to ensure you get the most out of our services. Our team will assist with setup, provide training for your staff, and offer ongoing support to address any questions or issues.",
        },
      },
      {
        "@type": "Question",
        name: "How can I get started with Robato Systems' machine monitoring services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To get started, simply contact our sales team through our website. We'll arrange a consultation to assess your needs and customize a solution that fits your aerospace, defense, or manufacturing business.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="aerospace-article-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="aerospace-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}