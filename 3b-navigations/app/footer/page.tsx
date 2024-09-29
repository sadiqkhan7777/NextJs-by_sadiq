"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="min-h-screen bg-yellow-500 text-white">
      <h1 className="text-3xl">Footer Page</h1>
      <br />
      <Link href="/">
        <h2 className="underline cursor-pointer">Go To Home</h2>
      </Link>
      <br />
      <Link href="/navbar">
        <h2 className="underline cursor-pointer">Go To Navbar</h2>
      </Link>
      <br />
      <Link href="/contact">
        <h2 className="underline cursor-pointer">Go To Contact</h2>
      </Link>
      <br />
      <Link href="/about">
        <h2 className="underline cursor-pointer">Go To About</h2>
      </Link>
    
    </div>
  );
};

export default Footer;
