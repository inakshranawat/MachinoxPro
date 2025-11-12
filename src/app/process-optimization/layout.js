// src/app/process-optimization/layout.js
import React from "react";
import Script from "next/script";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
  title: "Automation Solutions For Manufacturing | Industrial Control Systems | Automated Manufacturing Systems",
  description:
    "Streamline production with industrial automation. Enhance efficiency, reduce waste, and improve manufacturing processes with smart control systems.",
  keywords:
    "Robato Systems, automation solutions for manufacturing, industrial control systems, automated manufacturing systems",
  authors: [{ name: "Robato Systems Pvt. Ltd." }],
  publisher: "Robato Systems Pvt. Ltd.",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: `${baseUrl}/process-optimization`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${baseUrl}/process-optimization`,
    siteName: "Robato Systems Pvt. Ltd.",
    title:
      "Automation Solutions For Manufacturing | Industrial Control Systems | Automated Manufacturing Systems",
    description:
      "Streamline production with industrial automation. Enhance efficiency, reduce waste, and improve manufacturing processes with smart control systems.",
    images: [
      {
        url: `${baseUrl}/images/MachinoX%20Pro.png`,
        width: 1200,
        height: 630,
        alt: "Process Optimization | MachinoX Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Automation Solutions For Manufacturing | Industrial Control Systems | Automated Manufacturing Systems",
    description:
      "Streamline production with industrial automation. Enhance efficiency, reduce waste, and improve manufacturing processes with smart control systems.",
    images: [`${baseUrl}/images/MachinoX%20Pro.png`],
    site: "@robatosystems",
  },
  icons: {
    icon:{
      url:"/favicon.ico",sizes:"any"
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

export default function ProcessOptimizationLayout({ children }) {
  const articleSchema = {
    "@context": "https://schema.org/",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/process-optimization`,
    },
    headline: "MachinoX Pro: Elevate Efficiency with Expert Process Optimization Services",
    description:
      "Elevate operations with MachinoX pro's innovative solutions for machine builders and distributors. Explore cutting-edge technologies and unparalleled support.",
    image: {
      "@type": "ImageObject",
      url: `${baseUrl}/images/alert.png`,
      width: 2210,
      height: 1494,
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
        name: "What is machine monitoring and how can it benefit my business's process optimization efforts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Machine monitoring is the process of tracking and analyzing the performance of machines in real-time. By providing valuable data and insights, it helps businesses optimize their processes for increased efficiency, reduced downtime, and higher productivity.",
        },
      },
      {
        "@type": "Question",
        name: "How does machine monitoring work in the context of process optimization?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Machine monitoring services utilize sensors and software to collect data from machines, which is then analyzed to identify patterns, inefficiencies, and areas for improvement. This data-driven approach allows businesses to optimize their processes by making informed decisions based on real-time information.",
        },
      },
      {
        "@type": "Question",
        name: "What types of machines can be monitored using your services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our machine monitoring services are versatile and can be applied to a wide range of machines, including manufacturing equipment, industrial robots, CNC machines, and more. Whether you have a small workshop or a large-scale production facility, our services can be tailored to suit your specific needs.",
        },
      },
      {
        "@type": "Question",
        name: "How can machine monitoring help in reducing downtime and minimizing disruptions in production?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "By monitoring machines in real-time, our services can detect issues and potential failures before they escalate, enabling proactive maintenance. This proactive approach minimizes unplanned downtime, ensuring your production processes run smoothly and disruptions are kept to a minimum.",
        },
      },
      {
        "@type": "Question",
        name: "Can your machine monitoring services integrate with existing machinery and systems in my facility?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our services are designed to be compatible with a variety of machinery and systems. We offer seamless integration solutions, allowing you to monitor both new and existing machines without significant modifications to your current setup.",
        },
      },
      {
        "@type": "Question",
        name: "What kind of data and insights can I expect to receive from your machine monitoring services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our machine monitoring services provide detailed data on machine performance, utilization rates, energy consumption, and more. Additionally, we offer insights and recommendations based on this data, empowering you to make data-driven decisions for optimizing your processes effectively.",
        },
      },
      {
        "@type": "Question",
        name: "How secure is the data collected by your machine monitoring services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We prioritize the security and confidentiality of your data. Our services employ advanced encryption protocols and secure cloud-based storage to ensure the integrity and privacy of the information collected from your machines.",
        },
      },
      {
        "@type": "Question",
        name: "Can your machine monitoring services help in predictive maintenance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our services utilize predictive analytics to foresee potential issues with machinery. By analyzing historical data and machine behavior patterns, we can predict when maintenance is required, allowing you to schedule maintenance activities proactively and avoid costly unplanned downtime.",
        },
      },
      {
        "@type": "Question",
        name: "How can machine monitoring lead to cost savings for my business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "By optimizing processes and reducing downtime, our machine monitoring services lead to significant cost savings. Efficient processes mean higher productivity, lower operational costs, reduced maintenance expenses, and decreased energy consumption, all contributing to overall cost savings for your business.",
        },
      },
      {
        "@type": "Question",
        name: "Is training provided for using your machine monitoring services, and is technical support available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer training sessions to ensure your team is proficient in using our machine monitoring services. Additionally, our technical support team is available 24/7 to assist you with any queries or issues you might encounter, ensuring a smooth and efficient experience with our services.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="process-optimization-article-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="process-optimization-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}