"use client";

import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  const [mobileView, setMobileView] = useState(false);
  return (
    <header className="bg-white sticky top-0 z-10 px-5">
      <div className="bg-white flex items-center">
        <div
          className="flex items-center w-full"
          style={{ justifyContent: "space-between" }}
        >
          <Image src={logo} alt="Logo" className="w-20 h-20" />
        </div>
        <div
          className="sm:visible md:invisible text-black"
          onClick={() => setMobileView(!mobileView)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div className="sm:visible xs:invisible md:flex gap-4">
          <div className="lg:px-5 xs:px-0">
            <Link href="/" className="px-2 py-1 text-black">
              Home
            </Link>
          </div>
          <div className="lg:px-5 xs:px-0">
            <Link href="/about-us" className="py-1 text-black">
              About Us
            </Link>
          </div>
          <div className="lg:px-5 xs:px-0">
            <Link href="/software-development" className=" py-1 text-black">
              Software Development
            </Link>
          </div>
          <div className="lg:px-5 xs:px-0">
            {" "}
            <Link href="/managed-services" className=" py-1 text-black">
              Managed Services
            </Link>
          </div>
          <div className="lg:px-5 xs:px-0">
            {" "}
            <Link href="/consulting" className=" py-1 text-black">
              Consulting
            </Link>
          </div>
          <div className="px-5 bg-blue-200">
            {" "}
            <Link href="/contact-us" className="  text-white">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      {mobileView && (
        <div className="sm:flex-none xs:visible sm:invisible md:flex ml-auto gap-4">
          <div>
            <Link href="/" className="px-2 py-1 text-black">
              Home
            </Link>
          </div>
          <div>
            <Link href="/about-us" className="px-2 py-1 text-black">
              About Us
            </Link>
          </div>
          <div>
            {" "}
            <Link href="/software-development" className="px-2 py-1 text-black">
              Software Development
            </Link>
          </div>
          <div>
            <Link href="/managed-services" className="px-2 py-1 text-black">
              Managed Services
            </Link>
          </div>
          <div>
            <Link href="/consulting" className="px-2 py-1 text-black">
              Consulting
            </Link>
          </div>
          <div>
            {" "}
            <Link
              href="/contact-us"
              className="px-2 py-1 bg-blue-200 text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
