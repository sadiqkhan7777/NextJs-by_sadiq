// components/WorkExperience.tsx
import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
export default function WorkExperience() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 via-blue-400 to-pink-500 p-8">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-8 uppercase hover:underline transition duration-300">Work Experience</h1>

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl transform hover:scale-105 transition duration-300 ease-in-out">
        <ul className="space-y-6">
          <li className="border-b pb-4">
            <h3 className="text-2xl font-semibold text-gray-700">Data Entry Operator</h3>
            <p className="text-gray-500">Edge Car Accessories | Duration: 1 Year</p>
            <p className="text-gray-800 mt-2">Performed accurate data entry for inventory and sales records, ensuring the company’s data integrity and contributing to overall operational efficiency.</p>
          </li>

          <li className="border-b pb-4">
            <h3 className="text-2xl font-semibold text-gray-700">Security Guard</h3>
            <p className="text-gray-500">BRT Green Line | Duration: 3 Months</p>
            <p className="text-gray-800 mt-2">Monitored premises to ensure safety and security, assisted passengers, and collaborated with team members to maintain a secure environment.</p>
          </li>

          <li className="border-b pb-4">
            <h3 className="text-2xl font-semibold text-gray-700">Dropshipping Intern</h3>
            <p className="text-gray-500">SYNERGY TIME | Duration: 3 Months</p>
            <p className="text-gray-800 mt-2">Gained practical experience in dropshipping by managing product listings, processing orders, and coordinating with suppliers to ensure timely delivery and customer satisfaction.</p>
          </li>

          <li>
            <h3 className="text-2xl font-semibold text-gray-700">Salesman</h3>
            <p className="text-gray-500">AA Wholesale Stationary Store | Duration: 2 Years</p>
            <p className="text-gray-800 mt-2">Responsible for customer service and sales at a busy wholesale stationery store. Developed skills in customer relations, inventory management, and upselling techniques.</p>
          </li>
        </ul><br />
        <center>
        <div>
            <Button asChild>
              <Link href="#skills" className="bg-gradient-to-r from-blue-600 to-purple-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-600">
                Skills
              </Link>
            </Button>
          </div>
          </center>
      </div>
    </div>
  );
}
