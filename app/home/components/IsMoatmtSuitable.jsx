import BtnConsult from "@/components/ui/BtnConsult";
import BtnTry from "@/components/ui/BtnTry";
import InfoItem from "@/components/ui/InfoItem ";
import Image from "next/image";
import { BsCheck2Circle } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { PiShoppingBag } from "react-icons/pi";
import { TbClockHour8 } from "react-icons/tb";
// Example rendering multiple items
const items = [
  { icon: FaWhatsapp, text: "تبيع منتجات على واتساب." },
  { icon: PiShoppingBag, text: "عندك متجر في سلة أو زد أو شوبيفاي." },
  { icon: TbClockHour8, text: "تبغى توفر وقتك وجهدك." },
  { icon: BsCheck2Circle, text: "تبغى ترد باحتراف وتزيد مبيعاتك." },
];
const IsMoatmtSuitable = () => {
  return (
    <section className="pb-14 pt-28 relative">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
          <div className="text-white flex items-center">
            <div>
              <p className="font-semibold  mb-6  ">هل مؤتمت يناسبك؟</p>
              <h2 className="font-semibold text-52px  mb-5 ">
                هل مؤتمت مناسب لك؟
              </h2>
              <p className="font-normal text-22px  mb-6">
                تجربة 5 ايام مجاناً{" "}
              </p>

              <div>
                {items.map((item, i) => (
                  <InfoItem key={i} icon={item.icon}>
                    {item.text}
                  </InfoItem>
                ))}
              </div>

              <div className="flex items-center gap-7 mb-10 max-sm:flex-wrap">
                <BtnTry />
                <BtnConsult />
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/home/moatmt_suitable.webp"
              width={832}
              height={756}
              className="w-full h-full object-cover rounded-58px"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="size-[537px] max-w-full absolute -bottom-[10%] start-0 pointer-events-none ">
        <Image
          src="/home/white_blur_effect.webp"
          alt="Is Moatmt Suitable Background"
          width={537}
          height={537}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default IsMoatmtSuitable;
