"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogForm from "@/components/BlogForm";
import { signOut } from "next-auth/react";
import {
  Edit2,
  Trash2,
  Mail,
  User,
  FileText,
  X,
  PlusCircle,
  Calendar,
  Tag,
  RefreshCw,
  TrendingUp,
  Inbox,
  UserCheck,
} from "lucide-react";

const AdminPanel = () => {
  const [blogs, setBlogs] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [trials, setTrials] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("blogs");

  const themeColor = "#3c0366";

  // 🚀 Fetch only specific data type
  const fetchBlogs = async () => {
    try {
      const res = await axios.get("/api/blogs");
      setBlogs(res.data.blogs || []);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  const fetchContacts = async () => {
    try {
      const res = await axios.get("/api/contact");
      setContacts(res.data.contacts || []);
    } catch (err) {
      console.error("Error fetching contacts:", err);
    }
  };

  const fetchTrials = async () => {
    try {
      const res = await axios.get("/api/trial");
      setTrials(res.data.trials || []);
    } catch (err) {
      console.error("Error fetching trials:", err);
    }
  };

  // Unified fetch for initial load or manual refresh
  const fetchAllData = async () => {
    try {
      setLoading(true);
      setError("");
      await Promise.all([fetchBlogs(), fetchContacts(), fetchTrials()]);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch dashboard data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  // ------------------- Blog Handlers with Optimistic Updates -------------------
  const handleCreate = async (blogData) => {
    try {
      setError("");
      const response = await axios.post("/api/blogs", blogData);
      
      // Optimistic update - add the new blog immediately
      if (response.data.blog) {
        setBlogs(prev => [response.data.blog, ...prev]);
      } else {
        // Fallback: fetch only blogs if response doesn't include the blog
        await fetchBlogs();
      }
      
      alert("Blog created successfully!");
    } catch (err) {
      console.error("Error creating blog:", err);
      setError(err.response?.data?.message || "Failed to create blog.");
      // Refresh blogs on error to ensure consistency
      await fetchBlogs();
    }
  };

  const handleEdit = async (blogData) => {
    try {
      setError("");
      const response = await axios.put(`/api/blogs/${editingBlog._id}`, blogData);
      
      // Optimistic update - update the blog in state
      if (response.data.blog) {
        setBlogs(prev => prev.map(blog => 
          blog._id === editingBlog._id ? response.data.blog : blog
        ));
      } else {
        await fetchBlogs();
      }
      
      setEditingBlog(null);
      alert("Blog updated successfully!");
    } catch (err) {
      console.error("Error updating blog:", err);
      setError(err.response?.data?.message || "Failed to update blog.");
      await fetchBlogs();
    }
  };

  const handleCancelEdit = () => setEditingBlog(null);

  const handleDeleteBlog = async (id) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    try {
      // Optimistic update - remove immediately
      setBlogs(prev => prev.filter(blog => blog._id !== id));
      
      await axios.delete(`/api/blogs/${id}`);
      alert("Blog deleted successfully!");
    } catch (err) {
      console.error("Error deleting blog:", err);
      setError(err.response?.data?.message || "Failed to delete blog.");
      // Restore on error
      await fetchBlogs();
    }
  };

  const handleDeleteContact = async (id) => {
    if (!confirm("Are you sure you want to delete this contact form?")) return;
    try {
      // Optimistic update
      setContacts(prev => prev.filter(contact => contact._id !== id));
      
      await axios.delete(`/api/contact/${id}`);
      alert("Contact form deleted successfully!");
    } catch (err) {
      console.error("Error deleting contact form:", err);
      await fetchContacts();
    }
  };

  const handleDeleteTrial = async (id) => {
    if (!confirm("Are you sure you want to delete this trial form?")) return;
    try {
      // Optimistic update
      setTrials(prev => prev.filter(trial => trial._id !== id));
      
      await axios.delete(`/api/trial/${id}`);
      alert("Trial form deleted successfully!");
    } catch (err) {
      console.error("Error deleting trial form:", err);
      await fetchTrials();
    }
  };

  // ------------------- JSX -------------------
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-600 to-zinc-200">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="bg-white rounded-3xl shadow-xl border border-purple-100 p-8 mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                <div className="bg-gradient-to-br from-purple-950 to-purple-800 p-3 rounded-2xl">
                  <TrendingUp className="text-white" size={32} />
                </div>
                Admin Dashboard
              </h1>
              <p className="text-gray-600">Manage your content and submissions</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={fetchAllData}
                disabled={loading}
                className="bg-purple-100 hover:bg-purple-200 text-purple-700 px-6 py-3 rounded-xl transition flex items-center gap-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
                Refresh All
              </button>

              <button
                onClick={() => {
                  if (confirm("Are you sure you want to logout?")) {
                    signOut({ callbackUrl: "/admin/auth" });
                  }
                }}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl transition flex items-center gap-2 font-semibold"
              >
                <X size={18} />
                Logout
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <StatCard
              icon={<FileText size={24} />}
              title="Total Blogs"
              value={blogs.length}
              color="from-purple-950 to-purple-800"
            />
            <StatCard
              icon={<Mail size={24} />}
              title="Contact Forms"
              value={contacts.length}
              color="from-blue-900 to-blue-600"
            />
            <StatCard
              icon={<UserCheck size={24} />}
              title="Trial Requests"
              value={trials.length}
              color="from-orange-900 to-orange-500"
            />
          </div>
        </div>

        {/* Blog Form Section */}
        <div className="bg-white rounded-3xl shadow-xl border border-purple-100 p-8 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2
              className="text-3xl font-bold flex items-center gap-3"
              style={{ color: themeColor }}
            >
              {editingBlog ? (
                <>
                  <Edit2 size={28} className="text-purple-900" />
                  Edit Blog
                </>
              ) : (
                <>
                  <PlusCircle size={28} className="text-purple-900" />
                  Create New Blog
                </>
              )}
            </h2>
            {editingBlog && (
              <button
                onClick={handleCancelEdit}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-3 rounded-xl transition font-semibold flex items-center gap-2"
              >
                <X size={18} />
                Cancel
              </button>
            )}
          </div>
          <BlogForm
            onSubmit={editingBlog ? handleEdit : handleCreate}
            existingData={editingBlog}
          />
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border-2 border-red-200 text-red-800 px-6 py-4 rounded-2xl mb-6 flex items-center gap-3 shadow-lg">
            <Trash2 size={20} className="text-red-600" />
            <span className="font-semibold">{error}</span>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-8">
            <RefreshCw className="animate-spin text-purple-600 mx-auto mb-2" size={32} />
            <p className="text-purple-600 font-semibold">Loading data...</p>
          </div>
        )}

        {/* Tabs Navigation */}
        <div className="bg-white rounded-3xl shadow-xl border border-purple-100 overflow-hidden mb-8">
          <div className="flex border-b border-gray-200">
            <TabButton
              active={activeTab === "blogs"}
              onClick={() => setActiveTab("blogs")}
              icon={<FileText size={20} />}
              label="Blogs"
              count={blogs.length}
            />
            <TabButton
              active={activeTab === "contacts"}
              onClick={() => setActiveTab("contacts")}
              icon={<Mail size={20} />}
              label="Contacts"
              count={contacts.length}
            />
            <TabButton
              active={activeTab === "trials"}
              onClick={() => setActiveTab("trials")}
              icon={<UserCheck size={20} />}
              label="Trials"
              count={trials.length}
            />
          </div>

          <div className="p-8">
            {activeTab === "blogs" && (
              <div className="space-y-4">
                {blogs.length === 0 ? (
                  <EmptyState
                    icon={<FileText size={48} />}
                    message="No blogs found. Create your first blog above!"
                  />
                ) : (
                  blogs.map((blog) => (
                    <BlogCard
                      key={blog._id}
                      blog={blog}
                      onEdit={() => setEditingBlog(blog)}
                      onDelete={() => handleDeleteBlog(blog._id)}
                    />
                  ))
                )}
              </div>
            )}

            {activeTab === "contacts" && (
              <div className="space-y-4">
                {contacts.length === 0 ? (
                  <EmptyState
                    icon={<Inbox size={48} />}
                    message="No contact submissions yet."
                  />
                ) : (
                  contacts.map((contact) => (
                    <ContactCard
                      key={contact._id}
                      contact={contact}
                      onDelete={() => handleDeleteContact(contact._id)}
                    />
                  ))
                )}
              </div>
            )}

            {activeTab === "trials" && (
              <div className="space-y-4">
                {trials.length === 0 ? (
                  <EmptyState
                    icon={<UserCheck size={48} />}
                    message="No trial submissions yet."
                  />
                ) : (
                  trials.map((trial) => (
                    <TrialCard
                      key={trial._id}
                      trial={trial}
                      onDelete={() => handleDeleteTrial(trial._id)}
                    />
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ------------------- Helper Components -------------------

const StatCard = ({ icon, title, value, color }) => (
  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-600 text-sm font-semibold mb-1">{title}</p>
        <p className="text-4xl font-bold text-gray-900">{value}</p>
      </div>
      <div className={`bg-gradient-to-br ${color} p-4 rounded-2xl`}>
        <div className="text-white">{icon}</div>
      </div>
    </div>
  </div>
);

const TabButton = ({ active, onClick, icon, label, count }) => (
  <button
    onClick={onClick}
    className={`flex-1 px-6 py-4 font-semibold flex items-center justify-center gap-2 transition ${
      active
        ? "bg-purple-50 text-purple-900 border-b-4 border-purple-900"
        : "text-gray-600 hover:bg-gray-50"
    }`}
  >
    {icon}
    {label}
    <span
      className={`ml-2 px-2.5 py-1 rounded-full text-xs font-bold ${
        active ? "bg-purple-200 text-purple-800" : "bg-gray-200 text-gray-700"
      }`}
    >
      {count}
    </span>
  </button>
);

const BlogCard = ({ blog, onEdit, onDelete }) => (
  <div className="border-2 border-gray-200 p-6 rounded-2xl bg-gradient-to-r from-white to-purple-50 hover:shadow-2xl hover:border-purple-300 transition group">
    <div className="flex justify-between items-start gap-4">
      <div className="flex-1">
        <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-purple-800 transition">
          {blog.title}
        </h3>
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-3">
          <span className="flex items-center gap-1 bg-purple-950 text-white px-3 py-1 rounded-full font-semibold">
            <Tag size={14} />
            {blog.category}
          </span>
          <span className="flex items-center gap-1">
            <User size={14} />
            {blog.writtenby}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {new Date(blog.date).toLocaleDateString()}
          </span>
        </div>
      </div>
      <div className="flex gap-2">
        <IconButton onClick={onEdit} color="yellow" icon={<Edit2 size={16} />}>
          Edit
        </IconButton>
        <IconButton onClick={onDelete} color="red" icon={<Trash2 size={16} />}>
          Delete
        </IconButton>
      </div>
    </div>
  </div>
);

const ContactCard = ({ contact, onDelete }) => (
  <div className="border-2 border-gray-200 p-6 rounded-2xl bg-gradient-to-r from-white to-blue-50 hover:shadow-2xl hover:border-blue-300 transition">
    <div className="flex justify-between items-start gap-4">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-3">
          <div className="bg-blue-100 p-2 rounded-lg">
            <Mail size={20} className="text-blue-600" />
          </div>
          <div>
            <p className="font-bold text-lg text-gray-900">
              {contact.firstName} {contact.lastName}
            </p>
            <p className="text-sm text-gray-600">{contact.email}</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <p className="text-gray-700 text-sm leading-relaxed">
            {contact.message}
          </p>
        </div>
      </div>
      <IconButton onClick={onDelete} color="red" icon={<Trash2 size={16} />}>
        Delete
      </IconButton>
    </div>
  </div>
);

const TrialCard = ({ trial, onDelete }) => (
  <div className="border-2 border-gray-200 p-6 rounded-2xl bg-gradient-to-r from-white to-orange-50 hover:shadow-2xl hover:border-orange-300 transition">
    <div className="flex justify-between items-start gap-4">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-3">
          <div className="bg-orange-100 p-2 rounded-lg">
            <UserCheck size={20} className="text-orange-600" />
          </div>
          <div>
            <p className="font-bold text-lg text-gray-900">
              {trial.firstName} {trial.lastName}
            </p>
            <p className="text-sm text-gray-600">{trial.email}</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <p className="text-gray-700 text-sm leading-relaxed">
            {trial.message}
          </p>
        </div>
      </div>
      <IconButton onClick={onDelete} color="red" icon={<Trash2 size={16} />}>
        Delete
      </IconButton>
    </div>
  </div>
);

const IconButton = ({ onClick, color, children }) => {
  const colors = {
    red: "bg-red-500 hover:bg-red-600 shadow-red-200",
    yellow: "bg-yellow-500 hover:bg-yellow-600 shadow-yellow-200",
    green: "bg-green-500 hover:bg-green-600 shadow-green-200",
    blue: "bg-blue-500 hover:bg-blue-600 shadow-blue-200",
  };
  return (
    <button
      onClick={onClick}
      className={`${colors[color] || colors.red} text-white px-4 py-2.5 rounded-xl flex items-center gap-2 transition font-semibold shadow-lg hover:shadow-xl`}
    >
      {children}
    </button>
  );
};

const EmptyState = ({ icon, message }) => (
  <div className="text-center py-16">
    <div className="inline-block p-6 bg-gray-100 rounded-3xl mb-4 text-gray-400">
      {icon}
    </div>
    <p className="text-gray-500 text-lg font-medium">{message}</p>
  </div>
);

export default AdminPanel;