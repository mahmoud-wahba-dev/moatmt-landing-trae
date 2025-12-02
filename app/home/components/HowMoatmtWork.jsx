import React from "react";
import { FiLink } from "react-icons/fi";
import StepCard from "./StepCard";
import { LuBrain, LuMessageSquareText } from "react-icons/lu";
import { HiOutlineLightningBolt } from "react-icons/hi";

const HowMoatmtWork = () => {
  return (
    <section className=" pb-20">
      <div className="container">
        <div className="text-center text-white">
          <p className="font-semibold  mb-6  ">كيف يشتغل مؤتمت؟</p>
          <h2 className="font-semibold text-52px  mb-5 ">
            شغل مؤتمت في 4 خطوات !.
          </h2>
          <p className="font-light text-22px  mb-6">
            إليـــــــــــــك الخطوات :
          </p>
        </div>
        <div className="md:px-44">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <StepCard stepNumber={1} title="سجل واربط واتسابك." Icon={FiLink} />
            <div className="lg:mt-14">
              <StepCard
                stepNumber={2}
                title="دخل أسئلتك المتكررة وردودك أو تدريبك..."
                Icon={LuMessageSquareText}
              />
            </div>
            <div className="lg:-mt-16">
              <StepCard
                stepNumber={3}
                title="درّب نموذجك الخاص على طريقتك."
                Icon={LuBrain}
              />
            </div>
            <div>
              <StepCard
                stepNumber={4}
                title="يبدأ يرد على العملاء لحظيًا وبذكاء."
                Icon={HiOutlineLightningBolt}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowMoatmtWork;
