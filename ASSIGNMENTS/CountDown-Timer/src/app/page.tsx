"use client"
import React from "react";
import Image from "next/image";
import CountdownTimer from "@/components/countdownTimer";

import capture from "../public/capture.png";
const Home: React.FC = () => {
  return(
    <div>
      <CountdownTimer />
    </div>
  )
}

export default Home;