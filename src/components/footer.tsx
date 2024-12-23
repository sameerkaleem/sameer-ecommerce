"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 text-sm py-10 border-t">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-y-8 gap-x-16">
        {/* Address Section */}
        <div>
          <p className="text-gray-400 leading-relaxed">
            400 University Drive Suite 200 Coral Gables,
            <br />
            FL 33134 USA
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h4 className="text-gray-500 font-medium mb-4">Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-gray-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-gray-600">
                Shop
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="text-gray-500 font-medium mb-4">Help</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-gray-600">
                Payment Options
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-600">
                Returns
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-600">
                Privacy Policies
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-gray-500 font-medium mb-4">Newsletter</h4>
          <div className="flex border-b border-gray-300 pb-1">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="bg-transparent outline-none w-full text-gray-500 text-sm"
            />
            <button className="text-black font-semibold hover:underline ml-2">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t mt-8 pt-4 text-center text-gray-500">
        <p>2024 Meubal House SAMEER. All rights reverved</p>
      </div>
    </footer>
  );
};

export default Footer;
