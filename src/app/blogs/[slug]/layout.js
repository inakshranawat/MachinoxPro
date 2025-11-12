// src/app/blogs/[slug]/layout.js
import React from "react";
import Script from "next/script";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// ✅ Generate dynamic metadata for each blog post
export async function generateMetadata({ params }) {
  const { slug } = await params; // ← MUST AWAIT in Next.js 15+

  try {
    // ✅ Use blogId in the API route (matches your route parameter)
    const res = await fetch(`${baseUrl}/api/blogs/${slug}`, {
      cache: "no-store", // Always fetch fresh data
    });

    if (!res.ok) {
      return {
        title: "Blog Not Found | MachinoX Pro",
        description: "The requested blog post could not be found.",
      };
    }

    const data = await res.json();
    
    // ✅ Check if success and blog exists
    if (!data.success || !data.blog) {
      return {
        title: "Blog Not Found | MachinoX Pro",
        description: "The requested blog post could not be found.",
      };
    }

    const blog = data.blog;

    // Generate metadata
    return {
      title: `${blog.title} | MachinoX Pro`,
      description: blog.description || blog.title,
      keywords: blog.category || "manufacturing, machine monitoring, IIoT",
      authors: [{ name: blog.writtenby || "Robato Systems Pvt. Ltd." }],
      publisher: "Robato Systems Pvt. Ltd.",
      metadataBase: new URL(baseUrl),
      alternates: {
        canonical: `${baseUrl}/blogs/${slug}`,
      },
      openGraph: {
        type: "article",
        locale: "en_US",
        url: `${baseUrl}/blogs/${slug}`,
        siteName: "MachinoX Pro",
        title: blog.title,
        description: blog.description || blog.title,
        images: [
          {
            url: blog.image || `${baseUrl}/images/MachinoX%20Pro.png`,
            width: 1200,
            height: 630,
            alt: blog.title,
          },
        ],
        publishedTime: blog.date,
        modifiedTime: blog.updatedAt || blog.date,
        authors: [blog.writtenby || "Robato Systems Pvt. Ltd."],
        section: blog.category || "Technology",
      },
      twitter: {
        card: "summary_large_image",
        title: blog.title,
        description: blog.description || blog.title,
        images: [blog.image || `${baseUrl}/images/MachinoX%20Pro.png`],
        site: "@robatosystems",
        creator: "@robatosystems",
      },
      icons: {
        icon: {
          url:"/favicon.ico" ,sizes:"any"
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
  } catch (error) {
    console.error("Error fetching blog metadata:", error);
    return {
      title: "Blog | MachinoX Pro",
      description: "Read our latest insights on machine monitoring and IIoT.",
    };
  }
}

export default async function BlogLayout({ children, params }) {
  const { slug } = await params; // ← MUST AWAIT in Next.js 15+

  let blog = null;

  try {
    // Fetch blog data for schema markup
    const res = await fetch(`${baseUrl}/api/blogs/${slug}`, {
      cache: "no-store",
    });

    if (res.ok) {
      const data = await res.json();
      if (data.success && data.blog) {
        blog = data.blog;
      }
    }
  } catch (error) {
    console.error("Error fetching blog for schema:", error);
  }

  // Generate Article Schema only if blog exists
  const articleSchema = blog
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${baseUrl}/blogs/${slug}`,
        },
        headline: blog.title,
        description: blog.description || blog.title,
        image: {
          "@type": "ImageObject",
          url: blog.image || `${baseUrl}/images/MachinoX%20Pro.png`,
          width: 1200,
          height: 630,
        },
        author: {
          "@type": "Person",
          name: blog.writtenby || "Robato Systems Pvt. Ltd.",
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
        datePublished: blog.date,
        dateModified: blog.updatedAt || blog.date,
        articleSection: blog.category || "Technology",
      }
    : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blogs",
        item: `${baseUrl}/blogs`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blog?.title || "Blog Post",
        item: `${baseUrl}/blogs/${slug}`,
      },
    ],
  };

  return (
    <>
      {articleSchema && (
        <Script
          id={`blog-article-schema-${slug}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      <Script
        id={`blog-breadcrumb-schema-${slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}