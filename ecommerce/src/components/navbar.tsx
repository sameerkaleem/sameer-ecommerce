"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import user from "../../public/images/account-alert-outline.png";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-6 md:px-16 py-4 ml-16">
      {/* Menu Links */}
      <ul className="hidden md:flex space-x-20 font-semibold ml-[320px] text-black">
        <li className="hover:text-gray-800 cursor-pointer">
          <Link href="/">Home</Link>
        </li>

        <li className="hover:text-gray-800 cursor-pointer ">
          <Link href="/shop">Shop</Link>
        </li>

        <li className="hover:text-gray-800 cursor-pointer">
          <Link href="/about">About</Link>
        </li>

        <li className="hover:text-gray-800 cursor-pointer">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <div className="flex items-center space-x-10">
        {/* alert icon */}
        <button>
          <Link href="/login">
            <Image src={user} alt="User" width={28} height={28} />
          </Link>
        </button>

        {/* search icon */}
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ai ai-Search"
          >
            <path d="M21 21l-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0z" />
          </svg>
        </button>

        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ai ai-Heart"
          >
            <path d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95 22 5.216 19.761 3 17 3s-5 3-5 3-2.239-3-5-3z" />
          </svg>
        </button>

        {/* ant design lib cart icon */}
        <Link href="/cart">
          <ShoppingCartOutlined style={{ fontSize: "28px" }} />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
