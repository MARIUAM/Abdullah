import Image from 'next/image';  // next/image کمپوننٹ کو ایمپورٹ کریں
import React from 'react'
import BlogB from '../Blog/blog-b';
import Link from 'next/link';

const LeatestBlogHome = () => {
    return (
        <div>
            <div>
                <div className=' flex justify-center items-center'>
                    <div className=' absolute  mt-14'>
                        <h2 className=' flex justify-center items-center text-center  h-14 w-140 text-[25px]     text-[#151875]'>Get Leatest Update By Subscribe
                            <br /> 0ur Newslater</h2>
                        <div className='flex justify-center py-5'>
                            <button className='w-[110px] h-[35px] bg-[#FB2E86] text-white'> <Link href="/components/page2">Shop Now</Link></button>
                        </div>
                    </div>
                    <Image src="/Rectangle102.png" alt="" width={10000} height={1000} className=' w-[1263px] h-[450px] ' />

                </div>

                <div>
                    <BlogB/>
                </div>

                {/* <div className='flex justify-center'>
                    <div className=' flex justify-center items-center w-[700px] h-[200px]'>
                        <Image src="/image174.png" alt="" width={1000} height={100} className='flex justify-center w-[650px] h-[100px]'/>
                    </div>
                </div> */}


            </div>

        </div>
    )
}

export default LeatestBlogHome