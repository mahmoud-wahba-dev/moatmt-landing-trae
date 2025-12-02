"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const logos = [
  "/partners/partner1.webp",
  "/partners/cafe.webp",
  "/partners/partner3.webp",
  "/partners/partner4.webp",
  "/partners/partner5.png",
  "/partners/partner6.webp",
  "/partners/kafa.webp",
];
import Image from "next/image";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    partialVisibilityGutter: 20,
  },
};

const OurPartners = () => {
  return (
    <div className="py-8 bg-transparent">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={1}
        customTransition="all 12s linear"
        transitionDuration={12000}
        arrows={false}
        draggable={false}
        swipeable={false}
        keyBoardControl={false}
        pauseOnHover={false}
        showDots={false}
        renderButtonGroupOutside={false}
        slidesToSlide={1}
        rtl={true}
        containerClass="carousel-container"
        itemClass="px-2"
      >
        {logos.concat(logos).map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center"
            // style={{ minHeight: 140, minWidth: 140 }}
          >
            <div
              className="rounded-full bg-white border border-[#F3F4F6] shadow-[0px_2px_4px_-2px_#0000001A] flex items-center justify-center"
              style={{ width: 140, height: 140 }}
            >
              <Image
                src={logo}
                alt={`Partner logo ${i + 1}`}
                width={100}
                height={100}
                className="object-contain rounded-full"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default OurPartners;
