// components/ProjectVideos.tsx
import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

export default function ProjectVideos() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 via-blue-400 to-pink-500 p-8">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-8 uppercase hover:underline transition duration-300">
        Project Videos
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {/* Video Card Example */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <iframe
            className="w-full h-48"
            src="https://www.youtube.com/embed/E6tAtRi82QY"
            title="Project Video 1"
            allowFullScreen
          ></iframe>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-700">Project Title 1 Sample 1</h3>
            <p className="text-gray-500">A brief description of the project.</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <iframe
            className="w-full h-48"
            src="https://www.youtube.com/embed/HbNfCM4ilBQ"
            title="Project Video 2"
            allowFullScreen
          ></iframe>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-700">Project Title 2 Sample 2</h3>
            <p className="text-gray-500">A brief description of the project.</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <iframe
            className="w-full h-48"
            src="https://www.youtube.com/embed/VIDEO_ID_3"
            title="Project Video 3"
            allowFullScreen
          ></iframe>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-700">Project Title 3</h3>
            <p className="text-gray-500">A brief description of the project.</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <iframe
            className="w-full h-48"
            src="https://www.youtube.com/embed/VIDEO_ID_4"
            title="Project Video 4"
            allowFullScreen
          ></iframe>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-700">Project Title 4</h3>
            <p className="text-gray-500">A brief description of the project.</p>
          </div>
        </div>

        {/* Add more video cards as needed */}
      </div>
      
      <br />
      <center>
        <div>
          <Button asChild>
            <Link href="#contact-me" className="bg-gradient-to-r from-blue-600 to-purple-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-600">
              Contact Me
            </Link>
          </Button>
        </div>
      </center>
    </div>
  );
}
