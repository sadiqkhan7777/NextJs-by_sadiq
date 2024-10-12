// components/Navbar.tsx
import React from "react";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="font-bold top-0 left-0 right-0 p-4 bg-slate-400 bg-opacity-80 shadow-md z-10">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link
            className="block text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            href="#intro"
          > 
            Intro
          </Link>
        </li>
        <li>
          <Link
            className="block text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            href="#education"
          >
            Education
          </Link>
        </li>
        <li>
          <Link
            className="block text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            href="#work-experience"
          >
            Work Experience
          </Link>
        </li>
        <li>
          <Link
            className="block text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            href="#skills"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            className="block text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            href="#projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="block text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            href="#project-videos"
          >
            Project Videos
          </Link>
        </li>
        <li>
          <Link
            className="block text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            href="#contact-me"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

