import BtnConsult from "@/components/ui/BtnConsult";
import BtnTry from "@/components/ui/BtnTry";
import Image from "next/image";
import React from "react";

const PreFooter = () => {
  return (
    <section className="bg-[#00481C] pt-44 text-white text-center rounded-65px overflow-hidden mt-6 max-sm:pt-24 max-sm:rounded-[30px]">
      <div className="container">
        <p className="font-semibold  mb-6 ">مؤتمت</p>
        <h2 className="font-semibold text-52px  mb-5">
          الذكاء مو بس للتقنية… صار جزء من!.
          <span className="text-secondary"> البزنس الناجح</span> !.
        </h2>
        <p className="font-normal text-22px text-white mb-16 sm:w-[57%] mx-auto mb-6">
          مؤتمت هو نظام ذكاء اصطناعي متكامل يعمل على واتساب، يساعدك في الرد على
          عملاءك لحظيًا وبدون تدخل يدوي.
        </p>
        <div className="center_flex gap-7 mb-10 max-sm:flex-wrap">
          <BtnTry />
          <BtnConsult />
        </div>
        <div className="bg-white/10 p-6 pb-0 overflow-hidden h-auto rounded-tl-30px rounded-tr-30px">
            <Image
              src="/home/dashboard.webp"
              alt="PreFooter Badge"
              width={1600}
              height={1200}
              className="w-full h-full object-cover rounded-30px"
            />
        </div>
      </div>
    </section>
  );
};

export default PreFooter;
