// import Link from 'next/link'
// import React from 'react'

// export default function LeatestProducts() {
//     return (
//         <div className='w-[1024px] max-w-screen-xl justify-center items-center  mx-auto pb-9 pt-[80px]'>
//             <div>
//                 <h2 className='flex justify-center text-[#151875] text-[33px] font-semibold py-2 '>Leatest Products</h2>
//             </div>
//             <div>
//                 <nav> 
//                     <ul className='flex justify-center items-center text-center gap-9 text-sm text-[#151875] h-5 '>
//                         <li className=' hover:border-b-2 border-[#FB4997] hover:text-[#FB2E86]'><Link href="/LeatestProducts">Leatest Products</Link></li>
//                         <li className=' hover:border-b-2 border-[#FB4997] hover:text-[#FB2E86]'><Link href="/BestSeller">Best Seller  </Link></li>
//                         <li className=' hover:border-b-2 border-[#FB4997] hover:text-[#FB2E86]'><Link href="/Featured">Featured     </Link></li>
//                         <li className=' hover:border-b-2 border-[#FB4997] hover:text-[#FB2E86]'><Link href="/SpecialOffer">Special Offer</Link></li>
//                     </ul>
//                 </nav>
//             </div>
//             <div className='flex  md:flex-row flex-col  gap-7 justify-center py-10 px-'>

//                 <div className='flex justify-center gap-5 w-[]'>
//                     <div className='bg-white'>
//                         <div className='flex flex-col    bg-[#F7F7F7] w-[275px] h-[200px] '>
//                             <div className=' justify-center flex items-center    '>
//                                 <img src="icon/image1166.png" alt="" className='w-[150px] h-[190px] pt-8  ' />
//                             </div>
//                         </div>
//                         <div className='flex justify-between bg-white  py-1  text-xs'>
//                             <div><h2 className='flex border-b-2  '>Comfort Handy Craft</h2></div>
//                             <div className=' flex  '>
//                                 <h2 className='pr-3 hover:text-sm'>$42.00</h2>
//                                 <h2 className='text-red-500 line-through'>$65.00</h2>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='flex justify-center gap-5 w-[]'>
//                     <div className='bg-white'>
//                         <div className='flex flex-col    bg-[#F7F7F7] w-[275px] h-[200px] '>
//                             <div className=' justify-center flex items-center    '>
//                                 <img src="icon/image1166.png" alt="" className='w-[150px] h-[190px] pt-8  ' />
//                             </div>
//                         </div>
//                         <div className='flex justify-between bg-white  py-1  text-xs'>
//                             <div><h2 className='flex border-b-2  '>Comfort Handy Craft</h2></div>
//                             <div className=' flex  '>
//                                 <h2 className='pr-3 hover:text-sm'>$42.00</h2>
//                                 <h2 className='text-red-500 line-through'>$65.00</h2>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='flex justify-center gap-5 w-[]'>
//                     <div className='bg-white'>
//                         <div className='flex flex-col    bg-[#F7F7F7] w-[275px] h-[200px] '>
//                             <div className=' justify-center flex items-center    '>
//                                 <img src="icon/image1166.png" alt="" className='w-[150px] h-[190px] pt-8  ' />
//                             </div>
//                         </div>
//                         <div className='flex justify-between bg-white  py-1  text-xs'>
//                             <div><h2 className='flex border-b-2  '>Comfort Handy Craft</h2></div>
//                             <div className=' flex  '>
//                                 <h2 className='pr-3 hover:text-sm'>$42.00</h2>
//                                 <h2 className='text-red-500 line-through'>$65.00</h2>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className='flex  md:flex-row flex-col gap-7 justify-center py-10 px-'>

//                 <div className='flex justify-center gap-5 w-[]'>
//                     <div className='bg-white'>
//                         <div className='flex flex-col    bg-[#F7F7F7] w-[275px] h-[200px] '>
//                             <div className=' justify-center flex items-center    '>
//                                 <img src="icon/image1166.png" alt="" className='w-[150px] h-[190px] pt-8  ' />
//                             </div>
//                         </div>
//                         <div className='flex justify-between bg-white  py-1  text-xs'>
//                             <div><h2 className='flex border-b-2  '>Comfort Handy Craft</h2></div>
//                             <div className=' flex  '>
//                                 <h2 className='pr-3 hover:text-sm'>$42.00</h2>
//                                 <h2 className='text-red-500 line-through'>$65.00</h2>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='flex justify-center gap-5 w-[]'>
//                     <div className='bg-white'>
//                         <div className='flex flex-col    bg-[#F7F7F7] w-[275px] h-[200px] '>
//                             <div className=' justify-center flex items-center    '>
//                                 <img src="icon/image1166.png" alt="" className='w-[150px] h-[190px] pt-8  ' />
//                             </div>
//                         </div>
//                         <div className='flex justify-between bg-white  py-1  text-xs'>
//                             <div><h2 className='flex border-b-2  '>Comfort Handy Craft</h2></div>
//                             <div className=' flex  '>
//                                 <h2 className='pr-3 hover:text-sm'>$42.00</h2>
//                                 <h2 className='text-red-500 line-through'>$65.00</h2>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='flex justify-center gap-5 w-[]'>
//                     <div className='bg-white'>
//                         <div className='flex flex-col    bg-[#F7F7F7] w-[275px] h-[200px] '>
//                             <div className=' justify-center flex items-center    '>
//                                 <img src="icon/image1166.png" alt="" className='w-[150px] h-[190px] pt-8  ' />
//                             </div>
//                         </div>
//                         <div className='flex justify-between bg-white  py-1  text-xs'>
//                             <div><h2 className='flex border-b-2  '>Comfort Handy Craft</h2></div>
//                             <div className=' flex  '>
//                                 <h2 className='pr-3 hover:text-sm'>$42.00</h2>
//                                 <h2 className='text-red-500 line-through'>$65.00</h2>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>



//         </div>

//     )
// }
























// import Link from 'next/link'
// import React from 'react'
// import { client } from '@/sanity/lib/client'
// import product from '@/sanity/schemaTypes/product';
// import ProductDetails from '../page3/Product Details';

// interface Ibooks {
//     _id: string;
//     name: string;
//     price: number;
//     description: string;
//     discountPercentage: number;
//     stockLevel: number;
//     category: string;
//     imageUrl: string; // Corrected image URL
//     slug: { current: string };
// }

// export default async function LeatestProducts() {
//     // Fetching 6 featured products, limiting the results to items 2 to 7.
//     let res: Ibooks[] = await client.fetch(`*[_type == "product" && isFeaturedProduct == true][0..5] {
//       _id,
//       name,
//       price,
//       description,
//       discountPercentage,
//       stockLevel,
//       category,
//       slug { current },
//       "imageUrl": image.asset->url  
//     }`)
//     // console.log(res);

//     console.log(res);


//     return (
//         <div>
//             {/* <div className="w-[1024px] max-w-screen-xl justify-center items-center mx-auto pb-9 pt-[80px]"> */}
//                 <div className='w-[1024px] max-w-screen-xl justify-center items-center  mx-auto pb-9 pt-[80px]'>
//                 <div>
//                     <h2 className="flex justify-center text-[#151875] text-[33px] font-semibold py-2">Latest Products</h2>
//                 </div>
//                 <div>
//                     <nav>
//                         <ul className="flex justify-center items-center text-center gap-9 text-sm text-[#151875] h-5">
//                             <li className="hover:border-b-2 border-[#FB4997] hover:text-[#FB2E86]">
//                                 <Link href="/LatestProducts">Latest Products</Link>
//                             </li>
//                             <li className="hover:border-b-2 border-[#FB4997] hover:text-[#FB2E86]">
//                                 <Link href="/BestSeller">Best Seller</Link>
//                             </li>
//                             <li className="hover:border-b-2 border-[#FB4997] hover:text-[#FB2E86]">
//                                 <Link href="/Featured">Featured</Link>
//                             </li>
//                             <li className="hover:border-b-2 border-[#FB4997] hover:text-[#FB2E86]">
//                                 <Link href="/SpecialOffer">Special Offer</Link>
//                             </li>
//                         </ul>
//                     </nav>
//                 </div>

//                 {/* Grid for Latest Products with 2 rows and 3 columns */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 justify-center">
//                     {res.map((data) => {
//                         return (


//                             <div key={data._id} className='flex  md:flex-row flex-col  gap- 5 justify-center py-10 mx- 14'>

//                                 <div className='flex justify-center gap- 5 '>
//                                     <div className='bg-white '>

//                                     <Link href={`/product/${data.slug?.current || ''}`}>
//                                             <div className='flex flex-col    bg-[#F7F7F7] w-[275px] h-[200px] '>
//                                                 <div className=' justify-center flex items-center    '>
//                                                     <img src={data.imageUrl} alt="" className='w-[150px] h-[190px] pt-8  ' />
//                                                 </div>
//                                             </div>
//                                         </Link>
//                                         <div className='flex justify-between bg-white  py-1  text-xs'>
//                                             <div><h2 className='flex border-b-2 w-[150px]  '> {data.name} </h2></div>
//                                             <div className=' flex  '>

//                                                 <h2 className='text-red-500 line-through'>  {((data.price * (1 + data.discountPercentage / 100)) || 0).toFixed(2)}  </h2>
//                                                 <h2 className='pr-1 hover:text-sm '>  {data.price} </h2>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>
//         </div>
//     );
// }


















// import { client } from '@/sanity/lib/client';
// import Link from 'next/link'
// import React from 'react'

// interface Ibooks {
//     _id: string;
//     name: string;
//     price: number;
//     description: string;
//     discountPercentage: number;
//     stockLevel: number;
//     category: string;
//     imageUrl: string;
//     slug: { current: string };
// }

// interface ProductCardProps {
//     product: Ibooks;
// }

// // export default async function LeatestProducts() {

//     // let res: Ibooks[] = await client.fetch(`*[_type == "product" && isFeaturedProduct == true][0..2] {
//     //         _id,
//     //         name,
//     //         price,
//     //         description,
//     //         discountPercentage,
//     //         stockLevel,
//     //         category,
//     //         slug { current },
//     //         "imageUrl": image.asset->url  
//     //     }`);



//     const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

//     return (
//         <div className='w-[1024px] max-w-screen-xl justify-center items-center  mx-auto pb-9 pt-[80px]'>
//             <div>
//                 <h2 className='flex justify-center text-[#151875] text-[33px] font-semibold py-2 '>Leatest Products</h2>
//             </div>
//             <div>
//                 <nav>
//                     <ul className='flex justify-center items-center text-center gap-9 text-sm text-[#151875] h-5 '>
//                         <li className=' hover:border-b-2 border-[#FB4997] hover:text-[#FB2E86]'><Link href="/LeatestProducts">Leatest Products</Link></li>
//                         <li className=' hover:border-b-2 border-[#FB4997] hover:text-[#FB2E86]'><Link href="/BestSeller">Best Seller  </Link></li>
//                         <li className=' hover:border-b-2 border-[#FB4997] hover:text-[#FB2E86]'><Link href="/Featured">Featured     </Link></li>
//                         <li className=' hover:border-b-2 border-[#FB4997] hover:text-[#FB2E86]'><Link href="/SpecialOffer">Special Offer</Link></li>
//                     </ul>
//                 </nav>
//             </div>
//             <div className='flex  md:flex-row flex-col  gap-7 justify-center py-10 px-'>


//                 <>
//                     {res.map((data) => {
//                         return (
//                             <div key={data._id} className='flex  md:flex-row flex-col  gap- 5 justify-center py-10 mx- 14'>

//                                 <div className='flex justify-center gap- 5 '>
//                                     <div className='bg-white '>
//                                         <div className='flex flex-col    bg-[#F7F7F7] w-[275px] h-[200px] '>
//                                             <div className=' justify-center flex items-center    '>
//                                                 <img src={data.imageUrl} alt="" className='w-[150px] h-[190px] pt-8  ' />
//                                             </div>
//                                         </div>
//                                         <div className='flex justify-between bg-white  py-1  text-xs'>
//                                             <div><h2 className='flex border-b-2 w-[150px]  '> {data.name} </h2></div>
//                                             <div className=' flex  '>
//                                                 <h2 className='text-red-500 line-through'>  {((data.price * (1 + data.discountPercentage / 100)) || 0).toFixed(2)}  </h2>
//                                                 <h2 className='pr-1 hover:text-sm '>  {data.price} </h2>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </>




//                 {/* <div className='flex justify-center gap-5 w-[]'>
//                     <div className='bg-white'>
//                         <div className='flex flex-col    bg-[#F7F7F7] w-[275px] h-[200px] '>
//                             <div className=' justify-center flex items-center    '>
//                                 <img src="icon/image1166.png" alt="" className='w-[150px] h-[190px] pt-8  ' />
//                             </div>
//                         </div>
//                         <div className='flex justify-between bg-white  py-1  text-xs'>
//                             <div><h2 className='flex border-b-2  '>Comfort Handy Craft</h2></div>
//                             <div className=' flex  '>
//                                 <h2 className='pr-3 hover:text-sm'>$42.00</h2>
//                                 <h2 className='text-red-500 line-through'>$65.00</h2>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='flex justify-center gap-5 w-[]'>
//                     <div className='bg-white'>
//                         <div className='flex flex-col    bg-[#F7F7F7] w-[275px] h-[200px] '>
//                             <div className=' justify-center flex items-center    '>
//                                 <img src="icon/image1166.png" alt="" className='w-[150px] h-[190px] pt-8  ' />
//                             </div>
//                         </div>
//                         <div className='flex justify-between bg-white  py-1  text-xs'>
//                             <div><h2 className='flex border-b-2  '>Comfort Handy Craft</h2></div>
//                             <div className=' flex  '>
//                                 <h2 className='pr-3 hover:text-sm'>$42.00</h2>
//                                 <h2 className='text-red-500 line-through'>$65.00</h2>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='flex justify-center gap-5 w-[]'>
//                     <div className='bg-white'>
//                         <div className='flex flex-col    bg-[#F7F7F7] w-[275px] h-[200px] '>
//                             <div className=' justify-center flex items-center    '>
//                                 <img src="icon/image1166.png" alt="" className='w-[150px] h-[190px] pt-8  ' />
//                             </div>
//                         </div>
//                         <div className='flex justify-between bg-white  py-1  text-xs'>
//                             <div><h2 className='flex border-b-2  '>Comfort Handy Craft</h2></div>
//                             <div className=' flex  '>
//                                 <h2 className='pr-3 hover:text-sm'>$42.00</h2>
//                                 <h2 className='text-red-500 line-through'>$65.00</h2>
//                             </div>
//                         </div>
//                     </div>
//                 </div> */}
//             </div>
//             {/* <div className='flex  md:flex-row flex-col gap-7 justify-center py-10 px-'>





//                 <div className='flex justify-center gap-5 w-[]'>
//                     <div className='bg-white'>
//                         <div className='flex flex-col    bg-[#F7F7F7] w-[275px] h-[200px] '>
//                             <div className=' justify-center flex items-center    '>
//                                 <img src="icon/image1166.png" alt="" className='w-[150px] h-[190px] pt-8  ' />
//                             </div>
//                         </div>
//                         <div className='flex justify-between bg-white  py-1  text-xs'>
//                             <div><h2 className='flex border-b-2  '>Comfort Handy Craft</h2></div>
//                             <div className=' flex  '>
//                                 <h2 className='pr-3 hover:text-sm'>$42.00</h2>
//                                 <h2 className='text-red-500 line-through'>$65.00</h2>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='flex justify-center gap-5 w-[]'>
//                     <div className='bg-white'>
//                         <div className='flex flex-col    bg-[#F7F7F7] w-[275px] h-[200px] '>
//                             <div className=' justify-center flex items-center    '>
//                                 <img src="icon/image1166.png" alt="" className='w-[150px] h-[190px] pt-8  ' />
//                             </div>
//                         </div>
//                         <div className='flex justify-between bg-white  py-1  text-xs'>
//                             <div><h2 className='flex border-b-2  '>Comfort Handy Craft</h2></div>
//                             <div className=' flex  '>
//                                 <h2 className='pr-3 hover:text-sm'>$42.00</h2>
//                                 <h2 className='text-red-500 line-through'>$65.00</h2>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='flex justify-center gap-5 w-[]'>
//                     <div className='bg-white'>
//                         <div className='flex flex-col    bg-[#F7F7F7] w-[275px] h-[200px] '>
//                             <div className=' justify-center flex items-center    '>
//                                 <img src="icon/image1166.png" alt="" className='w-[150px] h-[190px] pt-8  ' />
//                             </div>
//                         </div>
//                         <div className='flex justify-between bg-white  py-1  text-xs'>
//                             <div><h2 className='flex border-b-2  '>Comfort Handy Craft</h2></div>
//                             <div className=' flex  '>
//                                 <h2 className='pr-3 hover:text-sm'>$42.00</h2>
//                                 <h2 className='text-red-500 line-through'>$65.00</h2>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div> */}



//         </div>

//     )
// }
























import { client } from '@/sanity/lib/client';
import Link from 'next/link';
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
            const res: Ibooks[] = await client.fetch(`*[_type == "product" && isFeaturedProduct == true][0..5] {
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
        <div className='w-[1024px] max-w-screen-xl justify-center items-center mx-auto pb-9 pt-[80px]'>
            <div>
                <h2 className='flex justify-center text-[#151875] text-[33px] font-semibold py-2 '>Latest Products</h2>
            </div>
            <div>
                <nav>
                    <ul className='flex justify-center items-center text-center gap-9 text-sm text-[#151875] h-5 '>
                        <li className='hover:border-b-2 border-[#FB4997] hover:text-[#FB2E86]'>
                            <Link href="/LeatestProducts">Latest Products</Link>
                        </li>
                        <li className='hover:border-b-2 border-[#FB4997] hover:text-[#FB2E86]'>
                            <Link href="/BestSeller">Best Seller</Link>
                        </li>
                        <li className='hover:border-b-2 border-[#FB4997] hover:text-[#FB2E86]'>
                            <Link href="/Featured">Featured</Link>
                        </li>
                        <li className='hover:border-b-2 border-[#FB4997] hover:text-[#FB2E86]'>
                            <Link href="/SpecialOffer">Special Offer</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='grid grid-cols-3 gap-7 py-10'>
                {products.map((product) => (
                    <div key={product._id} className='bg-white'>
                        <Link href={`/product/${product.slug?.current || ''}`}>
                        <div className='flex flex-col bg-[#F7F7F7] w-[275px] h-[200px]'>
                            <div className='justify-center flex items-center'>
                                <img src={product.imageUrl} alt={product.name} className='w-[150px] h-[190px] pt-8' />
                            </div>
                        </div>
                        </Link>
                        <div className='flex justify-between bg-white py-1 text-xs'>
                            <div><h2 className='flex border-b-2 w-[150px]'>{product.name}</h2></div>
                            <div className='flex'>
                                <h2 className='text-red-500 line-through'>
                                    {((product.price * (1 + product.discountPercentage / 100)) || 0).toFixed(2)}
                                </h2>
                                <h2 className='pr-1 hover:text-sm'>{product.price}</h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LeatestProducts;
