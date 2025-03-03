// "use client";
// import { useState } from "react";

// export default function SearchPage() {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);

//   const handleSearch = async () => {
//     if (!query) return;
//     const res = await fetch(`/api/search?query=${query}`);
//     const data = await res.json();
//     setResults(data);
//   };

//   return (
//     <div className="max-w-2xl mx-auto mt-10 p-4">
//       <input
//         type="text"
//         placeholder="Search by location or keyword..."
//         className="w-full p-2 border rounded"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <button onClick={handleSearch} className="mt-2 p-2 bg-blue-500 text-white rounded">
//         Search
//       </button>

//       <ul className="mt-4">
//         {results.map((clinic) => (
//           <li key={clinic._id} className="p-2 border-b">
//             <strong>{clinic.name}</strong> - {clinic.location} (⭐ {clinic.rating})
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
