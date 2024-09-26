// import React from 'react'
// import Link from 'next/link'

// const Contact = () => {
//   return (
//     <>
// <div className='texl-2xl'><h1>Contact Us</h1></div>
// <h1><Link href={'/'}> Go to home</Link></h1>
// </>
//   )
// }   

// export default Contact

"use client";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-yellow-500 text-white">
      <h1 className="text-3xl">Contact Page</h1>
      <br />
      <Link href="/">
        <h2 className="underline cursor-pointer">Go To Home</h2>
      </Link>
      <br />
      <Link href="/navbar">
        <h2 className="underline cursor-pointer">Go To Navbar</h2>
      </Link>
      <br />
      <Link href="/about">
        <h2 className="underline cursor-pointer">Go To About</h2>
      </Link>
      <Link href="/footer">
        <h2 className="underline cursor-pointer">Go To Footer</h2>
      </Link>
    </div>
  );
};

export default Contact;
