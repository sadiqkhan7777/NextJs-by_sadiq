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

// "use client";
// import React, {useEffect, useState} from "react";

// export default function Page() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch(

//       // for Api go ti https://newsapi.org/ and create a account on it and you get the api keys from there

//       "https://newsapi.org/v2/everything?q=tesla&from=2024-09-22&sortBy=publishedAt&apiKey=dcae039697e546c6aea9bbc6939de2af" 
//     )
//     .then((Response) => Response.json())
//     .then((data)=> setData(data));
//   }, []);

//   return (
//     <div>
//       <h1>Car Dara</h1>
//       {data ? (
//         <pre>{JSON.stringify(data, null, 2)}</pre>
//       ) : (
//         <p>Loading ....</p>
//       )
//     }
//     </div>
//   )
// }

// "use client";
// import React, { useEffect, useState } from "react";

// export default function Page() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch(
//       // Use your own API key from https://newsapi.org/
//       "https://newsapi.org/v2/everything?q=tesla&from=2024-09-22&sortBy=publishedAt&apiKey=dcae039697e546c6aea9bbc6939de2af"
//     )
//       .then((response) => response.json())
//       .then((data) => setData(data));
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white py-10">
//       <div className="container mx-auto px-4">
//         <h1 className="text-4xl font-bold text-center mb-8">Tesla News</h1>
//         {data ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {data.articles.map((article: any, index: number) => (
//               <div
//                 key={index}
//                 className="bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden"
//               >
//                 <img
//                   src={article.urlToImage || "https://via.placeholder.com/400"}
//                   alt="News thumbnail"
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4">
//                   <h2 className="text-xl font-semibold mb-2">
//                     {article.title}
//                   </h2>
//                   <p className="text-sm text-gray-600">
//                     {new Date(article.publishedAt).toLocaleDateString()}
//                   </p>
//                   <p className="text-gray-700 mt-2">
//                     {article.description?.substring(0, 100)}...
//                   </p>
//                   <a
//                     href={article.url}
//                     target="_blank"
//                     className="text-indigo-600 hover:underline mt-4 inline-block"
//                   >
//                     Read more
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="flex justify-center items-center">
//             <p className="text-lg animate-pulse">Loading...</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";

// Define types for the API response and articles
interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

interface NewsApiResponse {
  articles: Article[];
}

export default function Page() {
  const [data, setData] = useState<NewsApiResponse | null>(null);

  useEffect(() => {
    fetch(
      // Use your own API key from https://newsapi.org/
      // "https://newsapi.org/v2/everything?q=tesla&from=2024-09-22&sortBy=publishedAt&apiKey=dcae039697e546c6aea9bbc6939de2af"
      "https://newsapi.org/v2/everything?q=apple&from=2024-10-21&to=2024-10-21&sortBy=popularity&apiKey=dcae039697e546c6aea9bbc6939de2af"
    )
      .then((response) => response.json())
      .then((data: NewsApiResponse) => setData(data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Apple API News</h1>
        {data ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.articles.map((article, index) => (
              <div
                key={index}
                className="bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={article.urlToImage || "https://via.placeholder.com/400"}
                  alt="News thumbnail"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">
                    {article.title}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </p>
                  <p className="text-gray-700 mt-2">
                    {article.description?.substring(0, 100)}...
                  </p>
                  <a
                    href={article.url}
                    target="_blank"
                    className="text-indigo-600 hover:underline mt-4 inline-block"
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <p className="text-lg animate-pulse">Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
}
