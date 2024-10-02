"use client";
//page.tsx
import React from "react";
import StudentCard from  "./Component/StudentCard";

const students = [
  {
    name: "Sadiq Ameen",
    age: 26,
    rollNumber: "37141",
    className: "GIAIC",
    imageUrl: "/images/sadiq.jpg",
    gender: "Male",
    city: "Karachi",
    phoneNumber: "0342-7604587",
    address: "123 Main St, New York, NY 10001",
  },
  {
    name: "Zubair Khan",
    age: 22,
    rollNumber: "B002",
    className: "BBA",
    imageUrl: "/images/zubair.jpg",
    gender: "Male",
    city: "Islamabad",
    phoneNumber: "0300-5197844",
    address: "456 Market St, Los Angeles, CA 90001",
  },
  {
    name: "Yasin Ahmed",
    age: 19,
    rollNumber: "C003",
    className: "BSIT",
    imageUrl: "/images/yasin.jpeg",
    gender: "Male",
    city: "Lahore",
    phoneNumber: "0342-4580557",
    address: "789 Lake Shore Dr, Chicago, IL 60601",
  },
];

export default function Home() {
  return (
    <div className="home">
      <h1 className="title text-center text-bold text-5xl text-transform: uppercase ">Student ID Cards</h1>
      <div className="student-cards">
        {students.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
      </div>

      <style jsx>{`
        .home {
          text-align: center;
          padding: 20px;
        }
        .student-cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
        }
      `}</style><br />
      <div>
        <h2 className="text-center text-3xl font-bold text-b text-underline-offset: 8px text-transform: uppercase text-black-800 underline hover:underline-offset-4">
        Created by M.Sadiq Ameen Khan
        </h2>
      </div>
    </div>
    
  );
}

