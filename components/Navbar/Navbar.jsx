"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "@/public/images/pcql_header_logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="navbar">
      {/* bg-[#d5e6f1] bg-opacity-19 */}
      <div className="text-center text-xs text-white py-3 bg-[#0767A8]">
        Our service is free, but we may be compensated for{" "}
        <u>sharing your info and marketing non-loan products</u> |{" "}
        <Link href="/privacypolicy">Privacy Policy</Link>
      </div>
      <div className="flex bg-[#d5e6f1] gap-4 py-4 px-16">
        {/* ########################## */}
        <nav className="w-full text-black border-gray-500">
          <div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex">
            <div>
              <div className="flex items-center justify-between md:block">
                {/* LOGO */}
                <Link href="/">
                  <Image
                    src={Logo.src}
                    width={147.24}
                    height={31.18}
                    alt={"logo"}
                  />
                </Link>
                {/* HAMBURGER BUTTON FOR MOBILE */}
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? <AiOutlineClose /> : <AiOutlineMenu />}
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-4 md:p-0 block" : "hidden"
              }`}
            >
              <div className="md:flex w-full gap-16 md:justify-end text-center">
                <div className="p-2">
                  <Link href="/">Home</Link>
                </div>
                <div className="p-2">
                  <Link href="/about">About us</Link>
                </div>
                <div className="p-2">
                  <Link href="/howitworks">How it works</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* ########################## */}
      </div>
    </div>
  );
};

export default Navbar;
