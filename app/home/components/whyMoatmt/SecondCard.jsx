import Image from "next/image";

const SecondCard = ({ iconSrc, title, description, lastImgSrc }) => {
  return (
    <div className="bg-white rounded-58px p-14 text-center h-full">
      <div className="size-16 m-auto mb-10 ">
        <Image
          src={`/why_moatmt/${iconSrc}.svg`}
          alt="Available Icon"
          width={59}
          height={59}
        />
      </div>
      <h6 className="font-bold text-36px text-black mb-2.5">{title}</h6>
      <p className="font-normal text-[#333333] mb-10 text-18px">
        {description}
      </p>
      <div className="text-center center_flex">
        <Image
          src={`/why_moatmt/${lastImgSrc}.webp`}
          alt="Available Icon"
          width={230}
          height={54}
        />
      </div>
    </div>
  );
};

export default SecondCard;
