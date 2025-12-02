import BtnTry from "@/components/ui/BtnTry";
import Image from "next/image";
import React from "react";

const LastCard = () => {
  return (
    <div className="flex items-center h-full bg-white rounded-58px p-14 relative ">
      <div className="w-full ">
        <div className="mb-10">
          <Image
            src="/why_moatmt/icon6.svg"
            alt="Tree"
            width={40}
            height={49}
          />
        </div>
        <h6 className="font-bold text-36px text-black mb-2.5">
          رسائل تحديث حالات الطلبات وتتبع الشحن
        </h6>
        <p className="font-normal text-18px text-[#333333] mb-10">
          يرسل تلقائيًا ولو سال عميلك كل وقت يجاوبه عنها ويطمنه{" "}
        </p>

        {/* 
      <div className="absolute bottom-0 end-24 ">
        <Image
          src="/why_moatmt/robot.webp"
          alt="Plant"
          width={345}
          height={345}
        />
      </div> */}

        {/* <div className="absolute top-[35%] start-[35%] -translate-y-1/2 -translate-x-1/2 max-sm:hidden ">
        <Image
          src="/why_moatmt/white_hint_card1.webp"
          alt="Robot"
          width={176}
          height={58}
        />
      </div> */}

        {/* <div className="absolute top-[25%] end-8 -translate-y-1/2  ">
        <Image
          src="/why_moatmt/black_hint_card1.webp"
          alt="Robot"
          width={176}
          height={58}
        />
      </div> */}

        <div className="absolute top-[17%] end-[36%] -translate-y-1/2 bg-primary text-white p-4 rounded-40px font-semibold text-12px">
          الرســائل
        </div>

        <div className="absolute top-[55%] end-[2%] -translate-y-1/2 bg-secondary text-primary p-4 rounded-40px font-semibold text-12px">
          الشحن
        </div>
      </div>
    </div>
  );
};

export default LastCard;
