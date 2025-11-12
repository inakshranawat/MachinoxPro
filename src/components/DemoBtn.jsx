'use client'

import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useAppContext } from '@/context/useContext';

const BookTrialForm = () => {
  const { demoOpen, setDemoOpen } = useAppContext();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: 'India',
    jobTitle: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/trial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, formType: 'trial' })
      });

      const result = await res.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          country: 'India',
          jobTitle: '',
          company: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  if (typeof window === 'undefined') return null;

  return demoOpen
    ? createPortal(
        <div className="fixed inset-0 z-99999 bg-black/50 flex justify-center items-center p-4 sm:p-0">
          <div className="bg-white w-[95%] sm:w-[90%] md:w-[85%] rounded-xl shadow-2xl relative overflow-y-auto max-h-[90vh]">
            <div className="bg-[#430099] px-8 py-4 relative">
              <button onClick={() => setDemoOpen(false)} className="absolute top-3 right-5 text-white hover:text-gray-200 text-3xl font-light leading-none">×</button>
              <h2 className="text-2xl font-semibold text-white">BOOK A DEMO - MachinoX Pro</h2>
            </div>

            <form className="px-8 py-4 grid gap-4" onSubmit={handleSubmit}>
              {submitStatus === 'success' && <div className="mb-4 p-4 bg-green-50 border-l-4 border-green-500 rounded">Thank you! We will contact you shortly.</div>}
              {submitStatus === 'error' && <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 rounded">Oops! Something went wrong.</div>}

              {/* All original inputs remain unchanged */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required className="w-full border border-gray-300 px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"/>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required className="w-full border border-gray-300 px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"/>
                <select name="country" value={formData.country} onChange={handleChange} required className="w-full border border-gray-300 px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white">
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="Canada">Canada</option>
                </select>
                <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="Specify your job title" className="w-full border border-gray-300 px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"/>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Enter company name" className="w-full border border-gray-300 px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"/>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="e.g user@gmail.com" required className="w-full border border-gray-300 px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"/>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="91 788711383" required className="w-full border border-gray-300 px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"/>
              </div>

              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Please type your message" rows="3" required className="w-full border border-gray-300 px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"/>

              <div className="flex justify-center mt-2">
                <button type="submit" disabled={isSubmitting} className="bg-[#430099] text-white px-10 py-2 rounded-full hover:bg-purple-800 transition font-semibold text-base uppercase tracking-wide">
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>

            <div className="bg-[#430099] px-8 py-3 flex justify-end">
              <span className="text-white text-base font-light">Robato Systems Pvt. Ltd.</span>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;
};

export default BookTrialForm;
