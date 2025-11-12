import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar'
import { AppProvider } from "@/context/useContext";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
  title: "Machine Downtime Monitoring Software | Production Downtime Analysis | IIoT Robato systems",
  description:
    "Reduce machine downtime with real-time monitoring and production analysis. Optimize efficiency using IIoT-powered downtime management tools.",
  keywords:
    "machine downtime monitoring software, production downtime analysis, downtime management tools",
  authors: [{ name: "Robato Systems Pvt. Ltd." }],
  publisher: "Robato Systems Pvt. Ltd.",
  metadataBase: new URL(baseUrl),
  verification: {
    google: "72DkCuONQNHM1AGaJEXg5evzTzKtQipIalDjXL_olRQ",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "MachinoX Pro",
    title:
      "Machine Downtime Monitoring Software | Production Downtime Analysis | IIoT Robato systems",
    description:
      "Reduce machine downtime with real-time monitoring and production analysis. Optimize efficiency using IIoT-powered downtime management tools.",
    images: [
      {
        url: `${baseUrl}/images/MachinoX%20Pro.png`,
        width: 1200,
        height: 630,
        alt: "MachinoX Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Machine Downtime Monitoring Software | Production Downtime Analysis | IIoT Robato systems",
    description:
      "Reduce machine downtime with real-time monitoring and production analysis. Optimize efficiency using IIoT-powered downtime management tools.",
    images: [`${baseUrl}/images/MachinoX%20Pro.png`],
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

export default function RootLayout({ children }) {
  const articleSchema = {
    "@context": "https://schema.org/",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": baseUrl,
    },
    headline: "MachinoX Pro - Empowering Industries with Cutting-Edge Solutions",
    description:
      "Unlock industry potential with MachinoX pro's advanced technologies. Elevate performance and efficiency in automation with us.",
    image: {
      "@type": "ImageObject",
      url: `${baseUrl}/images/machinoxpro.png`,
      width: 794,
      height: 650,
    },
    author: {
      "@type": "Organization",
      name: "Robato Systems Pvt. Ltd.",
    },
    publisher: {
      "@type": "Organization",
      name: "Robato Systems Pvt. Ltd",
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

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: "MachinoX Pro",
    url: baseUrl,
    logo: `${baseUrl}/images/MachinoX%20Pro.png`,
    alternateName: "Robato Systems Private Limited",
    sameAs: [
      "https://www.facebook.com/RobatoSystems",
      "https://www.linkedin.com/company/robatosystems/",
      "https://twitter.com/RobatoSystems",
      "https://www.youtube.com/channel/UCnUDpO7fixnlW4e37umIWZQ",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "7888711383",
        contactType: "sales",
        email: "sales@robatosystems.com",
        areaServed: "IN",
        availableLanguage: "en",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org/",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is machine monitoring, and why is it important?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Machine monitoring involves real-time tracking and analysis of machine performance data. It's crucial for identifying issues, optimising operations, and reducing downtime, leading to cost savings and improved efficiency.",
        },
      },
      {
        "@type": "Question",
        name: "How does machine monitoring benefit my business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Machine monitoring helps you: Prevent unexpected breakdowns. Increase productivity. Lower maintenance costs. Extend machine lifespan. Improve overall operational efficiency.",
        },
      },
      {
        "@type": "Question",
        name: "What types of machines can benefit from your monitoring services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our services are applicable to a wide range of machines, including industrial equipment, manufacturing machinery, CNC machines, and more. We tailor our solutions to suit your specific needs.",
        },
      },
      {
        "@type": "Question",
        name: "How does your machine monitoring system work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We install sensors and software that collect data from your machines in real-time. This data is then analyzed to identify trends, anomalies, and performance bottlenecks. We provide actionable insights and recommendations based on this analysis.",
        },
      },
      {
        "@type": "Question",
        name: "Is machine monitoring compatible with legacy machines and equipment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, in many cases, we can retrofit older machines with monitoring solutions. Our team will assess the compatibility and work with you to implement the best solution for your existing equipment.",
        },
      },
      {
        "@type": "Question",
        name: "Is my data secure when using your machine monitoring services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We take data security seriously. Our systems use encryption and follow industry best practices to ensure the confidentiality, integrity, and availability of your data.",
        },
      },
      {
        "@type": "Question",
        name: "Can your services be integrated with our existing maintenance processes and software?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We can integrate our monitoring solutions with your existing maintenance software and processes to streamline operations and improve overall maintenance efficiency",
        },
      },
      {
        "@type": "Question",
        name: "How can your services help reduce machine maintenance costs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "By monitoring machine health and performance, we can detect issues early, allowing for scheduled maintenance and repairs, preventing costly breakdowns, and optimising maintenance schedules.",
        },
      },
      {
        "@type": "Question",
        name: "What types of performance improvements can I expect from your services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our services can help you achieve: Increased machine uptime. Improved production output. Reduced energy consumption. Enhanced product quality. Lower overall operational costs.",
        },
      },
      {
        "@type": "Question",
        name: "What support and training options do you offer for using your machine monitoring services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide comprehensive training for your team to use our monitoring tools effectively. Additionally, our customer support team is available to assist you with any questions or issues that may arise.",
        },
      },
    ],
  };
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Script
          id="article-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <AppProvider>

        <Navbar/>
        {children}
        <Footer/>
        </AppProvider>
      </body>
    </html>
  );
}
