import Link from 'next/link';
import React from 'react'



type ProductProps = {
  // id: number,
  name: string;
  url: string;
  // title: string;
  price: string;
  description: string;


};

// export const FeaturedProducts = ({ name, url, price, description }: ProductProps) => {
export const FeaturedProducts = ({ name, url, price, description, }: ProductProps) => {
  return (
    <div>

      {/* <div> */}
      {/* <div className="product"> */}
      {/* <img src={url} alt={name} className="product-image" /> */}
      {/* <h2>{name}</h2> */}
      {/* <p>{price}</p> */}
      {/* <p>{taitel}</p> */}
      {/* <p>{description}</p> */}
      {/* <button className="add-to-cart">Add to Cart</button>
      </div> */}








      {/* <div className="w-[1024] max-w-screen-xl justify-center items-center  mx-auto "> */}
      {/* <div className="w-[10]  ">
        <div className='flex flex-col justify-center items-center w-14   '> */}
      {/* <div className='pt-14 pb-5'>
            <h2>Featured Products</h2>
          </div> */}
      {/* <div className='flex justify-center gap-0 '>
            <div className='w-[200px] h-[290px] items-center text-center border shadow-md hover:bg-blue-500'>
              <div className='bg-[#F6F7FB] w-[200px] h-[175px] flex justify-center items-end pb-1'>
                <img src={url} alt="" className='w-[150] h-36 flex items-center text-center ' />
              </div>
              <h2 className='text-[#FB2E86] text-[18px] pt-2 '>{name}</h2>
              <div className='flex gap-1.5 py-1 justify-center items-center text-center'>
                <h3 className='bg-[#05E6B7] w-4 h-1 rounded-md ' />
                <h3 className='bg-[#F701Ab] w-4 h-1 rounded-md' />
                <h3 className='bg-[#00009D] w-4 h-1 rounded-md ' />
              </div>
              <div className='text-[#151875] text-[14px] py-1.5  '>
                <h2>{description}</h2>
                <h2 className='py-1.5'>{price}</h2>
              </div>
            </div>
          </div> */}
      {/* </div>
      </div> */}



      <div className='flex justify-center   '>
        <div className='w-[200px] h-[290px] items-center text-center border shadow-md hover:bg-blue-500'>
          <div className='bg-[#F6F7FB] w-[200px] h-[175px] flex justify-center items-end pb-1'>
            {/* <img src={url} alt="" className='w-[150] h-36 flex items-center text-center ' /> */}
            <Link href="/components/Products">
              <img src={url} alt="" className='w-[150] h-36 flex items-center text-center ' />
            </Link>
          </div>
          <h2 className='text-[#FB2E86] text-[18px] pt-2 '>{name}</h2>
          <div className='flex gap-1.5 py-1 justify-center items-center text-center'>
            <h3 className='bg-[#05E6B7] w-4 h-1 rounded-md ' />
            <h3 className='bg-[#F701Ab] w-4 h-1 rounded-md' />
            <h3 className='bg-[#00009D] w-4 h-1 rounded-md ' />
          </div>
          <div className='text-[#151875] text-[14px] py-1.5  '>
            <h2>{description}</h2>
            <h2 className='py-1.5'>{price}</h2>
          </div>
        </div>
      </div>


    </div>
  );
};
