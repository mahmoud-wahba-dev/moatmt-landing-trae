import Faq from "./home/components/Faq";
import HeroSec from "./home/components/HeroSec";
import HowMoatmtWork from "./home/components/HowMoatmtWork";
import IsMoatmtSuitable from "./home/components/IsMoatmtSuitable";
import MoatmtImgs from "./home/components/MoatmtImgs";
import OurPartners from "./home/components/OurPartners";
import Packages from "./home/components/Packages";
import PreFooter from "./home/components/PreFooter";
// import SwiperSlider from "./home/components/SwiperSlider";
import Testimonial from "./home/components/Testimonial";
import VideoSec from "./home/components/VideoSec";
import WhoIsMoatmt from "./home/components/WhoIsMoatmt";
import WhyMoatmt from "./home/components/WhyMoatmt";

export default function Home() {
  return (
    <section className="bg-primary">
      <HeroSec />
      <OurPartners />
      {/* <SwiperSlider /> */}
      <WhoIsMoatmt />
      <WhyMoatmt />
      <HowMoatmtWork />
      <MoatmtImgs />
      <VideoSec />
      <Testimonial />
      <Packages />
      <IsMoatmtSuitable />
      <Faq />
      <PreFooter />
    </section>
  );
}
