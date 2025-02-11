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
      "আমরা আদিবাসীদের দৃষ্টিভঙ্গি, মূল্যবোধ, জ্ঞান, পূর্বপুরুষের অনুশীলন এবং অধিকার দ্বারা পরিচালিত টেকসই অর্থনৈতিক উন্নয়ন, টেকসই বন ব্যবস্থাপনা এবং জলবায়ু কর্মকাণ্ডের সাথে সংযোগ স্থাপনের জন্য উদ্ভাবনী সুযোগ তৈরি করতে চাই।",
  },
  {
    image: "two.jpeg",
    title:
      "আমরা আদিবাসীদের অধিকার, স্ব-উন্নয়ন এবং টেকসই সম্পদ ব্যবস্থাপনার পদ্ধতিগুলিকে আদিবাসীদের বন-প্রকৃতি-জলবায়ু-ভিত্তিক সমাধানের সাথে সংযুক্ত করতে চাই।",
  },
  {
    image: "three.jpeg",
    title:
      "আমরা আদিবাসীদের নিজস্ব ব্যবস্থা, অধিকার এবং ঐতিহ্যবাহী জ্ঞানের ভিত্তিতে বন, প্রকৃতি এবং অঞ্চল ব্যবস্থাপনায় পূর্ণ এবং কার্যকর অংশগ্রহণকে উৎসাহিত করি।",
  },
  {
    image: "four.jpeg",
    title:
      "আমাদের আইপার্ড প্রোগ্রামের লক্ষ্য হল বিশ্বব্যাপী আদিবাসীদের তাদের দৃষ্টিভঙ্গি এবং অধিকারের ভিত্তিতে তাদের সম্প্রদায়গুলিকে পরিচালনা এবং বিকাশ করতে সক্ষম করা।",
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
                    আমাদের কাজ সম্পর্কে জানুন
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
