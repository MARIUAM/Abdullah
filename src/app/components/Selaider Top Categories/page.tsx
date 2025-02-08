"use client";
import React from 'react';
import Carousel from "react-multi-carousel"; // ← ← Slider کو install کریں (npm install react-multi-carousel --save)
import "react-multi-carousel/lib/styles.css";
import { Producttop } from './Product top'; // اپنے Product کمپوننٹ کو درآمد کریں

const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

const product = [                   // Top Categories باقی پروڈکٹ ڈیٹا
    {
        id: 11,
        imgeurl: "icon/image1168.png",
        name: "8Sport sneaker",
        price: "$20.99",
        description: "Some description about product..",
    },
    {
        id: 12,
        imgeurl: "icon/image1168.png",
        name: "8Sport sneaker",
        price: "$20.88",
        description: "Some description about product..",
    },
    {
        id: 13,
        imgeurl: "icon/image1168.png",
        name: "8Sport sneaker",
        price: "$20.77",
        description: "Some description about product..",
    },
    {
        id: 14,
        imgeurl: "icon/image1168.png",
        name: "8Sport sneaker",
        price: "$20.66",
        description: "Some description about product..",
    },
    {
        id: 15,
        imgeurl: "icon/image1168.png",
        name: "8Sport sneaker",
        price: "$20.55",
        description: "Some description about product..",
    }
];

const productList = product.map((item) => (
    <Producttop
        key={item.id}
        name={item.name}
        url={item.imgeurl}
        price={item.price}
        description={item.description}
    />
));

const Selaiderttop = () => {
    return (
        <div>
            <h2 className='flex justify-center text-2xl text-yellow-300 font-bold'>Selaider Top</h2>
            <Carousel responsive={responsive}>
                {productList}
            </Carousel>
        </div>
    );
};

export default Selaiderttop;

















