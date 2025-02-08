import React from 'react'
import Image from 'next/image';  // next/image کمپوننٹ کو ایمپورٹ کریں

const DiscountItemHome = () => {
    return (
        <div>

            <div className='flex flex-col '>
                <div>
                    <nav className=''>
                        <h2 className='flex justify-center py-5 text-[30px] text-[#151875] font-bold'>Discount Item</h2>
                        <ul className='flex justify-center items-center text-center gap-9 text-sm text-[#151875]  '>
                            
                            <li className=' hover:border-b-2 border-[#FB4997] hover:text-[#FB2E86]'><a href="">Wood Chair</a></li>
                            <li className=' hover:border-b-2 border-[#FB4997] hover:text-[#FB2E86]'><a href="">Plastic Chair</a></li>
                            <li className=' hover:border-b-2 border-[#FB4997] hover:text-[#FB2E86]'><a href="">Sofa Colletion</a></li>
                        </ul>
                    </nav>
                </div>
                <div className='flex items-center bg-[#F2F0FF] h-[490px] justify-center   w-[1263px] max-w-screen-xl  mt-[30px]  mx-auto'>


                    <div>
                        <div className='flex justify-center mt-  '>
                            <div>

                                <h2 className='text-[30px] text-[#3F509E] font-bold'>20% Discount Of All Products</h2>
                                <h2 className='text-[14px] text-[#FB2E86] pt-5'>Eams Sofa Compact</h2>
                                <div className='pt-9 '>
                                    <h2 className='text-[13px] text-[#B7BACB] pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget <br /> feugiat habitasse nec, bibendum condimentum.</h2>
                                    <div className='flex gap-6'>
                                        <div>
                                            <div className='flex gap-2 h-7   '>
                                                <div className='mt-1.5 w-2 h-2 bg-[#7569B2] rounded-3xl' />
                                                <h2 className='text-[13px] text-[#B8B8DC]  '>✓ Material expose like metals</h2>
                                            </div>
                                            <div className='flex gap-2 h-7   '>
                                                <div className='mt-1.5 w-2 h-2 bg-[#7569B2] rounded-3xl' />
                                                <h2 className='text-[13px] text-[#B8B8DC] '>✓ Material expose like metals</h2>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex gap-2 h-7   '>
                                                <div className='mt-1.5 w-2 h-2 bg-[#7569B2] rounded-3xl' />
                                                <h2 className='text-[13px] text-[#B8B8DC]  '>✓ Clear lines and geomatric figures</h2>
                                            </div>
                                            <div className='flex gap-2 h-7   '>
                                                <div className='mt-1.5 w-2 h-2 bg-[#7569B2] rounded-3xl' />
                                                <h2 className='text-[13px] text-[#B8B8DC]  '>✓ Material expose like metals</h2>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className='pt-5'>
                                    <button className='  w-[140px] h-10 text-white bg-[#FB2E86] text-[11px]'>Shop Now</button>
                                    </div>
                                </div>

                            </div>
                            

                            <div className='flex  mr-[430px]   ' >
                                <div className='bg-[#ECD2FA59] w-[350px] h-[360px] rounded-[410px] ml-11 absolute  z-0  ' />
                                {/* <div className='bg-[#ECD2FA59] w-[350] h-[360] rounded-[410] mt-[50] absolute   z-10 ' /> */}
                                <div className='  ml-5 mt-1  absolute z-20'>
                                    <Image src="/tortuga-01.png" alt="" width={390} height={200} className='flex' />
                                </div>


                            </div>
                        </div>
                    </div>










                    

                </div>
            </div>
        </div>
    )
}

export default DiscountItemHome