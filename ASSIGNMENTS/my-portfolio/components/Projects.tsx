// components/Projects.tsx
import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 via-blue-400 to-pink-500 p-8">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-8 uppercase hover:underline transition duration-300">
        Projects
      </h1>
      
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl transform hover:scale-105 transition duration-300 ease-in-out">
        <ul className="space-y-6">
          <li className="hover:bg-gray-200 border-b pb-4 rounded-lg transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-700">
              <a href="https://yourlink.com/giaic-student-card" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-500">
                GIAIC Student Card
              </a>
            </h3>
            <p className="text-gray-800 mt-2">
              A web-based student card application that allows users to view and manage student profiles. This project demonstrates skills in UI design and data handling with React and TailwindCSS.
            </p>
          </li>
          
          <li className="hover:bg-gray-200 border-b pb-4 rounded-lg transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-700">
              <a href="https://next-js-by-sadiq.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-500">
                Countdown Timer
              </a>
            </h3>
            <p className="text-gray-800 mt-2">
              A simple yet functional countdown timer built using React and NextJs. Users can set a target time, and the app counts down until the specified event, making it ideal for events and deadlines.
            </p>
          </li>

          <li className="hover:bg-gray-200 border-b pb-4 rounded-lg transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-700">
              <a href="https://yourlink.com/weather-widget" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-500">
                Weather Widget
              </a>
            </h3>
            <p className="text-gray-800 mt-2">
              An interactive weather widget that provides real-time weather data. This project utilizes APIs to fetch data and displays it in an easy-to-read format, showcasing skills in API integration and data visualization.
            </p>
          </li>

          <li className="hover:bg-gray-200 border-b pb-4 rounded-lg transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-700">
              <a href="https://yourlink.com/birthday-wish-app" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-500">
                Birthday Wish App
              </a>
            </h3>
            <p className="text-gray-800 mt-2">
              A fun application that allows users to create and send birthday wishes. Users can customize messages and designs, making it a perfect tool for spreading joy on someone’s special day.
            </p>
          </li>
        </ul>
        <br />
        <center>
          <div>
            <Button asChild>
              <Link href="#project-videos" className="bg-gradient-to-r from-blue-600 to-purple-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-600">
                Project Videos
              </Link>
            </Button>
          </div>
        </center>
      </div>
    </div>
  );
}
