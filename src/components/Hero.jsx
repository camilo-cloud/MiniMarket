import "./Hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import groceriesImg from "../assets/images/MiniMarket_optimized.webp";
import cleaningImg from "../assets/images/cleaningBanner_optimized.webp";
import buyImg from "../assets/images/buyBanner_optimized2.webp";
import { Link } from "react-router-dom";

export default function Hero() {
    const banners = [
        {
            id: 1,
            image: groceriesImg,
            title: "Fresh groceries every day",
            subtitle: "Get the best fruits and vegetables directly to your door.",
            buttonText: "Shop Now",
            link: "/products?category=fruits"
        },
        {
            id: 2,
            image: cleaningImg,
            title: "Keep your home clean",
            subtitle: "Find all cleaning and hygiene products in one place.",
            buttonText: "Discover",
            link: "/products?category=cleaning"
        },
        {
            id: 3,
            image: buyImg,
            title: "Shop anytime, anywhere",
            subtitle: "Your minimarket now online. Fast and easy.",
            buttonText: "Start Shopping",
            link: "/products"
        },
    ];

    return (
        <section className="hero">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
            >
                {banners.map((banner) => (
                    <SwiperSlide key={banner.id}>
                        <Link to={banner.link} className="hero-slide">
                            <img src={banner.image} alt={banner.title} />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
