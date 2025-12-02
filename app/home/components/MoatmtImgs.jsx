import React from "react";
import MoatmtImgsSlider from "./MoatmtImgsSlider";

const MoatmtImgs = () => {
  return (
    <section className="">
      <div className="container">
        <div className="text-center text-white">
          <p className="font-semibold  mb-6  ">صور من داخل مؤتمت</p>
          <h2 className="font-semibold text-52px  mb-5 ">
            واجهة سهلة وواضحة، حتى بدون خبرة تقنية !.
          </h2>
          <p className="font-light text-22px  mb-6">
            إليـــــــــــــك معرض الصور :{" "}
          </p>
        </div>

        <div className="bg-[#1F533C] rounded-20px border border-black p-8 max-sm:p-4">
    
            <MoatmtImgsSlider />
        </div>
      </div>
    </section>
  );
};

export default MoatmtImgs;
