"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";

const BlogDetails = () => {
  const { slug } = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Fetch current blog
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/api/blogs/${slug}`);
        setBlog(res.data.blog);
      } catch (err) {
        setError("Blog not found");
      } finally {
        setLoading(false);
      }
    };
    if (slug) fetchBlog();
  }, [slug]);

  // ✅ Fetch related blogs
  useEffect(() => {
    const fetchRelatedBlogs = async () => {
      try {
        const res = await axios.get("/api/blogs");
        const blogs = res.data.blogs || [];

        const related = blogs
          .filter((b) => b.slug !== slug)
          .slice(0, 7);
        setRelatedBlogs(related);
      } catch (err) {
        console.error("Error fetching related blogs:", err);
      }
    };
    fetchRelatedBlogs();
  }, [slug]);

  if (loading)
    return <div className="text-center py-20 text-gray-500">Loading...</div>;
  if (error)
    return <div className="text-center py-20 text-red-500">{error}</div>;

  return (
    <div className="w-full pb-20">
      {/* ✅ Hero Image (Full Width, Small Height) */}
      {blog?.image && (
        <div className="relative w-full h-[250px] sm:h-[500px]">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
          {/* Optional dark overlay for better title readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      )}

      <div className="max-w-6xl mx-auto mt-6">
        {/* ✅ Author, Category, Date */}
        <div className="flex flex-col items-center px-4 sm:px-8 text-center">
          <p className="text-gray-700 text-sm sm:text-base">
            Written By:{" "}
            <span className="font-semibold tracking-wide text-gray-900">
              {blog.writtenby || "Unknown Author"}
            </span>
          </p>
          <p className="text-gray-500 text-sm sm:text-base mt-1">
            {blog.category || "General"} /{" "}
            {new Date(blog.date).toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            })}
          </p>
          <hr className="w-full border-gray-300 mt-6" />
        </div>

        {/* ✅ Centered Blog Title */}
        <div className="px-4 sm:px-8 mt-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight uppercase tracking-tight">
            {blog.title}
          </h1>
        </div>

        {/* ✅ Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 px-4 sm:px-8">
          {/* Left Column - Related Blogs */}
          <aside className="md:col-span-1 border-r border-gray-200 pr-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Related Blogs
            </h2>
            <div className="space-y-4">
              {relatedBlogs.length > 0 ? (
                relatedBlogs.map((related) => (
                  <div
                    key={related._id}
                    onClick={() => router.push(`/blogs/${related.slug}`)}
                    className="cursor-pointer group"
                  >
                    {related.image && (
                      <div className="relative w-full h-20 rounded-lg overflow-hidden">
                        <Image
                          src={related.image}
                          alt={related.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <p className="mt-2 text-sm font-medium text-gray-800 group-hover:text-blue-600">
                      {related.title.length > 50
                        ? related.title.slice(0, 50) + "..."
                        : related.title}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-sm">No related blogs found.</p>
              )}
            </div>
          </aside>

          {/* Right Column - Blog Content */}
          <section className="md:col-span-3">
            <div
              className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
