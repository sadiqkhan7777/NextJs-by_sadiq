'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function page () {
  //  a simple arrow function to alert
  const handleclick = () => {
    alert ('I am an event ❤')
  }
  
  return (
    <div className="flex items-center justify-center min-h-screen">
     {/* evebt handler */}
      <Button className='text-2xl place-items-center h-20 w-40  border-red-400 bg-sky-500' variant={'outline'} onClick={handleclick}> click  me</Button>
      </div>


  )
}

// npx shadcn init
// npx shadcn add button


//   <div>
// <Button variant="outline">click me</Button>
//     </div>


