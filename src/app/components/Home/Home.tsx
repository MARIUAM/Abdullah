import Image from 'next/image'
import React from 'react'

const Home5 = () => {
  return (
    <div>
      <div className='flex bg-[#F2F0FF] h-[450]   w-[1263] max-w-screen-xl   mx-auto'>

        <div><Image src="icon/image 32.png" alt="" className='w-[260] h-[100]' /></div>

        <div className='flex gap-[]'>
          <div className='flex flex-col mr- justify-center w-[520]   '>
            <h2 className='text-[14px] text-[#FB2E86]'>Best Furniture For Your Castle....</h2>
            <h2 className='text-[44px] text-black font-bold'>New Furniture Collection Trends in 2020</h2>
            <h2 className='text-[13px] text-[#8A8FB9] w-[456] h-14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing  in phasellus non in justo.</h2>
            <button  className='w-[140] h-10 text-white bg-[#FB2E86]'> Shop Now</button>
          </div>

          <div className='flex items-center mr-14 ' >
            <div className='bg-[#ECD2FA59] w-[400] h-[410] rounded-[410] ml-11 absolute  z-0  ' />
            <div className='bg-[#ECD2FA59] w-[400] h-[410] rounded-[410] mt-[50] absolute   z-10 ' />
            <div className='   ml- mt-14  absolute z-20'>
              <Image src="icon/Armchair-Fabric 1.png" alt="" width={380} className='' />
            </div>
            {/* <div className='bg-[#00C1FE] w-[100] h-[100] rounded-[410] ml-[300] mb-[300] z-30 m   ' /> */}
            <div className='bg-[#00C1FE] w-[100] h-[100] rounded-[410] ml-[300] mb-[300] z-30 m    '> <h2 className='flex justify-center mt-5 text-white text-2xl font-semibold text-center'>50% <br />off</h2></div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Home5