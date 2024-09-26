// // rafce
// import React from "react"
// import Link from "next/link"
// import navbar from "./page.module.css"

// const Navbar = () => {
//   return (
//     <>    
//     <div className="text-2xl bg-blue-500">
//       <h1>Navbar</h1>
//     <h1><Link href={"/"}>Go To Homepage</Link></h1>
//     </div>
//     </>
//   )
// }

// export default Navbar

"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="min-h-screen bg-blue-500 text-white">
      <h1 className="text-3xl">Navbar Page</h1>
      <br />
      <Link href="/">
        <h2 className="underline cursor-pointer">Go To Home</h2>
      </Link>
      <br />
      <Link href="/about">
        <h2 className="underline cursor-pointer">Go To About</h2>
      </Link>
      <br />
      <Link href="/contact">
        <h2 className="underline cursor-pointer">Go To Contact</h2>
      </Link>
      <Link href="/about">
        <h2 className="underline cursor-pointer">Go To Footer</h2>
      </Link>
    </div>
  );
};

export default Navbar;
