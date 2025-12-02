import BtnConsult from "@/components/ui/BtnConsult";
import BtnTry from "@/components/ui/BtnTry";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { GoArrowUpLeft } from "react-icons/go";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const HeroSec = () => {
  return (
    <section className="bg-primary text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 hero-content w-full max-w-full flex-col lg:flex-row gap-24">
          <div>
            <div>
              <div className="flex items-center gap-5">
                <p className="font-semibold text-45px">مؤتمــــت</p>
                <div className="">
                  <Image
                    src="/home/ai.svg"
                    alt="Hero Icon"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>
              </div>
              <h1 className="font-semibold text-52px leading-[70px] mb-10">
                مســــاعدك الذكــــي علــــى واتســــاب
                <br />
                يخــــدم عمــــلاءك ويــــزيــــد مبيعــــاتك !.
              </h1>
              <p className="font-normal text-22px  mb-10 text-[#D5D5D5]">
                كل محادثة فرصة بيع ومؤتمت يعرف يستغلها لك .. هل انت جاهز؟
              </p>
              <div className="flex items-center gap-7 mb-10 max-sm:flex-wrap">
                <BtnTry />
                <BtnConsult />
              </div>

              <div className="flex items-center gap-4 flex-wrap ">
                <div className="avatar-group overflow-visible -space-x-6">
                  <div
                    className="avatar tooltip tooltip-top transition-all duration-400 hover:-translate-y-2 hover:scale-105"
                    data-tip="Batperson"
                  >
                    <div className="w-12">
                      <Image
                        src="/home/avatar1.png"
                        alt="Batperson"
                        width={54}
                        height={54}
                      />
                    </div>
                  </div>

                  <div
                    className="avatar tooltip tooltip-top transition-all duration-400 hover:-translate-y-2 hover:scale-105"
                    data-tip="Spiderperson"
                  >
                    <div className="w-12">
                      <Image
                        src="/home/avatar2.png"
                        alt="Spiderperson"
                        width={54}
                        height={54}
                      />
                    </div>
                  </div>

                  <div
                    className="avatar tooltip tooltip-top transition-all duration-400 hover:-translate-y-2 hover:scale-105"
                    data-tip="Average Bulk"
                  >
                    <div className="w-12">
                      <Image
                        src="/home/avatar3.png"
                        alt="Average Bulk"
                        width={54}
                        height={54}
                      />
                    </div>
                  </div>

                  <div
                    className="avatar tooltip tooltip-top transition-all duration-400 hover:-translate-y-2 hover:scale-105"
                    data-tip="Wonderperson"
                  >
                    <div className="w-12">
                      <Image
                        src="/home/avatar4.png"
                        alt="Wonderperson"
                        width={54}
                        height={54}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <div className="flex items-center gap-1">
                      <FaStar className="text-[#FFBE33]" />
                      <FaStar className="text-[#FFBE33]" />
                      <FaStar className="text-[#FFBE33]" />
                      <FaStar className="text-[#FFBE33]" />
                      <FaStar className="text-[#FFBE33]" />
                    </div>

                    <span className="font-semibold text-12px">5.0</span>
                  </div>
                  <p className="font-semibold text-14px mt-2.5">
                    أكثـــر من 1500+ عميـــــــــل...
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hover-3d">
            <div className="bg-[#F6F6F6] rounded-66px">
              <Image
                src="/home/hero2.webp"
                alt="Hero Section Image"
                width={600}
                height={400}
                className="w-full h-auto"
              />
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

export default HeroSec;
