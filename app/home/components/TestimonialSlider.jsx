"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2"; // or any icons
import { BsPersonLinesFill } from "react-icons/bs";
import Image from "next/image";
import BtnTry from "@/components/ui/BtnTry";
import { HiStar } from "react-icons/hi";

export default function TestimonialSlider() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Array of real slides content
  const slides = [
    <div key={0} className="grid grid-cols-1 md:grid-cols-12 gap-16">
      <div className="md:col-span-5">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-5 font-bold text-28px text-primary">
            <BsPersonLinesFill className="size-8" />
            <p>قصص عملائنا</p>
          </div>
          <div>
            <Image
              src="/home/testimonial_shape.svg"
              alt="Testimonial 1"
              width={90}
              height={64}
            />
          </div>
        </div>
        <p className="font-light text-28px text-black mb-10">
          هكذا يصف عملاؤنا تجربتهم معنا. مواقف حقيقية، نتائج ملموسة، وآراء تعبّر
          عن الثقة.
        </p>
        <div className="w-fit">
          <BtnTry
            className="bg-primary text-white h-[62px] gap-6"
            iconContainerClassName="bg-white text-primary"
          />
        </div>
      </div>
      <div className="md:col-span-7">
        <div className="flex items-center justify-between mb-16">
          <div>
            <p className="font-bold text-14px text-primary mb-1">عبدالله</p>
            <p className="font-normal text-14px text-[#4D4D4D]">
              تاجر على منصة زد
            </p>
          </div>
          <div className="flex items-center gap-1">
            <p className="font-bold text-12px text-primary">01 / 06</p>
            <HiStar className="text-[#2EE378] size-6" />
          </div>
        </div>
        <h3 className="font-bold text-42px mb-7">
          ‘’ حبيت طريقة عمل الذكاء الاصطناعي
          <br />
          والربط مع المتجر والتطور التقني هذا صار ضرورة لنا ! ‘’
        </h3>
        <p className="font-semibold text-22px text-[#4D4D4D]">
          ما توقعت يرد كذا، صراحة أنقذني من التوظيف وسهل الشغل على الموظفين!
        </p>
      </div>
    </div>,
    <div key={1} className="grid grid-cols-1 md:grid-cols-12 gap-16">
      <div className="md:col-span-5">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-5 font-bold text-28px text-primary">
            <BsPersonLinesFill className="size-8" />
            <p>قصص عملائنا</p>
          </div>
          <div>
            <Image
              src="/home/testimonial_shape.svg"
              alt="Testimonial 2"
              width={90}
              height={64}
            />
          </div>
        </div>
        <p className="font-light text-28px text-black mb-10">
          استخدمت مؤتمت في المتجر الخاص بي وزادت مبيعاتي وتوفرت لي خدمة سريعة
          للعملاء.
        </p>
        <div className="w-fit">
          <BtnTry
            className="bg-primary text-white h-[62px] gap-6"
            iconContainerClassName="bg-white text-primary"
          />
        </div>
      </div>
      <div className="md:col-span-7">
        <div className="flex items-center justify-between mb-16">
          <div>
            <p className="font-bold text-14px text-primary mb-1">سارة</p>
            <p className="font-normal text-14px text-[#4D4D4D]">
              صاحبة متجر سلة
            </p>
          </div>
          <div className="flex items-center gap-1">
            <p className="font-bold text-12px text-primary">02 / 06</p>
            <HiStar className="text-[#2EE378] size-6" />
          </div>
        </div>
        <h3 className="font-bold text-42px mb-7">
          ‘’ الخدمة سريعة ومميزة،
          <br />
          فريق الدعم متعاون جدا ! ‘’
        </h3>
        <p className="font-semibold text-22px text-[#4D4D4D]">
          خلال شهرين من الاستخدام ضاعفت الطلبات وساعدني الذكاء الاصطناعي في
          تنظيم الوقت.
        </p>
      </div>
    </div>,
    // You can add more slides the same way (change names/numbers/text as needed)
  ];
  // Needed for correct fraction in loop mode:
  function onSlideChange(swiper) {
    setActiveIndex(swiper.realIndex);
  }

  return (
    <div className="relative  ">
      {/* Swiper itself (navigation/pagination hidden) */}
      <Swiper
        ref={swiperRef}
        modules={[Autoplay]}
        loop={true}
        slidesPerView={1}
        onSlideChange={onSlideChange}
        speed={800}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="w-full"
      >
        {slides.map((content, i) => (
          <SwiperSlide key={i}>{content}</SwiperSlide>
        ))}
      </Swiper>
      {/* Custom arrows and fraction positioned however you like */}
      <div className="flex items-center gap-6 justify-between  sm:w-[60%] ms-auto mt-10 ">
        {/* Arrows */}
        <div className="flex gap-2   ">
          <button
            onClick={() => swiperRef.current.swiper.slideNext()}
            className="rounded-full bg-white size-11 flex items-center justify-center shadow cursor-pointer"
            aria-label="التالي"
          >
            <HiArrowRight className="text-primary text-lg" />
          </button>
          <button
            onClick={() => swiperRef.current.swiper.slidePrev()}
            className="rounded-full bg-secondary size-11 flex items-center justify-center cursor-pointer"
            aria-label="السابق"
          >
            <HiArrowLeft className="text-white text-lg" />
          </button>
        </div>
        {/* Pagination */}  
        <div>
          <span className="font-bold text-primary text-12px">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </div>
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev,
        .swiper-pagination {
          display: none !important;
        }
      `}</style>
    </div>
  );
}
