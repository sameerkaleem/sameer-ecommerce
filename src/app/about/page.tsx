"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import p42 from "../../../public/images/p42 Rectangle 68.png";
import p43 from "../../../public/images/p43 Rectangle 68.png";
import p44 from "../../../public/images/p44 Rectangle 68.png";

import logo from "../../../public/images/logo.png";

import NavBar from "../../components/navbar";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col">
      
      <NavBar />

      <section
        className="relative bg-cover bg-center h-[60vh] flex flex-col"
        style={{
          backgroundImage: "url('/images/bg1.0.jpg')", // Update with correct path
        }}
      >
        {/* Overlay for slight blur effect */}
        <div className="absolute inset-0 bg-white opacity-50"></div>

        {/* Centered Content */}
        <div className="relative z-10 flex-grow flex items-center justify-center text-center">
          <div className="text-black">
            {/* Logo or Icon */}
            <div className="ml-3">
              <span className="text-gold text-3xl font-bold">
                <Image src={logo} alt="logo" width={80} height={80} />
              </span>{" "}
              {/* Replace with the logo */}
            </div>

            {/* Title */}
            <h1 className="text-5xl font-semibold mb-2">Blog</h1>

            {/* Breadcrumbs */}
            <nav className="text-sm text-gray-950">
              <span className="font-semibold">
                <Link href="/">Home</Link>
              </span>{" "}
              &nbsp; &#62; &nbsp;
              <span>Blog</span>
            </nav>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Blog Section */}
        <div className="lg:col-span-3 space-y-12">
          {/* Blog Post 1 */}
          <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
            <div className="flex flex-col space-y-6">
              <Image
                src={p42}
                alt="Handmade pieces"
                className="w-full rounded-md object-cover"
              />
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>👤 Admin</span>
                  <span>📅 14 Oct 2022</span>
                  <span>🪵 Wood</span>
                </div>
                <h2 className="text-3xl font-bold">
                  Going all-in with millennial design
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices. Morbi blandit
                  cursus risus at ultrices mi tempus imperdiet. Libero enim sed
                  faucibus turpis in. Cursus mattis molestie a iaculis at erat.
                  Nibh cras pulvinar mattis nunc sed blandit libero.
                  Pellentesque elit ullamcorper dignissim cras tincidunt.
                  Pharetra et ultrices neque ornare aenean euismod elementum.
                </p>
                <Link href="#" className="text-blue-600 hover:underline">
                  Read more
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
            <div className="flex flex-col space-y-6">
              <Image
                src={p43}
                alt="Handmade pieces"
                className="w-full rounded-md object-cover"
              />
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>👤 Admin</span>
                  <span>📅 14 Oct 2022</span>
                  <span>🪵 Wood</span>
                </div>
                <h2 className="text-3xl font-bold">
                  Exploring new ways of decorating
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices. Morbi blandit
                  cursus risus at ultrices mi tempus imperdiet. Libero enim sed
                  faucibus turpis in. Cursus mattis molestie a iaculis at erat.
                  Nibh cras pulvinar mattis nunc sed blandit libero.
                  Pellentesque elit ullamcorper dignissim cras tincidunt.
                  Pharetra et ultrices neque ornare aenean euismod elementum.
                </p>
                <Link href="#" className="text-blue-600 hover:underline">
                  Read more
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
            <div className="flex flex-col space-y-6">
              <Image
                src={p44}
                alt="Handmade pieces"
                className="w-full rounded-md object-cover"
              />
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>👤 Admin</span>
                  <span>📅 14 Oct 2022</span>
                  <span>🪵 Wood</span>
                </div>
                <h2 className="text-3xl font-bold">
                  Handmade pieces that took time to make
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices. Morbi blandit
                  cursus risus at ultrices mi tempus imperdiet. Libero enim sed
                  faucibus turpis in. Cursus mattis molestie a iaculis at erat.
                  Nibh cras pulvinar mattis nunc sed blandit libero.
                  Pellentesque elit ullamcorper dignissim cras tincidunt.
                  Pharetra et ultrices neque ornare aenean euismod elementum.
                </p>
                <Link href="#" className="text-blue-600 hover:underline">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Search Box */}
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 rounded p-2 focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Crafts <span className="text-gray-400">(2)</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Design <span className="text-gray-400">(8)</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Handmade <span className="text-gray-400">(7)</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Interior <span className="text-gray-400">(1)</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Wood <span className="text-gray-400">(6)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <Image
                  src="/images/p45 Rectangle 69.png"
                  alt="Recent Post 1"
                  width={65}
                  height={65}
                  className=" rounded-md object-cover"
                />
                <div>
                  <Link
                    href="#"
                    className="block font-medium hover:text-blue-600"
                  >
                    Going all-in with millennial design
                  </Link>
                  <span className="text-sm text-gray-500">03 Aug 2022</span>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/images/p46 Rectangle 69.png"
                  width={65}
                  height={65}
                  alt="Recent Post 2"
                  className="rounded-md object-cover"
                />
                <div>
                  <Link
                    href="#"
                    className="block font-medium hover:text-blue-600"
                  >
                    Exploring new ways of decorating
                  </Link>
                  <span className="text-sm text-gray-500">03 Aug 2022</span>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/images/p47 Rectangle 69.png"
                  width={65}
                  height={65}
                  alt="Recent Post 3"
                  className=" rounded-md object-cover"
                />
                <div>
                  <Link
                    href="#"
                    className="block font-medium hover:text-blue-600"
                  >
                    Handmade pieces that took time to make
                  </Link>
                  <span className="text-sm text-gray-500">03 Aug 2022</span>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/images/p48 Rectangle 69.png"
                  width={65}
                  height={65}
                  alt="Recent Post 4"
                  className=" rounded-md object-cover"
                />
                <div>
                  <Link
                    href="#"
                    className="block font-medium hover:text-blue-600"
                  >
                    Modern home in Milan
                  </Link>
                  <span className="text-sm text-gray-500">03 Aug 2022</span>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/images/p49 Rectangle 69.png"
                  width={65}
                  height={65}
                  alt="Recent Post 4"
                  className=" rounded-md object-cover"
                />
                <div>
                  <Link
                    href="#"
                    className="block font-medium hover:text-blue-600"
                  >
                    Colorful Office Redsign
                  </Link>
                  <span className="text-sm text-gray-500">03 Aug 2022</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-8 space-x-4 text-black">
        <button className="px-3 py-1 bg-pink-50 rounded">1</button>
        <button className="px-3 py-1 bg-pink-50 rounded">2</button>
        <button className="px-3 py-1 bg-pink-50 rounded">3</button>
        <button className="px-4 py-1 bg-pink-50 rounded">Next</button>
      </div>

      <div className="w-full bg-pink-50 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4">
          {/* Free Delivery */}
          <div>
            <h3 className="text-lg font-bold mb-2">Free Delivery</h3>
            <p className="text-gray-500">
              For all orders over $50, consectetur adipim scing elit.
            </p>
          </div>

          {/* 90 Days Return */}
          <div>
            <h3 className="text-lg font-bold mb-2">90 Days Return</h3>
            <p className="text-gray-500">
              If goods have problems, consectetur adipim scing elit.
            </p>
          </div>

          {/* Secure Payment */}
          <div>
            <h3 className="text-lg font-bold mb-2">Secure Payment</h3>
            <p className="text-gray-500">
              100% secure payment, consectetur adipim scing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
