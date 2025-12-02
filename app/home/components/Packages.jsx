import React from "react";
import PricingSection from "./PricingSection";

const Packages = () => {
  return (
    <section className="pt-20">
      <div className="container">
        <div className="text-center text-white">
          <p className="font-semibold  mb-6  ">الباقات</p>
          <h2 className="font-semibold text-52px  mb-5 ">
            اختر الباقة المناسبة لحجم مشروعك{" "}
          </h2>
          <p className="font-normal text-22px  mb-6">تجربة 5 ايام مجاناً </p>
        </div>
        <PricingSection />
      </div>
    </section>
  );
};

export default Packages;
