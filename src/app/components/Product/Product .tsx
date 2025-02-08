// // types.ts (or any name you prefer)
// import Link from 'next/link';
// import Image from 'next/image';

// import { client } from '@/sanity/lib/client'


// export interface Product {
//     _id: string;
//     name: string;
//     price: number;
//     description: string;
//     discountPercentage: number;
//     stockLevel: number;
//     category: string;
//     image_Url: string;
// }

// export interface LatestProductsProps {
//     products: Product[];
// }


// export default async function Herodfg() {

//     let res: Product[] = await client.fetch(`*[_type == "product" && isFeaturedProduct == true][2..5] {
//   _id,
//   name,

//   price,
//   description,
//   discountPercentage,
//   stockLevel,
//   category,
//     "imageUrl":image.asset->url,
// }`)
//     // console.log(res);

//     return (




//         <div >
//             <div className="flex md:flex-row flex-col gap-7 justify-center py-10 px-">
//             {res.map((data) => {
//                 return (
//                     <div key={data._id} className="flex justify-center gap-5 w-[]">
//             <div className="bg-white">
//               <div className="flex flex-col bg-[#F7F7F7] w-[275px] h-[200px]">
//                 <div className="justify-center flex items-center">
//                   <img
//                     src={data.image_Url}
//                     alt={data.name}
//                     className="w-[150px] h-[190px] pt-8"
//                   />
//                 </div>
//               </div>
//               <div className="flex justify-between bg-white py-1 text-xs">
//                 <div>
//                   <h2 className="flex border-b-2">{data.name}</h2>
//                 </div>
//                 <div className="flex">
//                   <h2 className="pr-3 hover:text-sm">${data.price}</h2>
//                   <h2 className="text-red-500 line-through">
//                     ${((data.price * (1 + data.discountPercentage / 100)) || 0).toFixed(2)}
//                   </h2>
//                 </div>
//               </div>
//             </div>
//           </div>

//                 )
//             })
//             }
//             </div>

//         </div>




//     );
// }






// import { client } from '@/sanity/lib/client';

// // Define the Product type
// export interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   description: string;
//   discountPercentage: number;
//   stockLevel: number;
//   category: string;
//   imageUrl: string; // Corrected image URL
// }

// export default async function Hero() {
//   // Fetch the data from Sanity
//   let res: Product[] = await client.fetch(
//     `*[_type == "product" && isFeaturedProduct == true][2..7] {
//       _id,
//       name,
//       price,
//       description,
//       discountPercentage,
//       stockLevel,
//       category,
//       "imageUrl": image.asset->url  // Ensure image URL is fetched correctly
//     }`
//   );

//   return (
//     <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7  justify-center'>

//       {res.map((data) => {
//         return (
//           <div className='flex  md:flex-row flex-col  gap-7 justify-center py-10 px-'>
//             <div key={data._id} className="flex justify-center gap-5 w-full bg-white border rounded-lg">


//               <div className='flex justify-center gap-5 w-[]'>
//                 <div className='bg-white'>
//                   <div className='flex flex-col    bg-[#F7F7F7] w-[275px] h-[200px] '>
//                     <div className=' justify-center flex items-center    '>
//                       <img src={data.imageUrl} alt="" className='w-[150px] h-[190px] pt-8  ' />
//                     </div>
//                   </div>
//                   <div className='flex justify-between bg-white  py-1  text-xs'>
//                     <div><h2 className='flex border-b-2  '>{data.name}</h2></div>
//                     <div className=' flex  '>
//                       <h2 className='pr-3 hover:text-sm'>${data.price}</h2>
//                       <h2 className='text-red-500 line-through'> ${((data.price * (1 + data.discountPercentage / 100)) || 0).toFixed(2)}
//                       </h2>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>

//   );
// }

















import { client } from '@/sanity/lib/client';

// Define the Product type
export interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  discountPercentage: number;
  stockLevel: number;
  category: string;
  imageUrl: string; // Corrected image URL
}

export default async function Hero() {
  // Fetch the data from Sanity
  const res: Product[] = await client.fetch(
    `*[_type == "product" && isFeaturedProduct == true][2..7] {
      _id,
      name,
      price,
      description,
      discountPercentage,
      stockLevel,
      category,
      "imageUrl": image.asset->url  // Ensure image URL is fetched correctly
    }`
  );

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 justify-center'>
      {res.map((data) => (
        <div key={data._id} className='flex md:flex-row flex-col gap-7 justify-center py-10 px-4'>
          <div className='flex justify-center gap-5 w-full bg-white border rounded-lg'>
            <div className='flex justify-center gap-5'>
              <div className='bg-white'>
                <div className='flex flex-col bg-[#F7F7F7] w-[275px] h-[200px]'>
                  <div className='flex justify-center items-center'>
                    <img src={data.imageUrl} alt={data.name} className='w-[150px] h-[190px] pt-8' />
                  </div>
                </div>
                <div className='flex justify-between bg-white py-1 text-xs'>
                  <div><h2 className='flex border-b-2'>{data.name}</h2></div>
                  <div className='flex'>
                    <h2 className='pr-3 hover:text-sm'>${data.price}</h2>
                    <h2 className='text-red-500 line-through'>
                      ${((data.price * (1 + data.discountPercentage / 100)) || 0).toFixed(2)}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
