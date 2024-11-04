// "use client";

// import React from "react";
// import { useState } from "react";

// export default function page() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h1 className="text-4xl font-bold">{count}</h1>
//       <button
//         className="bg-blue-500 font-bold text-white px-3 py-2 rounded-md"
//         onClick={() => setCount(count + 1)}
//       >
//         Increse:{count}
//       </button>
//       <button
//         className="bg-blue-500 text-white px-3 py-2 rounded-md"
//         onClick={() => setCount(count - 1)}
//       >
//         decrese
//       </button>
//     </div>
//   );
// }

"use client";
import React, {useEffect, useState} from "react";

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(

      // for Api go ti https://newsapi.org/ and create a account on it and you get the api keys from there

      "Api key" 
    )
    .then((Response) => Response.json())
    .then((data)=> setData(data));
  }, []);

  return (
    <div>
      <h1>Car Dara</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading ....</p>
      )
    }
    </div>
  )
}