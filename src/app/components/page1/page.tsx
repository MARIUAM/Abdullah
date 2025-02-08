import React from 'react'
import { IoIosHeartEmpty } from "react-icons/io"; //icon Hard
import { LuShoppingCart } from "react-icons/lu"; //icon shoping Card
import { FaSearchPlus } from "react-icons/fa"; //icon Search Plus

const ShopGridDefault = () => {
    return (
        <div>
            <div className='max-w-screen-xl  items-center  md:w-[1263px] h-[1400px] x-auto'>
                <div className=' bg-[#F6F5FF] w-[1263px] h-[150px] '>
                    <div className=' flex flex-col  pl-[185px] pt-[35px]   '>
                        <h2 className='text-[#101750] text-[30px] font-bold'>Shop Grid Default </h2>
                        <div className='flex text-[14px]'>
                            <h2>Home . Pages </h2>
                            <h2 className='text-[#FB2E86] '>. Shop Grid Default</h2>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <div className='w-[1263px] h-[500px] bg -red-200 ml- [100px]'>
                        <div className='flex flex-col pl-[185px] pt-[35px]   bg- slate-300 w-[1263px] h-[150px] '>
                            <h2 className='text-[#151875] text-[20px]'>Ecommerce Acceories & Fashion item </h2>
                            <h2 className='text-[#8A8FB9] text-[13px]'>About 9,620 results (0.62 seconds)</h2>
                        </div>

                        <div className='flex justify-center gap-5 my-10'>
                            <div className='flex justify-center it w-[210px] h-[270px]  bg- purple-400  shadow-sm relative group '>
                                <div className='flex justify-center items-center text-center   bg-[#F6F7FB] group-hover:bg-[#EBF4F3] w-[210px] h-[200px] absolute  z-0 '>
                                    <img src="/image 9.png" alt="" className='w-[180px] h-[170px] mt-5 hover:w-[280px] hover:h-[180px]   group-hover:bg-[#EBF4F3] ' />
                                </div>
                                <div className='left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                                <div className=' space-y-3 text-[14px] mr-[180px]  w-6 h-[100px] mt-[90px] absolute z-10      opacity-0 group-hover:opacity-100   '>
                                    <div className=' hover:bg-[#FFFFFF] shadow-3xl rounded-full h-[25px] w-[25px] flex justify-center items-center pl -[2px] '>
                                        <LuShoppingCart className=' hover:text-[15.5px] ' />
                                    </div>
                                    <div className=' hover:bg-[#FFFFFF] shadow-3xl  rounded-full h-[25px] w-[25px] flex justify-center items-center pl -[2px] '>
                                        <FaSearchPlus className=' hover:text-[15.5px] ' />
                                    </div>
                                    <div className=' hover:bg-[#FFFFFF] shadow-3xl  rounded-full h-[25px] w-[25px] flex justify-center items-center pl -[2px] '>
                                        <IoIosHeartEmpty className=' hover:text-[15.5px] ' />
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-center text-center mt-[200px] '>
                                    <h2 className='text-[#151875] font-semibold text-[15px] hover:text-[16px] mt-2 h-7'>Vel elit euismod</h2>
                                    <div className='flex gap-2'>
                                        <div className='w-2 h-2 bg-[#DE9034] rounded-full' />
                                        <div className='w-2 h-2 bg-[#EC42A2] rounded-full' />
                                        <div className='w-2 h-2 bg-[#8568FF] rounded-full' />
                                    </div>
                                    <div className='flex gap-2 text-[13px] hover:text-[14px] h-6'>
                                        <h2 className='text-[#151875]'>$26.00</h2>

                                        <h2 className='text-[#FB2E86]'>$42.00</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center it w-[210px] h-[270px]  bg- purple-400  shadow-sm relative group '>
                                <div className='flex justify-center items-center text-center   bg-[#F6F7FB] group-hover:bg-[#EBF4F3] w-[210px] h-[200px] absolute  z-0 '>
                                    <img src="/image1164.png" alt="" className='w-[180px] h-[170px] mt-5 hover:w-[280px] hover:h-[180px]   group-hover:bg-[#EBF4F3] ' />
                                </div>
                                <div className='left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                                <div className=' space-y-3 text-[14px] mr-[180px]  w-6 h-[100px] mt-[90px] absolute z-10      opacity-0 group-hover:opacity-100   '>
                                    <div className=' hover:bg-[#FFFFFF] shadow-3xl rounded-full h-[25px] w-[25px] flex justify-center items-center pl -[2px] '>
                                        <LuShoppingCart className=' hover:text-[15.5px] ' />
                                    </div>
                                    <div className=' hover:bg-[#FFFFFF] shadow-3xl  rounded-full h-[25px] w-[25px] flex justify-center items-center pl -[2px] '>
                                        <FaSearchPlus className=' hover:text-[15.5px] ' />
                                    </div>
                                    <div className=' hover:bg-[#FFFFFF] shadow-3xl  rounded-full h-[25px] w-[25px] flex justify-center items-center pl -[2px] '>
                                        <IoIosHeartEmpty className=' hover:text-[15.5px] ' />
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-center text-center mt-[200px] '>
                                    <h2 className='text-[#151875] font-semibold text-[15px] hover:text-[16px] mt-2 h-7'>Vel elit euismod</h2>
                                    <div className='flex gap-2'>
                                        <div className='w-2 h-2 bg-[#DE9034] rounded-full' />
                                        <div className='w-2 h-2 bg-[#EC42A2] rounded-full' />
                                        <div className='w-2 h-2 bg-[#8568FF] rounded-full' />
                                    </div>
                                    <div className='flex gap-2 text-[13px] hover:text-[14px] h-6'>
                                        <h2 className='text-[#151875]'>$26.00</h2>

                                        <h2 className='text-[#FB2E86]'>$42.00</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center it w-[210px] h-[270px]  bg- purple-400  shadow-sm relative group '>
                                <div className='flex justify-center items-center text-center   bg-[#F6F7FB] group-hover:bg-[#EBF4F3] w-[210px] h-[200px] absolute  z-0 '>
                                    <img src="/image1173.png" alt="" className='w-[180px] h-[170px] mt-5 hover:w-[280px] hover:h-[180px]   group-hover:bg-[#EBF4F3] ' />
                                </div>
                                <div className='left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                                <div className=' space-y-3 text-[14px] mr-[180px]  w-6 h-[100px] mt-[90px] absolute z-10      opacity-0 group-hover:opacity-100   '>
                                    <div className=' hover:bg-[#FFFFFF] shadow-3xl rounded-full h-[25px] w-[25px] flex justify-center items-center pl -[2px] '>
                                        <LuShoppingCart className=' hover:text-[15.5px] ' />
                                    </div>
                                    <div className=' hover:bg-[#FFFFFF] shadow-3xl  rounded-full h-[25px] w-[25px] flex justify-center items-center pl -[2px] '>
                                        <FaSearchPlus className=' hover:text-[15.5px] ' />
                                    </div>
                                    <div className=' hover:bg-[#FFFFFF] shadow-3xl  rounded-full h-[25px] w-[25px] flex justify-center items-center pl -[2px] '>
                                        <IoIosHeartEmpty className=' hover:text-[15.5px] ' />
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-center text-center mt-[200px] '>
                                    <h2 className='text-[#151875] font-semibold text-[15px] hover:text-[16px] mt-2 h-7'>Vel elit euismod</h2>
                                    <div className='flex gap-2'>
                                        <div className='w-2 h-2 bg-[#DE9034] rounded-full' />
                                        <div className='w-2 h-2 bg-[#EC42A2] rounded-full' />
                                        <div className='w-2 h-2 bg-[#8568FF] rounded-full' />
                                    </div>
                                    <div className='flex gap-2 text-[13px] hover:text-[14px] h-6'>
                                        <h2 className='text-[#151875]'>$26.00</h2>

                                        <h2 className='text-[#FB2E86]'>$42.00</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center it w-[210px] h-[270px]  bg- purple-400  shadow-sm relative group '>
                                <div className='flex justify-center items-center text-center   bg-[#F6F7FB] group-hover:bg-[#EBF4F3] w-[210px] h-[200px] absolute  z-0 '>
                                    <img src="/100111.png" alt="" className='w-[180px] h-[170px] mt-5 hover:w-[280px] hover:h-[180px]   group-hover:bg-[#EBF4F3] ' />
                                </div>
                                <div className='left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                                <div className=' space-y-3 text-[14px] mr-[180px]  w-6 h-[100px] mt-[90px] absolute z-10      opacity-0 group-hover:opacity-100   '>
                                    <div className=' hover:bg-[#FFFFFF] shadow-3xl rounded-full h-[25px] w-[25px] flex justify-center items-center pl -[2px] '>
                                        <LuShoppingCart className=' hover:text-[15.5px] ' />
                                    </div>
                                    <div className=' hover:bg-[#FFFFFF] shadow-3xl  rounded-full h-[25px] w-[25px] flex justify-center items-center pl -[2px] '>
                                        <FaSearchPlus className=' hover:text-[15.5px] ' />
                                    </div>
                                    <div className=' hover:bg-[#FFFFFF] shadow-3xl  rounded-full h-[25px] w-[25px] flex justify-center items-center pl -[2px] '>
                                        <IoIosHeartEmpty className=' hover:text-[15.5px] ' />
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-center text-center mt-[200px] '>
                                    <h2 className='text-[#151875] font-semibold text-[15px] hover:text-[16px] mt-2 h-7'>Vel elit euismod</h2>
                                    <div className='flex gap-2'>
                                        <div className='w-2 h-2 bg-[#DE9034] rounded-full' />
                                        <div className='w-2 h-2 bg-[#EC42A2] rounded-full' />
                                        <div className='w-2 h-2 bg-[#8568FF] rounded-full' />
                                    </div>
                                    <div className='flex gap-2 text-[13px] hover:text-[14px] h-6'>
                                        <h2 className='text-[#151875]'>$26.00</h2>

                                        <h2 className='text-[#FB2E86]'>$42.00</h2>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='flex justify-center gap-5 my-10'>
                            <div className='flex justify-center it w-[210px] h-[270px]  bg- purple-400  shadow-sm relative group '>
                                <div className='flex justify-center items-center text-center   bg-[#F6F7FB] group-hover:bg-[#EBF4F3] w-[210px] h-[200px] absolute  z-0 '>
                                    <img src="/unnamed1.png" alt="" className='w-[180px] h-[170px] mt-5 hover:w-[280px] hover:h-[180px]   group-hover:bg-[#EBF4F3] ' />
                                </div>
                                <div className='left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                                <div className=' space-y-3 text-[14px] mr-[180px]  w-6 h-[100px] mt-[90px] absolute z-10      opacity-0 group-hover:opacity-100   '>
                                    <div className=' hover:bg-[#FFFFFF] shadow-3xl rounded-full h-[25px] w-[25px] flex justify-center items-center pl -[2px] '>
                                        <LuShoppingCart className=' hover:text-[15.5px] ' />
                                    </div>
                                    <div className=' hover:bg-[#FFFFFF] shadow-3xl  rounded-full h-[25px] w-[25px] flex justify-center items-center pl -[2px] '>
                                        <FaSearchPlus className=' hover:text-[15.5px] ' />
                                    </div>
                                    <div className=' hover:bg-[#FFFFFF] shadow-3xl  rounded-full h-[25px] w-[25px] flex justify-center items-center pl -[2px] '>
                                        <IoIosHeartEmpty className=' hover:text-[15.5px] ' />
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-center text-center mt-[200px] '>
                                    <h2 className='text-[#151875] font-semibold text-[15px] hover:text-[16px] mt-2 h-7'>Vel elit euismod</h2>
                                    <div className='flex gap-2'>
                                        <div className='w-2 h-2 bg-[#DE9034] rounded-full' />
                                        <div className='w-2 h-2 bg-[#EC42A2] rounded-full' />
                                        <div className='w-2 h-2 bg-[#8568FF] rounded-full' />
                                    </div>
                                    <div className='flex gap-2 text-[13px] hover:text-[14px] h-6'>
                                        <h2 className='text-[#151875]'>$26.00</h2>

                                        <h2 className='text-[#FB2E86]'>$42.00</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center it w-[210px] h-[270px]  bg- purple-400  shadow-sm relative group '>
                                <div className='flex justify-center items-center text-center   bg-[#F6F7FB] group-hover:bg-[#EBF4F3] w-[210] h-[200px] absolute  z-0 '>
                                    <img src="/movado-connect.png" alt="" className='w-[180px] h-[170px] mt-5 hover:w-[280px] hover:h-[180px]   group-hover:bg-[#EBF4F3] ' />
                                </div>
                                <div className='left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                                <div className=' space-y-3 text-[14px] mr-[180px]  w-6 h-[100px] mt-[90px] absolute z-10      opacity-0 group-hover:opacity-100   '>
                                    <div className=' hover:bg-[#FFFFFF] shadow-3xl rounded-full h-[25px] w-[25px] flex justify-center items-center pl -[2px] '>
                                        <LuShoppingCart className=' hover:text-[15.5px] ' />
                                    </div>
                                    <div className=' hover:bg-[#FFFFFF] shadow-3xl  rounded-full h-[25px] w-[25px] flex justify-center items-center pl -[2px] '>
                                        <FaSearchPlus className=' hover:text-[15.5px] ' />
                                    </div>
                                    <div className=' hover:bg-[#FFFFFF] shadow-3xl  rounded-full h-[25px] w-[25px] flex justify-center items-center pl -[2px] '>
                                        <IoIosHeartEmpty className=' hover:text-[15.5px] ' />
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-center text-center mt-[200px] '>
                                    <h2 className='text-[#151875] font-semibold text-[15px] hover:text-[16px] mt-2 h-7'>Vel elit euismod</h2>
                                    <div className='flex gap-2'>
                                        <div className='w-2 h-2 bg-[#DE9034] rounded-full' />
                                        <div className='w-2 h-2 bg-[#EC42A2] rounded-full' />
                                        <div className='w-2 h-2 bg-[#8568FF] rounded-full' />
                                    </div>
                                    <div className='flex gap-2 text-[13px] hover:text-[14px] h-6'>
                                        <h2 className='text-[#151875]'>$26.00</h2>

                                        <h2 className='text-[#FB2E86]'>$42.00</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center it w-[210px] h-[270px]  bg- purple-400  shadow-sm relative group '>
                                <div className='flex justify-center items-center text-center   bg-[#F6F7FB] group-hover:bg-[#EBF4F3] w-[210px] h-[200px] absolute  z-0 '>
                                    <img src="/image 9.png" alt="" className='w-[180px] h-[170px] mt-5 hover:w-[280px] hover:h-[180px]   group-hover:bg-[#EBF4F3] ' />
                                </div>
                                <div className='left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                                <div className=' space-y-3 text-[14px] mr-[180px]  w-6 h-[100px] mt-[90px] absolute z-10      opacity-0 group-hover:opacity-100   '>
                                    <div className=' hover:bg-[#FFFFFF] shadow-3xl rounded-full h-[25px] w-[25px] flex justify-center items-center pl -[2px] '>
                                        <LuShoppingCart className=' hover:text-[15.5px] ' />
                                    </div>
                                    <div className=' hover:bg-[#FFFFFF] shadow-3xl  rounded-full h-[25px] w-[25px] flex justify-center items-center pl -[2px] '>
                                        <FaSearchPlus className=' hover:text-[15.5px] ' />
                                    </div>
                                    <div className=' hover:bg-[#FFFFFF] shadow-3xl  rounded-full h-[25px] w-[25px] flex justify-center items-center pl -[2px] '>
                                        <IoIosHeartEmpty className=' hover:text-[15.5px] ' />
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-center text-center mt-[200px] '>
                                    <h2 className='text-[#151875] font-semibold text-[15px] hover:text-[16px] mt-2 h-7'>Vel elit euismod</h2>
                                    <div className='flex gap-2'>
                                        <div className='w-2 h-2 bg-[#DE9034] rounded-full' />
                                        <div className='w-2 h-2 bg-[#EC42A2] rounded-full' />
                                        <div className='w-2 h-2 bg-[#8568FF] rounded-full' />
                                    </div>
                                    <div className='flex gap-2 text-[13px] hover:text-[14px] h-6'>
                                        <h2 className='text-[#151875]'>$26.00</h2>

                                        <h2 className='text-[#FB2E86]'>$42.00</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center it w-[210px] h-[270px]  bg- purple-400  shadow-sm relative group '>
                                <div className='flex justify-center items-center text-center   bg-[#F6F7FB] group-hover:bg-[#EBF4F3] w-[210] h-[200px] absolute  z-0 '>
                                    <img src="/image1164.png" alt="" className='w-[180px] h-[170px] mt-5 hover:w-[280px] hover:h-[180px]   group-hover:bg-[#EBF4F3] ' />
                                </div>
                                <div className='left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                                <div className=' space-y-3 text-[14px] mr-[180px]  w-6 h-[100px] mt-[90px] absolute z-10      opacity-0 group-hover:opacity-100   '>
                                    <div className=' hover:bg-[#FFFFFF] shadow-3xl rounded-full h-[25px] w-[25px] flex justify-center items-center pl -[2px] '>
                                        <LuShoppingCart className=' hover:text-[15.5px] ' />
                                    </div>
                                    <div className=' hover:bg-[#FFFFFF] shadow-3xl  rounded-full h-[25px] w-[25px] flex justify-center items-center pl -[2px] '>
                                        <FaSearchPlus className=' hover:text-[15.5px] ' />
                                    </div>
                                    <div className=' hover:bg-[#FFFFFF] shadow-3xl  rounded-full h-[25px] w-[25px] flex justify-center items-center pl -[2px] '>
                                        <IoIosHeartEmpty className=' hover:text-[15.5px] ' />
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-center text-center mt-[200px] '>
                                    <h2 className='text-[#151875] font-semibold text-[15px] hover:text-[16px] mt-2 h-7'>Vel elit euismod</h2>
                                    <div className='flex gap-2'>
                                        <div className='w-2 h-2 bg-[#DE9034] rounded-full' />
                                        <div className='w-2 h-2 bg-[#EC42A2] rounded-full' />
                                        <div className='w-2 h-2 bg-[#8568FF] rounded-full' />
                                    </div>
                                    <div className='flex gap-2 text-[13px] hover:text-[14px] h-6'>
                                        <h2 className='text-[#151875]'>$26.00</h2>

                                        <h2 className='text-[#FB2E86]'>$42.00</h2>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='flex justify-center gap-5 my-10'>
                            <div className='flex justify-center it w-[210px] h-[270px]  bg- purple-400  shadow-sm relative group '>
                                <div className='flex justify-center items-center text-center   bg-[#F6F7FB] group-hover:bg-[#EBF4F3] w-[210px] h-[200px] absolute  z-0 '>
                                    <img src="/res_wach.png" alt="" className='w-[180px] h-[170px] mt-5 hover:w-[280px] hover:h-[180px]   group-hover:bg-[#EBF4F3] ' />
                                </div>
                                <div className='left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                                <div className=' space-y-3 text-[14px] mr-[180px]  w-6 h-[100px] mt-[90px] absolute z-10      opacity-0 group-hover:opacity-100   '>
                                    <div className=' hover:bg-[#FFFFFF] shadow-3xl rounded-full h-[25px] w-[25px] flex justify-center items-center pl -[2px] '>
                                        <LuShoppingCart className=' hover:text-[15.5px] ' />
                                    </div>
                                    <div className=' hover:bg-[#FFFFFF] shadow-3xl  rounded-full h-[25px] w-[25px] flex justify-center items-center pl -[2px] '>
                                        <FaSearchPlus className=' hover:text-[15.5px] ' />
                                    </div>
                                    <div className=' hover:bg-[#FFFFFF] shadow-3xl  rounded-full h-[25px] w-[25px] flex justify-center items-center pl -[2px] '>
                                        <IoIosHeartEmpty className=' hover:text-[15.5px] ' />
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-center text-center mt-[200px] '>
                                    <h2 className='text-[#151875] font-semibold text-[15px] hover:text-[16px] mt-2 h-7'>Vel elit euismod</h2>
                                    <div className='flex gap-2'>
                                        <div className='w-2 h-2 bg-[#DE9034] rounded-full' />
                                        <div className='w-2 h-2 bg-[#EC42A2] rounded-full' />
                                        <div className='w-2 h-2 bg-[#8568FF] rounded-full' />
                                    </div>
                                    <div className='flex gap-2 text-[13px] hover:text-[14px] h-6'>
                                        <h2 className='text-[#151875]'>$26.00</h2>

                                        <h2 className='text-[#FB2E86]'>$42.00</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center it w-[210px] h-[270px]  bg- purple-400  shadow-sm relative group '>
                                <div className='flex justify-center items-center text-center   bg-[#F6F7FB] group-hover:bg-[#EBF4F3] w-[210px] h-[200px] absolute  z-0 '>
                                    <img src="/cam2.png" alt="" className='w-[180px] h-[170px] mt-5 hover:w-[280px] hover:h-[180px]   group-hover:bg-[#EBF4F3] ' />
                                </div>
                                <div className='left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                                <div className=' space-y-3 text-[14px] mr-[180px]  w-6 h-[100px] mt-[90px] absolute z-10      opacity-0 group-hover:opacity-100   '>
                                    <div className=' hover:bg-[#FFFFFF] shadow-3xl rounded-full h-[25px] w-[25px] flex justify-center items-center pl -[2px] '>
                                        <LuShoppingCart className=' hover:text-[15.5px] ' />
                                    </div>
                                    <div className=' hover:bg-[#FFFFFF] shadow-3xl  rounded-full h-[25px] w-[25px] flex justify-center items-center pl -[2px] '>
                                        <FaSearchPlus className=' hover:text-[15.5px] ' />
                                    </div>
                                    <div className=' hover:bg-[#FFFFFF] shadow-3xl  rounded-full h-[25px] w-[25px] flex justify-center items-center pl -[2px] '>
                                        <IoIosHeartEmpty className=' hover:text-[15.5px] ' />
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-center text-center mt-[200px] '>
                                    <h2 className='text-[#151875] font-semibold text-[15px] hover:text-[16px] mt-2 h-7'>Vel elit euismod</h2>
                                    <div className='flex gap-2'>
                                        <div className='w-2 h-2 bg-[#DE9034] rounded-full' />
                                        <div className='w-2 h-2 bg-[#EC42A2] rounded-full' />
                                        <div className='w-2 h-2 bg-[#8568FF] rounded-full' />
                                    </div>
                                    <div className='flex gap-2 text-[13px] hover:text-[14px] h-6'>
                                        <h2 className='text-[#151875]'>$26.00</h2>

                                        <h2 className='text-[#FB2E86]'>$42.00</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center it w-[210px] h-[270px]  bg- purple-400  shadow-sm relative group '>
                                <div className='flex justify-center items-center text-center   bg-[#F6F7FB] group-hover:bg-[#EBF4F3] w-[210px] h-[200px] absolute  z-0 '>
                                    <img src="/czNmcy1hadphon 1.png" alt="" className='w-[180px] h-[170px] mt-5 hover:w-[280px] hover:h-[180px]   group-hover:bg-[#EBF4F3] ' />
                                </div>
                                <div className='left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                                <div className=' space-y-3 text-[14px] mr-[180px]  w-6 h-[100px] mt-[90px] absolute z-10      opacity-0 group-hover:opacity-100   '>
                                    <div className=' hover:bg-[#FFFFFF] shadow-3xl rounded-full h-[25px] w-[25px] flex justify-center items-center pl -[2px] '>
                                        <LuShoppingCart className=' hover:text-[15.5px] ' />
                                    </div>
                                    <div className=' hover:bg-[#FFFFFF] shadow-3xl  rounded-full h-[25px] w-[25px] flex justify-center items-center pl -[2px] '>
                                        <FaSearchPlus className=' hover:text-[15.5px] ' />
                                    </div>
                                    <div className=' hover:bg-[#FFFFFF] shadow-3xl  rounded-full h-[25px] w-[25px] flex justify-center items-center pl -[2px] '>
                                        <IoIosHeartEmpty className=' hover:text-[15.5px] ' />
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-center text-center mt-[200px] '>
                                    <h2 className='text-[#151875] font-semibold text-[15px] hover:text-[16px] mt-2 h-7'>Vel elit euismod</h2>
                                    <div className='flex gap-2'>
                                        <div className='w-2 h-2 bg-[#DE9034] rounded-full' />
                                        <div className='w-2 h-2 bg-[#EC42A2] rounded-full' />
                                        <div className='w-2 h-2 bg-[#8568FF] rounded-full' />
                                    </div>
                                    <div className='flex gap-2 text-[13px] hover:text-[14px] h-6'>
                                        <h2 className='text-[#151875]'>$26.00</h2>

                                        <h2 className='text-[#FB2E86]'>$42.00</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center it w-[210px] h-[270px]  bg- purple-400  shadow-sm relative group '>
                                <div className='flex justify-center items-center text-center   bg-[#F6F7FB] group-hover:bg-[#EBF4F3] w-[210px] h-[200px] absolute  z-0 '>
                                    <img src="/100111.png" alt="" className='w-[180px] h-[170px] mt-5 hover:w-[280] hover:h-[180px]   group-hover:bg-[#EBF4F3] ' />
                                </div>
                                <div className='left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                                <div className=' space-y-3 text-[14px] mr-[180px]  w-6 h-[100px] mt-[90px] absolute z-10      opacity-0 group-hover:opacity-100   '>
                                    <div className=' hover:bg-[#FFFFFF] shadow-3xl rounded-full h-[25px] w-[25px] flex justify-center items-center pl -[2px] '>
                                        <LuShoppingCart className=' hover:text-[15.5px] ' />
                                    </div>
                                    <div className=' hover:bg-[#FFFFFF] shadow-3xl  rounded-full h-[25px] w-[25px] flex justify-center items-center pl -[2px] '>
                                        <FaSearchPlus className=' hover:text-[15.5px] ' />
                                    </div>
                                    <div className=' hover:bg-[#FFFFFF] shadow-3xl  rounded-full h-[25px] w-[25px] flex justify-center items-center pl -[2px] '>
                                        <IoIosHeartEmpty className=' hover:text-[15.5px] ' />
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-center text-center mt-[200px] '>
                                    <h2 className='text-[#151875] font-semibold text-[15px] hover:text-[16px] mt-2 h-7'>Vel elit euismod</h2>
                                    <div className='flex gap-2'>
                                        <div className='w-2 h-2 bg-[#DE9034] rounded-full' />
                                        <div className='w-2 h-2 bg-[#EC42A2] rounded-full' />
                                        <div className='w-2 h-2 bg-[#8568FF] rounded-full' />
                                    </div>
                                    <div className='flex gap-2 text-[13px] hover:text-[14px] h-6'>
                                        <h2 className='text-[#151875]'>$26.00</h2>

                                        <h2 className='text-[#FB2E86]'>$42.00</h2>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>





                </div>
            </div>
        </div>
    )
}

export default ShopGridDefault