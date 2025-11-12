// src/app/predictive-maintenance/layout.js
import React from "react";
import Script from "next/script";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
  title: "Predictive Maintenance Platforms | Asset Health Monitoring | Predictive Maintenance Services",
  description:
    "Prevent equipment failures with AI-driven predictive maintenance. Monitor asset health in real time and extend machine lifespan with advanced analytics.",
  keywords:
    "predictive maintenance platforms, asset health monitoring, predictive maintenance services",
  authors: [{ name: "Robato Systems Pvt. Ltd." }],
  publisher: "Robato Systems Pvt. Ltd.",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: `${baseUrl}/predictive-maintenance`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${baseUrl}/predictive-maintenance`,
    siteName: "Robato Systems Pvt. Ltd.",
    title:
      "Predictive Maintenance Platforms | Asset Health Monitoring | Predictive Maintenance Services",
    description:
      "Prevent equipment failures with AI-driven predictive maintenance. Monitor asset health in real time and extend machine lifespan with advanced analytics.",
    images: [
      {
        url: `${baseUrl}/images/MachinoX%20Pro.png`,
        width: 1200,
        height: 630,
        alt: "Predictive Maintenance | MachinoX Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Predictive Maintenance Platforms | Asset Health Monitoring | Predictive Maintenance Services",
    description:
      "Prevent equipment failures with AI-driven predictive maintenance. Monitor asset health in real time and extend machine lifespan with advanced analytics.",
    images: [`${baseUrl}/images/MachinoX%20Pro.png`],
    site: "@robatosystems",
  },
  icons: {
    icon: {
      url:"/favicon.ico",sizes:"any"
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

export default function PredictiveMaintenanceLayout({ children }) {
  const articleSchema = {
    "@context": "https://schema.org/",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/predictive-maintenance`,
    },
    headline: "MachinoX Pro - Precision in Predictive Maintenance Services",
    description:
      "Discover the future of maintenance at MachinoX pro, where cutting-edge technology meets predictive expertise. Explore our solutions for reliable, data-driven maintenance that optimizes equipment performance and minimizes downtime.",
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
        name: "What is machine monitoring, and why is it important for predictive maintenance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Machine monitoring involves real-time data collection and analysis of equipment performance. It is crucial for predictive maintenance as it helps detect issues before they cause costly breakdowns, reducing downtime and maintenance costs.",
        },
      },
      {
        "@type": "Question",
        name: "How does predictive maintenance differ from traditional maintenance practices?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Predictive maintenance relies on data-driven insights and predictive analytics to anticipate equipment failures. Traditional maintenance is often reactive and fixes issues after they occur, leading to more downtime and higher costs.",
        },
      },
      {
        "@type": "Question",
        name: "What types of machines and equipment can benefit from predictive maintenance services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our services are versatile and can be applied to various industrial equipment, including manufacturing machines, HVAC systems, conveyor belts, and more.",
        },
      },
      {
        "@type": "Question",
        name: "How does your machine monitoring system work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We install sensors on your equipment to collect data on factors like temperature, vibration, and usage patterns. Our software then analyzes this data to predict when maintenance is needed.",
        },
      },
      {
        "@type": "Question",
        name: "Is your machine monitoring system compatible with my existing equipment and systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our system is designed to be compatible with a wide range of equipment and can integrate with most existing industrial control systems and sensors.",
        },
      },
      {
        "@type": "Question",
        name: "What are the key benefits of using predictive maintenance services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The benefits include reduced downtime, lower maintenance costs, extended equipment lifespan, improved safety, and increased overall operational efficiency.",
        },
      },
      {
        "@type": "Question",
        name: "Can your predictive maintenance system prevent all equipment failures?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While our system is highly effective at identifying potential issues, it may not prevent every failure. However, it significantly reduces the likelihood of unexpected breakdowns.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get started with your machine monitoring and predictive maintenance services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can contact our team to schedule a consultation. We'll assess your needs, provide a customized solution, and guide you through the implementation process.",
        },
      },
      {
        "@type": "Question",
        name: "Is data security a concern with machine monitoring systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Data security is a top priority for us. We use encryption and follow industry best practices to protect your data from unauthorized access or breaches.",
        },
      },
      {
        "@type": "Question",
        name: "What kind of ROI (Return on Investment) can I expect from implementing predictive maintenance services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The ROI can vary depending on your industry and specific equipment, but our clients typically see significant savings within the first year, with long-term benefits continuing to accrue as predictive maintenance becomes a standard practice. We can provide ROI estimates based on your unique situation during our consultation.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="predictive-maintenance-article-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="predictive-maintenance-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}