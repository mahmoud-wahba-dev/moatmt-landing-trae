import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSnapchatGhost,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const footerCols = [
    {
      title: "عن مؤتمت",
      links: [
        { label: "من نحن", href: "#" },
        { label: "الاسئلة الشائعة", href: "#" },
        { label: "الشروط والأحكام", href: "/terms" },
        { label: "المدونة", href: "/blog" },
        { label: "الأسعار", href: "#" },
        { label: "المزايا", href: "#" },
      ],
    },
    {
      title: "منتجات مؤتمت",
      links: [
        { label: "مؤتمت بوت", href: "#" },
        { label: "مؤتمت شات المؤسسي", href: "#" },
        { label: "ثيمات مؤتمت", href: "#" },
        { label: "نوتس للتسويق النفسي", href: "#" },
        { label: "كونكتلي", href: "#" },
        { label: "زيا", href: "#" },
      ],
    },
    {
      title: "الخدمات المساندة",
      links: [
        { label: "الخدمات المصغرة", href: "#" },
        { label: "أكاديمية مؤتمت", href: "#" },
        { label: "مركز المساعدة", href: "#" },
        { label: "مجتمع مؤتمت فالواتساب", href: "#" },
        { label: "التسويق بالعمولة", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { href: "#", label: "Facebook", icon: FaFacebook },
    { href: "#", label: "Instagram", icon: FaInstagram },
    { href: "#", label: "Tiktok", icon: FaTiktok },
    { href: "#", label: "Twitter", icon: FaXTwitter },
    { href: "#", label: "LinkedIn", icon: FaLinkedin },
    { href: "#", label: "Snapchat", icon: FaSnapchatGhost },
  ];
  return (
    <footer className="bg-[#00481c] text-white px-5 lg:px-20 pt-10 pb-6">
      <div className="footer grid grid-cols-1 sm:grid-cols-12 bg-[#00481C] sm:footer-horizontal  text-white ">
        <aside className="sm:col-span-4 md:col-span-5 space-y-4">
          <div>
            <Image
              src="/logo_footer.svg"
              alt="Logo Footer"
              width={249}
              height={58}
            />
          </div>
          <p className="sm:w-[74%] ">
            منصة سعودية تقدم أتمتة متكاملة لخدمات الواتساب مدعومة بروبوتات ذكاء
            اصطناعي لخدمة عملائك تغنيك عن الحاجة لفريق دعم كامل
          </p>
          <label htmlFor="">تـــابعنا على</label>
          <svg
            width="21"
            height="2"
            viewBox="0 0 21 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 1H21" stroke="#41FEA1" strokeWidth="2" />
          </svg>
          <div className="flex items-center gap-2.5 flex-wrap">
            {socialLinks.map(({ href, label, icon: IconComponent }, idx) => (
              <Link
                href={href}
                key={label}
                aria-label={label}
                className="bg-white w-10 h-10 flex items-center justify-center rounded-full"
              >
                <IconComponent className="text-primary size-4" />
              </Link>
            ))}
          </div>
          <div>
            <Image
              src="teqnia_ksa.svg"
              width={141}
              height={57}
              alt="Teqnia KSA"
            />
          </div>
        </aside>
        {footerCols.map((col, index) => (
          <nav key={index} className="sm:col-span-3 md:col-span-4 mt-8 sm:mt-0">
            <h6 className=" font-bold text-25px text-white max-lg:leading-8  mb-0 after:content-[''] after:block after:bg-white after:rounded-13px after:mt-5 after:w-10 after:h-1 after:bg-primary after:mt-2 mb-6">
              {col.title}
            </h6>

            {col.links.map((link, linkIndex) => (
              <Link
                key={linkIndex}
                href={link.href}
                className="link link-hover text-base font-semibold mb-4"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        ))}
      </div>
      <div>
        <hr className="mt-6 mb-10" />
      </div>

      <p className="font-bold text-14px text-center">&copy; جميع الحقوق محفوظة مؤتمت 2025</p>
    </footer>
  );
};

export default Footer;
