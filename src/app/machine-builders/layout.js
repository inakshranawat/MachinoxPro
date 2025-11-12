// src/app/for-machine-builders-and-distributors/layout.js
import React from "react";
import Script from "next/script";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
  title: "IIoT for Machine Builders & Distributors | Production Monitoring",
  description:
    "Empower machine builders & distributors with IIoT-driven production monitoring, OEE tracking, downtime reduction, and Andon display solutions for smarter manufacturing.",
  keywords:
    "IIoT solutions for machine builders, Smart factory solutions for OEMs, Production monitoring for machine distributors, OEE tracking for industrial machines",
  authors: [{ name: "Robato Systems Pvt. Ltd." }],
  publisher: "Robato Systems Pvt. Ltd.",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: `${baseUrl}/machine-builders`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${baseUrl}/machine-builders`,
    siteName: "Robato Systems Pvt. Ltd.",
    title:
      "IIoT for Machine Builders & Distributors | Production Monitoring",
    description:
      "Empower machine builders & distributors with IIoT-driven production monitoring, OEE tracking, downtime reduction, and Andon display solutions for smarter manufacturing.",
    images: [
      {
        url: `${baseUrl}/images/MachinoX%20Pro.png`,
        width: 1200,
        height: 630,
        alt: "IIoT for Machine Builders & Distributors | MachinoX Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "IIoT for Machine Builders & Distributors | Production Monitoring",
    description:
      "Empower machine builders & distributors with IIoT-driven production monitoring, OEE tracking, downtime reduction, and Andon display solutions for smarter manufacturing.",
    images: [`${baseUrl}/images/MachinoX%20Pro.png`],
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

export default function MachineBuilersDistributorsLayout({ children }) {
  const articleSchema = {
    "@context": "https://schema.org/",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/for-machine-builders-and-distributors`,
    },
    headline: "MachinoX Pro: Empowering Machine Builders and Distributors",
    description:
      "Discover seamless production monitoring with MachinoX pro. Optimize efficiency with advanced counter display services for enhanced productivity.",
    image: {
      "@type": "ImageObject",
      url: `${baseUrl}/hubfs/mm20_laptop__0009_Machine-Overview-hack_dropshadow.png`,
      width: 1260,
      height: 815,
    },
    author: {
      "@type": "Person",
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
        name: "How is MachinoX Pro different than other solutions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There's a number of reasons why MachinoX Pro has separated ourselves from the pack of other \"next generation\" machine monitoring solutions. We call them \"The MachinoX Pro Super Powers\": Automated data capture: the fact that we make it so easy to collect and transform data from so many types of machines, new and old. Users can start driving use cases with MM in a matter of hours, not months or years via KPI dashboards, configurable reports, text/email notifications, and integrations with current factory systems. Capture operational data – such as cycle count, cycle times, part count, and more – straight from the machine. There's no operator input required to monitor production, but the flexibility to add human context to machine data when wanted is always there. It's easy to use and scale! MachinoX Pro won't require expensive integrators or extensive training to roll out across one or multiple sites (although we are happy to help you when you need us!). Unprecedented Innovation: you're not just buying the MachinoX Pro of today but you're investing in the next generation solution of tomorrow. Our product/engineering teams are all based in the US and are working around the clock to improve our product and enhance our capabilities.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to deploy MachinoX Pro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MachinoX Pro can sprint or walk, depending on your needs. Many of our customers can have our solution up and running in one afternoon!",
        },
      },
      {
        "@type": "Question",
        name: "Why does MachinoX Pro' pricing model work better for you?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MachinoX Pro pricing model is a true SaaS subscription model, which means it's easy to get started, there are no \"maintenance\" fees, and all software updates are included. Our pricing is volume based so the more machines you connect, the less it costs per machine. Included in all subscriptions is our customer support service, including unlimited remote technical support, customer on-boarding, product training, and a designated customer support point of contact. (Side bar): While on-premise solutions may often appear to have higher costs upfront but lower ongoing costs, there are many hidden costs such as the time to upgrade systems, the maintenance of web and database servers, dedicated IT resources, and product maintenance/training costs that become unsustainable for many companies over time. What's the bottom line here? You probably know this but you get what you pay for. With a subscription model, we have to win your business every year to keep it.",
        },
      },
      {
        "@type": "Question",
        name: "Is MachinoX Pro cloud-based or on-premise?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MachinoX Pro pricing model is a true SaaS subscription model, which means it's easy to get started, there are no \"maintenance\" fees, and all software updates are included. Our pricing is volume based so the more machines you connect, the less it costs per machine. Included in all subscriptions is our customer support service, including unlimited remote technical support, customer on-boarding, product training, and a designated customer support point of contact. (Side bar): While on-premise solutions may often appear to have higher costs upfront but lower ongoing costs, there are many hidden costs such as the time to upgrade systems, the maintenance of web and database servers, dedicated IT resources, and product maintenance/training costs that become unsustainable for many companies over time. What's the bottom line here? You probably know this but you get what you pay for. With a subscription model, we have to win your business every year to keep it. MachinoX Pro is an ISO 27001 certified cloud-based system, and security is at the forefront of every decision we make. Our product is built on the premise that data is of paramount importance and value, so we view the protection of that data as core to our ability to serve manufacturers. We get this question a lot so here's the closest anecdote we could think of as to why we trust the cloud: If you were to choose the safest way to travel would you opt to drive or to fly? Most would choose driving, even though, statistically speaking, flying is far safer than driving. When it's on-premise vs. cloud, many assume on-premise must be safer, more under your control. The reality is that the cloud is like flying. On-premise systems are hacked thousands of times a day due to manual errors. The cloud, like flying, is one of the safest things you can do.",
        },
      },
      {
        "@type": "Question",
        name: "Do we need additional hardware to use MachinoX Pro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MachinoX Pro is an ISO 27001 certified cloud-based system, and security is at the forefront of every decision we make. Our product is built on the premise that data is of paramount importance and value, so we view the protection of that data as core to our ability to serve manufacturers. We get this question a lot so here's the closest anecdote we could think of as to why we trust the cloud: If you were to choose the safest way to travel would you opt to drive or to fly? Most would choose driving, even though, statistically speaking, flying is far safer than driving. When it's on-premise vs. cloud, many assume on-premise must be safer, more under your control. The reality is that the cloud is like flying. On-premise systems are hacked thousands of times a day due to manual errors. The cloud, like flying, is one of the safest things you can do. The short answer is no. However, some machines may require additional hardware while others may not. For most modern machines, hardware may include MachinoX Pro Edge gateways, each of which can connect to 50 or so machines if they are networked to an electrical switch. Many customers opt to install our connectors as a virtual machine on a local PC, where no gateway hardware is required. Depending on use cases, you may want to addd additional sensors and optional tablet interfaces. These can either be purchased directly through MachinoX Pro or procured independently. Connect older equipment with digital and analog IO that can be configured and managed remotely through web interface to integrate even the most challenging equipment.",
        },
      },
      {
        "@type": "Question",
        name: "Who owns the data?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You own all the data. We store data in the cloud using best-in-class encryption methods, so your information is always safe.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="machine-builders-distributors-article-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="machine-builders-distributors-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}