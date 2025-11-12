// src/app/andon-tower-light/layout.js
import React from "react";
import Script from "next/script";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
  title: "MachinoX Pro: Elevate Efficiency with Andon Tower Lights",
  description:
    "Boost productivity with MachinoX pro's advanced Andon Tower Lights. Ensure real-time visual communication, minimizing downtime in manufacturing.",
  keywords:
    "Andon Tower Lights, Manufacturing Efficiency, Industrial Automation, Visual Communication Solutions, Robato Systems, Productivity Tools, Automation Technology, Factory Floor Optimization",
  authors: [{ name: "Robato Systems Pvt. Ltd." }],
  publisher: "Robato Systems Pvt. Ltd.",
  metadataBase: baseUrl ? new URL(baseUrl) : undefined,
  alternates: {
    canonical: baseUrl ? `${baseUrl}/andon-tower-light` : "/andon-tower-light",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl ? `${baseUrl}/andon-tower-light` : "/andon-tower-light",
    siteName: "Robato Systems Pvt. Ltd.",
    title: "MachinoX Pro: Elevate Efficiency with Andon Tower Lights",
    description:
      "Boost productivity with MachinoX pro's advanced Andon Tower Lights. Ensure real-time visual communication, minimizing downtime in manufacturing.",
    images: [
      {
        url: baseUrl
          ? `${baseUrl}/images/MachinoX%20Pro.png`
          : "/images/MachinoX%20Pro.png",
        width: 1200,
        height: 1200,
        alt: "MachinoX Pro Andon Tower Lights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MachinoX Pro: Elevate Efficiency with Andon Tower Lights",
    description:
      "Boost productivity with MachinoX pro's advanced Andon Tower Lights. Ensure real-time visual communication, minimizing downtime in manufacturing.",
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

export default function AndonTowerLightLayout({ children }) {
  const articleSchema = {
    "@context": "https://schema.org/",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": baseUrl ? `${baseUrl}/andon-tower-light` : "/andon-tower-light",
    },
    headline: "MachinoX Pro: Elevate Efficiency with Andon Tower Lights",
    description:
      "Boost productivity with MachinoX pro's advanced Andon Tower Lights. Ensure real-time visual communication, minimizing downtime in manufacturing.",
    image: {
      "@type": "ImageObject",
      url: baseUrl
        ? `${baseUrl}/images/ANDON-TOWER-LIGHT.png`
        : "/images/ANDON-TOWER-LIGHT.png",
      width: 1200,
      height: 1200,
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
        name: "What is an Andon tower light?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An Andon tower light is a visual signaling device used in industrial settings to display the status of machines, production lines, or processes. It consists of a tall tower with multiple colored LED lights that convey different messages.",
        },
      },
      {
        "@type": "Question",
        name: "How does an Andon tower light work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Andon tower lights use LED technology to emit different colors such as red, yellow, green, and blue. Each color represents a specific status or instruction, allowing operators and workers to quickly understand the situation on the production floor.",
        },
      },
      {
        "@type": "Question",
        name: "What are the key features of LED Andon lights?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LED Andon lights are energy-efficient, durable, and long-lasting. They offer bright and vibrant colors, making them highly visible even in well-lit environments. Additionally, they can be customized to display various patterns and sequences.",
        },
      },
      {
        "@type": "Question",
        name: "Are there wireless Andon lights available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, there are wireless Andon lights that eliminate the need for complicated wiring. These wireless systems are easy to install and provide flexibility in positioning the lights within the industrial facility.",
        },
      },
      {
        "@type": "Question",
        name: "Can Andon tower lights be integrated with other industrial equipment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Andon tower lights can be integrated with various industrial systems and machines. They can be connected to sensors, PLCs (Programmable Logic Controllers), and other control devices to display real-time status updates.",
        },
      },
      {
        "@type": "Question",
        name: "What is the purpose of an Andon light system?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The primary purpose of an Andon light system is to improve communication and visibility on the production floor. It helps in quickly identifying issues, reducing downtime, and enhancing overall efficiency by providing instant visual cues to operators.",
        },
      },
      {
        "@type": "Question",
        name: "Do Andon tower lights come with built-in buzzers or alarms?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, some Andon tower lights are equipped with built-in buzzers or alarms. These audible signals complement the visual cues, alerting operators to critical situations or changes in production status.",
        },
      },
      {
        "@type": "Question",
        name: "Can Andon lights be used outdoors in harsh environments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, there are industrial-grade Andon tower lights designed to withstand harsh environmental conditions. These lights are built with rugged materials and sealed enclosures, making them suitable for outdoor and challenging indoor environments.",
        },
      },
      {
        "@type": "Question",
        name: "Are there multilayered Andon stack lights available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, multilayered Andon stack lights, also known as tower stack lights, are available. These lights consist of multiple sections, each capable of displaying different colors and messages, allowing for more complex signaling scenarios.",
        },
      },
      {
        "@type": "Question",
        name: "How can LED Andon lights contribute to workplace safety?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LED Andon lights enhance workplace safety by providing clear visual indications of potential hazards, machine malfunctions, or emergency situations. By improving communication and response time, these lights help prevent accidents and ensure a safer working environment for employees.",
        },
      },
    ],
  };

  return (
    <>
      {/* JSON-LD schemas */}
      <Script
        id="andon-tower-article-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="andon-tower-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {children}
    </>
  );
}
