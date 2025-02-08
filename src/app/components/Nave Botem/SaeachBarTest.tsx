// import React from 'react'
// import SearchBar from './SearchBar';
// import product from '@/sanity/schemaTypes/product';
// import Products from '../Products/page';
// // import { text } from 'stream/consumers';
// import { Description } from '@radix-ui/react-dialog';




// const gatDatafromApi = async () => {
//     const data = await fetch(
//         `*[_type == "product" && isFeaturedProduct == true] {
//           _id,
//           name,
//           price,
//           description,
//           discountPercentage,
//           stockLevel,
//           category,
//           slug { current },
//           "imageUrl": image.asset->url
//         }`
//     ).then((res) => { return res.json(); });

//     setProducts(data);
// };
// // SearchBar

// // const handleSearch = (e) => {
// //     console.log(e);
// // };


// const handleSearch = (e) => {
//     // console.log(e);

//     const text = e.target.value.toLowerCase()
//     console.log(text);

//     const filterd = Products.filter((item) => {
//         return item.title.toLowerCase().includes(text) ||
//             item.dscription.toLowerCase().includes(text)||
//             item.category.toLowerCase().includes(text)

//     });

//     setFilterdData(filterd);
// };






// const SaeachBarTest = () => {
//     return (


//         <div>
//             {/* <SearchBar onChange={handleFilter} /> */}
//             <SearchBar onChange={handleSearch} />


//         </div>

//     )
// }

// export default SaeachBarTest










// import { useState, useEffect } from "react";

// function ProductList() {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);

//   // API سے پروڈکٹ حاصل کرنے کی function
//   useEffect(() => {
//     fetch("https://api.yoursite.com/products") // اپنی API URL یہاں ڈالیں
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => setProducts(data)) // ڈیٹا کو state میں سیٹ کریں
//       .catch(err => setError(err.message)); // ایرر کی صورت میں
//   }, []);

//   return (
//     <div>
//       {error && <p>Error: {error}</p>}
//       {!error && products.length === 0 ? (
//         <p>No products found</p>  // اگر کوئی پراڈکٹ نہ ہو تو
//       ) : (
//         <div>
//           {products.map(product => (
//             <div key={product.id}>
//               <h3>{product.name}</h3>
//               <p>{product.description}</p>
//               <p>${product.price}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductList;



















// import React, { useState, useEffect } from 'react';
// import { client } from '@/sanity/lib/client'; // Sanity client import کریں

// export default function ProductList() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState<any[]>([]);

//   // Sanity سے سرچ کے نتائج لانے کا function
//   const fetchSearchResults = async (query: string) => {
//     if (query.trim() === '') {
//       setSearchResults([]);
//       return;
//     }

//     try {
//       // Sanity query, یہاں ہم params کو `query` کے ساتھ پاس کر رہے ہیں۔
//       const data = await client.fetch(
//         `*[_type == "product" && name match $query] {
//           _id,
//           name,
//           price,
//           slug { current },
//           "imageUrl": image.asset->url
//         }`,
//         { query: `${query}*` } as any // Force type as 'any' to bypass the issue
//       );
//       setSearchResults(data);
//     } catch (error) {
//       console.error("Error fetching search results:", error);
//     }
//   };

//   // جب سرچ بار میں تبدیلی ہو، سرچ رزلٹس اپ ڈیٹ کریں
//   useEffect(() => {
//     if (searchQuery.trim()) {
//       fetchSearchResults(searchQuery);
//     } else {
//       setSearchResults([]);
//     }
//   }, [searchQuery]);

//   return (
//     <div className="relative max-w-md mx-auto mt-6">
//       <input
//         type="text"
//         className="w-full p-2 pl-10 border rounded-md"
//         placeholder="Search for products..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//       <div className="absolute top-0 left-0 pl-3 pt-2">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-5 h-5 text-gray-500"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M21 21l-4.35-4.35M18 10a8 8 0 11-16 0 8 8 0 0116 0z"
//           />
//         </svg>
//       </div>

//       {searchQuery.trim() && (
//         <div className="absolute left-0 w-full bg-white shadow-lg mt-1 rounded-md">
//           {searchResults.length > 0 ? (
//             <ul className="max-h-60 overflow-auto">
//               {searchResults.map((result) => (
//                 <li key={result._id} className="border-b p-2 hover:bg-gray-100">
//                   <a href={`/product/${result.slug.current}`} className="flex items-center space-x-3">
//                     <img src={result.imageUrl} alt={result.name} className="w-12 h-12 object-cover" />
//                     <span className="text-sm font-medium">{result.name}</span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <div className="p-4 text-center text-gray-500">No products found</div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }






// import React, { useState, useEffect } from 'react';
// import { client } from '@/sanity/lib/client'; // Sanity client import کریں
// import { ScrollArea } from '@radix-ui/react-scroll-area';
// import { CiSearch } from 'react-icons/ci';

// export default function ProductList() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState<any[]>([]);

//   // Sanity سے سرچ کے نتائج لانے کا function
//   const fetchSearchResults = async (query: string) => {
//     if (query.trim() === '') {
//       setSearchResults([]);
//       return;
//     }

//     try {
//       // Sanity query, یہاں ہم params کو `query` کے ساتھ پاس کر رہے ہیں۔
//       const data = await client.fetch(
//         `*[_type == "product" && name match $query] {
//           _id,
//           name,
//           price,
//           slug { current },
//           "imageUrl": image.asset->url
//         }`,
//         { query: `${query}*` } as any // Force type as 'any' to bypass the issue
//       );
//       setSearchResults(data);
//     } catch (error) {
//       console.error("Error fetching search results:", error);
//     }
//   };

//   // جب سرچ بار میں تبدیلی ہو، سرچ رزلٹس اپ ڈیٹ کریں
//   useEffect(() => {
//     if (searchQuery.trim()) {
//       fetchSearchResults(searchQuery);
//     } else {
//       setSearchResults([]);
//     }
//   }, [searchQuery]);

//   return (
//     <div className="relative max-w-md mx-auto mt-6">

//       <div className='flex '>
//         <input
//           type="text"
//           className='search-input focus:outline-none border-2 py-[2px] '
//           // className="w-full p-2 pl-10 border rounded-md"
//           placeholder="Search for products..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />

//         <button className=" flex justify-center w-6 items-center bg-pink-500 text-white text-lg">  
//           <CiSearch />
//         </button>
//       </div>
//       <div className=" absolute top-0 left-0 pl-3 pt-2">         {/*  <--Search ICON--> CODS */}
//         {/* <svg                                                      
//           // xmlns="http://www.w3.org/2000/svg"             
//           className=" w-5 h-5 text-gray-500"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path className='text-red-300'
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="3"
//             d="M21 21l-4.35-4.35M18 10a8 8 0 11-16 0 8 8 0 0116 0z"

//           />
//         </svg> */}
//       </div>

//       {searchQuery.trim() && (
//         <div className="absolute left-0 w -full bg-purple-200 shadow-lg mt-1 rounded-md">
//           {searchResults.length > 0 ? (
//             <ul className="max-h-60 overflow-auto">
//               {searchResults.map((result) => {
//                 // یہاں ہم یہ چیک کر رہے ہیں کہ آیا slug.current موجود ہے
//                 if (!result.slug?.current) {
//                   return null; // اگر slug نہیں ہے تو اس item کو skip کر دیں
//                 }

//                 return (
//                   <ScrollArea key={result._id} className="h-[40px] w-[200px] rounded-md border p- 4">
//                     <li className="borde -b p-2 hover:h-[40px] hover:bg-gray-100 h-[40px] w- [480px] rounded-sm  ">
//                       <a href={`/product/${result.slug.current}`} className="flex items-center space-x-3 bg-yellow-200  ">
//                         <img src={result.imageUrl} alt={result.name} className="w-7 h-7 object-cover pb -4" />
//                         <span className="text- sm font-medium ">{result.name}</span>
//                       </a>
//                     </li>
//                   </ScrollArea>
//                 );
//               })}
//             </ul>
//           ) : (
//             <div className="p-4 text-center text-gray-500">No products found</div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }




















// import React, { useState, useEffect } from 'react';
// import { client } from '@/sanity/lib/client'; // Sanity client import کریں
// import { ScrollArea } from '@radix-ui/react-scroll-area';
// import { CiSearch } from 'react-icons/ci';

// // 'Product' انٹرفیس بنا رہے ہیں تاکہ ٹائپ محفوظ ہو
// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   slug: { current: string };
//   imageUrl: string;
// }

// export default function ProductList() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState<Product[]>([]); // یہاں Product[] استعمال ہو رہا ہے

//   // Sanity سے سرچ کے نتائج لانے کا function
//   const fetchSearchResults = async (query: string) => {
//     if (query.trim() === '') {
//       setSearchResults([]);
//       return;
//     }

//     try {
//       const data = await client.fetch(
//         `*[_type == "product" && name match $query] {
//           _id,
//           name,
//           price,
//           slug { current },
//           "imageUrl": image.asset->url
//         }`,
//         { query: `${query}*` }
//       );
//       setSearchResults(data); // `data` کی ٹائپ اب `Product[]` ہے
//     } catch (error) {
//       console.error("Error fetching search results:", error);
//     }
//   };

//   // جب سرچ بار میں تبدیلی ہو، سرچ رزلٹس اپ ڈیٹ کریں
//   useEffect(() => {
//     if (searchQuery.trim()) {
//       fetchSearchResults(searchQuery);
//     } else {
//       setSearchResults([]);
//     }
//   }, [searchQuery]);

//   return (
//     <div className="relative max-w-md mx-auto mt-6">
//       <div className='flex '>
//         <input
//           type="text"
//           className='search-input focus:outline-none border-2 py-[2px] '
//           placeholder="Search for products..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button className="flex justify-center w-6 items-center bg-pink-500 text-white text-lg">
//           <CiSearch />
//         </button>
//       </div>

//       {searchQuery.trim() && (
//         <div className="absolute left-0 w-full bg-purple-200 shadow-lg mt-1 rounded-md">
//           {searchResults.length > 0 ? (
//             <ul className="max-h-60 overflow-auto">
//               {searchResults.map((result) => {
//                 if (!result.slug?.current) {
//                   return null;
//                 }

//                 return (
//                   <ScrollArea key={result._id} className="h-[40px] w-[200px] rounded-md border p-4">
//                     <li className="border-b p-2 hover:h-[40px] hover:bg-gray-100 h-[40px] w-[480px] rounded-sm">
//                       <a href={`/product/${result.slug.current}`} className="flex items-center space-x-3 bg-yellow-200">
//                         <img src={result.imageUrl} alt={result.name} className="w-7 h-7 object-cover pb-4" />
//                         <span className="text-sm font-medium">{result.name}</span>
//                       </a>
//                     </li>
//                   </ScrollArea>
//                 );
//               })}
//             </ul>
//           ) : (
//             <div className="p-4 text-center text-gray-500">No products found</div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }












// import React, { useState, useEffect } from 'react';
// import { client } from '@/sanity/lib/client'; // Sanity client import کریں
// import { ScrollArea } from '@radix-ui/react-scroll-area';
// import { CiSearch } from 'react-icons/ci';

// // 'Product' انٹرفیس بنا رہے ہیں تاکہ ٹائپ محفوظ ہو
// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   slug: { current: string };
//   imageUrl: string;
// }

// export default function ProductList() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState<Product[]>([]);

//   // Sanity سے سرچ کے نتائج لانے کا function
//   const fetchSearchResults = async (query: string) => {
//     if (query.trim() === '') {
//       setSearchResults([]);
//       return;
//     }

//     try {
//       // Explicitly typing the params object with a type that Sanity expects
//       const params: Record<string, string> = { query: `${query}*` }; // Use Record<string, string> for dynamic key-value pairs

//       // Sanity query, here we're passing params with query parameter
//       const data = await client.fetch(
//         `*[_type == "product" && name match $query] {
//           _id,
//           name,
//           price,
//           slug { current },
//           "imageUrl": image.asset->url
//         }`,
//         params // Correctly typed params object
//       );

//       setSearchResults(data);
//     } catch (error) {
//       console.error("Error fetching search results:", error);
//     }
//   };

//   // جب سرچ بار میں تبدیلی ہو، سرچ رزلٹس اپ ڈیٹ کریں
//   useEffect(() => {
//     if (searchQuery.trim()) {
//       fetchSearchResults(searchQuery);
//     } else {
//       setSearchResults([]);
//     }
//   }, [searchQuery]);

//   return (
//     <div className="relative max-w-md mx-auto mt-6">
//       <div className="flex">
//         <input
//           type="text"
//           className="search-input focus:outline-none border-2 py-[2px]"
//           placeholder="Search for products..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button className="flex justify-center w-6 items-center bg-pink-500 text-white text-lg">
//           <CiSearch />
//         </button>
//       </div>

//       {searchQuery.trim() && (
//         <div className="absolute left-0 w-full bg-purple-200 shadow-lg mt-1 rounded-md">
//           {searchResults.length > 0 ? (
//             <ul className="max-h-60 overflow-auto">
//               {searchResults.map((result) => {
//                 if (!result.slug?.current) {
//                   return null;
//                 }

//                 return (
//                   <ScrollArea key={result._id} className="h-[40px] w-[200px] rounded-md border p-4">
//                     <li className="border-b p-2 hover:h-[40px] hover:bg-gray-100 h-[40px] w-[480px] rounded-sm">
//                       <a href={`/product/${result.slug.current}`} className="flex items-center space-x-3 bg-yellow-200">
//                         <img src={result.imageUrl} alt={result.name} className="w-7 h-7 object-cover pb-4" />
//                         <span className="text-sm font-medium">{result.name}</span>
//                       </a>
//                     </li>
//                   </ScrollArea>
//                 );
//               })}
//             </ul>
//           ) : (
//             <div className="p-4 text-center text-gray-500">No products found</div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }






















import React, { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client'; // Sanity client import کریں
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { CiSearch } from 'react-icons/ci';

// 'Product' انٹرفیس بنا رہے ہیں تاکہ ٹائپ محفوظ ہو
interface Product {
  _id: string;
  name: string;
  price: number;
  slug: { current: string };
  imageUrl: string;
}

export default function ProductList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  // Sanity سے سرچ کے نتائج لانے کا function
  const fetchSearchResults = async (query: string) => {
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    try {
      const params: Record<string, string> = { query: `${query}*` };

      // Sanity query
      const data = await client.fetch(
        `*[_type == "product" && name match $query] {
          _id,
          name,
          price,
          slug { current },
          "imageUrl": image.asset->url
        }`,
        params
      );

      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  // جب سرچ بار میں تبدیلی ہو، سرچ رزلٹس اپ ڈیٹ کریں
  useEffect(() => {
    if (searchQuery.trim()) {
      fetchSearchResults(searchQuery);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <div className="relative max-w-md mx-auto mt-6">
      <div className="flex">
        <input
          type="text"
          className="search-input focus:outline-none border-2 py-[2px]"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="flex justify-center w-6 items-center bg-pink-500 text-white text-lg">
          <CiSearch />
        </button>
      </div>

      {searchQuery.trim() && (
        <div className="absolute left-0 w-full bg-purple-200 shadow-lg mt-1 rounded-md">
          {searchResults.length > 0 ? (
            <ScrollArea className="h-[300px] w-full">
              <ul className="max-h-60 overflow-auto">
                {searchResults.map((result) => {
                  if (!result.slug?.current) {
                    return null;
                  }

                  return (
                    <li key={result._id} className="border-b p-2 hover:bg-gray-100">
                      <a href={`/product/${result.slug.current}`} className="flex items-center space-x-3 bg-yellow-200">
                        <img src={result.imageUrl} alt={result.name} className="w-7 h-7 object-cover" />
                        <span className="text-sm font-medium">{result.name}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </ScrollArea>
          ) : (
            
            
            <div className="p-4 text-center text-gray-500">No products found</div>
          )}
        </div>
      )}
    </div>
  );
}
