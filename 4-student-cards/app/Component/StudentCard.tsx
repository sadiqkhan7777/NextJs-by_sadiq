"use client";
// studentcard.tsx
import React from "react";

// Define the type for the student prop
type Student = {
  name: string;
  age: number;
  rollNumber: string;
  className: string;
  imageUrl: string;
  gender: string;
  city: string;
  phoneNumber: string;
  address: string;
};

interface StudentCardProps {
  student: Student;
}

const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
  return (
    <div className="student-card">
      <div className="text-left">
      <img src={student.imageUrl} alt={student.name} />
      <h2>{student.name}</h2>
      <p>Age: {student.age}</p>
      <p>Roll Number: {student.rollNumber}</p>
      <p>Class: {student.className}</p>
      <p>City: {student.city}</p>
      <p>Phone: {student.phoneNumber}</p>
      <p>Address: {student.address}</p>
      </div>
    </div>
  );
};

export default StudentCard;
