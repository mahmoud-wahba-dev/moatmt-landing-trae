import BtnTry from "@/components/ui/BtnTry";
import Image from "next/image";
import FirstCard from "./whyMoatmt/FirstCard";
import SecondCard from "./whyMoatmt/SecondCard";
import LastCard from "./whyMoatmt/LastCard";

const WhyMoatmt = () => {
  return (
    <section className="bg-primary sm:py-28 py-8  my-6">
      <div className="container">
        <div>
          <p className="font-semibold text-base text-center text-white  mb-5">
            المزايا الأساسية
          </p>
          <h3 className="font-semibold text-52px text-white text-center">
            ليــــش مؤتمــــت؟ لأن{" "}
            <span className="text-secondary">وقتــــك</span> أغلى 💡 !.
          </h3>
          <p className="font-normal text-22px text-white text-center mb-20">
            مؤتمت يشتغل معك بكل سلاسة وذكاء.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2.5 ">
            <div className="lg:col-span-8">
              <FirstCard />
            </div>
            <div className="lg:col-span-4">
              <SecondCard
                iconSrc={"available"}
                title={"متوفر على مدار الساعة"}
                description="يرد على عملاءك بدون توقف – حتى وقت النوم أو السفر."
                lastImgSrc={"available_icons"}
              />
            </div>

            <div className="lg:col-span-4">
              <SecondCard
                iconSrc={"icon2"}
                title={"يفهم تسلسل المحادثة"}
                description=" ما يجاوب بشكل آلي مكرر، بل يربط بين الرسائل ويرد بسياق."
                lastImgSrc={"img2"}
              />
            </div>

            <div className="lg:col-span-4">
              <SecondCard
                iconSrc={"icon3"}
                title={"يحوّل للموظف عند الحاجة"}
                description="إذا العميل طلب موظف، يتم التحويل تلقائيًا مع تنبيه فوري لك او للموظف."
                lastImgSrc={"img3"}
              />
            </div>

            <div className="lg:col-span-4">
              <SecondCard
                iconSrc={"icon4"}
                title={"يدعم كل اللغات واللهجات"}
                description="عربي؟ إنجليزي؟ صيني؟ ما يفرق… مؤتمت يفهم ويتكلم بكل ثقة."
                lastImgSrc={"img4"}
              />
            </div>
            <div className="lg:col-span-4">
              <SecondCard
                iconSrc={"icon5"}
                title={"يسترجع السلات المتروكة"}
                description="للي عنده متجر إلكتروني، مؤتمت يرجّع العملاء برسائل ذكية."
                lastImgSrc={"img5"}
              />
            </div>
            <div className="lg:col-span-8">
              <LastCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMoatmt;
