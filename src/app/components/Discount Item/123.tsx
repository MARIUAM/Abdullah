// import React from 'react'
// // import Image from 'next/image';   // next/image کمپوننٹ کو ایمپورٹ کریں

// const A123 = () => {
//     return (
//         <div className='py-[90px]'>
//             <div className='flex justify-center items-center'>
//                     <h2 className='flex justify-center text-[30px] font-bold text-[#151875]'>Top Categories</h2>
//                 </div>
//             <div className='flex  justify-center gap-10    '>



//                 <div className='flex md:flex-row flex-col justify-center items-center  gap-7'>
//                     <div className="flex w-[210px] h-[270px] justify-center pt-2.5 my-[30px]">
//                         <div className="text-[#151875]">
//                             <div className="w-[225px] h-[225px] rounded-full group relative hover:bg-[#9877E7] flex justify-center items-center z-0">
//                                 <div className="w-[225px] h-[225px] rounded-full bg-[#F5F6F8] absolute z-10 ml-2.5 mb-2.5" />

//                                 <div className="z-50 pt-7 justify-center flex flex-col items-center">
//                                     <div className="h-[150px]">
//                                         <img src="icon/image 1171.png" alt="cher" className="hover:w-[160px] w-[140px] z-20" />
//                                     </div>

//                                     {/* <!-- B Button Visibility on Hover --> */}
//                                     <div className="w-[100px] h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                                         <button className="bg-green-500 w-[90px] flex justify-center items-center h-7 text-white rounded-sm text-[14px] hover:text-[15px] ml-2.5">
//                                             View Shop
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="py-2">
//                                 <h2 className="flex justify-center items-center text-[17px] font-semibold">Cantilever chair</h2>
//                                 <div className="flex justify-center items-center gap-3">
//                                     <h2 className="text-[14px]">$26.00</h2>
//                                     <h2 className="text-[13px] text-[#1518754D]">$42.00</h2>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>


//                     <div className="flex w-[210px] h-[270px] justify-center pt-2.5 my-[30px]">
//                         <div className="text-[#151875]">
//                             <div className="w-[225px] h-[225px] rounded-full group relative hover:bg-[#9877E7] flex justify-center items-center z-0">
//                                 <div className="w-[225px] h-[225px] rounded-full bg-[#F5F6F8] absolute z-10 ml-2.5 mb-2.5" />

//                                 <div className="z-50 pt-7 justify-center flex flex-col items-center">
//                                     <div className="h-[150px]">
//                                         <img src="icon/image 1171.png" alt="cher" className="hover:w-[160px] w-[140px] z-20" />
//                                     </div>


//                                     <div className="w-[100px] h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                                         <button className="bg-green-500 w-[90px] flex justify-center items-center h-7 text-white rounded-sm text-[14px] hover:text-[15px] ml-2.5">
//                                             View Shop
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="py-2">
//                                 <h2 className="flex justify-center items-center text-[17px] font-semibold">Cantilever chair</h2>
//                                 <div className="flex justify-center items-center gap-3">
//                                     <h2 className="text-[14px]">$26.00</h2>
//                                     <h2 className="text-[13px] text-[#1518754D]">$42.00</h2>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>


//                     <div className="flex w-[210px] h-[270px] justify-center pt-2.5 my-[30]">
//                         <div className="text-[#151875]">
//                             <div className="w-[225px] h-[225px] rounded-full group relative hover:bg-[#9877E7] flex justify-center items-center z-0">
//                                 <div className="w-[225px] h-[225px] rounded-full bg-[#F5F6F8] absolute z-10 ml-2.5 mb-2.5" />

//                                 <div className="z-50 pt-7 justify-center flex flex-col items-center">
//                                     <div className="h-[150px]">
//                                         <img src="icon/image 1171.png" alt="" className="hover:w-[160px] w-[140px] z-20" />
//                                     </div>


//                                     <div className="w-[100px] h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                                         <button className="bg-green-500 w-[90px] flex justify-center items-center h-7 text-white rounded-sm text-[14px] hover:text-[15px] ml-2.5">
//                                             View Shop
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="py-2">
//                                 <h2 className="flex justify-center items-center text-[17px] font-semibold">Cantilever chair</h2>
//                                 <div className="flex justify-center items-center gap-3">
//                                     <h2 className="text-[14px]">$26.00</h2>
//                                     <h2 className="text-[13px] text-[#1518754D]">$42.00</h2>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>


//                     <div className="flex w-[210px] h-[270px] justify-center pt-2.5 my-[30]">
//                         <div className="text-[#151875]">
//                             <div className="w-[225px] h-[225px] rounded-full group relative hover:bg-[#9877E7] flex justify-center items-center z-0">
//                                 <div className="w-[225px] h-[225px] rounded-full bg-[#F5F6F8] absolute z-10 ml-2.5 mb-2.5" />

//                                 <div className="z-50 pt-7 justify-center flex flex-col items-center">
//                                     <div className="h-[150px]">
//                                         <img src="icon/image 1171.png" alt="" className="hover:w-[160px] w-[140px] z-20" />
//                                     </div>


//                                     <div className="w-[100px] h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                                         <button className="bg-green-500 w-[90px] flex justify-center items-center h-7 text-white rounded-sm text-[14px] hover:text-[15px] ml-2.5">
//                                             View Shop
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="py-2">
//                                 <h2 className="flex justify-center items-center text-[17px] font-semibold">Cantilever chair</h2>
//                                 <div className="flex justify-center items-center gap-3">
//                                     <h2 className="text-[14px]">$26.00</h2>
//                                     <h2 className="text-[13px] text-[#1518754D]">$42.00</h2>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>


//             </div>
//         </div>


//     )
// }

// export default A123



























import { client } from '@/sanity/lib/client';

import React, { useEffect, useState } from 'react';

interface Ibooks {
    _id: string;
    name: string;
    price: number;
    description: string;
    discountPercentage: number;
    stockLevel: number;
    category: string;
    imageUrl: string;
    slug: { current: string };
}

const LeatestProducts: React.FC = () => {
    const [products, setProducts] = useState<Ibooks[]>([]);

    // Fetch data when the component mounts
    useEffect(() => {
        const fetchProducts = async () => {
            const res: Ibooks[] = await client.fetch(`*[_type == "product" && isFeaturedProduct == true][1..4] {
                    _id,
                    name,
                    price,
                    description,
                    discountPercentage,
                    stockLevel,
                    category,
                    slug { current },
                    "imageUrl": image.asset->url  
                }`);
            setProducts(res);
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <div className=' my-14'>
                <div ><h2 className='text-[33px] font-semibold flex justify-center '>Trending Products</h2></div>
                <div className='flex  justify-center pt-5 gap-4'>

                    {/* {products.map((data) => { */}
                    {products.map((product) => (
                        <div key={product._id} className='flex  md:flex-row flex-col  gap- 5 justify-center py-10 mx- 14'>


                            <div className="flex w-[210px] h-[270px] justify-center pt-2.5 my-[30px]">
                                <div className="text-[#151875]">
                                    <div className="w-[225px] h-[225px] rounded-full group relative hover:bg-[#9877E7] flex justify-center items-center z-0">
                                        <div className="w-[225px] h-[225px] rounded-full bg-[#F5F6F8] absolute z-10 ml-2.5 mb-2.5" />

                                        <div className="z-50 pt-7 justify-center flex flex-col items-center">
                                            <div className="h-[150px]">
                                                <img src={product.imageUrl} alt="cher" className="hover:w-[160px] w-[140px] z-20" />
                                            </div>

                                            {/* <!-- B Button Visibility on Hover --> */}
                                            <div className="w-[100px] h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <button className="bg-green-500 w-[90px] flex justify-center items-center h-7 text-white rounded-sm text-[14px] hover:text-[15px] ml-2.5">
                                                    View Shop
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="py-2">
                                        <h2 className="flex justify-center items-center text-[15px] font-semibold">{product.name}</h2>
                                        <div className="flex justify-center items-center gap-3">
                                            <h2 className="text-[14px]">{((product.price * (1 + product.discountPercentage / 100)) || 0).toFixed(2)} </h2>
                                            <h2 className="text-[13px] text-[#1518754D]">{product.price}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    ))}






                </div>
            </div>

            {/* sakind  */}
            <div className='flex gap-4 justify-center  items-center w-[1263px] h- [340px]'>
                <div className='bg-[#FFFfFB]   w-[325px] h-[250px]  my-10'>
                    <div className=' flex  my'>
                        <div className='w-[220px] h-[55px] pl-4 mt-4'>
                            <h2 className='text-[19px] text-[#151875]'>23% off in all products</h2>
                            <h2 className='text-[15px] text-[#FB2E86] border-b border-[#FB2E86] mr-[130px]'>Shop Now</h2>
                        </div>
                    </div>
                    <div className=' mt- flex ml-[120px] py-0 '>
                        <img src="icon/image 1162.png" alt="" className='w-[200px] h-[190px]' />
                    </div>
                </div>
                <div className='bg-[#FFF6FB]   w-[325px] h-[250px]  my-10'>
                    <div className=' flex  my'>
                        <div className='w-[220px] h-[55px] pl-4 mt-4'>
                            <h2 className='text-[19px] text-[#151875]'>23% off in all products</h2>
                            <h2 className='text-[15px] text-[#FB2E86] border-b border-[#FB2E86] mr-[130px]'>Shop Now</h2>
                        </div>
                    </div>
                    <div className=' mt- flex ml-[120px] py-0 '>
                        <img src="icon/image 1162.png" alt="" className='w-[200px] h-[190px]' />
                    </div>
                </div>



                <div className='flex flex-col gap-2 w-[215px] h-[250px]'>


                    <div>
                        {/* <SidBer /> */}
                    </div>





                </div>


            </div>
        </div>
    );
};

export default LeatestProducts;
