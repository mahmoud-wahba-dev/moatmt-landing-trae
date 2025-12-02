"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

const logos = [
  "/partners/partner1.webp",
  "/partners/cafe.webp",
  "/partners/partner3.webp",
  "/partners/partner4.webp",
  "/partners/partner5.png",
  "/partners/partner6.webp",
  "/partners/kafa.webp",
];

export default function SwiperSlider() {
  return (
    <div  className="w-full overflow-x-hidden py-8">
      <Swiper
        modules={[Autoplay, FreeMode]}
        dir="rtl"
        slidesPerView="auto"
        loop={true}
        spaceBetween={24}
        /* speed controls how fast one full animation cycle is — tune to taste */
        speed={7000}
        autoplay={{
          /* small positive delay for continuous movement; 0 may be ignored by some builds */
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        /* freeMode enabled for smooth non-snapping movement */
        freeMode={{
          enabled: true,
          /* momentum true produces smooth glide; tweak momentumRatio for feel */
          momentum: true,
          momentumRatio: 0.5,
          sticky: false,
        }}
        allowTouchMove={false} /* set true if you want users to drag */
        onSwiper={(swiper) => {
          // ensure autoplay is running
          try {
            swiper.autoplay && swiper.autoplay.start();
          } catch (e) {
            // ignore
          }
        }}
        className="w-full"
        style={{ height: 160 }}
      >
        {logos.map((logo, idx) => (
          <SwiperSlide key={idx} style={{ width: 140 }}>
            <div
              className="rounded-full bg-white border border-[#F3F4F6] shadow-[0px_2px_4px_-2px_#0000001A] flex items-center justify-center"
              style={{ width: 140, height: 140 }}
            >
              <Image
                src={logo}
                alt={`شعار شريك ${idx + 1}`}
                width={100}
                height={100}
                className="object-contain rounded-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* force linear timing so autoplay appears continuous */}
      <style jsx global>{`
        /* makes the transition linear for continuous feel */
        .swiper-wrapper {
          transition-timing-function: linear !important;
        }

        /* avoid unwanted transforms on rtl loop */
        .swiper-slide {
          will-change: transform;
        }
      `}</style>
    </div>
  );
}
