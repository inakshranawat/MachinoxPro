"use client";

import React, { use, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import {useRouter} from "next/navigation"

const SwiperBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const router = useRouter()

  useEffect(() => {
    const fetchLatestBlogs = async () => {
      try {
        // ✅ Fetch 10 latest blogs sorted by date (descending)
        const res = await axios.get("/api/blogs?limit=10&sort=-date");
        setBlogs(res.data.blogs || []);
      } catch (error) {
        console.error("Error fetching latest blogs:", error);
      }
    };
    fetchLatestBlogs();
  }, []);

  if (blogs.length === 0)
    return (
      <div className="py-16 text-center text-gray-300">
        Loading latest blogs...
      </div>
    );

  return (
    <div className="relative py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* ✅ Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-7xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 via-zinc-300 to-zinc-200 drop-shadow-lg">
            MACHINOX PRO BLOG
          </h2>
          <p className="text-xl sm:text-2xl mt-3 tracking-wide text-gray-300">
            READ THE LATEST
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full shadow-lg"></div>
        </div>

        {/* ✅ Swiper */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={800}
          breakpoints={{
            640: { slidesPerView: 2, centeredSlides: false },
            1024: { slidesPerView: 3, centeredSlides: true },
            1440: { slidesPerView: 3, centeredSlides: true },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="overflow-visible"
        >
          {blogs.map((blog, index) => (
            <SwiperSlide
              key={blog._id}
              className={`transition-all duration-500 ease-out ${
                index === activeIndex
                  ? "scale-100 blur-0 brightness-100 z-20"
                  : "scale-90 brightness-75 opacity-70"
              }`}
            >
              <Link
                href={`/blogs/${blog.slug}`}
                className="group flex flex-col bg-gradient-to-br from-zinc-600 via-zinc-200 to-purple-50 
                           border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl 
                           hover:shadow-blue-400/50 hover:border-blue-400 transition-all duration-300 
                           h-[450px] max-h-[450px]"
              >
                {/* ✅ Blog Image */}
                <div className="relative w-full h-56 overflow-hidden bg-gray-200 flex-shrink-0">
                  <Image
                    src={blog.image || "/placeholder-blog.jpg"}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity"></div>
                </div>

                {/* ✅ Blog Content */}
                <div className="p-6 flex flex-col flex-1 overflow-y-auto bg-gradient-to-br from-zinc-600 via-blue-50/10 scrollbar-thin scrollbar-thumb-gray-400/50 scrollbar-track-transparent">
                  <div className="inline-block self-start bg-gradient-to-r from-blue-500 to-[#44019f] 
                                  text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg mb-3">
                    {blog.category}
                  </div>

                  {/* Title */}
                  <h2 className="text-lg sm:text-xl font-bold mb-3 text-[#444444]">
                    {blog.title}
                  </h2>

                  {/* Author & Date */}
                  <div className="flex items-center text-xs text-gray-600 mt-auto bg-gray-100 rounded-lg p-2.5 border border-gray-200">
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
                      <span className="font-medium text-gray-800">
                        {blog.writtenby}
                      </span>
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
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1z"
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

                  {/* Read More */}
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center mt-20">
  <button onClick={()=> router.push("/blogs")} className="px-8 py-3 bg-zinc-500 text-zinc-100 font-semibold text-2xl rounded-lg hover:bg-zinc-600 transition-all duration-300">
    SEE ALL POSTS
  </button>
</div>

    </div>
  );
};

export default SwiperBlogs;
