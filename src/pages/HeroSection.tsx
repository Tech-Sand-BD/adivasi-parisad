"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Button } from "@/components/ui/button";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "/one.jpg",
    title:
      "We seek to connect Indigenous rights, self-development, and sustainable resource management approaches to Indigenous Peoples forest-nature-climate-based solutions.",
  },
  {
    image: "two.jpeg",
    title:
      "We seek to connect Indigenous rights, self-development, and sustainable resource management approaches to Indigenous Peoples forest-nature-climate-based solutions.",
  },
  {
    image: "three.jpeg",
    title:
      "We seek to connect Indigenous rights, self-development, and sustainable resource management approaches to Indigenous Peoples forest-nature-climate-based solutions.",
  },
  {
    image: "four.jpeg",
    title:
      "We seek to connect Indigenous rights, self-development, and sustainable resource management approaches to Indigenous Peoples forest-nature-climate-based solutions.",
  },
];

function HeroSlider() {
  return (
    <div className="relative h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/50" />
              </div>
              <div className="relative h-full flex items-center justify-center text-center px-4">
                <div className="max-w-4xl">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    {slide.title}
                  </h1>

                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    Learn more about work
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSlider />
    </main>
  );
}
