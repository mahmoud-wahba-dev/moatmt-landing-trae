import CircleIcon from "@/components/ui/CircleIcon";
import Image from "next/image";
import { BsBagHeartFill } from "react-icons/bs";
import { MdOutlineShoppingBag } from "react-icons/md";
import { PiShoppingBag } from "react-icons/pi";

const WhoIsMoatmt = () => {
  return (
    <section className="sm:py-28 py-8 rounded-65px my-6 bg-white">
      <div className="container text-center ">
        <p className="font-semibold text-black mb-6">وش هو مؤتمت؟</p>
        <h2 className="font-semibold text-52px text-black mb-5">
          مــــؤتمــــت يخــــدم كل{" "}
          <span className="text-secondary">أنــــواع البزنــــس</span> !.
        </h2>
        <p className="font-normal text-22px text-black mb-16 sm:w-[69%] mx-auto">
          مؤتمت هو نظام ذكاء اصطناعي متكامل يعمل على واتساب، يساعدك في الرد على
          عملاءك لحظيًا وبدون تدخل يدوي. سواء كنت:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <div className="hover-3d">
            <div
              className=" h-full rounded-58px shadow-[0px_0px_6.5px_1px_#00000040]
p-12"
            >
              <div>
                <CircleIcon icon={PiShoppingBag} sizeClass="size-[75px]" />
                <h4 className="font-bold text-36px text-black text-start">
                  صاحــــب متجــــر إلكتــــروني
                  <br />
                  علــــى Salla أو Zid أو Shopify.
                </h4>
                <div className=" h-[187px] m-auto">
                  <Image
                    src="/home/who1.png"
                    alt="Description"
                    width={75}
                    height={75}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
            {/* 8 empty divs needed for the 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="hover-3d">
            <div
              className="h-full rounded-58px shadow-[0px_0px_6.5px_1px_#00000040]
p-12"
            >
              <div>
                <div className=" h-[187px] m-auto">
                  <Image
                    src="/home/who2.png"
                    alt="Description"
                    width={75}
                    height={75}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* <CircleIcon /> */}
                <CircleIcon
                  icon={MdOutlineShoppingBag}
                  sizeClass="size-[75px]"
                />
                {/* 
                <div className="size-[75px] center_flex bg-secondary rounded-40px mb-6">
                  <MdOutlineShoppingBag className="size-8 text-primary" />
                </div> */}
                <h4 className="font-bold text-36px text-black text-start">
                  تمــــلك بزنــــس شخصــــي
                  <br />
                  محــــل او عمل خــــاص ايــــا كان.
                </h4>
              </div>
            </div>
            {/* 8 empty divs needed for the 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="hover-3d">
            <div
              className="h-full rounded-58px shadow-[0px_0px_6.5px_1px_#00000040]
p-12"
            >
              <div>
                <CircleIcon icon={BsBagHeartFill} sizeClass="size-[75px]" />
                <h4 className="font-bold text-36px text-black text-start">
                  أو أســــر منتجــــة تبيــــع
                  <br />
                  على واتســــاب فقط.
                </h4>
                <div className=" h-[187px] m-auto mt-8">
                  <Image
                    src="/home/who3.png"
                    alt="Description"
                    width={75}
                    height={75}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
            {/* 8 empty divs needed for the 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsMoatmt;
