"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import Image from "next/image";
import { 
  Upload, 
  Image as ImageIcon, 
  Link2, 
  FileText, 
  User, 
  Tag, 
  CheckCircle,
  Loader2,
  X,
  Sparkles
} from "lucide-react";

// Dynamically import Jodit Editor for SSR safety
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const BlogForm = ({ onSubmit, existingData }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [writtenby, setWrittenBy] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [imageUrlInput, setImageUrlInput] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadMethod, setUploadMethod] = useState("file"); // "file" or "url"

  // Autofill fields in edit mode
  useEffect(() => {
    if (existingData) {
      setTitle(existingData.title || "");
      setCategory(existingData.category || "");
      setWrittenBy(existingData.writtenby || "");
      setContent(existingData.content || "");
      setImage(existingData.image || "");
      setImageUrlInput(existingData.image || "");
    } else {
      resetForm();
    }
  }, [existingData]);

  const resetForm = () => {
    setTitle("");
    setCategory("");
    setWrittenBy("");
    setContent("");
    setImage("");
    setImageUrlInput("");
  };

  // ✅ Upload local file to Cloudinary automatically
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("/api/upload", formData);
      setImage(res.data.url);
      setImageUrlInput(res.data.url);
    } catch (err) {
      console.error("File upload failed:", err);
      alert("File upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  // ✅ Automatically upload URL images when input changes
  const handleImageUrlChange = async (e) => {
    const url = e.target.value;
    setImageUrlInput(url);

    if (!url) {
      setImage("");
      return;
    }

    setUploading(true);
    try {
      const res = await axios.post("/api/upload-url", { imageUrl: url });
      setImage(res.data.url);
      setImageUrlInput(res.data.url);
    } catch (err) {
      console.error("Image URL upload failed:", err);
      alert("Image URL upload failed. Please check the URL.");
    } finally {
      setUploading(false);
    }
  };

  // ✅ Handle create/update blog
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      alert("Please add an image!");
      return;
    }

    const slug = title.toLowerCase().replace(/\s+/g, "-");

    const blogData = {
      title,
      slug,
      category,
      writtenby,
      content,
      image,
      date: new Date(),
    };

    await onSubmit(blogData);
    resetForm();
  };

  const removeImage = () => {
    setImage("");
    setImageUrlInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Title Input */}
      <div className="group">
        <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
          <FileText size={18} className="text-purple-600" />
          Blog Title
        </label>
        <input
          type="text"
          placeholder="Enter an engaging blog title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition bg-white hover:border-purple-300"
          required
        />
      </div>

      {/* Category and Author Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Category */}
        <div className="group">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <Tag size={18} className="text-purple-600" />
            Category
          </label>
          <input
            type="text"
            placeholder="e.g., Technology, Lifestyle"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition bg-white hover:border-purple-300"
            required
          />
        </div>

        {/* Author */}
        <div className="group">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <User size={18} className="text-purple-600" />
            Written By
          </label>
          <input
            type="text"
            placeholder="Author name"
            value={writtenby}
            onChange={(e) => setWrittenBy(e.target.value)}
            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition bg-white hover:border-purple-300"
            required
          />
        </div>
      </div>

      {/* Image Upload Section */}
      <div className="bg-gradient-to-br from-purple-200 to-white p-6 rounded-2xl border-2 border-purple-100">
        <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-4">
          <ImageIcon size={18} className="text-purple-600" />
          Blog Image
        </label>

        {/* Upload Method Toggle */}
        <div className="flex gap-2 mb-4">
          <button
            type="button"
            onClick={() => setUploadMethod("file")}
            className={`flex-1 py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition ${
              uploadMethod === "file"
                ? "bg-purple-950 text-white shadow-2xl"
                : "bg-white text-gray-600 border-2 border-gray-200 hover:border-purple-300"
            }`}
          >
            <Upload size={18} />
            Upload File
          </button>
          <button
            type="button"
            onClick={() => setUploadMethod("url")}
            className={`flex-1 py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition ${
              uploadMethod === "url"
                ? "bg-purple-950 text-white shadow-lg"
                : "bg-white text-gray-600 border-2 border-gray-200 hover:border-purple-300"
            }`}
          >
            <Link2 size={18} />
            Image URL
          </button>
        </div>

        {/* File Upload */}
        {uploadMethod === "file" && (
          <div className="mb-4">
            <label className="block w-full cursor-pointer">
              <div className="border-2 border-dashed border-purple-300 rounded-xl p-8 text-center hover:border-purple-500 hover:bg-purple-50 transition">
                <Upload size={32} className="mx-auto text-purple-600 mb-2" />
                <p className="text-sm font-semibold text-gray-700">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
              <input
                type="file"
                onChange={handleFileUpload}
                className="hidden"
                accept="image/*"
              />
            </label>
          </div>
        )}

        {/* URL Upload */}
        {uploadMethod === "url" && (
          <div className="mb-4">
            <div className="relative">
              <Link2 size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Paste image URL here..."
                value={imageUrlInput}
                onChange={handleImageUrlChange}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition bg-white hover:border-purple-300"
              />
            </div>
          </div>
        )}

        {/* Uploading Indicator */}
        {uploading && (
          <div className="flex items-center justify-center gap-2 py-4 text-purple-600">
            <Loader2 size={20} className="animate-spin" />
            <span className="font-semibold">Uploading image...</span>
          </div>
        )}

        {/* Image Preview */}
        {image && !uploading && (
          <div className="relative group">
            <div className="relative rounded-xl overflow-hidden border-2 border-purple-200">
              <Image
                src={image}
                alt="Preview"
                width={800}
                height={400}
                className="w-full h-auto object-cover"
              />
              {/* Remove Button */}
              <button
                type="button"
                onClick={removeImage}
                className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg transition opacity-0 group-hover:opacity-100"
              >
                <X size={18} />
              </button>
            </div>
            <div className="flex items-center gap-2 mt-3 text-green-600 bg-green-50 px-4 py-2 rounded-lg">
              <CheckCircle size={18} />
              <span className="text-sm font-semibold">Image uploaded successfully!</span>
            </div>
          </div>
        )}
      </div>

      {/* Jodit Editor */}
      <div className="bg-gradient-to-br from-purple-900  to-zinc-800 p-6 rounded-2xl border-2 border-purple-100">
        <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-4">
          <Sparkles size={18} className="text-white" />
          <span className="text-white">Blog Content</span>
        </label>
        <div className="bg-white rounded-xl overflow-hidden border-2 border-gray-200">
          <JoditEditor
            value={content}
            onBlur={(newContent) => setContent(newContent)}
            config={{
              readonly: false,
              placeholder: "Start writing your amazing blog content here...",
              height: 450,
              toolbarAdaptive: false,
              toolbar: true,
              buttons: [
                'bold', 'italic', 'underline', '|',
                'ul', 'ol', '|',
                'font', 'fontsize', '|',
                'align', '|',
                'link', 'image', '|',
                'undo', 'redo'
              ],
              style: {
                font: '16px system-ui',
              }
            }}
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end pt-4">
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-xl transition-all font-bold text-lg shadow-xl hover:shadow-2xl flex items-center gap-2 group"
        >
          {existingData ? (
            <>
              <CheckCircle size={20} />
              Update Blog
            </>
          ) : (
            <>
              <Sparkles size={20} className="group-hover:rotate-12 transition" />
              Publish Blog
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default BlogForm;