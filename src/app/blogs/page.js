"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { motion } from "framer-motion";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Technology", "Lifestyle", "Business", "Health", "Travel", "Food", "Other"];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("/api/blogs");
        const blogsData = res.data.blogs || [];
        setBlogs(blogsData);
        setFilteredBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    let filtered = blogs;

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((blog) => blog.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(lowerQuery) ||
          blog.category.toLowerCase().includes(lowerQuery) ||
          blog.writtenby.toLowerCase().includes(lowerQuery)
      );
    }

    setFilteredBlogs(filtered);
  }, [searchQuery, selectedCategory, blogs]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent"></div>
          <p className="mt-4 text-gray-300 text-lg">Loading blogs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      {/* Hero Section with Gradient Background */}
      <div className="relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative text-center py-16 px-4 sm:py-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-600 via-zinc-400 to-zinc-200">
                Unlocking Tomorrow&apos;s Potential
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-200 mb-6">
              Robato Systems Blog
            </h2>
          </motion.div>

          <motion.p
            className="mt-4 text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Insights, innovations, and stories shaping the technology of tomorrow.
          </motion.p>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center gap-8 mt-10 flex-wrap"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">{blogs.length}+</div>
              <div className="text-sm text-gray-400 mt-1">Articles</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">∞</div>
              <div className="text-sm text-gray-400 mt-1">Ideas</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-gray-800 to-gray-700 backdrop-blur-sm border border-gray-600 rounded-2xl p-6 shadow-2xl"
        >
          {/* Search Bar */}
          <div className="relative mb-6">
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search articles by title, category, or author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-500 bg-gray-900/70 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
            />
          </div>

          {/* Results Count */}
          <div className="mt-4 text-center text-gray-300 text-sm font-medium">
            Showing {filteredBlogs.length} of {blogs.length} articles
          </div>
        </motion.div>
      </div>

      {/* Blog Grid Section */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        {filteredBlogs.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-gray-300 mb-2">No blogs found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </motion.div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredBlogs.map((blog, index) => (
              <motion.div
                key={blog._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="group block bg-gradient-to-br from-zinc-600 via-zinc-200 to-purple-50 border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-400/50 hover:border-blue-400 transition-all duration-300 h-full"
                >
                  {/* Image Container */}
                  <div className="relative w-full h-56 overflow-hidden bg-gray-200">
                    <Image
                      src={blog.image || "/placeholder-blog.jpg"}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-500"
                    />
                    {/* Enhanced Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity"></div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 bg-linear-to-br from-zinc-600 via-blue-50/10 ">
                    {/* Category Badge above title */}
                    <div className="inline-block bg-gradient-to-r from-blue-500 to-[#44019f] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg mb-3">
                      {blog.category}
                    </div>
                    
                    <h2 className="text-xl font-bold mb-3 text-[#444444]  group-hover:bg-clip-text group-hover:bg-gradient-to-r  transition-all duration-300">
                      {blog.title}
                    </h2>

                    {/* Author and Date */}
                    <div className="flex items-center text-xs text-gray-600 mt-4 bg-gray-100 rounded-lg p-2.5 border border-gray-200">
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1 text-blue-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="font-medium text-gray-800">{blog.writtenby}</span>
                      </div>
                      <span className="mx-2 text-gray-400">•</span>
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1 text-purple-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">
                          {new Date(blog.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                    </div>

                    {/* Read More Arrow */}
                    <div className="flex items-center justify-between text-blue-600 font-semibold text-sm mt-5 group-hover:text-purple-600 transition-colors">
                      <span>Read more</span>
                      <svg
                        className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default BlogsPage;