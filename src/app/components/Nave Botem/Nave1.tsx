
'use client';
import React from 'react'




import { useState } from 'react';                     //Dropdown Button
import { RiArrowDropDownLine } from "react-icons/ri"; //icons ▼
import { AiOutlineHeart } from "react-icons/ai";    //icons ❤

import { LiaShoppingCartSolid } from "react-icons/lia";//icons 🛒
            //icons search-bar
import Link from 'next/link';
// import Signup from '@/app/Signup/page';
// import Login from '@/app/Signup/Login/page';



import SaeachBarTest from './SaeachBarTest';

// import Search1 from './Search';
// import SearchBar from './SearchBar';




// const [searchInputValue , setSearchInputValue] = useState()

// const filterData = blogproductData.filter((items) =>{
//   return  items.blogTitle.toLowerCase().includes(searchInputValue.toLowerCase());
// })


// SearchBar

// const handleSearch =(e) => {
//     console.log(e);
// };






const Nave1 = () => {

    const [isEnglishOpen, setIsEnglishOpen] = useState(false);
    const [isUSAOpen, setIsUSAOpen] = useState(false);
    const [isHomeOpen, setIsHomeOpen] = useState(false);

    // const [query, setQuery] = useState('');
    // Search bar query state





    // Toggle Country dropdown
    const toggleEnglishDropdown = () => {
        setIsEnglishOpen(!isEnglishOpen);
    };

    // Toggle Product dropdown
    const toggleUSADropdown = () => {
        setIsUSAOpen(!isUSAOpen);
    };
    // Toggle Country dropdown
    const toggleHomeDropdown = () => {
        setIsHomeOpen(!isHomeOpen);
    };


    return (
        <div className='flex  justify-center items-center md:w-[1263px] w-screen max-w-screen-xl   mx-auto '>
            <div className=' flex flex-col justify-center   '>
                <div className='flex flex-col  '>
                    <div className='flex    bg-[#7E33E0] justify-around h-[25px]   text-white text-xs'>
                        <div className='flex   items-center gap-1'>
                            <div className=' '>
                                <h2>Abdullah@gmail.com</h2>
                            </div>
                            <div className=''>
                                <h2>03183004230</h2>
                            </div>
                        </div>
                        <div className=' flex items-center space-y-'>



                            <div className="relative inline-block text-left">

                                <button
                                    onClick={toggleEnglishDropdown}
                                    className="    rounded-md hover:text-base hover:w-[80px]  w-[80px] focus:outline-none">
                                    <div className='flex items-center '>
                                        <div className=''>English</div>
                                        <div className='text-2xl '><RiArrowDropDownLine /></div>
                                    </div>
                                </button>

                                {isEnglishOpen && (
                                    <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                                        {/* <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer  hover:text-base hover:w-[50]  w-[50]">Laptop</li>
        <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer  hover:text-base hover:w-[50]  w-[50]">Phone</li>
        <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer  hover:text-base hover:w-[50]  w-[50]">Tablet</li> */}

                                        <li key="1" className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">English1</li>
                                        <li key="2" className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">English2</li>
                                        <li key="3" className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">English3</li>
                                    </ul>
                                )}
                            </div>


                            {/* Country Dropdown */}
                            {/* <div className="relative inline-block text-left">
                        {isEnglishOpen && (
                            <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                                <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer  hover:text-base hover:w-[50]  w-[50]">USA</li>
                                <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer  hover:text-base hover:w-[50]  w-[50]">India</li>
                                <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer  hover:text-base hover:w-[50]  w-[50]">Canada</li>
                            </ul>
                        )}
                    </div> */}



                            {/* Product Dropdown */}
                            <div className="relative inline-block text-left">

                                <button
                                    onClick={toggleUSADropdown}
                                    className="    rounded-md hover:text-base hover:w-[80px]  w-[80px] focus:outline-none">
                                    <div className='flex items-center '>
                                        <div className=''>USA</div>
                                        <div className='text-2xl '><RiArrowDropDownLine /></div>
                                    </div>
                                </button>

                                {isUSAOpen && (
                                    <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                                        {/* <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer  hover:text-base hover:w-[50]  w-[50]">Laptop</li>
                                <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer  hover:text-base hover:w-[50]  w-[50]">Phone</li>
                                <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer  hover:text-base hover:w-[50]  w-[50]">Tablet</li> */}

                                        <li key="1" className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">USA</li>
                                        <li key="2" className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">India</li>
                                        <li key="3" className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">Canada</li>
                                    </ul>
                                )}
                            </div>

                            <div className='flex'>

                                <Link href="/signup1">

                                    <div className='flex items-center hover:text-base hover:w-[80px]  w-[80px]'>
                                        <h2>Login</h2>
                                        <h2><AiOutlineHeart /></h2>
                                    </div>
                                </Link>



                                <Link href="/Wishlist">
                                    <div className='flex items-center hover:text-base hover:w-[70px]  w-[70px]'>
                                        <h2>Wishlist </h2>
                                        <h2><AiOutlineHeart /></h2>
                                    </div>
                                </Link>

                                <div className='flex items-center text-xl pl-4 hover:text-2xl hover:w-[70px]  w-[70px]'>
                                    <h2><Link href="/cart">
                                        <LiaShoppingCartSolid />
                                    </Link></h2>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>




                <div>
                    <div className='flex    items-center gap- text-sm h-14 text-black'>
                        <div className='ml-[170px]'><h2 className='text-xl pr-10   hover:text-2xl hover:w-[95px]  w-[95px]'><Link href="/">Hekto</Link></h2>  </div>
                        <nav>
                            <ul className='flex items-center gap-4'>
                                <li>
                                    {/* Country Dropdown */}
                                    <div className="relative inline-block text-left">
                                        <button
                                            onClick={toggleHomeDropdown}
                                            className="  items-center    rounded-md hover:text-base hover:w-[50px]  w-[50px]  focus:outline-none">
                                            <div className='flex items-center'>
                                                <div ><Link href="/">Home</Link></div>
                                                <div className='text-2xl  '><RiArrowDropDownLine /></div>
                                            </div>
                                        </button>
                                        {isHomeOpen && (
                                            <ul className="absolute left-0 mt-2 w-28 bg-white border border-gray-200 rounded-md shadow-lg z-10">

                                                <li className=" px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer  hover:text-base hover:h-[40px]  h-[40px]">
                                                    <Link href="/Home1DropDown/cart">Cart</Link>
                                                </li>
                                                <li className=" px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer  hover:text-base hover:h-[40px]  h-[40px]">
                                                    <Link href="/Home1DropDown/about">About Us</Link>
                                                </li>
                                                <li className=" px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer  hover:text-base hover:h-[40px]  h-[40px]">
                                                    <Link href="/Home1DropDown/contact-us">Contact Us</Link>
                                                </li>
                                                <li className=" px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer  hover:text-base hover:h-[40px]  h-[40px]">
                                                    <Link href="/Home1DropDown/faq">FAQ</Link>
                                                </li>


                                                {/* <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer  hover:text-base hover:w-[50px]  w-[50px] ">Home1</li>
                                                <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer  hover:text-base hover:w-[50px]  w-[50px]">Page2</li>
                                                <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer  hover:text-base hover:w-[50px]  w-[50px]">File3</li> */}
                                            </ul>
                                        )}
                                    </div>
                                </li>
                                <li className='hover:text-base hover:w-[43px]  w-[43px]'>Pages</li>
                                <li className='hover:text-base hover:w-[55px]  w-[55px]'>Products</li>
                                <li className='hover:text-base hover:w-[43px]  w-[43px]'><Link href="/blog">Bloge</Link></li>
                                <li className='hover:text-base hover:w-[43px]  w-[43px]'>Shop</li>
                                <li className='hover:text-base hover:w-[43px]  w-[43px]'><Link href="/ContactUs">ContactUs</Link></li>
                            </ul>
                        </nav>

                        {/*  Search Bar  */}
                        <div>
                            <div className="search-bar flex pl-[130px] text-black ">

                                <div className='z-10 '>
                                    {/* <SearchBar onChange={handleFilter} /> */}

                                    <SaeachBarTest />




                                </div>


                                {/* <div>
                                <Search1/>
                                </div> */}

                                {/* <input
                                    type="text"

                                    placeholder="Search..."

                                    // value={searchInputValue} 
                                    // id="search" 
                                    // autoComplete="off"
                                    // onChange={(e) => {setSearchInputValue(e.target.value)}}


                                    className="search-input focus:outline-none border-2 py-[2px]  "
                                /> */}
                                {/* <button className=" flex justify-center w-6 items-center bg-pink-500 text-white text-lg">
                                        <CiSearch />
                                    </button> */}

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>







    )
}
export default Nave1;




















































// import React, { useState, useEffect } from 'react';
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { AiOutlineHeart } from "react-icons/ai";
// import { LiaShoppingCartSolid } from "react-icons/lia";
// import { CiSearch } from "react-icons/ci";
// import Link from 'next/link';

// // Debounce utility (could be lodash.debounce)
// const useDebounce = (value, delay) => {
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [value, delay]);

//   return debouncedValue;
// };

// const Nave1 = () => {
//     const [searchInputValue, setSearchInputValue] = useState('');
//     const debouncedSearchValue = useDebounce(searchInputValue, 500);  // Delay for debouncing search

//     const filterData = blogproductData.filter((items) => {
//         return items.blogTitle.toLowerCase().includes(debouncedSearchValue.toLowerCase());
//     });

//     // Dropdown states
//     const [isEnglishOpen, setIsEnglishOpen] = useState(false);
//     const [isUSAOpen, setIsUSAOpen] = useState(false);
//     const [isHomeOpen, setIsHomeOpen] = useState(false);

//     // Toggling dropdowns
//     const toggleEnglishDropdown = () => setIsEnglishOpen(!isEnglishOpen);
//     const toggleUSADropdown = () => setIsUSAOpen(!isUSAOpen);
//     const toggleHomeDropdown = () => setIsHomeOpen(!isHomeOpen);

//     return (
//         <div className='flex justify-center items-center md:w-[1263px] w-screen max-w-screen-xl mx-auto'>
//             <div className='flex flex-col justify-center'>
//                 {/* Add your header and dropdown buttons */}
//                 <div className='flex items-center'>
//                     {/* Search bar */}
//                     <div className="search-bar flex pl-[130px] text-black">
//                         <input
//                             type="text"
//                             placeholder="Search..."
//                             value={searchInputValue}
//                             onChange={(e) => setSearchInputValue(e.target.value)}
//                             className="search-input focus:outline-none border-2 py-[2px]"
//                         />
//                         <button className="flex justify-center w-6 items-center bg-pink-500 text-white text-lg">
//                             <CiSearch />
//                         </button>
//                     </div>
//                 </div>

//                 {/* Other dropdowns and navigation links */}
//                 {/* Example for the dropdown menus (like language, country, etc.) */}
//             </div>
//         </div>
//     );
// }

// export default Nave1;
//
// 
