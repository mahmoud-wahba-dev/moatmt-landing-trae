import { FiLink } from "react-icons/fi";

const StepCard = ({ stepNumber, title, Icon }) => {
  return (
    <div>
      <div className="relative border p-8 border-white/20 text-center rounded-24px  bg-[linear-gradient(135deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.05)_100%)] shadow-[0px_25px_50px_-12px_#00000040]">
        <div className="flex flex-col items-center justify-center">
          <div
            className="
      relative
      flex
      items-center
      justify-center
      size-20
      mb-6
      rounded-full
      text-white
      font-bold
      text-4xl
      select-none
      shadow-none
    "
            style={{
              // Gradient background
              background: "linear-gradient(135deg, #00D492 0%, #2B7FFF 100%)",
              // Border: 2px, #fff, opacity 30%
              border: "2px solid rgba(255,255,255,0.3)",
              // Both drop shadows from Figma
              boxShadow:
                "0 4px 6px -4px rgba(0,0,0,0.10), 0 10px 15px -3px rgba(0,0,0,0.10)",
            }}
          >
            <span className="z-20 font-normal text-30px">{stepNumber}</span>
            {/* Optional: Glowy outer shadow - mimic Figma's blue/green glow if needed */}
            <span
              className="absolute inset-0 -z-10 rounded-full pointer-events-none"
              style={{
                boxShadow:
                  "0 0 32px 8px rgba(43,127,255,0.16), 0 0 28px 4px rgba(0,212,146,0.12)",
              }}
            />
          </div>
        </div>

        <div className="size-16 center_flex rounded-16px m-auto mb-6 border border-white/30  bg-[linear-gradient(135deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.1)_100%)] ">
          <Icon className="size-8 text-[#5EE9B5]" />
        </div>
        <p className="font-normal text-white/90 text-20px mb-6">{title}</p>
        <div className="h-1 bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(0,212,146,0.5)_50%,rgba(0,0,0,0)_100%)]"></div>
        <div className="absolute top-4 start-4 size-12 border border-[#00D4924D] border-4 border-l-transparent border-b-transparent rounded-tr-2xl"></div>
        <div className="absolute bottom-4 end-4 size-12 border border-[#51A2FF4D] border-4 border-r-transparent border-t-transparent rounded-bl-2xl"></div>
      </div>
    </div>
  );
};

export default StepCard;
