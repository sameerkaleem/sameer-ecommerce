"use client";
import Image from "next/image";
import Link from "next/link";
import p1 from "../../public/images/p1 Rocket single seater 1.png";
import p2 from "../../public/images/p2 Granite square side table 1.png";
import p3 from "../../public/images/p3 Cloud sofa three seater + ottoman_3 1.png";
import p4 from "../../public/images/p4 Trenton modular sofa_3 1.png";
import p5 from "../../public/images/p5 Granite dining table with dining chair 1.png";
import p6 from "../../public/images/p6 Outdoor bar table and stool 1.png";
import p7 from "../../public/images/p7 Plain console with teak mirror 1.png";
import p8 from "../../public/images/p8 Asgaard sofa 1.png";

import NavBar from "../components/navbar";

export default function Home() {
  const blogPosts = [
    {
      id: 1,
      imageSrc: "/images/p9 Rectangle 13.png", // Replace with actual path
      title: "Going all-in with millennial design",
      date: "12th Oct 2022",
      readTime: "5 min",
    },

    {
      id: 2,
      imageSrc: "/images/p10 Rectangle 14.png", // Replace with actual path
      title: "Going all-in with millennial design",
      date: "12th Oct 2022",
      readTime: "5 min",
    },

    {
      id: 3,
      imageSrc: "/images/p11 Rectangle 15.png", // Replace with actual path
      title: "Going all-in with millennial design",
      date: "12th Oct 2022",
      readTime: "5 min",
    },
  ];

  return (
    <div className="bg-[#FBEBB5] min-h-screen flex flex-col">
      <div className="bg-[#FBEBB5]">
        <NavBar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-between px-8 py-12">
        {/* Text Content */}
        <div className="text-left space-y-6">
          <h1 className="text-5xl font-semibold text-black leading-tight">
            Rocket single
            <br /> seater
          </h1>
          <Link
            href="#"
            className="text-black underline text-lg font-medium hover:text-gray-700"
          >
            Shop Now
          </Link>
        </div>

        {/* Image */}
        <div className="mt-8 md:mt-0">
          <Image
            src={p1}
            alt="Rocket Single Seater Chair"
            className="max-w-max mx-auto shadow-sm rounded"
          />
        </div>
      </div>
      <div className="bg-gray-50 py-12">
        {/* Container */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 max-w-6xl mx-auto px-4">
          {/* Left Card */}
          <div className="flex flex-col items-center space-y-4">
            <Image
              src={p2}
              alt="Side Table"
              className="w-64 h-64 object-cover"
            />
            <h2 className="text-2xl font-bold text-black">Side table</h2>
            <Link
              href="#"
              className="text-black underline text-lg font-medium hover:text-gray-700"
            >
              View More
            </Link>
          </div>

          {/* Right Card */}
          <div className="flex flex-col items-center space-y-4">
            <Image
              src={p3}
              alt="Side Table Sofa"
              className="w-64 h-64 object-cover"
            />
            <h2 className="text-2xl font-bold text-black">Side table</h2>
            <Link
              href="#"
              className="text-black underline text-lg font-medium hover:text-gray-700"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        {/* Header */}
        <h2 className="text-3xl font-semibold text-center mb-4">
          Top Picks For You
        </h2>
        <p className="text-gray-500 text-center mb-8">
          Find a bright ideal to suit your taste with our great selection of
          suspension, floor and table lights.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Product 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-48 h-48 mb-4">
              <Image
                src={p4}
                alt="Trenton modular sofa_3"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-lg font-medium">Trenton modular sofa_3</h3>
            <p className="text-gray-900 font-semibold">Rs. 25,000.00</p>
          </div>

          {/* Product 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-48 h-48 mb-4">
              <Image
                src={p5}
                alt="Granite dining table with dining chair"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-lg font-medium">
              Granite dining table with dining chair
            </h3>
            <p className="text-gray-900 font-semibold">Rs. 25,000.00</p>
          </div>

          {/* Product 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-48 h-48 mb-4">
              <Image
                src={p6}
                alt="Outdoor bar table and stool"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-lg font-medium">Outdoor bar table and stool</h3>
            <p className="text-gray-900 font-semibold">Rs. 25,000.00</p>
          </div>

          {/* Product 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-48 h-48 mb-4">
              <Image
                src={p7}
                alt="Plain console with teak mirror"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-lg font-medium">
              Plain console with teak mirror
            </h3>
            <p className="text-gray-900 font-semibold">Rs. 25,000.00</p>
          </div>
        </div>

        {/* View More Link */}
        <div className="text-center mt-8">
          <Link
            href="#"
            className="text-gray-900 underline decoration-1 hover:text-gray-700 transition duration-300"
          >
            View More
          </Link>
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
        {/* Image Section */}
        <div className="w-full md:w-2/3 relative mb-8 md:mb-0">
          <Image
            src={p8} // Replace with the actual path of the image
            alt="Asgaard Sofa"
            width={800}
            height={500}
            className="rounded-lg"
          />
        </div>

        {/* Text Content Section */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h4 className="text-sm text-gray-500 mb-2">New Arrivals</h4>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Asgaard sofa
          </h2>
          <Link
            href="/shop/asgaard-sofa"
            className="inline-block border border-gray-900 text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-900 hover:text-white transition duration-300"
          >
            Order Now
          </Link>
        </div>
      </div>
      <section className="py-12">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Blogs</h2>
          <p className="text-gray-500">
            Find a bright idea to suit your taste with our great selection
          </p>
        </div>

        {/* Blog Cards */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="text-center">
              {/* Image */}
              <div className="mb-4">
                <Image
                  src={post.imageSrc}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>

              {/* Blog Title */}
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                {post.title}
              </h3>

              {/* Read More */}
              <Link
                href="#"
                className="text-black font-bold hover:underline mb-2 inline-block"
              >
                Read More
              </Link>

              {/* Meta Data */}
              <div className="text-gray-500 flex items-center justify-center space-x-4 mt-2">
                <div className="flex items-center space-x-1">
                  <span>⏱️</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>📅</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Link
            href="#"
            className="inline-block border-b-2 border-black text-black hover:text-gray-500 transition duration-300"
          >
            View All Post
          </Link>
        </div>
      </section>
      <section
        className="relative bg-cover bg-center py-20 text-center"
        style={{
          backgroundImage: "url('/images/p12.0 bg12.0.jpg')", // Replace with actual path
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white opacity-80"></div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Instagram
          </h2>
          <p className="text-gray-600 mb-6">Follow our store on Instagram</p>
          <Link
            href="#"
            className="inline-block bg-gray-200 px-6 py-3 text-gray-700 font-medium rounded-full shadow-md hover:bg-gray-300 transition duration-300"
          >
            Follow Us
          </Link>
        </div>
      </section>
    </div>
  );
}
