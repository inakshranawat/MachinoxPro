// src/app/medical-devices-manufacturing/layout.js
import React from "react";
import Script from "next/script";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
  title: "Medical Devices Manufacturing | Production Monitoring & Andon Solutions",
  description:
    "Enhance medical device manufacturing with real-time production monitoring, downtime tracking, and smart Andon display systems. Optimize efficiency with IIoT-driven production management software for regulatory-compliant operations.",
  keywords:
    "Medical device manufacturing solutions, Production monitoring for medical devices, Medical equipment downtime tracking",
  authors: [{ name: "Robato Systems Pvt. Ltd." }],
  publisher: "Robato Systems Pvt. Ltd.",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: `${baseUrl}/medical-devices`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${baseUrl}/medical-devices`,
    siteName: "Robato Systems Pvt. Ltd.",
    title: "MachinoX Pro - Medical Device Manufacturing Solutions",
    description:
      "Enhance medical device manufacturing with real-time production monitoring, downtime tracking, and smart Andon display systems. Optimize efficiency with IIoT-driven production management software for regulatory-compliant operations.",
    images: [
      {
        url: `${baseUrl}/images/MachinoX%20Pro.png`,
        width: 1200,
        height: 630,
        alt: "Medical Device Manufacturing | MachinoX Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MachinoX Pro - Medical Device Manufacturing Solutions",
    description:
      "Enhance medical device manufacturing with real-time production monitoring, downtime tracking, and smart Andon display systems. Optimize efficiency with IIoT-driven production management software for regulatory-compliant operations.",
    images: [`${baseUrl}/images/MachinoX%20Pro.png`],
    site: "@robatosystems",
  },
  icons: {
     url: "/favicon.ico", sizes: "any" ,
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

export default function MedicalDevicesLayout({ children }) {
  const articleSchema = {
    "@context": "https://schema.org/",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/medical-devices-manufacturing`,
    },
    headline: "MachinoX Pro - Medical Device Manufacturing Solutions",
    description:
      "Discover cutting-edge medical device manufacturing at MachinoX pro. Ensure precision and innovation in advanced medical device production.",
    image: {
      "@type": "ImageObject",
      url: `${baseUrl}/hubfs/mm20-laptop_0025_Reports-Production-Report_dropshadow.png`,
      width: 1260,
      height: 850,
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
    datePublished: "2023-12-20",
    dateModified: "2023-12-20",
  };

  const faqSchema = {
    "@context": "https://schema.org/",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is machine monitoring in the context of medical device manufacturing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Machine monitoring in medical device manufacturing refers to the real-time tracking and analysis of production equipment and processes used to manufacture medical devices to ensure efficiency, quality, and compliance with industry standards.",
        },
      },
      {
        "@type": "Question",
        name: "Why is machine monitoring important in medical device manufacturing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Machine monitoring is crucial to maintain product quality, reduce downtime, optimize production, and ensure compliance with regulatory requirements, ultimately ensuring patient safety and satisfaction.",
        },
      },
      {
        "@type": "Question",
        name: "What types of medical devices can benefit from machine monitoring services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Machine monitoring services are applicable to a wide range of medical devices, including diagnostic equipment, implants, surgical instruments, and more.",
        },
      },
      {
        "@type": "Question",
        name: "How does machine monitoring improve production efficiency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Machine monitoring provides real-time data on equipment performance, allowing manufacturers to identify bottlenecks, minimize downtime, and optimize production schedules.",
        },
      },
      {
        "@type": "Question",
        name: "What are the compliance benefits of using machine monitoring in medical device manufacturing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Machine monitoring helps manufacturers adhere to industry regulations and standards, ensuring that products meet quality and safety requirements, reducing the risk of costly compliance issues.",
        },
      },
      {
        "@type": "Question",
        name: "What data is collected and analyzed through machine monitoring services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Machine monitoring gathers data on equipment status, production rates, error rates, and other relevant metrics to provide insights into the manufacturing process.",
        },
      },
      {
        "@type": "Question",
        name: "Is machine monitoring suitable for both large and small medical device manufacturing facilities?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, machine monitoring services can be tailored to the specific needs of both large-scale manufacturing facilities and smaller, specialized medical device manufacturers.",
        },
      },
      {
        "@type": "Question",
        name: "How can machine monitoring services enhance quality control in medical device manufacturing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Machine monitoring helps identify deviations from established quality standards in real-time, allowing for immediate corrective actions and reducing the likelihood of defective products.",
        },
      },
      {
        "@type": "Question",
        name: "Are machine monitoring services compatible with existing manufacturing equipment and systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, machine monitoring solutions can often be integrated with existing equipment and manufacturing systems, minimizing disruption and maximizing efficiency.",
        },
      },
      {
        "@type": "Question",
        name: "What are the potential cost savings associated with implementing machine monitoring services in medical device manufacturing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Implementing machine monitoring can lead to cost savings by reducing downtime, minimizing scrap and rework, optimizing energy consumption, and improving overall production efficiency. The specific savings will vary depending on the facility and its processes.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="medical-devices-article-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="medical-devices-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}