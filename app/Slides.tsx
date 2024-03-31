"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { Autoplay, EffectCube } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/effect-cube";
import Image from "next/image";
import banner1 from "@/assets/banner.jpg";
import banner2 from "@/assets/banner-2.jpg";
import banner3 from "@/assets/banner-3.jpg";
import banner4 from "@/assets/banner-4.jpg";

export default function Slides() {
    return (
        <Swiper
            className="w-full"
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            loop
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            }}
            modules={[Autoplay, EffectCube]}>
            <SwiperSlide>
                <Image
                    src={banner1}
                    alt="banner"
                    className="w-full"
                    width={600}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={banner2}
                    alt="banner"
                    className="w-full"
                    width={600}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={banner3}
                    alt="banner"
                    className="w-full"
                    width={600}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={banner4}
                    alt="banner"
                    className="w-full"
                    width={600}
                />
            </SwiperSlide>
        </Swiper>
    );
}
