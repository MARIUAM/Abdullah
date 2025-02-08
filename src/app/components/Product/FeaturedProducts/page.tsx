"use client";
import React, { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel"; // ← ← Slider کو install کریں (npm install react-multi-carousel --save)
import "react-multi-carousel/lib/styles.css";
import { FeaturedProducts } from './FeaturedProducts';
// اپنے Product کمپوننٹ کو درآمد کریں


const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 1 }, items: 1 }
};

// state for deviceType
const SelaiderFeaturedProducts = () => {
    const [deviceType, setDeviceType] = useState("desktop");

    // Update the deviceType based on the window width
    useEffect(() => {
        const updateDeviceType = () => {
            if (window.innerWidth <= 464) {
                setDeviceType("mobile");
            } else if (window.innerWidth <= 1024) {
                setDeviceType("tablet");
            } else {
                setDeviceType("desktop");
            }
        };

        // Initial check


        // Add event listener to update deviceType on window resize
        window.addEventListener('resize', updateDeviceType);

        // Clean up the event listener
        return () => {
            window.removeEventListener('resize', updateDeviceType);
        };
    }, []);

    const product = [
        { id: 1, imgeurl: "icon/image1168.png", name: "Cantilever chair", description: "Code - Y523201", price: "$42.00" },
        { id: 2, imgeurl: "icon/image1168.png", name: "Cantilever chair", description: "Code - Y523201", price: "$42.00" },
        { id: 3, imgeurl: "icon/image1168.png", name: "Cantilever chair", description: "Code - Y523201", price: "$42.00" },
        { id: 4, imgeurl: "icon/image1168.png", name: "Cantilever chair", description: "Code - Y523201", price: "$42.00" },
        { id: 5, imgeurl: "icon/image1168.png", name: "Cantilever chair", description: "Code - Y523201", price: "$42.00" },
        { id: 6, imgeurl: "icon/image1168.png", name: "Cantilever chair", description: "Code - Y523201", price: "$42.00" },
        { id: 7, imgeurl: "icon/image1168.png", name: "Cantilever chair", description: "Code - Y523201", price: "$42.00" },
        { id: 8, imgeurl: "icon/image1168.png", name: "Cantilever chair", description: "Code - Y523201", price: "$42.00" }
    ];


    const productList = product.map((item) => (
        <FeaturedProducts
            // id={item.id}
            key={item.id}
            name={item.name}
            url={item.imgeurl}
            price={item.price}
            description={item.description}
        // title={item.title}
        />
    ));

    return (
        <div className=' <div className="w-[1024] max-w-screen-xl   items-center  mx-auto'>
            <div>
                <h2 className='flex justify-center text-2xl text-[#1A0B5B] font-bold pt-25 pb-9 pt-[80px]'> Featured Products</h2>
            </div>
            <Carousel

                arrows={false}  // یہ لائن ایرو بٹن ہٹانے کے لیے ہے
                swipeable={false}
                draggable={false}
                //  showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={deviceType !== "mobile"} // autoPlay based on deviceType
                autoPlaySpeed={5000}  //←←5000
                keyBoardControl={true}
                //   customTransition="all .5"
                transitionDuration={100}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {productList}
            </Carousel>
        </div>
    );
};

export default SelaiderFeaturedProducts;











