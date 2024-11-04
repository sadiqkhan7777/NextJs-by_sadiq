// "use client";

// import { useState } from "react";

// function TextInput() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [value, setValue] = useState("");

//   return (
//     <div className="flex flex-col items-center p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg space-y-4 bg-gradient-to-br from-blue-700 to-blue-500">
//       <h1 className="text-2xl font-bold text-white">Sign Up</h1>

//       <label className="text-white w-full">
//         Name
//         <input
//           type="text"
//           className="mt-1 w-full p-3 border-2 border-blue-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Enter your name"
//           minLength={2}
//           maxLength={20}
//         />
//       </label>

//       <label className="text-white w-full">
//         Email
//         <input
//           type="email"
//           className="mt-1 w-full p-3 border-2 border-blue-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter your email"
//         />
//       </label>

//       <label className="text-white w-full">
//         Password
//         <input
//           type="password"
//           className="mt-1 w-full p-3 border-2 border-blue-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Enter your password"
//           minLength={6}
//         />
//       </label>

//       <button
//         className="mt-4 w-full p-3 text-white font-semibold bg-blue-600 rounded-lg hover:bg-blue-700 shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2"
//       >
//         Submit
//       </button>
//     </div>
//   );
// }

// export default TextInput

// // <input
// // className="h-full border-4 items-center bg-gradient-to-b from-blue-700 to-blue-500 text-red-900"
// // value={value}
// // onChange={(e) => setValue(e.target.value)}
// // placeholder="Enter Text"
// // minLength={2}
// // maxLength={10}
// // />

// {/* <input
// value={Value}
// onChange={(e)=> setValue(e.target.value)}
// placeholder="Name"
// maxLength={8}
// ></input> */}

import Todolist from '@/components/todolist'
import React from 'react'

export default function page() {
  return (
    <div>
      <Todolist />
    </div>
  )
}


