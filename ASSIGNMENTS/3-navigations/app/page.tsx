"use client";
import Link from "next/link";
import { useRouter } from "next/navigation"
import React from "react";

const Home = () => {
    const router = useRouter();

    const goToNavbar = () => {
        router.push("/navbar")
    };

    const goToAbout = () => {
        router.push("/about")
    };

    const goToContact = () => {
        router.push("/contact")
    };

    const goToFooter = () => {
        router.push("/footer")
    };
    return(
        <>
        <div className="min-h-screen bg-red-500 text-white">
        <h1 className="text-3xl ">Home Page</h1><br />
        <Link href={"/navbar"} > 
        <h2>Go To Navbar</h2>
        </Link>
             <br />
        <Link href={"/about"} > 
        <h2>Go To About</h2> 
        </Link>
            <br />
        <Link href={"/contact"} > 
        <h2>Go To Contact</h2> 
        </Link>
            <br />
        <Link href={"/footer"} > 
        <h2>Go To Footer</h2> 
        </Link>
            <br />
        
 <button
        className="px-2 py-0 mx-2 my-2 bg-gray-900 text-white border-none rounded cursor-pointer"
        onClick={goToNavbar}
        >
         Navbar
                </button>       

<button
        className="px-2 py-0 mx-2 my-2 bg-gray-900 text-white border-none rounded cursor-pointer"
        onClick={goToAbout}
        >
         About
                </button>

<button
        className="px-2 py-0 mx-2 my-2 bg-gray-900 text-white border-none rounded cursor-pointer"
        onClick={goToContact}
        >
        Contact
                 </button>

<button
        className="px-2 py-0 mx-2 my-2 bg-gray-900 text-white border-none rounded cursor-pointer"
        onClick={goToFooter}
        >
        Footer
            </button>
        </div>
        </>
    );
};

export default Home;

// class-3
// assignment 