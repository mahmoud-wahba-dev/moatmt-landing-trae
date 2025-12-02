import React from "react";
import TermsHeader from "./components/TermsHeader";
import TermsContent from "./components/TermsContent";
import { CiMail } from "react-icons/ci";
import { AiOutlineGlobal } from "react-icons/ai";

const Terms = () => {
  return (
    <section
      className="mx-auto px-6 py-8 bg-[linear-gradient(135deg,#F8FAFC_0%,rgba(239,246,255,0.3)_100%)]"
      lang="ar"
      dir="rtl"
    >
      <TermsHeader />

      <div className="sm:px-32 px-6 py-8">
        <div className="p-12 border border-[#E2E8F0] bg-white shadow-[0_4px_6px_0px_#0000001A] rounded-16px mt-6">
          <article>
            <TermsContent />
          </article>
        </div>
        <div className="border border-[#E2E8F0] rounded-14px p-6 bg-white mt-12">
          <div className="">
            <p className="text-center font-normal text-base text-[#45556C]">
              تم التحديث الأخير: أكتوبر 2025
            </p>
            <div className="mt-3 center_flex text-center gap-6">
              <div className="center_flex gap-3">
                <CiMail className="text-[#314158]" />

                <a
                  className="text-[#314158] underline"
                  href="mailto:support@moatmt.sa"
                >
                  support@moatmt.sa
                </a>
              </div>
              <div className="font-normal text-base text-[#CAD5E2]">|</div>
              <div className="center_flex gap-3">
                <AiOutlineGlobal className="text-[#314158]" />
                <a
                  className="text-[#314158] underline"
                  href="https://moatmt.sa"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://moatmt.sa
                </a>
              </div>
            </div>
          </div>
          <p className="font-normal text-14px text-[#62748E] mt-3 text-center">
            © {new Date().getFullYear()} مؤتمت بوت — جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </section>
  );
};

export default Terms;
