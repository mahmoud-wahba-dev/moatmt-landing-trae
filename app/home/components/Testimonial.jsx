import React from "react";
import TestimonialSlider from "./TestimonialSlider";
import { LuStar } from "react-icons/lu";
import { HiStar } from "react-icons/hi";

const Testimonial = () => {
  return (
    <section className="bg-white rounded-67px pt-6 pb-28">
      <div className="container">
        <div className="text-center text-black mb-14">
          <p className="font-semibold  mb-6  text-base">وش قالوا المستخدمين؟</p>
          <h2 className="font-semibold text-52px mb-5 flex justify-center items-center gap-4">
            <span>( +1500 )</span>
            <HiStar  className="text-[#E89E00]" />
            <span>4.9</span>
          </h2>
          <p className="font-normal text-22px  mb-6">
            روّاد أعمال وجربوا مؤتمت… شوف رأيهم{" "}
          </p>
        </div>

        <div className="bg-[#F5F5F5] p-16 rounded-[105px] shadow-testimonialShadow max-sm:p-6 max-sm:rounded-[50px]">
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
