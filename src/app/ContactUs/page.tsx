

'use client';
import React from 'react'
import Nave1 from '../components/Nave Botem/Nave1'
import Gatin from '../components/GetInTouch/gat in to';
import BlogB from '../components/Blog/blog-b';
import Botem from '../components/Nave Botem/Botem';

const Contact = () => {
  return (
    <div>
      <div>
        <div>
          <Nave1 />
        </div>
        <div className='max-w-screen-xl  items-center  md:w-[1263px] md:h-[1000px] x-auto'>
          <div className=' bg-[#F6F5FF] w-[1263px] h-[140px] '>
            <div className=' flex flex-col  pl-[185px] pt-[33px]   '>
              <h2 className='text-[#101750] text-[30px] font-bold'>Shop Grid Default </h2>
              <div className='flex text-[14px]'>
                <h2>Home . Pages </h2>
                <h2 className='text-[#FB2E86] '>. Shop Grid Default</h2>
              </div>
            </div>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <div className='flex  md:flex-row flex-col mt-14'>
              <div className=' md:w-[500px]'>
                <h2 className='text-[30px] text-[#151875] font-semibold mb-2'>Information About us</h2>
                <p className='text-[14px] text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices
                  mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae
                  eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                <div className='flex  mt-4 gap-1.5'>
                  <div className='w-4 h-4 bg-[#5625DF] rounded-full' />
                  <div className='w-4 h-4 bg-[#FF27B7] rounded-full' />
                  <div className='w-4 h-4 bg-[#37DAF3] rounded-full' />
                </div>
              </div>
              <div>
                <div>
                  <h2 className='text-[30px] text-[#151875] font-semibold mb-2'>Contact Way</h2>
                </div>
                <div className='flex  md:flex-row flex-col gap-6 '>
                  <div>
                    <div className='flex items-center gap-3'>
                      <div className='w-6 h-6 bg-[#37DAF3] rounded-full' />
                      <h2 className='text-[14px] text-[#8A8FB9]'>Tel: 877-67-88-99 <br /> E-Mail: Abdullah@store.com</h2>
                    </div>
                    <div className='flex items-center gap-3'>
                      <div className='w-6 h-6 bg-[#FB2E86] rounded-full' />
                      <h2 className='text-[14px] text-[#8A8FB9]'>Support Forum <br /> For over 24hr</h2>
                    </div>
                  </div>
                  <div className=''>
                    <div className='flex items-center gap-3'>
                      <div className='w-6 h-6 bg-[#FFB265] rounded-full' />
                      <h2 className='text-[14px] text-[#8A8FB9]'>20 Margaret st, London <br />Great britain, 3NM98-LK</h2>
                    </div>
                    <div className='flex items-center gap-3'>
                      <div className='w-6 h-6 bg-[#1BE982] rounded-full' />
                      <h2 className='text-[14px] text-[#8A8FB9] '>Free standard shipping <br /> on all orders.</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className='flex md:flex-row flex-col-reverse mt-[130px]'>
              <div>
                <div>
                  <h2 className='text-[30px] text-[#151875] font-semibold'>Get In Touch</h2>
                  <p className='text-[14px] text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices <br />
                    tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
                </div>
                <div>
                  <Gatin />
                </div>
              </div>
              <div>
                <div className='mt-2 '>
                  <img src="/Group124.png" alt="" className='w-[490px]  h-[450px] ' />
                </div>
              </div>
            </div>
          </div>



        </div>
        <div>
          <BlogB />
          <Botem />
        </div>
      </div>
    </div>
  )
}

export default Contact