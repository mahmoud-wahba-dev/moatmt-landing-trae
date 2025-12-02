import BtnTry from "@/components/ui/BtnTry";
import Image from "next/image";
import React from "react";

const FirstCard = () => {
  return (
    <div className="rounded-58px bg-white p-14 relative h-full ">
      <div className="mb-10">
        <Image src="/why_moatmt/tree.svg" alt="Tree" width={40} height={49} />
      </div>
      <h6 className="font-bold text-36px text-black mb-2.5">تدريب مخصص...</h6>
      <p className="font-normal text-18px text-[#333333] mb-10">
        تعلم مؤتمت كيف يرد بطريقتك – على حسب مجالك ومنتجاتك.
      </p>
      <div className="w-fit">
        <BtnTry
          className="bg-primary text-white h-16"
          iconContainerClassName="bg-white text-primary"
        />
      </div>

      <div className="absolute bottom-0 end-24 max-sm:scale-50 max-sm:hidden ">
        <Image
          src="/why_moatmt/robot.webp"
          alt="Plant"
          width={345}
          height={345}
        />
      </div>

      <div className="absolute top-[35%] start-[35%] -translate-y-1/2 -translate-x-1/2 max-sm:hidden ">
        <Image
          src="/why_moatmt/white_hint_card1.webp"
          alt="Robot"
          width={176}
          height={58}
        />
      </div>

      <div className="absolute top-[25%] end-8 -translate-y-1/2 max-sm:hidden ">
        <Image
          src="/why_moatmt/black_hint_card1.webp"
          alt="Robot"
          width={176}
          height={58}
        />
      </div>

      <div className="absolute top-[17%] end-[36%] -translate-y-1/2  max-sm:hidden ">
        <Image
          src="/why_moatmt/first_card_top_icon.webp"
          alt="Robot"
          width={140}
          height={27}
        />
      </div>

      <div className="absolute top-[55%] end-[2%] -translate-y-1/2   max-sm:hidden ">
        <Image
          src="/why_moatmt/first_card_bottom_icon.webp"
          alt="Robot"
          width={122}
          height={27}
        />
      </div>
    </div>
  );
};

export default FirstCard;
