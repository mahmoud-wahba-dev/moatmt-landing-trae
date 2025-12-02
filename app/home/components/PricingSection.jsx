"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { FaCrown, FaBolt } from "react-icons/fa6";
import { HiFire } from "react-icons/hi";

const tabs = [
  { label: "شهري", value: "monthly" },
  { label: "سنوي", value: "yearly" },
];

// Updated plans: removed unused btnText, kept features and checkoutOptions
const plans = [
  {
    title: "باقة بوت",
    icon: FaCrown,
    price: { monthly: 55, yearly: 500 },
    desc: "مثالية للمشاريع الناشئة والأفراد",
    features: [
      // Included (green)
      { label: "بوت الرد الآلي (عادي)", included: true },
      { label: "الترحيب التلقائي", included: true },
      { label: "الرسائل التلقائية", included: true },
      { label: "رسائل OTP (للمتاجر)", included: true },
      { label: "رسائل التقييم", included: true },
      { label: "استرداد السلات", included: true },
      { label: "سجل الإشعارات", included: true },
      { label: "أيقونة المحادثة بالموقع", included: true },
      { label: "تكامل واتساب API", included: true },
      { label: "عدد الرسائل: 5K", included: true },
      { label: "جلسات واتساب: 1", included: true },
      { label: "رسائل الحملات التسويقية: 500", included: true },

      // Not included (greyed / X)
      { label: "بوت الذكاء الاصطناعي المتقدّم", included: false },
      { label: "الرد على حالات الطلب", included: false },
      { label: "تحويل لموظف حقيقي", included: false },
      { label: "التقارير والإحصاءات", included: false },
      { label: "مزامنة العملاء", included: false },
      { label: "لوحة تحكم مخصّصة بدون متجر", included: false },
      { label: "تحكم بجدولة عمل الذكاء الاصطناعي", included: false },
    ],
    highlight: false,
  },
  {
    title: "باقة سويتش",
    icon: HiFire,
    price: { monthly: 99, yearly: 900 },
    desc: "الأفضل للشركات الصغيرة والمتوسطة",
    features: [
      // Core bot & messaging
      { label: "بوت الرد الآلي (عادي)", included: true },
      { label: "الترحيب التلقائي", included: true },
      { label: "الرسائل التلقائية", included: true },
      { label: "رسائل OTP (للمتاجر)", included: true },
      { label: "رسائل التقييم", included: true },
      { label: "استرداد السلات", included: true },
      { label: "سجل الإشعارات", included: true },
      { label: "أيقونة المحادثة بالموقع", included: true },
      { label: "تكامل واتساب API", included: true },

      // Capacity / quotas
      { label: "عدد الرسائل: 250K", included: true },
      { label: "جلسات واتساب: 3", included: true },
      { label: "رسائل الحملات التسويقية: 5K", included: true },

      // Advanced AI & workflows
      { label: "بوت الذكاء الاصطناعي المتقدّم", included: true },
      { label: "الرد على حالات الطلب الذكي", included: true },
      { label: "تحويل للموظف البشري (هاندوفر)", included: true },

      // Admin / analytics / sync
      { label: "التقارير والإحصاءات", included: true },
      { label: "مزامنة العملاء", included: true },
      { label: "لوحة تحكم مخصّصة", included: true },

      // Optional / not included in this tier
      { label: "تحكم توقيت عمل الذكاء الاصطناعي", included: false },
    ],
    highlight: true,
    checkoutOptions: [
      {
        label: "salla",
        price: "99",
        brandIcon: "/home/salla.svg",
        currencyIcon: "/home/ryal_colored.svg",
        bg: "bg-[#CFF7EE]",
        textColor: "text-[#004D5A]",
      },
      {
        label: "shopify",
        price: "99",
        brandIcon: "/home/shopify.svg",
        currencyIcon: "/home/ryal_white.svg",
        bg: "bg-[#64943E]",
        textColor: "text-white",
      },
      {
        label: "zid",
        price: "99",
        brandIcon: "/home/zid.svg",
        currencyIcon: "/home/ryal_white.svg",
        bg: "bg-[#3C1C54]",
        textColor: "text-white",
      },
      {
        label: "moatmt",
        price: "99",
        brandIcon: "/home/moatmt.svg",
        currencyIcon: "/home/ryal_white.svg",
        bg: "bg-primary",
        textColor: "text-white",
      },
    ],
  },
  {
    title: "باقة كنترول",
    icon: FaBolt,
    price: { monthly: 299, yearly: 2700 },
    desc: "حل متكامل للشركات الكبيرة",
    features: [
      // Core bot & messaging
      { label: "بوت الرد الآلي (عادي)", included: true },
      { label: "بوت الذكاء الاصطناعي المتقدّم", included: true },
      { label: "الترحيب التلقائي", included: true },
      { label: "الرسائل التلقائية", included: true },
      { label: "رسائل OTP (للمتاجر)", included: true },
      { label: "رسائل التقييم", included: true },
      { label: "استرداد السلات", included: true },
      { label: "سجل الإشعارات", included: true },
      { label: "أيقونة المحادثة بالموقع", included: true },
      { label: "تكامل واتساب API", included: true },

      // Capacity / quotas
      { label: "عدد الرسائل: 1M", included: true },
      { label: "جلسات واتساب: 5", included: true },
      { label: "رسائل الحملات التسويقية: 20K", included: true },

      // Advanced AI & workflows
      { label: "الرد على حالات الطلب الذكي", included: true },
      { label: "تحويل للموظف البشري (هاندوفر)", included: true },
      { label: "تحكم بتوقيت عمل الذكاء الاصطناعي", included: true },

      // Admin / analytics / sync
      { label: "التقارير والإحصاءات المتقدمة", included: true },
      { label: "مزامنة العملاء", included: true },
      { label: "لوحة تحكم مخصّصة", included: true },

      // Enterprise-only items
      { label: "مستخدمين غير محدودين", included: true },
    ],
    highlight: false,
  },
];

export default function PricingSection() {
  const [selectedTab, setSelectedTab] = useState("monthly");

  return (
    <section className="py-16  ">
      <div className="">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-y-4 mb-8 bg-white/9 w-fit rounded-40px max-w-md mx-auto p-2.5 backdrop-blur-3xl mb-14">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setSelectedTab(tab.value)}
              className={`bg-white/4 h-[58px] px-20 py-4 rounded-40px text-14px mx-2 font-bold text-white ${
                selectedTab === tab.value &&
                "bg-[linear-gradient(179.04deg,#FFFFFF_61.8%,#2EE378_122.92%)]  !text-[#1C0531]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 transition-all">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <div
                key={i}
                className={`rounded-24px border border-[#E5E7EB] bg-white flex flex-col p-8 relative  ${
                  plan.highlight ? "scale-105" : ""
                }`}
              >
                {/* badge for highlighted plan */}
                {plan.highlight && (
                  <div className="absolute -top-[19px] pt-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                    الأكثر شعبية
                  </div>
                )}

                <div className="flex flex-col items-center gap-3 mb-6">
                  <div className="bg-[#0A381C0D] size-16 rounded-16px center_flex">
                    <Icon className="text-primary text-[2rem]" />
                  </div>
                  <h3 className="font-semibold text-24px text-black">
                    {plan.title}
                  </h3>
                  <p className="text-base font-normal text-[#595959]">
                    {plan.desc}
                  </p>
                </div>

                {/* price block */}
                <div className="my-4 text-center rounded-16px bg-[linear-gradient(180deg,#F8F8F8_0%,#F0F0F0_100%)] p-6">
                  <div className="text-60px font-bold text-primary center_flex gap-2">
                    {plan.price[selectedTab]}{" "}
                    <span className="text-lg font-normal">
                      <Image
                        src="/home/ryal.svg"
                        alt="Currency"
                        width={30}
                        height={32}
                      />
                    </span>
                  </div>
                  <div className="center_flex gap-4 font-normal text-14px text-[#595959] ">
                    <p>غير شامل الضريبة</p>
                    <div>•</div>
                    <p>30 يوم</p>
                  </div>
                </div>

                <div className="mb-6">
                  <Link
                    href="/contact"
                    className="btn btn-primary btn-block rounded-14px h-[52px] text-base font-normal "
                  >
                    تجربة مجانية 5 أيام
                  </Link>
                </div>

                <div className="mb-6">
                  <hr className="text-black/10" />
                </div>

                <p className="font-normal text-black text-14px mb-3">
                  المميزات المتضمنة:
                </p>

                <ul className="flex-1 mb-7 space-y-2 text-right">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      {f.included ? (
                        <span className="inline-block rounded-full p-1 bg-secondary size-5 center_flex">
                          <FaCheck className="text-white" />
                        </span>
                      ) : (
                        <span className="inline-block rounded-full size-5 bg-[#D1D5DC] center_flex">
                          <FaTimes className="text-white size-3" />
                        </span>
                      )}

                      <span
                        className={`text-base font-medium ${
                          f.included
                            ? "text-black"
                            : "text-14px font-normal text-[#99A1AF] line-through"
                        }`}
                      >
                        {f.label}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <hr className="text-black/10" />
                </div>

                <p className="font-normal text-black text-14px mb-4">
                  اشترك عبر:
                </p>

                {plan.checkoutOptions ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {plan.checkoutOptions.map((opt, k) => (
                      <div
                        key={`${opt.label}-${k}`}
                        className={`${opt.bg} rounded-12px py-4 flex flex-col gap-2 items-center justify-center text-center`}
                      >
                        <div className="h-6 mb-1.5">
                          <Image
                            src={opt.brandIcon}
                            alt={opt.label}
                            width={64}
                            height={24}
                          />
                        </div>

                        <div
                          className={`flex items-center gap-2 text-12px ${opt.textColor} justify-center`}
                        >
                          <span className="font-semibold text-[12px]">
                            {opt.price}
                          </span>
                          <Image
                            src={opt.currencyIcon}
                            alt="currency"
                            width={16}
                            height={14}
                          />
                          <div
                            className={`${opt.textColor} `}
                          >
                            {selectedTab === "monthly" ? "شهرياً" : "سنوياً"}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                    <div className="sm:col-span-12 bg-[#CFF7EE] rounded-10px py-2.5">
                      <div className="h-5">
                        <Image
                          src="/home/salla.svg"
                          alt="Salla"
                          width={48}
                          height={20}
                          className="w-full h-full "
                        />
                      </div>
                      <div className="mt-1.5 center_flex gap-1">
                        <span className="font-semibold text-12px">55</span>
                        <Image
                          src="/home/ryal_colored.svg"
                          alt="Currency"
                          width={15}
                          height={13}
                        />
                        <span className="font-semibold text-12px">شهريا</span>
                      </div>
                    </div>

                    <div className="sm:col-span-6 bg-[#64943E] rounded-10px py-2.5">
                      <div className="h-5">
                        <Image
                          src="/home/shopify.svg"
                          alt="Shopify"
                          width={48}
                          height={20}
                          className="w-full h-full "
                        />
                      </div>
                      <div className="mt-1.5 center_flex gap-1 text-white">
                        <span className="font-semibold text-12px ">55</span>
                        <Image
                          src="/home/ryal_white.svg"
                          alt="Currency"
                          width={15}
                          height={13}
                        />
                        <span className="font-semibold text-12px ">شهريا</span>
                      </div>
                    </div>
                    <div className="sm:col-span-6 bg-[#3C1C54] rounded-10px py-2.5">
                      <div className="h-5">
                        <Image
                          src="/home/zid.svg"
                          alt="Zid"
                          width={48}
                          height={20}
                          className="w-full h-full "
                        />
                      </div>
                      <div className="mt-1.5 center_flex gap-1 text-white">
                        <span className="font-semibold text-12px ">55</span>
                        <Image
                          src="/home/ryal_white.svg"
                          alt="Currency"
                          width={15}
                          height={13}
                          className="text-white"
                        />
                        <span className="font-semibold text-12px ">شهريا</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
