import React from 'react'
import { IoIosHeartEmpty } from "react-icons/io"; //icon Hard
import { FaFacebook } from "react-icons/fa"; //icon facebook
import { FaInstagram } from "react-icons/fa"; //icon instagram
import { AiFillTwitterCircle } from "react-icons/ai"; //icon twitter
import { GoArrowRight } from "react-icons/go";     //icon ->


const ProductDetails = () => {
    return (
        <div>
            <div className='max-w-screen-xl  items-center  md:w-[1263px] md:h-[2000px] x-auto'>
                <div className=' bg-[#FFFFFF] shadow-md w-[1263px] h-[140px] '>
                    <div className=' flex flex-col  pl-[185px] pt-[33px]   '>
                        <h2 className='text-[#101750] text-[30px] font-bold'>Product Details </h2>
                        <div className='flex text-[14px]'>
                            <h2>Home . Pages </h2>
                            <h2 className='text-[#FB2E86] '>. Product Details</h2>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <div className='flex flex-col w-[1263px] h-[500px] bg -red-200 ml- [100px]'>

                        <div>
                            <div className='flex justify-center my-3'>
                                <div className='bg-[#F6F4FD] md:w-[900px] md:h-[410px] w-[435px]  h-[832px] flex  items-center '>
                                    <div className='flex md:flex-row flex-col'>

                                        <div className='flex bg-red-300  md:w-[400px] md:h-[400]px w-[435px] h-[375px]  '>
                                            <div className=' space-y-[6px] mx-[6px]'>
                                                <img src="/Rectangle134.png" alt="" className='md:w-[135px] md:h-[129px] h-[120px]' />
                                                <img src="/Rectangle136.png" alt="" className='md:w-[135px] md:h-[129px] h-[120px]' />
                                                <img src="/Rectangle137.png" alt="" className='md:w-[135px] md:h-[129px] h-[120px]' />
                                            </div>
                                            <div>
                                                <img src="/Rectangle138.png" alt="" className='md:w-[300px] w-[300px] md:h-[400px] h-[370px]' />
                                            </div>
                                        </div>

                                        <div>
                                            <div className=' my-[20px] ml-5 '>
                                                <h2 className='text-[30px] text-[#0D134E] font-semibold '>Playwood arm chair</h2>
                                                <div className='my-[10px]'>*****(22)</div>
                                                <div className='flex gap-4 my-[10px]'>
                                                    <h2 className='text-[15px] text-[#151875] '>$32.00</h2>
                                                    <h2 className='text-[15px] text-[#FB2E86] line-through'>$32.00</h2>
                                                </div>
                                                <h2 className='text-[15px] text-[#0D134E] my-[10px]'>Color</h2>
                                                <p className='text-[15px] text-[#A9ACC6] md:w-[500px] w-[390px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
                                                <div className='flex items-center text-[#151875] text-[15px]   ml-[80px] my-5'>Add To cart  <IoIosHeartEmpty className='ml-4 mt-[2]' /></div>
                                                <div className='text-[#151875] text-[15px] font-semibold '>
                                                    <h2 className='my-[10px]'>Categories:</h2>
                                                    <h2 className='my-[10px]'>Tags</h2>
                                                    <div className='flex items-center gap-4 my-[10px]'>
                                                        <h2 className='text-[#151875] text-[15px] font-semibold'>Share</h2>
                                                        <div className='flex gap-2'>
                                                            <FaFacebook />
                                                            <FaInstagram />
                                                            <AiFillTwitterCircle />
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='flex justify-center items-center text-[#151875]'>
                    <div className='flex flex-col  md:py-[80px]  py-2 md:px-[43px] px-2 md:w-[990px] md:h-[510px] w-[435px]  h-[832px]  bg-slate-500 bg- [#F9F8FE]   '>
                        <div className='flex mr- [395px]'>
                            <ul className='flex md:flex-row flex-col    md:gap-[40px] gap-[11px]  w- [500px] text-[24px] bg-yellow-100'>
                                <li className=' hover: border-b-[2px] border-[#151875] mr[1180]'>Description</li>
                                <li className=' hover: border-b-[2px] border-[#151875] mr[1150]'>Additional Info</li>
                                <li className=' hover: border-b-[2px] border-[#151875] mr[1195]'>Reviewso</li>
                                <li className=' hover: border-b-[2px] border-[#151875] mr[1220]'>Video</li>
                            </ul>
                        </div>
                        <div className='md:w-[900px] ml -11 my-7 bg-yellow-200'>
                            <h2 className='text-[22px] font-semibold mb-2'>Varius tempor.</h2>
                            <p className='text-[13px] text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum.
                                Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus
                                cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                        </div>
                        <div className='md:w-[900px] ml- 11 my-7 space-y-2  bg-yellow-800'>
                            <h2 className='tex-[22px] font-semibold mb-2'>More details</h2>
                            <div className='flex'><GoArrowRight className='text-[21px] mr-1' />
                                <p className='text-[13px] text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                            <div className='flex'><GoArrowRight className='text-[21px] mr-1' />
                                <p className='text-[13px] text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                            <div className='flex'><GoArrowRight className='text-[21px] mr-1' />
                                <p className='text-[13px] text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                            <div className='flex'><GoArrowRight className='text-[21px] mr-1' />
                                <p className='text-[13px] text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col   my-14'>
                    <h2 className='flex justify-center  ml -[180px]  text-[25px] font-semibold mb-6'>Related Products</h2>
                    <div className='flex md:flex-row flex-col justify-center items-center gap-5'>
                        <div className='w-[210px] h-[360px] ml -14'>
                            <div>
                                <div>
                                    <div>
                                        <img src="/Rectangle128.png" alt="" className='w-[210px] h-[250px]' />
                                    </div>
                                    <div className='text-[#151875] mx-1'>
                                        <div className='flex justify-between items-center '>
                                            <h2 className='text-[14px] py-2'>Mens Fashion Wear</h2>
                                            <h2>
                                                <div className='flex items-center gap-[2px]'>
                                                    <img src="/Vector(2).png" alt="" width={9} height={10} />
                                                    <img src="/Vector(2).png" alt="" width={9} height={10} />
                                                    <img src="/Vector(2).png" alt="" width={9} height={10} />
                                                    <img src="/Vector(2).png" alt="" width={9} height={10} />
                                                    <img src="/Vector(3).png" alt="" width={9} height={10} />
                                                </div>
                                            </h2>
                                        </div>
                                        <div className='text-[13px]'>
                                            <h2 className='text-[12px]'>$43.00</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' w-[210px] h-[360px] ml -14'>
                            <div>
                                <div>
                                    <div>
                                        <img src="/Rectangle133.png" alt="" className='w-[210px] h-[250px]' />
                                    </div>
                                    <div className='text-[#151875] mx-1'>
                                        <div className='flex justify-between items-center '>
                                            <h2 className='text-[14px] py-2'>Mens Fashion Wear</h2>
                                            <h2>
                                                <div className='flex items-center gap-[2px]'>
                                                    <img src="/Vector(2).png" alt="" width={9} height={10} />
                                                    <img src="/Vector(2).png" alt="" width={9} height={10} />
                                                    <img src="/Vector(2).png" alt="" width={9} height={10} />
                                                    <img src="/Vector(2).png" alt="" width={9} height={10} />
                                                    <img src="/Vector(2).png" alt="" width={9} height={10} />
                                                </div>
                                            </h2>
                                        </div>
                                        <div className='text-[13px]'>
                                            <h2 className='text-[12px]'>$43.00</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' w-[210px] h-[360px] ml -14'>
                            <div>
                                <div>
                                    <div>
                                        <img src="/Rectangle130.png" alt="" className='w-[210px] h-[250px]' />
                                    </div>
                                    <div className='text-[#151875] mx-1'>
                                        <div className='flex justify-between items-center '>
                                            <h2 className='text-[14px] py-2'>Mens Fashion Wear</h2>
                                            <h2>
                                                <div className='flex items-center gap-[2px]'>
                                                    <img src="/Vector(2).png" alt="" width={9} height={10} />
                                                    <img src="/Vector(2).png" alt="" width={9} height={10} />
                                                    <img src="/Vector(2).png" alt="" width={9} height={10} />
                                                    <img src="/Vector(2).png" alt="" width={9} height={10} />
                                                    <img src="/Vector(3).png" alt="" width={9} height={10} />
                                                </div>
                                            </h2>
                                        </div>
                                        <div className='text-[13px]'>
                                            <h2 className='text-[12px]'>$43.00</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' w-[210px] h-[360px] ml -14'>
                            <div>
                                <div>
                                    <div>
                                        <img src="/Rectangle131.png" alt="" className='w-[210px] h-[250px]' />
                                    </div>
                                    <div className='text-[#151875] mx-1 '>
                                        <div className='flex justify-between items-center  '>
                                            <h2 className='text-[14px] py-2'>Mens Fashion Wear</h2>
                                            <h2>
                                                <div className='flex items-center gap-[2px]'>
                                                    <img src="/Vector(2).png" alt="" width={9} height={10} />
                                                    <img src="/Vector(2).png" alt="" width={9} height={10} />
                                                    <img src="/Vector(2).png" alt="" width={9} height={10} />
                                                    <img src="/Vector(3).png" alt="" width={9} height={10} />
                                                    <img src="/Vector(3).png" alt="" width={9} height={10} />
                                                </div>
                                            </h2>
                                        </div>
                                        <div className='text-[13px]'>
                                            <h2 className='text-[12px]'>$43.00</h2>
                                        </div>
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

export default ProductDetails