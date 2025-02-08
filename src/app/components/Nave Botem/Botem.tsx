import React from 'react'
import { FaFacebook } from "react-icons/fa"; //icon facebook
// import { FaInstagramSquare } from "react-icons/fa"; //icon instaga
import { AiFillTwitterCircle } from "react-icons/ai"; //icon twitter

const Botem = () => {
    // const [query, setQuery] = useState(''); 
    // Search bar query state
    return (
        <div>
            <div className=' max-w-screen-xl  items-center  md:w-[1263px] inset-x-auto'>
                <div className='flex flex-col md:flex-row justify-center px- items-center bg-[#EEEFFB] text-[8px] py-14 gap-7 '>
                    <div className='bg-[#EEEFFB] text-[14px] pb-[60]'>
                        <div><h2 className='text-2xl font-semibold'>Hekto</h2></div>
                        <div>
                            <div>
                                <h2>
                                    <div className="search-bar pt-6 pb-5   flex pl-[] text-black text-[14px]">
                                        <input
                                            type="text"
                                            // value={query}
                                            placeholder="Enter Email Address"
                                            className="search-input text-[11px] focus:outline-none bg-[#FFFFFF] py-[6] pl-3  "
                                        />
                                        <button className=" flex justify-center w- items-center rounded-sm px-8 bg-pink-500 text-white text-[14px]">
                                            Sing Up
                                        </button>

                                    </div>
                                </h2>
                            </div>
                        </div>
                        <div className='flex flex-col gap-y-1 text-[11px]'>
                            <h2 >Contact Info </h2>
                            <h2> 17 Princess Road, London, Greater London NW1 8JR, UK</h2>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-6'>
                        <div>
                            <h2 className='text-[13px] font-semibold py-5'>Catagories</h2>
                            <div className='flex text-[10px] flex-col gap-y-3'>
                                <h2>Laptops & Computers</h2>
                                <h2>Cameras & Photography</h2>
                                <h2>Smart Phones & Tablets</h2>
                                <h2>Video Games & Consoles</h2>
                                <h2>Waterproof Headphones</h2>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-[13px] font-semibold py-5'>Customer Care</h2>
                            <div className='flex text-[10px] flex-col gap-y-3'>
                                <h2>My Account</h2>
                                <h2>Discount</h2>
                                <h2>Returns</h2>
                                <h2>Orders History</h2>
                                <h2>Order Tracking</h2>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-[13px] font-semibold py-5'>Pages</h2>
                            <div className='flex text-[10px] flex-col gap-y-3'>
                                <h2>Blog</h2>
                                <h2>Browse the Shop</h2>
                                <h2>Category</h2>
                                <h2>Pre-Built Pages</h2>
                                <h2>Visual Composer Elements</h2>
                                <h2>WooCommerce Pages</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row  h-10 bg-[#E7E4F8] justify-evenly items-center gap-14 text-[11px]'>
                <div><h2>©Webecy - All Rights Reserved</h2></div>
                <div className='flex gap-5'>
                <FaFacebook  className='text-[18px]'/>
                {/* <FaInstagramSquare  className='text- [20px] rounded-full'/> */}
                <img src="/instagram.jpg" alt=""  className='w-5 h-5'/>
                <AiFillTwitterCircle className='text-[20px]'/>
                
                </div>
                
            </div>
        </div>
    )
}

export default Botem