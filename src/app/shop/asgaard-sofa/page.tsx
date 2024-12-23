"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import p29 from "../../../../public/images/p29 Outdoor sofa set 2.png";
import p30 from "../../../../public/images/p30 Outdoor sofa set_2 1.png";
import p31 from "../../../../public/images/p31 Stuart sofa 1.png";
import p32 from "../../../../public/images/p32 Maya sofa three seater.png";

import p33 from "../../../../public/images/p33 Asgaard sofa 3.png";

import p34 from "../../../../public/images/p34 Cloud sofa three seater + ottoman_2 1.png";
import p35 from "../../../../public/images/p35 Mask group.png";

import asgaardSofa from "../../../../public/images/p40 Asgaard sofa 5.png";
import NavBar from "../../../components/navbar";

const AsgaardSofa = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const [activeTab, setActiveTab] = useState("description");

  const relatedProducts = [
    {
      id: 1,
      name: "Trenton modular sofa_3",
      price: "Rs. 25,000.00",
      image: "/images/p36 Trenton modular sofa_3 1.png",
    },
    {
      id: 2,
      name: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
      image: "/images/p37 Granite dining table with dining chair 1.png",
    },
    {
      id: 3,
      name: "Outdoor bar table and stool",
      price: "Rs. 25,000.00",
      image: "/images/p38 Outdoor bar table and stool 1.png",
    },
    {
      id: 4,
      name: "Plain console with teak mirror",
      price: "Rs. 25,000.00",
      image: "/images/p39 Plain console with teak mirror 1.png",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white">
      
      <NavBar />

      <nav className="text-gray-500 mb-4">
        <Link href="/">Home</Link>{" "}
        <span className="mx-2 text-black font-bold">{">"}</span>
        <Link href="/shop">Shop</Link>{" "}
        <span className="mx-2 text-black font-bold">{">"}</span>
        <span className="text-black font-semibold">{"|"} Asgaard sofa</span>
      </nav>

      <section className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Product Images */}
        <div className="flex">
          {/* Thumbnails */}
          <div className="flex flex-col space-y-4 mr-4">
            <Image
              src={p29}
              alt="Thumbnail 1"
              width={100}
              height={100}
              className=" rounded-lg cursor-pointer hover:opacity-80"
            />
            <Image
              src={p30}
              alt="Thumbnail 2"
              width={100}
              height={100}
              className=" rounded-lg cursor-pointer hover:opacity-80"
            />
            <Image
              src={p31}
              alt="Thumbnail 3"
              width={100}
              height={100}
              className=" rounded-lg cursor-pointer hover:opacity-80"
            />
            <Image
              src={p32}
              alt="Thumbnail 4"
              width={100}
              height={100}
              className=" rounded-lg cursor-pointer hover:opacity-80"
            />
          </div>

          {/* Main Product Image */}
          <div className="bg-yellow-50 p-4 flex items-center justify-center rounded-lg w-full">
            <Image src={p33} alt="Asgaard Sofa" className="rounded-lg" />
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div>
          {/* Product Title */}
          <h2 className="text-3xl font-bold mb-2">Asgaard sofa</h2>
          <p className="text-gray-700 text-xl mb-4">Rs. 250,000.00</p>

          {/* Reviews */}
          <div className="flex items-center mb-6">
            <div className="text-yellow-400 mr-2">★★★★☆</div>
            <span className="text-gray-500 text-sm">5 Customer Review</span>
          </div>

          {/* Description */}
          <p className="text-gray-500 mb-4">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with well-balanced audio
            that boasts clear midrange and extended highs for a sound.
          </p>

          {/* Size Options */}
          <div className="mb-4">
            <h3 className="text-sm font-bold mb-2">Size</h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border rounded hover:bg-gray-200">
                L
              </button>
              <button className="px-3 py-1 border rounded hover:bg-gray-200">
                XL
              </button>
              <button className="px-3 py-1 border rounded hover:bg-gray-200">
                XS
              </button>
            </div>
          </div>

          {/* Color Options */}
          <div className="mb-6">
            <h3 className="text-sm font-bold mb-2">Color</h3>
            <div className="flex space-x-2">
              <div className="w-6 h-6 rounded-full bg-purple-600 cursor-pointer"></div>
              <div className="w-6 h-6 rounded-full bg-black cursor-pointer"></div>
              <div className="w-6 h-6 rounded-full bg-yellow-500 cursor-pointer"></div>
            </div>
          </div>

          {/* Quantity and Cart */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex border rounded">
              <button
                className="px-3 py-2 hover:bg-gray-200"
                onClick={handleDecrease}
              >
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button
                className="px-3 py-2 hover:bg-gray-200"
                onClick={handleIncrease}
              >
                +
              </button>
            </div>
            <button
              onClick={toggleCart}
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 relative"
            >
              Add To Cart
            </button>
            {/* Shopping Cart Sidebar */}
            <div
              className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform ${
                isOpen ? "translate-x-0" : "translate-x-full"
              } transition-transform duration-300 ease-in-out z-50`}
            >
              {/* Cart Header */}
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-xl font-semibold">Shopping Cart</h2>
                <button
                  onClick={toggleCart}
                  className="text-gray-700 hover:text-black"
                >
                  ✕
                </button>
              </div>

              {/* Cart Items */}
              <div className="p-4">
                <div className="flex items-center mb-4 ">
                  <Image
                    src={asgaardSofa}
                    alt="Asgaard Sofa"
                    width={80}
                    height={80}
                    className="rounded mr-4 bg-yellow-100"
                  />
                  <div>
                    <h3 className="text-gray-700 text-sm">Asgaard sofa</h3>
                    <p className="text-gray-500 text-xs">1 x Rs. 250,000.00</p>
                  </div>
                  <p className="ml-auto text-gray-700 font-semibold">
                    Rs. 250,000.00
                  </p>
                </div>
              </div>

              {/* Cart Footer */}
              <div className="p-4 border-t">
                <div className="flex justify-between mb-4">
                  <span className="font-semibold text-gray-600">Subtotal:</span>
                  <span className="text-gray-900 font-bold">
                    Rs. 250,000.00
                  </span>
                </div>
                <div className="flex justify-between">
                  <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
                    <Link href="/cart">View Cart</Link>
                  </button>
                  <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                    <Link href="/checkout">Checkout</Link>
                  </button>
                </div>
              </div>
            </div>

            {/* Backdrop */}
            {isOpen && (
              <div
                onClick={toggleCart}
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
              ></div>
            )}
          </div>

          {/* SKU and Meta Information */}
          <div className="text-gray-500 text-sm space-y-2">
            <p>
              <span className="font-bold text-gray-800">SKU:</span> SS001
            </p>
            <p>
              <span className="font-bold text-gray-800">Category:</span> Sofas
            </p>
            <p>
              <span className="font-bold text-gray-800">Tags:</span> Sofa,
              Chair, Home, Shop
            </p>
            <p>
              <span className="font-bold text-gray-800">Share:</span>{" "}
              <span className="ml-2 cursor-pointer hover:text-black">🔗</span>
              <span className="ml-2 cursor-pointer hover:text-black">🔗</span>
              <span className="ml-2 cursor-pointer hover:text-black">🔗</span>
            </p>
          </div>
        </div>
      </section>
      <section className="p-8">
        {/* Tabs */}
        <div className="flex space-x-8 border-b mb-6">
          <button
            className={`pb-2 text-lg ${
              activeTab === "description"
                ? "border-b-2 border-black text-black font-semibold"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`pb-2 text-lg ${
              activeTab === "additional"
                ? "border-b-2 border-black text-black font-semibold"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("additional")}
          >
            Additional Information
          </button>
          <button
            className={`pb-2 text-lg ${
              activeTab === "reviews"
                ? "border-b-2 border-black text-black font-semibold"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews [5]
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "description" && (
          <div>
            <p className="text-gray-600 mb-4">
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
            <p className="text-gray-600 mb-6">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine-tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>

            {/* Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-yellow-50 p-4 rounded-lg">
              <div className="flex justify-center">
                <Image src={p34} alt="Sofa Left" className="rounded-lg" />
              </div>
              <div className="flex justify-center">
                <Image src={p35} alt="Sofa Right" className="rounded-lg" />
              </div>
            </div>
          </div>
        )}

        {activeTab === "additional" && (
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Additional Information
            </h3>
            <p className="text-gray-600">Details about the product go here.</p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Customer Reviews</h3>
            <p className="text-gray-600">No reviews available yet.</p>
          </div>
        )}
      </section>

      <section className="text-center p-8">
        {/* Section Title */}
        <h2 className="text-2xl font-semibold mb-8">Related Products</h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {relatedProducts.map((product) => (
            <div key={product.id} className="flex flex-col items-center">
              <Image
                src={product.image}
                alt={product.name}
                width={192}
                height={192}
                className="rounded-lg mb-4"
                layout="responsive" // Or 'responsive' based on your layout requirement
              />
              <h3 className="text-gray-700 text-sm mb-2">{product.name}</h3>
              <p className="font-bold text-gray-900">{product.price}</p>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <button className="text-gray-900 font-semibold hover:underline">
          <u>View More</u>
        </button>
      </section>
    </div>
  );
};

export default AsgaardSofa;
