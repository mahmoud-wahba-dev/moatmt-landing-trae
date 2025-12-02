"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // added Autoplay
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

// Dummy images array
const slideImages = [
  "/moatmt_img/moatmt_sys1.webp",
  "/moatmt_img/moatmt_sys2.webp",
  "/moatmt_img/moatmt_sys3.webp",
];

export default function MoatmtImgsSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const pagRef = useRef(null);

  return (
    <div className="rounded-2xl p-8 pb-20 relative bg-[#1F533C] max-sm:p-0">
      <h5 className="font-semibold text-3xl md:text-52px mb-7 text-white text-center">
        لوحة التحكم الرئيسية
      </h5>

      {/* Controls row: Pagination above the slider */}
      <div className="flex flex-col items-center gap-4 mb-4">
        {/* Arrows (static centered) */}
        <div className="flex items-center gap-5">
          <button
            ref={nextRef}
            className="cursor-pointer dashboard-swiper-next w-12 h-12 rounded-full flex items-center justify-center shadow-md bg-white border border-[#E6EEF0] text-[#0F172B]"
            aria-label="التالي"
            type="button"
          >
            <HiArrowRight />
          </button>
          <button
            ref={prevRef}
            className="dashboard-swiper-prev w-12 h-12 rounded-full flex items-center justify-center shadow-md bg-[#153E2F]/20 border border-[#2EE37833] text-white"
            aria-label="السابق"
            type="button"
          >
            <HiArrowLeft className="text-[#2EE378]" />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]} // include Autoplay
        slidesPerView={1}
        loop={true} // enable looping
        speed={600} // transition speed (ms)
        autoplay={{
          // autoplay configuration
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="relative"
        style={{ borderRadius: "16px" }}
        onInit={(swiper) => {
          // assign refs and initialize nav/pagination after DOM is ready
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.params.pagination.el = pagRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
          swiper.pagination.init();
          swiper.pagination.update();
          // ensure autoplay starts
          try {
            swiper.autoplay && swiper.autoplay.start();
          } catch (e) {}
        }}
      >
        {slideImages.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="rounded-[20px] overflow-hidden bg-white h-[800px] p-6 max-sm:h-auto ">
              <Image
                src={img}
                alt={`Slide ${i + 1}`}
                width={800}
                height={400}
                className="w-full h-full object-cover"
                priority={i === 0}
              />
            </div>
          </SwiperSlide>
        ))}

        {/* Pagination (Swiper will render bullets into this container) */}
        <div className="flex justify-center mt-4" ref={pagRef} />
      </Swiper>

      <style jsx global>{`
        .swiper-pagination {
          display: flex !important;
          gap: 12px;
          align-items: center;
        }
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #ffffff;
          opacity: 0.8;
          border-radius: 9999px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
          transition: all 200ms ease;
        }
        .swiper-pagination-bullet-active {
          width: 36px !important;
          height: 12px !important;
          background: #2ee378 !important;
          border-radius: 9999px !important;
          opacity: 1 !important;
          box-shadow: none !important;
        }
      `}</style>
    </div>
  );
}
