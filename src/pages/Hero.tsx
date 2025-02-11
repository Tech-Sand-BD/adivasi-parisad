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
    title: "আদিবাসী সাংস্কৃতিক ভূদৃশ্য",
    description:
      "আদিবাসী অঞ্চল এবং সম্প্রদায়ের আদিবাসী শাসন, স্ব-উন্নয়ন এবং আর্থিক স্থায়িত্বের জন্য অনুঘটক এবং স্থিতিস্থাপকতা তৈরির জন্য আদিবাসী সাংস্কৃতিক ভূদৃশ্যের পদ্ধতির নকশা এবং প্রচার।",
    icon: TreePine,
    color: "bg-[#75B556]",
  },
  {
    id: 2,
    title: "আদিবাসী অনুদান এবং তহবিল",
    description:
      "আদিবাসীদের নেতৃত্বে অনুদান প্রদানের উপকরণ তৈরি করা যাতে আদিবাসীদের নেতৃত্বে তহবিল ব্যবস্থাপনাকে উৎসাহিত করা যায়, যাতে শেখার মাধ্যমে কাজ করা এবং ঝুঁকিমুক্ত ব্যবস্থাপনা পদ্ধতির ভারসাম্য বজায় রাখা যায়।",
    icon: Coins,
    color: "bg-[#75B556]",
  },
  {
    id: 3,
    title: "আদিবাসী সক্ষমতা উন্নয়ন",
    description:
      "আদিবাসী এবং অ-আদিবাসী স্টেকহোল্ডারদের সাথে সক্ষমতা উন্নয়ন এবং সামাজিক শিক্ষা বিনিময় বিকাশ এবং সহজতর করার জন্য বহু-ক্ষেত্রীয় অংশীদারদের সম্পৃক্ত করা।",
    icon: GraduationCap,
    color: "bg-[#75B556]",
  },
  {
    id: 2,
    title: "আদিবাসীদের পক্ষে ওকালতি এবং দৃশ্যমানতা",
    description:
      "আদিবাসী স্বার্থকে অন্তর্ভুক্ত এবং প্রভাবিত করার জন্য জাতীয়, আঞ্চলিক এবং আন্তঃআঞ্চলিক স্তরে বহু-ক্ষেত্র সংলাপ এবং সহযোগিতার সুবিধা প্রদান করা।",
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
          এর মাধ্যমে বিশ্বকে রূপান্তরিত করা:
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
            className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10  p-3 rounded-full shadow-lg transition-transform hover:scale-110 "
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10  p-3 rounded-full shadow-lg transition-transform hover:scale-110 "
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
