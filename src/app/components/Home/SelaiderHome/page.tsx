"use client";
import React, { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel"; // ← ← Slider کو install کریں (npm install react-multi-carousel --save)
import "react-multi-carousel/lib/styles.css";
import { ProductHome } from './ProductHome';  // اپنے Product کمپوننٹ کو درآمد کریں

const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

// state for deviceType
const SelaiderHome = () => {
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
        updateDeviceType();

        // Add event listener to update deviceType on window resize
        window.addEventListener('resize', updateDeviceType);

        // Clean up the event listener
        return () => {
            window.removeEventListener('resize', updateDeviceType);
        };
    }, []);

    const product = [
        {
            id: 1, // Added unique id
            name: "1Best Furniture For Your Castle....",
            title: "1New Furniture Collection Trends in 2020",
            description: "1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing  in phasellus non in justo.",
            imgeurl: "icon/Armchair-Fabric 1.png",
            price: "50% off",
        },
        {
            id: 2, // Added unique id
            name: "2Best Furniture For Your Castle....",
            title: "2New Furniture Collection Trends in 2020",
            description: "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing  in phasellus non in justo.",
            imgeurl: "icon/Armchair-Fabric 1.png",
            price: "60% off",
        },
        {
            id: 3, // Added unique id
            name: "3Best Furniture For Your Castle....",
            title: "3New Furniture Collection Trends in 2020",
            description: "3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing  in phasellus non in justo.",
            imgeurl: "icon/Armchair-Fabric 1.png",
            price: "70% off",
        }
    ];

    const productList = product.map((item) => (
        <ProductHome
            // id={item.id}
            key={item.id}
            name={item.name}
            url={item.imgeurl}
            price={item.price}
            description={item.description}
            title={item.title}
        />
    ));

    return (
        <div className='w-[1263] max-w-screen-xl justify-center items-center  mx-auto'>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive }
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={deviceType !== "mobile"} // autoPlay based on deviceType
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
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

export default SelaiderHome;
