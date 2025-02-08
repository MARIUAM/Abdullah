// import React from 'react';

// interface ProductData {
//   _id: string;
//   name: string;
//   price: string;
//   description: string;
//   imageUrl: string;
//   discountPercentage: number;
//   category: string;
//   slug: { current: string } | null;
//   stockLevel: number;
// }

// // This is a server component. You fetch data directly inside it.
// async function ProductPage({ params }: { params: { product: string } }) {
//   // Fetch product data on the server side
//   const res = await fetch(`https://yourapi.com/products/${params.product}`);
//   const productData: ProductData = await res.json();

//   if (!productData) {
//     return <div>Product not found</div>;
//   }

    



  

//   return (
//     <div>
//       <h1>{productData.name}</h1>
//       <img src={productData.imageUrl} alt={productData.name} />
//       <p>{productData.description}</p>
//       <p>{productData.price}</p>
//     </div>
//   );
// }

// // export default ProductPage;
// // import React from 'react'

// // export default  function page () {
// //   return (
// //     <div>
      
// //     </div>
// //   )
// // }





// Add this at the top of your file
























// import React from 'react';
// import { GetServerSideProps } from 'next';

// interface ProductData {
//   _id: string;
//   name: string;
//   price: string;
//   description: string;
//   imageUrl: string;
//   discountPercentage: number;
//   category: string;
//   slug: { current: string } | null;
//   stockLevel: number;
// }

// interface ProductPageProps {
//   productData: ProductData | null;
// }

// const ProductPage = ({ productData }: ProductPageProps) => {
//   if (!productData) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div>
//       <h1>{productData.name}</h1>
//       <img src={productData.imageUrl} alt={productData.name} />
//       <p>{productData.description}</p>
//       <p>{productData.price}</p>
//       <p>Category: {productData.category}</p>
//       <p>Stock: {productData.stockLevel}</p>
//       <p>Discount: {productData.discountPercentage}%</p>
//     </div>
//   );
// };

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { product } = context.params as { product: string };
//   const res = await fetch(`https://yourapi.com/products/${product}`);
//   const productData: ProductData = await res.json();

//   if (!productData) {
//     return { notFound: true };
//   }

//   return {
//     props: {
//       productData,
//     },
//   };
// };

// export default ProductPage;
















// import React from 'react'


// export default async function page ({params} : { params:any }) {

//    const data = await client.fetch(`*[_type == "product" && isFeaturedProduct == true][0..5] {
//         _id,
//         name,
//         price,
//         description,
//         discountPercentage,
//         stockLevel,
//         category,
//         slug { current },
//         "imageUrl": image.asset->url  
//       }`)
//   //  console.log("params", params);
//   const filteredData = data.find((item: any) => item.slug.current ==params.product);
//   console.log("params",filteredData)

//   return (
//     <div>
//       <h2>Titel{filteredData.name}</h2>
//     </div>
//   )
// }




// import React from 'react';
// import sanityClient from '@sanity/client';
// import { client } from '@/sanity/lib/client';



// export default async function page({ params }: { params: any }) {
//   const data = await client.fetch(
//     `*[_type == "product" && isFeaturedProduct == true][0..5] {
//       _id,
//       name,
//       price,
//       description,
//       discountPercentage,
//       stockLevel,
//       category,
//       slug { current },
//       "imageUrl": image.asset->url
//     }`
//   );

//   const filteredData = data.find((item: any) => item.slug.current === params.product);

//   if (!filteredData) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div>
//       <h2>Title: {filteredData.name}</h2>
//     </div>
//   );
// }














// import React from 'react';
// import { client } from '@/sanity/lib/client';

// export default async function page({ params }: { params: any }) {
//   // Fetch all featured products
//   const data = await client.fetch(
//     `*[_type == "product" && isFeaturedProduct == true] {
//       _id,
//       name,
//       price,
//       description,
//       discountPercentage,
//       stockLevel,
//       category,
//       slug { current },
//       "imageUrl": image.asset->url
//     }`
//   );

//   // Find the product by slug
//   const filteredData = data.find((item: any) => item.slug.current === params.product);

//   if (!filteredData) {
//     return <div className="text-center text-xl text-red-500">Product not found</div>;
//   }

//   return (
//     <div className="flex justify-center items-center flex-col p-4">
//       <div className="bg-white shadow-lg rounded-lg w-full max-w-sm mb-8 overflow-hidden">
//         <img
//           className="w-full h-64 object-cover"
//           src={filteredData.imageUrl}
//           alt={filteredData.name}
//         />
//         <div className="p-4">
//           <h2 className="text-2xl font-semibold mb-2">{filteredData.name}</h2>
//           <p className="text-gray-700 mb-4">{filteredData.description}</p>
//           <div className="flex items-center mb-4">
//             <span className="text-xl font-bold text-gray-800">${filteredData.price}</span>
//             {filteredData.discountPercentage > 0 && (
//               <span className="ml-4 bg-red-100 text-red-600 text-sm px-2 py-1 rounded-full">
//                 -{filteredData.discountPercentage}%
//               </span>
//             )}
//           </div>
//           <div className="text-sm text-gray-600">
//             {filteredData.stockLevel > 0 ? `In stock: ${filteredData.stockLevel}` : 'Out of stock'}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }










// import React from 'react';
// import { client } from '@/sanity/lib/client';

// // Define the Product interface for proper typing
// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   description: string;
//   discountPercentage: number;
//   stockLevel: number;
//   category: string;
//   slug: { current: string };
//   imageUrl: string;
// }

// export default async function page({ params }: { params: { product: string } }) {
//   // Fetch all featured products
//   const data: Product[] = await client.fetch(
//     `*[_type == "product" && isFeaturedProduct == true] {
//       _id,
//       name,
//       price,
//       description,
//       discountPercentage,
//       stockLevel,
//       category,
//       slug { current },
//       "imageUrl": image.asset->url
//     }`
//   );

//   // Find the product by slug
//   const filteredData = data.find((item: Product) => item.slug.current === params.product);

//   if (!filteredData) {
//     return <div className="text-center text-xl text-red-500">Product not found</div>;
//   }

//   return (
//     <div className="flex justify-center items-center flex-col p-4">
//       <div className="bg-white shadow-lg rounded-lg w-full max-w-sm mb-8 overflow-hidden">
//         <img
//           className="w-full h-64 object-cover"
//           src={filteredData.imageUrl}
//           alt={filteredData.name}
//         />
//         <div className="p-4">
//           <h2 className="text-2xl font-semibold mb-2">{filteredData.name}</h2>
//           <p className="text-gray-700 mb-4">{filteredData.description}</p>
//           <div className="flex items-center mb-4">
//             <span className="text-xl font-bold text-gray-800">${filteredData.price}</span>
//             {filteredData.discountPercentage > 0 && (
//               <span className="ml-4 bg-red-100 text-red-600 text-sm px-2 py-1 rounded-full">
//                 -{filteredData.discountPercentage}%
//               </span>
//             )}
//           </div>
//           <div className="text-sm text-gray-600">
//             {filteredData.stockLevel > 0 ? `In stock: ${filteredData.stockLevel}` : 'Out of stock'}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }











// import React from 'react';
// import { client } from '@/sanity/lib/client';

// // Define the Product interface for proper typing
// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   description: string;
//   discountPercentage: number;
//   stockLevel: number;
//   category: string;
//   slug: { current: string };
//   imageUrl: string;
// }

// // Define the ProductPage component as a Server Component
// export default async function ProductPage({ params }: { params: { product: string } }) {
//   // Fetch the data on the server side
//   const data: Product[] = await client.fetch(
//     `*[_type == "product" && isFeaturedProduct == true] {
//       _id,
//       name,
//       price,
//       description,
//       discountPercentage,
//       stockLevel,
//       category,
//       slug { current },
//       "imageUrl": image.asset->url
//     }`
//   );

//   // Ensure the params are used correctly
//   const { product } = params;  // Extract 'product' directly from params

//   // Find the product by slug
//   const filteredData = data.find((item: Product) => item.slug.current === product);

//   if (!filteredData) {
//     return <div className="text-center text-xl text-red-500">Product not found</div>;
//   }

//   return (
//     <div className="flex justify-center items-center flex-col p-4">
//       <div className="bg-white shadow-lg rounded-lg w-full max-w-sm mb-8 overflow-hidden">
//         <img
//           className="w-full h-64 object-cover"
//           src={filteredData.imageUrl}
//           alt={filteredData.name}
//         />
//         <div className="p-4">
//           <h2 className="text-2xl font-semibold mb-2">{filteredData.name}</h2>
//           <p className="text-gray-700 mb-4">{filteredData.description}</p>
//           <div className="flex items-center mb-4">
//             <span className="text-xl font-bold text-gray-800">${filteredData.price}</span>
//             {filteredData.discountPercentage > 0 && (
//               <span className="ml-4 bg-red-100 text-red-600 text-sm px-2 py-1 rounded-full">
//                 -{filteredData.discountPercentage}%
//               </span>
//             )}
//           </div>
//           <div className="text-sm text-gray-600">
//             {filteredData.stockLevel > 0 ? `In stock: ${filteredData.stockLevel}` : 'Out of stock'}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }












// import React from 'react';
// import { client } from '@/sanity/lib/client';

// // پروڈکٹ کی نوعیت کے لیے انٹرفیس
// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   description: string;
//   discountPercentage: number;
//   stockLevel: number;
//   category: string;
//   slug: { current: string };
//   imageUrl: string;
// }

// // پروڈکٹ پیج کمپوننٹ
// export default async function ProductPage({ params }: { params: { product: string } }) {
//   // params کو await کریں تاکہ آپ کو صحیح product مل سکے
//   const { product } = await params;

//   // سرور سائیڈ پر ڈیٹا حاصل کریں
//   const data: Product[] = await client.fetch(
//     `*[_type == "product" && isFeaturedProduct == true] {
//       _id,
//       name,
//       price,
//       description,
//       discountPercentage,
//       stockLevel,
//       category,
//       slug { current },
//       "imageUrl": image.asset->url
//     }`
//   );

//   // پروڈکٹ کو slug کے مطابق تلاش کریں
//   const filteredData = data.find((item: Product) => item.slug.current === product);

//   if (!filteredData) {
//     return <div className="text-center text-xl text-red-500">پروڈکٹ نہیں ملی</div>;
//   }

//   return (
//     <div className="flex justify-center items-center flex-col p-4">
//       <div className="bg-white shadow-lg rounded-lg w-full max-w-sm mb-8 overflow-hidden">
//         <img
//           className="w-full h-64 object-cover"
//           src={filteredData.imageUrl}
//           alt={filteredData.name}
//         />
//         <div className="p-4">
//           <h2 className="text-2xl font-semibold mb-2">{filteredData.name}</h2>
//           <p className="text-gray-700 mb-4">{filteredData.description}</p>
//           <div className="flex items-center mb-4">
//             <span className="text-xl font-bold text-gray-800">${filteredData.price}</span>
//             {filteredData.discountPercentage > 0 && (
//               <span className="ml-4 bg-red-100 text-red-600 text-sm px-2 py-1 rounded-full">
//                 -{filteredData.discountPercentage}%
//               </span>
//             )}
//           </div>
//           <div className="text-sm text-gray-600">
//             {filteredData.stockLevel > 0 ? `موجود: ${filteredData.stockLevel}` : 'موجود نہیں'}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }







// import React from 'react';
// import { client } from '@/sanity/lib/client';

// // پروڈکٹ کی نوعیت کے لیے انٹرفیس
// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   description: string;
//   discountPercentage: number;
//   stockLevel: number;
//   category: string;
//   slug: { current: string } | null; // slug null ہو سکتا ہے
//   imageUrl: string;
// }

// // پروڈکٹ پیج کمپوننٹ
// export default async function ProductPage({ params }: { params: { product: string } }) {
//   // سرور سائیڈ پر ڈیٹا حاصل کریں
//   const data: Product[] = await client.fetch(
//     `*[_type == "product" && isFeaturedProduct == true] {
//       _id,
//       name,
//       price,
//       description,
//       discountPercentage,
//       stockLevel,
//       category,
//       slug { current },
//       "imageUrl": image.asset->url
//     }`
//   );

//   // پروڈکٹ کو slug کے مطابق تلاش کریں
//   const filteredData = data.find((item: Product) => item.slug?.current === params.product);

//   if (!filteredData) {
//     return <div className="text-center text-xl text-red-500">پروڈکٹ نہیں ملی</div>;
//   }

//   return (
//     <div className="flex justify-center items-center flex-col p-4">
//       <div className="bg-white shadow-lg rounded-lg w-full max-w-sm mb-8 overflow-hidden">
//         <img
//           className="w-full h-64 object-cover"
//           src={filteredData.imageUrl}
//           alt={filteredData.name}
//         />
//         <div className="p-4">
//           <h2 className="text-2xl font-semibold mb-2">{filteredData.name}</h2>
//           <p className="text-gray-700 mb-4">{filteredData.description}</p>
//           <div className="flex items-center mb-4">
//             <span className="text-xl font-bold text-gray-800">${filteredData.price}</span>
//             {filteredData.discountPercentage > 0 && (
//               <span className="ml-4 bg-red-100 text-red-600 text-sm px-2 py-1 rounded-full">
//                 -{filteredData.discountPercentage}%
//               </span>
//             )}
//           </div>
//           <div className="text-sm text-gray-600">
//             {filteredData.stockLevel > 0 ? `موجود: ${filteredData.stockLevel}` : 'موجود نہیں'}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ڈائنامک روٹس کے لیے `generateStaticParams` کا استعمال
// export async function generateStaticParams() {
//   const data: Product[] = await client.fetch(
//     `*[_type == "product" && isFeaturedProduct == true] {
//       slug { current }
//     }`
//   );

//   // slug null نہ ہو، اس بات کو یقینی بنائیں
//   return data
//     .filter((item) => item.slug?.current) // صرف وہ آئٹمز جن میں slug.current موجود ہو
//     .map((item) => ({
//       product: item.slug!.current, // ! کا استعمال کرتے ہوئے یقینی بنائیں کہ slug.current موجود ہے
//     }));
// }
