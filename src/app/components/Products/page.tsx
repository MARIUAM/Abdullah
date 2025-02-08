
'use client';
import React from 'react'
import { IoIosHeartEmpty } from "react-icons/io"; //icon Hard
import { LuShoppingCart } from "react-icons/lu"; //icon shoping Card
import { FaSearchPlus } from "react-icons/fa"; //icon Search Plus
import Nave1 from '../Nave Botem/Nave1';
import BlogB from '../Blog/blog-b';
import Botem from '../Nave Botem/Botem';

const Products = () => {
    return (
        <div>
            <div>
                <Nave1/>
            </div>
            <div className='max-w-screen-xl  items-center  md:w-[1263px] md:h-[2000px] x-auto'>
                <div className=' bg-[#F6F5FF] w-[1263px] h-[140px] '>
                    <div className=' flex flex-col  pl-[185px] pt-[33px]   '>
                        <h2 className='text-[#101750] text-[30px] font-bold'>Shop Grid Default </h2>
                        <div className='flex text-[14px]'>
                            <h2>Home . Pages </h2>
                            <h2 className='text-[#FB2E86] '>. Shop Grid Default</h2>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <div className='flex flex-col w-[1263px] h-[500px] bg -red-200 ml- [100px]'>
                        <div className='flex flex-col pl-[185px] py-[30px]   bg-slate- 300 w-[1263px] h-[100px]'>
                            <h2 className='text-[#151875] text-[20px]'>Ecommerce Acceories & Fashion item   </h2>
                            <h2 className='text-[#8A8FB9] text-[13px]'>About 9,620 results (0.62 seconds)</h2>
                        </div>
                        

                        <div>
                            <div className='flex justify-center my-3'>
                                <div className=' md:w-[900px] md:h-[200px] w-[260px]  h-[332px] flex  items-center '>
                                    <div className='flex md:flex-row flex-col'>
                                        <div className='  '>
                                            <div className=' space-y-5  ml-[6px] pt-[60px] block md:hidden  absolute md:static '>
                                                <LuShoppingCart    className='hover:text-red-500'/>
                                                <FaSearchPlus   className='hover:text-red-500'/>
                                                <IoIosHeartEmpty    className='hover:text-red-500' />
                                            </div>
                                            <img src="/Rectangle32(4).png" alt="" className='w-[270px] h-190px] md:ml-1.5    ' />

                                        </div>
                                        <div className=' flex flex-col md:ml-4 ml-2.5 md:mt-4 justify-center'>

                                            <div className='flex  gap-2 '>
                                                <div className='text-[15px] hover:text-[16px] text-[#151875] font-semibold  mt-2 w-[145px] h-5'>Dictum morbi</div>
                                                <div className='flex  mt-4 gap-1.5'>
                                                    <div className='w-2 h-2 bg-[#DE9034] rounded-full' />
                                                    <div className='w-2 h-2 bg-[#EC42A2] rounded-full' />
                                                    <div className='w-2 h-2 bg-[#8568FF] rounded-full' />
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-3 h-10'>
                                                <h2 className='text-[13px] hover:text-[14px] text-[#111C85] w-8 h-3'>$26.00</h2>
                                                <h2 className='text-[13px] hover:text-[14px] text-[#FF2AAA] w-8 h-3 line-through' >$52.00</h2>
                                                <h2 className='text-[13px] hover:text-[14px] text-[#FFC416] w-8 h-3'>*****</h2>

                                            </div>
                                            <h2 className='text-[13px] hover:text-[14px] text-[#9295AA] md:w-[430px] w-[233px] h-14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est  adipiscing in phasellus non in justo.</h2>
                                            <div className='flex flex-row    gap-10 items-center ml-1.5 pt-3   '>
                                                <LuShoppingCart className='md:block hidden hover:text-red-500' />
                                                <FaSearchPlus className='md:block hidden   hover:text-red-500' />
                                                <IoIosHeartEmpty className='md:block hidden hover:text-red-500 ' />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center my-3'>
                                <div className='bg- red-900 md:w-[900px] md:h-[200px] w-[260px]  h-[332px] flex  items-center '>
                                    <div className='flex md:flex-row flex-col'>
                                        <div className='  '>
                                            <div className=' space-y-5  ml-[6px] pt-[60px] block md:hidden  absolute md:static '>
                                                <LuShoppingCart  className='hover:text-red-500' />
                                                <FaSearchPlus   className='hover:text-red-500'/>
                                                <IoIosHeartEmpty  className='hover:text-red-500' />
                                            </div>
                                            <img src="/Rectangle32(5).png" alt="" className='w-[270px] h-190px] md:ml-1.5    ' />

                                        </div>
                                        <div className=' flex flex-col md:ml-4 ml-2.5 md:mt-4 justify-center'>

                                            <div className='flex  gap-2 '>
                                                <div className='text-[15px] hover:text-[16px] text-[#151875] font-semibold  mt-2 w-[145px] h-5'>Sodales sit</div>
                                                <div className='flex  mt-4 gap-1.5'>
                                                    <div className='w-2 h-2 bg-[#DE9034] rounded-full' />
                                                    <div className='w-2 h-2 bg-[#EC42A2] rounded-full' />
                                                    <div className='w-2 h-2 bg-[#8568FF] rounded-full' />
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-3 h-10'>
                                                <h2 className='text-[13px] hover:text-[14px] text-[#111C85] w-8 h-3'>$26.00</h2>
                                                <h2 className='text-[13px] hover:text-[14px] text-[#FF2AAA] w-8 h-3 line-through' >$52.00</h2>
                                                <h2 className='text-[13px] hover:text-[14px] text-[#FFC416] w-8 h-3'>*****</h2>

                                            </div>
                                            <h2 className='text-[13px] hover:text-[14px] text-[#9295AA] md:w-[430px] w-[233px] h-14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est  adipiscing in phasellus non in justo.</h2>
                                            <div className='flex flex-row    gap-10 items-center ml-1.5 pt-3    '>
                                                <LuShoppingCart className='md:block hidden   hover:text-red-500 ' />
                                                <FaSearchPlus className='md:block hidden     hover:text-red-500 ' />
                                                <IoIosHeartEmpty className='md:block hidden  hover:text-red-500 ' />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center my-3'>
                                <div className=' md:w-[900px] md:h-[200px] w-[260px]  h-[332px] flex  items-center '>
                                    <div className='flex md:flex-row flex-col'>
                                        <div className='  '>
                                            <div className=' space-y-5  ml-[6px] pt-[60px] block md:hidden  absolute md:static '>
                                                <LuShoppingCart  className='hover:text-red-500' />
                                                <FaSearchPlus   className='hover:text-red-500'/>
                                                <IoIosHeartEmpty  className='hover:text-red-500' />
                                            </div>
                                            <img src="/Rectangle32(6).png" alt="" className='w-[270px] h-190px] md:ml-1.5    ' />

                                        </div>
                                        <div className=' flex flex-col md:ml-4 ml-2.5 md:mt-4 justify-center'>

                                            <div className='flex  gap-2 '>
                                                <div className='text-[15px] hover:text-[16px] text-[#151875] font-semibold  mt-2 w-[145px] h-5'>Nibh varius</div>
                                                <div className='flex  mt-4 gap-1.5'>
                                                    <div className='w-2 h-2 bg-[#DE9034] rounded-full' />
                                                    <div className='w-2 h-2 bg-[#EC42A2] rounded-full' />
                                                    <div className='w-2 h-2 bg-[#8568FF] rounded-full' />
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-3 h-10'>
                                                <h2 className='text-[13px] hover:text-[14px] text-[#111C85] w-8 h-3'>$26.00</h2>
                                                <h2 className='text-[13px] hover:text-[14px] text-[#FF2AAA] w-8 h-3 line-through' >$52.00</h2>
                                                <h2 className='text-[13px] hover:text-[14px] text-[#FFC416] w-8 h-3'>*****</h2>

                                            </div>
                                            <h2 className='text-[13px] hover:text-[14px] text-[#9295AA] md:w-[430px] w-[233px] h-14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est  adipiscing in phasellus non in justo.</h2>
                                            <div className='flex flex-row    gap-10 items-center ml-1.5 pt-3   '>
                                                <FaSearchPlus className='md:block hidden    hover:text-red-500' />
                                                <LuShoppingCart className='md:block hidden  hover:text-red-500' />
                                                <IoIosHeartEmpty className='md:block hidden hover:text-red-500' />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center my-3'>
                                <div className=' md:w-[900px] md:h-[200px] w-[260px]  h-[332px] flex  items-center '>
                                    <div className='flex md:flex-row flex-col'>
                                        <div className='  '>
                                            <div className=' space-y-5  ml-[6px] pt-[60px] block md:hidden  absolute md:static '>
                                                <LuShoppingCart  className='hover:text-red-500' />
                                                <FaSearchPlus   className='hover:text-red-500' />
                                                <IoIosHeartEmpty  className='hover:text-red-500' />
                                            </div>
                                            <img src="/Rectangle32.png" alt="" className='w-[270px] h-190px] md:ml-1.5    ' />

                                        </div>
                                        <div className=' flex flex-col md:ml-4 ml-2.5 md:mt-4 justify-center'>

                                            <div className='flex  gap-2 '>
                                                <div className='text-[15px] hover:text-[16px] text-[#151875] font-semibold  mt-2 w-[145px] h-5'>Accumsan tincidunt</div>
                                                <div className='flex  mt-4 gap-1.5'>
                                                    <div className='w-2 h-2 bg-[#DE9034] rounded-full' />
                                                    <div className='w-2 h-2 bg-[#EC42A2] rounded-full' />
                                                    <div className='w-2 h-2 bg-[#8568FF] rounded-full' />
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-3 h-10'>
                                                <h2 className='text-[13px] hover:text-[14px] text-[#111C85] w-8 h-3'>$26.00</h2>
                                                <h2 className='text-[13px] hover:text-[14px] text-[#FF2AAA] w-8 h-3 line-through' >$52.00</h2>
                                                <h2 className='text-[13px] hover:text-[14px] text-[#FFC416] w-8 h-3'>*****</h2>

                                            </div>
                                            <h2 className='text-[13px] hover:text-[14px] text-[#9295AA] md:w-[430px] w-[233px] h-14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est  adipiscing in phasellus non in justo.</h2>
                                            <div className='flex flex-row    gap-10 items-center ml-1.5 pt-3   '>
                                                <LuShoppingCart className='md:block hidden   hover:text-red-500' />
                                                <FaSearchPlus className='md:block hidden     hover:text-red-500' />
                                                <IoIosHeartEmpty className='md:block hidden  hover:text-red-500 ' />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center my-3'>
                                <div className=' md:w-[900px] md:h-[200px] w-[260px]  h-[332px] flex  items-center '>
                                    <div className='flex md:flex-row flex-col'>
                                        <div className='  '>
                                            <div className=' space-y-5  ml-[6px] pt-[60px] block md:hidden  absolute md:static '>
                                                <LuShoppingCart  className='hover:text-red-500' />
                                                <FaSearchPlus  className='hover:text-red-500' />
                                                <IoIosHeartEmpty  className='hover:text-red-500' />
                                            </div>
                                            <img src="/Rectangle32.png" alt="" className='w-[270px] h-190px] md:ml-1.5    ' />

                                        </div>
                                        <div className=' flex flex-col md:ml-4 ml-2.5 md:mt-4 justify-center'>

                                            <div className='flex  gap-2 '>
                                                <div className='text-[15px] hover:text-[16px] text-[#151875] font-semibold  mt-2 w-[145px] h-5'>Accumsan tincidunt</div>
                                                <div className='flex  mt-4 gap-1.5'>
                                                    <div className='w-2 h-2 bg-[#DE9034] rounded-full' />
                                                    <div className='w-2 h-2 bg-[#EC42A2] rounded-full' />
                                                    <div className='w-2 h-2 bg-[#8568FF] rounded-full' />
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-3 h-10'>
                                                <h2 className='text-[13px] hover:text-[14px] text-[#111C85] w-8 h-3'>$26.00</h2>
                                                <h2 className='text-[13px] hover:text-[14px] text-[#FF2AAA] w-8 h-3 line-through' >$52.00</h2>
                                                <h2 className='text-[13px] hover:text-[14px] text-[#FFC416] w-8 h-3'>*****</h2>

                                            </div>
                                            <h2 className='text-[13px] hover:text-[14px] text-[#9295AA] md:w-[430px] w-[233px] h-14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est  adipiscing in phasellus non in justo.</h2>
                                            <div className='flex flex-row    gap-10 items-center ml-1.5 pt-3   '>
                                                <LuShoppingCart className='md:block hidden   hover:text-red-500 ' />
                                                <FaSearchPlus className='md:block hidden     hover:text-red-500' />
                                                <IoIosHeartEmpty className='md:block hidden  hover:text-red-500 ' />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center my-3'>
                                <div className=' md:w-[900px] md:h-[200px] w-[260px]  h-[332px] flex  items-center '>
                                    <div className='flex md:flex-row flex-col'>
                                        <div className='  '>
                                            <div className=' space-y-5  ml-[6px] pt-[60px] block md:hidden  absolute md:static '>
                                                <LuShoppingCart />
                                                <FaSearchPlus />
                                                <IoIosHeartEmpty />
                                            </div>
                                            <img src="/Rectangle32.png" alt="" className='w-[270px] h-190px] md:ml-1.5    ' />

                                        </div>
                                        <div className=' flex flex-col md:ml-4 ml-2.5 md:mt-4 justify-center'>

                                            <div className='flex  gap-2 '>
                                                <div className='text-[15px] hover:text-[16px] text-[#151875] font-semibold  mt-2 w-[145px] h-5'>Accumsan tincidunt</div>
                                                <div className='flex  mt-4 gap-1.5'>
                                                    <div className='w-2 h-2 bg-[#DE9034] rounded-full' />
                                                    <div className='w-2 h-2 bg-[#EC42A2] rounded-full' />
                                                    <div className='w-2 h-2 bg-[#8568FF] rounded-full' />
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-3 h-10'>
                                                <h2 className='text-[13px] hover:text-[14px] text-[#111C85] w-8 h-3'>$26.00</h2>
                                                <h2 className='text-[13px] hover:text-[14px] text-[#FF2AAA] w-8 h-3 line-through' >$52.00</h2>
                                                <h2 className='text-[13px] hover:text-[14px] text-[#FFC416] w-8 h-3'>*****</h2>

                                            </div>
                                            <h2 className='text-[13px] hover:text-[14px] text-[#9295AA] md:w-[430px] w-[233px] h-14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est  adipiscing in phasellus non in justo.</h2>
                                            <div className='flex flex-row    gap-10 items-center ml-1.5 pt-3   '>
                                                <LuShoppingCart className='md:block hidden ' />
                                                <FaSearchPlus className='md:block hidden ' />
                                                <IoIosHeartEmpty className='md:block hidden ' />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center my-3'>
                                <div className=' md:w-[900px] md:h-[200px] w-[260px]  h-[332px] flex  items-center '>
                                    <div className='flex md:flex-row flex-col'>
                                        <div className='  '>
                                            <div className=' space-y-5  ml-[6px] pt-[60px] block md:hidden  absolute md:static '>
                                                <LuShoppingCart />
                                                <FaSearchPlus />
                                                <IoIosHeartEmpty />
                                            </div>
                                            <img src="/Rectangle32.png" alt="" className='w-[270px] h-190px] md:ml-1.5    ' />

                                        </div>
                                        <div className=' flex flex-col md:ml-4 ml-2.5 md:mt-4 justify-center'>

                                            <div className='flex  gap-2 '>
                                                <div className='text-[15px] hover:text-[16px] text-[#151875] font-semibold  mt-2 w-[145px] h-5'>Accumsan tincidunt</div>
                                                <div className='flex  mt-4 gap-1.5'>
                                                    <div className='w-2 h-2 bg-[#DE9034] rounded-full' />
                                                    <div className='w-2 h-2 bg-[#EC42A2] rounded-full' />
                                                    <div className='w-2 h-2 bg-[#8568FF] rounded-full' />
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-3 h-10'>
                                                <h2 className='text-[13px] hover:text-[14px] text-[#111C85] w-8 h-3'>$26.00</h2>
                                                <h2 className='text-[13px] hover:text-[14px] text-[#FF2AAA] w-8 h-3 line-through' >$52.00</h2>
                                                <h2 className='text-[13px] hover:text-[14px] text-[#FFC416] w-8 h-3'>*****</h2>

                                            </div>
                                            <h2 className='text-[13px] hover:text-[14px] text-[#9295AA] md:w-[430px] w-[233px] h-14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est  adipiscing in phasellus non in justo.</h2>
                                            <div className='flex flex-row    gap-10 items-center ml-1.5 pt-3   '>
                                                <LuShoppingCart className='md:block hidden ' />
                                                <FaSearchPlus className='md:block hidden ' />
                                                <IoIosHeartEmpty className='md:block hidden ' />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>





                </div>
            </div>
            <div>
                <BlogB/>
                <Botem/>
            </div>
        </div>
    )
}

export default Products