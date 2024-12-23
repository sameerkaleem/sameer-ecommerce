"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo.png";
import NavBar from "../../components/navbar";

const Shop = () => {
  return (
    <>
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
            <div className="mb-4">
              <span className="text-gold text-3xl font-bold">
                <Image src={logo} alt="logo" width={100} height={100} />
              </span>{" "}
              {/* Replace with the logo */}
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold mb-2">Shop</h1>

            {/* Breadcrumbs */}
            <nav className="text-sm text-gray-950">
              <span className="font-semibold">
                <Link href="/">Home</Link>
              </span>{" "}
              &nbsp; &#62; &nbsp;
              <span>Shop</span>
            </nav>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-gray-950">Showing 1–16 of 32 results</div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-950">Show</span>
            <input
              type="text"
              defaultValue="16"
              className="w-12 border rounded text-center text-gray-950"
            />
            <span className="text-gray-950">Short by</span>
            <input
              type="text"
              placeholder="Default"
              className="w-32 border rounded px-2 text-gray-950"
            />
          </div>
        </div>

        {/* Hardcoded Product Grid */}
        <div className="grid grid-cols-4 gap-8">
          <div className="text-center">
            <Image
              src="/images/p13 Trenton modular sofa_3 1.png"
              alt="Trenton modular sofa_3"
              height={100}
              width={100}
              className="w-full h-40 object-contain mb-4"
            />
            <p className="text-gray-950 mb-2">Trenton modular sofa_3</p>
            <p className="font-bold text-gray-950">Rs. 25,000.00</p>
          </div>

          <div className="text-center">
            <Image
              src="/images/p14 Granite dining table with dining chair 1.png"
              alt="Granite dining table with dining chair"
              height={100}
              width={100}
              className="w-full h-40 object-contain mb-4"
            />
            <p className="text-gray-950 mb-2">
              Granite dining table with dining chair
            </p>
            <p className="font-bold text-gray-950">Rs. 25,000.00</p>
          </div>

          <div className="text-center">
            <Image
              src="/images/p15 Outdoor bar table and stool 1.png"
              alt="Outdoor bar table and stool"
              height={100}
              width={100}
              className="w-full h-40 object-contain mb-4"
            />
            <p className="text-gray-950 mb-2">Outdoor bar table and stool</p>
            <p className="font-bold text-gray-950">Rs. 25,000.00</p>
          </div>

          <div className="text-center">
            <Image
              src="/images/p16 Plain console with teak mirror 1.png"
              alt="Plain console with teak mirror"
              height={100}
              width={100}
              className="w-full h-40 object-contain mb-4"
            />
            <p className="text-gray-950 mb-2">Plain console with teak mirror</p>
            <p className="font-bold text-gray-950">Rs. 25,000.00</p>
          </div>

          <div className="text-center">
            <Image
              src="/images/p17 Grain coffee table 1.png"
              alt="Grain coffee table"
              height={100}
              width={100}
              className="w-full h-40 object-contain mb-4"
            />
            <p className="text-gray-950 mb-2">Grain coffee table</p>
            <p className="font-bold text-gray-950">Rs. 15,000.00</p>
          </div>

          <div className="text-center">
            <Image
              src="/images/p18 Kent coffee table 1.png"
              alt="Kent coffee table"
              height={100}
              width={100}
              className="w-full h-40 object-contain mb-4"
            />
            <p className="text-gray-950 mb-2">Kent coffee table</p>
            <p className="font-bold text-gray-950">Rs. 225,000.00</p>
          </div>

          <div className="text-center">
            <Image
              src="/images/p19 Round coffee table_color 2 1.png"
              alt="Round coffee table_color 2"
              height={100}
              width={100}
              className="w-full h-40 object-contain mb-4"
            />
            <p className="text-gray-950 mb-2">Round coffee table_color 2</p>
            <p className="font-bold text-gray-950">Rs. 251,000.00</p>
          </div>

          <div className="text-center">
            <Image
              src="/images/p20 Reclaimed teak coffee table 1.png"
              alt="Reclaimed teak coffee table"
              height={100}
              width={100}
              className="w-full h-40 object-contain mb-4"
            />
            <p className="text-gray-950 mb-2">Reclaimed teak coffee table</p>
            <p className="font-bold text-gray-950">Rs. 25,200.00</p>
          </div>

          <div className="text-center">
            <Image
              src="/images/p21 Plain console_ 1.png"
              alt="Plain console_"
              height={100}
              width={100}
              className="w-full h-40 object-contain mb-4"
            />
            <p className="text-gray-950 mb-2">Plain console_</p>
            <p className="font-bold text-gray-950">Rs. 258,200.00</p>
          </div>

          <div className="text-center">
            <Image
              src="/images/p22 Reclaimed teak Sideboard 1.png"
              alt="Reclaimed teak Sideboard"
              height={100}
              width={100}
              className="w-full h-40 object-contain mb-4"
            />
            <p className="text-gray-950 mb-2">Reclaimed teak Sideboard</p>
            <p className="font-bold text-gray-950">Rs. 20,000.00</p>
          </div>

          <div className="text-center">
            <Image
              src="/images/p23 SJP_0825 1.png"
              alt="SJP._0825"
              height={100}
              width={100}
              className="w-full h-40 object-contain mb-4"
            />
            <p className="text-gray-950 mb-2">SJP._0825</p>
            <p className="font-bold text-gray-950">Rs. 200,000.00</p>
          </div>

          <div className="text-center">
            <Image
              src="/images/p24 Bella chair and table 1.png"
              alt="Bella chair and table"
              height={100}
              width={100}
              className="w-full h-40 object-contain mb-4"
            />
            <p className="text-gray-950 mb-2">Bella chair and table</p>
            <p className="font-bold text-gray-950">Rs. 100,000.00</p>
          </div>

          <div className="text-center">
            <Image
              src="/images/p25 Granite square side table 2.png"
              alt="Granite square side table"
              height={100}
              width={100}
              className="w-full h-40 object-contain mb-4"
            />
            <p className="text-gray-950 mb-2">Granite square side table</p>
            <p className="font-bold text-gray-950">Rs. 258,800.00</p>
          </div>

          <div className="text-center">
            <a href="/shop/asgaard-sofa">
              <Image
                src="/images/p26 Asgaard sofa 2.png"
                alt="Asgaard sofa"
                height={100}
                width={100}
                className="w-full h-40 object-contain mb-4"
              />
              <p className="text-gray-950 mb-2">Asgaard sofa</p>
            </a>
            <p className="font-bold text-gray-950">Rs. 250,000.00</p>
          </div>

          <div className="text-center">
            <Image
              src="/images/p27 Maya sofa three seater 1.png"
              alt="Maya sofa three seater"
              height={100}
              width={100}
              className="w-full h-40 object-contain mb-4"
            />
            <p className="text-gray-950 mb-2">Maya sofa three seater</p>
            <p className="font-bold text-gray-950">Rs. 115,000.00</p>
          </div>

          <div className="text-center">
            <Image
              src="/images/p28 Outdoor sofa set 1.png"
              alt="Outdoor sofa set"
              height={100}
              width={100}
              className="w-full h-40 object-contain mb-4"
            />
            <p className="text-gray-950 mb-2">Outdoor sofa set</p>
            <p className="font-bold text-gray-950">Rs. 244,000.00</p>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-8 space-x-2 text-black">
          <button className="px-3 py-1 bg-pink-50 rounded">1</button>
          <button className="px-3 py-1 bg-pink-50 rounded">2</button>
          <button className="px-3 py-1 bg-pink-50 rounded">3</button>
          <button className="px-4 py-1 bg-pink-50 rounded">Next</button>
        </div>
      </section>

      <section className="bg-pink-50 py-12 px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Free Delivery */}
          <div>
            <h3 className="text-lg font-bold mb-2 text-gray-950">
              Free Delivery
            </h3>
            <p className="text-gray-600">
              For all orders over $50, consectetur adipim scing elit.
            </p>
          </div>

          {/* 90 Days Return */}
          <div>
            <h3 className="text-lg font-bold mb-2 text-gray-950">
              90 Days Return
            </h3>
            <p className="text-gray-600">
              If goods have problems, consectetur adipim scing elit.
            </p>
          </div>

          {/* Secure Payment */}
          <div>
            <h3 className="text-lg font-bold mb-2 text-gray-950">
              Secure Payment
            </h3>
            <p className="text-gray-600">
              100% secure payment, consectetur adipim scing elit.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
