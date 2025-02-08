import React from 'react'

// export default function Product (props) {
//     return (
//         <div>
//             <div>
//                 <div className='flex mx-5 flex-col justify-center bg-purple-400 items-center '>
//                     <img src="{props.url}" alt="" className='w-48' />
//                     <h2>{props.name}</h2>
//                     <p className='price'>{props.price}</p>
//                     <p>{props.decscription}</p>
//                     <button className='w-full bg-slate-500 text-yellow-300' >Add to Cart</button>
//                 </div>

//             </div>
//         </div>
//     )
// }

type ProductProps = {
    name: string;
    url: string;
    price: string;
    description: string;
};

export const Producttop = ({ name, url, price, description }: ProductProps) => {
    return (
        <div className="product">
            <img src={url} alt={name} className="product-image" />
            <h2>{name}</h2>
            <p>{price}</p>
            <p>{description}</p>
            <button className="add-to-cart">Add to Cart</button>



            <div>
      <div className='flex bg-[#F2F0FF] h-[450]   w-[1263] max-w-screen-xl   mx-auto'>

        <div><img src="icon/image 32.png" alt="" className='w-[260]' /></div>

        <div className='flex gap-[]'>
          <div className='flex flex-col mr- justify-center w-[520]   '>
            <h2 className='text-[14px] text-[#FB2E86]'>Best Furniture For Your Castle....</h2>
            <h2 className='text-[44px] text-black font-bold'>New Furniture Collection Trends in 2020</h2>
            <h2 className='text-[13px] text-[#8A8FB9] w-[456] h-14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing  in phasellus non in justo.</h2>
            <button className='w-[140] h-10 text-white bg-[#FB2E86]'>Shop Now</button>
          </div>

          <div className='flex items-center mr-14 ' >
            <div className='bg-[#ECD2FA59] w-[400] h-[410] rounded-[410] ml-11 absolute  z-0  ' />
            <div className='bg-[#ECD2FA59] w-[400] h-[410] rounded-[410] mt-[50] absolute   z-10 ' />
            <div className='   ml- mt-14  absolute z-20'>
              <img src="icon/Armchair-Fabric 1.png" alt="" width={380}  className='' />
            </div>
            {/* <div className='bg-[#00C1FE] w-[100] h-[100] rounded-[410] ml-[300] mb-[300] z-30 m   ' /> */}
            <div className='bg-[#00C1FE] w-[100] h-[100] rounded-[410] ml-[300] mb-[300] z-30 m    '> <h2 className='flex justify-center mt-5 text-white text-2xl font-semibold text-center'>50% <br />off</h2></div>
          </div>
        </div>

      </div>
    </div>





        </div>
    );
};
