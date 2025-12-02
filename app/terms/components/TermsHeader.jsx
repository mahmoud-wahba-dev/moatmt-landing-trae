import Image from 'next/image'
import React from 'react'

const TermsHeader = () => {
  return (
    <header
      className="bg-white px-6 md:px-32 flex items-center gap-3 border-b border-b-[#E2E8F0] py-6 shadow-[0_1px_3px_0px_#0000001A]"
      role="banner"
      lang="ar"
      dir="rtl"
    >
      <div>
        <Image src="/receipt.png" alt="Receipt" width={50} height={50} />
      </div>
      <div>
        <h1 className="font-normal text-24px text-[#0F172B]">
          الشروط والأحكام العامة
        </h1>
        <p className="font-normal text-base text-[#45556C] ">
          لمنصة مؤتمت بوت (Moatmt Bot)
        </p>
      </div>
    </header>
  )
}

export default TermsHeader