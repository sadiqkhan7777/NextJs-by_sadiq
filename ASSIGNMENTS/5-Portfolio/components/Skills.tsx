// components/Skills.tsx
import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

export default function Skills() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 via-blue-400 to-pink-500 p-8">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-8 uppercase hover:underline transition duration-300">
        Skills
      </h1>
      
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl transform hover:scale-105 transition duration-300 ease-in-out">
        <ul className="space-y-6">
          <li className="border-b pb-4 hover:bg-gray-100 transition duration-300 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-700 hover:text-blue-500 transition duration-300">
              Amazon FBA Mastery
            </h3>
            <p className="text-gray-600 mt-2 leading-relaxed tracking-wide transition duration-300">
              Proficient in Amazon FBA with experience in product research, listing optimization, and inventory management. Able to leverage the Amazon platform for effective e-commerce solutions.
            </p>
          </li>
          
          <li className="border-b pb-4 hover:bg-gray-200 transition duration-300 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-700 hover:text-blue-500 transition duration-300">
              IT and Office Applications
            </h3>
            <p className="text-gray-600 mt-2 leading-relaxed tracking-wide transition duration-300">
              Skilled in office productivity tools like Microsoft Office Suite, Google Workspace, and various IT applications. Knowledgeable in creating professional documents, managing spreadsheets, and conducting presentations.
            </p>
          </li>

          <li className="hover:bg-gray-300 transition duration-300 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-700 hover:text-blue-500 transition duration-300">
              Affiliate Marketing
            </h3>
            <p className="text-gray-600 mt-2 leading-relaxed tracking-wide transition duration-300">
              Experienced in affiliate marketing strategies, with expertise in promoting products through content creation, SEO, and social media marketing. Familiar with various affiliate platforms to maximize earnings.
            </p>
          </li>
        </ul>
        <br />
        <center>
          <div>
            <Button asChild>
              <Link href="#projects" className="bg-gradient-to-r from-blue-600 to-purple-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-600">
                Projects
              </Link>
            </Button>
          </div>
        </center>
      </div>
    </div>
  );
}
