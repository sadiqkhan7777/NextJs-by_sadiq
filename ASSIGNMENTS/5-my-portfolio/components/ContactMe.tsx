// components/ContactMe.tsx 
import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link';
import { Button } from './ui/button';

export default function ContactMe() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-300 via-blue-200 to-pink-300 p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 hover:underline">Contact Me</h1>

      {/* Card wrapping the form */}
      <Card className="w-full max-w-2xl shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 text-center">
          <CardTitle className="text-2xl font-semibold">Send a Message</CardTitle>
        </CardHeader>
        
        <form className="p-8 bg-white rounded-b-lg shadow-inner">
          <CardContent>
            <div className="mb-6">
              <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                id="name"
                type="text"
                placeholder="Your Name"
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                id="email"
                type="email"
                placeholder="Your Email"
                required
              />
            </div>
            
            <div className="mb-8">
              <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                id="message"
                placeholder="Your Message"
                rows={6}
              ></textarea>
            </div>
          </CardContent>
          
          <CardFooter className="flex justify-center">
            <button
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:bg-gradient-to-l text-white font-bold py-2 px-8 rounded-lg shadow-md transition duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-600"
              type="submit"
            >
              Send Message
            </button>
          </CardFooter>
        </form>
        <div>
          <center className="mt-2">
           <Button asChild>
              <Link href="#" className="bg-gradient-to-r from-blue-600 to-purple-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-600">
                Back to Top
              </Link>
            </Button>
            </center>
      </div>
      </Card>
    </div>
  );
}
