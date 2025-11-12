"use client"

// Footer.jsx
import React from "react";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Office Locations Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-blue-950 via-purple-950 to-blue-900 opacity-80"></div>
         <Image
        src="/images/sub-footer-bg.jpg"
        alt="Footer Background"
        fill // makes the image cover the parent container
        className="object-cover object-center"
        priority={true} // optional, for preloading important images
      />

        <div className="relative z-10 px-6 py-16 lg:px-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Australia Office */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 tracking-wide">
                AUSTRALIA OFFICE
              </h3>
              <div className="space-y-1 text-gray-300">
                <p className="text-sm">124 Westwood Dr, Burnside VIC 3023,</p>
                <p className="text-sm">Australia</p>
                <p className="text-sm mt-2">(+61478251187)</p>
              </div>
            </div>

            {/* India Office */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 tracking-wide">
                INDIA OFFICE
              </h3>
              <div className="space-y-1 text-gray-300">
                <p className="text-sm">
                  11 Avenue, Greater Noida W Rd, Sector 16C,
                </p>
                <p className="text-sm">
                  GH-03, Gaur City 2, Noida, Ghaziabad, Uttar Pradesh
                </p>
                <p className="text-sm">201318</p>
                <p className="text-sm mt-2">(+917888711383)</p>
              </div>
            </div>

            {/* Canada Office */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 tracking-wide">
                CANADA OFFICE
              </h3>
              <div className="space-y-1 text-gray-300">
                <p className="text-sm">
                  23 Overstone Rd, Georgetown, ON L7G 0N5, Canada
                </p>
                <p className="text-sm mt-2">(+16473230527)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="bg-black px-6 py-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Applications */}
          <div>
            <h4 className="font-bold text-lg mb-4">Applications</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/production-monitoring" className="hover:text-white transition-colors">
                  Production Monitoring
                </Link>
              </li>
              <li>
                <Link href="/condition-monitoring" className="hover:text-white transition-colors">
                  Condition Monitoring
                </Link>
              </li>
              <li>
                <Link href="/predictive-maintenance" className="hover:text-white transition-colors">
                  Predictive Maintenance
                </Link>
              </li>
              <li>
                <Link href="/process-optimization" className="hover:text-white transition-colors">
                  Process Optimization
                </Link>
              </li>
              <li>
                <Link href="/machine-builders" className="hover:text-white transition-colors">
                  For Machine Builders and Distributors
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/electronic-message-display" className="hover:text-white transition-colors">
                  Electronic Message Display
                </Link>
              </li>
              <li>
                <Link href="/andon-tower-light" className="hover:text-white transition-colors">
                  Andon Tower Light
                </Link>
              </li>
            </ul>
          </div>

          {/* Industry Solutions */}
          <div>
            <h4 className="font-bold text-lg mb-4">Industry Solutions</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/aerospace-defense" className="hover:text-white transition-colors">Aerospace & Defense</Link></li>
              <li><Link href="/automotive" className="hover:text-white transition-colors">Automotive</Link></li>
              <li><Link href="/contract-manufacturers" className="hover:text-white transition-colors">Contract Manufacturers</Link></li>
              <li><Link href="/heavy-machinery" className="hover:text-white transition-colors">Heavy Machinery</Link></li>
              <li><Link href="/medical-devices" className="hover:text-white transition-colors">Medical Devices</Link></li>
              <li><Link href="/oil-gas" className="hover:text-white transition-colors">Oil & Gas</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/blogs" className="hover:text-white transition-colors">Blogs</Link></li>
              <li><Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link></li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="font-bold text-lg mb-4">Get In Touch With Us</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+61478251187" className="hover:text-white transition-colors">+61 478 251 187</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:sales@robotsystems.com" className="hover:text-white transition-colors">sales@robotsystems.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@robotsystems.com" className="hover:text-white transition-colors">info@robotsystems.com</a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Subscribe For News Letter</h5>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="me@example.com"
                  className="px-4 py-2 rounded bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded transition-colors">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-neutral-700 py-6 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white text-xl font-semibold">MachinoX Pro</div>
          <div className="text-gray-400 text-sm text-center">
            All Rights Reserved by Robato Systems Pvt. Ltd. ©2025
          </div>

          {/* ✅ Social Media Icons (restored) */}
                <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
