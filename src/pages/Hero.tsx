"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  ChevronLeft,
  ChevronRight,
  TreePine,
  Coins,
  GraduationCap,
} from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Indigenous Cultural Landscapes",
    description:
      "Designing and promoting Indigenous Cultural Landscapes approaches to catalyze and create resilience for Indigenous governance, self-development, and financial sustainability of Indigenous territories and communities.",
    icon: TreePine,
    color: "bg-[#75B556]",
  },
  {
    id: 2,
    title: "Indigenous Grants & Funding",
    description:
      "Developing Indigenous-led grantmaking instruments to promote Indigenous-led funding management by balancing learning-by-doing and de-risking management approaches.",
    icon: Coins,
    color: "bg-[#75B556]",
  },
  {
    id: 3,
    title: "Indigenous Capacity Development",
    description:
      "Engaging multi-sectoral partners to develop and facilitate capacity development and social learning exchange with Indigenous and non-Indigenous stakeholders.",
    icon: GraduationCap,
    color: "bg-[#75B556]",
  },
  {
    id: 2,
    title: "Indigenous Grants & Funding",
    description:
      "Developing Indigenous-led grantmaking instruments to promote Indigenous-led funding management by balancing learning-by-doing and de-risking management approaches.",
    icon: Coins,
    color: "bg-[#75B556]",
  },
];

export default function SliderSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative w-full bg-background py-12 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-4xl font-bold mb-16">
          Transforming the world through:
        </h1>

        <div className="relative max-w-7xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id} className="h-full">
                <div className="flex flex-col items-center text-center p-6 h-full">
                  <div className={`${slide.color} rounded-full p-6 mb-6`}>
                    <slide.icon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 min-h-[3rem]">
                    {slide.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-3 rounded-full shadow-lg transition-transform hover:scale-110 hover:bg-white"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-3 rounded-full shadow-lg transition-transform hover:scale-110 hover:bg-white"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
