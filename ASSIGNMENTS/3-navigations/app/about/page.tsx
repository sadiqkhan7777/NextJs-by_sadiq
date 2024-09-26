// import React from 'react'
// import Link from "next/link"


// const About = () => {
//   return (
//     <>
//     <div className='text-2xl bg-green-500 text-white '><h1>About Us</h1>
//     <h1><Link style={{color:"green"}} href={"/"}>Go To Home</Link></h1>
//     </div>
//     </>
//   )
// }

// export default About

"use client";
import Link from "next/link";
import React from "react";

const About= () => {
  return (
    <div className="min-h-screen bg-yellow-500 text-white">
      <h1 className="text-3xl">About Page</h1>
      <br />
      <Link href="/">
        <h2 className="underline cursor-pointer">Go To Home</h2>
      </Link>
      <br />
      <Link href="/navbar">
        <h2 className="underline cursor-pointer">Go To Navbar</h2>
      </Link>
      <br />
      <Link href="/footer">
        <h2 className="underline cursor-pointer">Go To Footer</h2>
      </Link>
    </div>
  );
};

export default About;
