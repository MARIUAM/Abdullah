// 'use client';
// import React, { useState } from 'react';
// import { RiArrowDropDownLine } from "react-icons/ri"; 
// import { AiOutlineHeart } from "react-icons/ai"; 
// import { LiaShoppingCartSolid } from "react-icons/lia";
// import { CiSearch } from "react-icons/ci"; 
// import Link from 'next/link';

// // فرضی ڈیٹا
// const blogproductData = [
//     { blogTitle: 'Product 1' },
//     { blogTitle: 'Product 2' },
//     { blogTitle: 'Product 3' }
// ];

// type BlogProduct = {
//     blogTitle: string;
// };

// const Search1 = () => {
//     const [searchInputValue, setSearchInputValue] = useState("");
//     const [isEnglishOpen, setIsEnglishOpen] = useState(false);
//     const [isUSAOpen, setIsUSAOpen] = useState(false);
//     const [isHomeOpen, setIsHomeOpen] = useState(false);

//     const filterData = blogproductData.filter((items: BlogProduct) => {
//         return items.blogTitle.toLowerCase().includes(searchInputValue.toLowerCase());
//     });

//     return (
//         <div className="flex justify-center items-center">
//             <input
//                 type="text"
//                 value={searchInputValue}
//                 onChange={(e) => setSearchInputValue(e.target.value)}
//                 placeholder="Search..."
//             />
//             <button>
//                 <CiSearch />
//             </button>
//         </div>
//     );
// };

// export default Search1;
