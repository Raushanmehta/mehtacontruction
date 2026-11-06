import HeroSection from "./home/HeroSection";
import WhyChooseUsSection from "./home/WhyChooseUsSection";
import GallerySection from "./home/GallarySection";
// import StatsSection from "../components/common/StatsSection";
import ProjectSection from "./home/ProjectSection";
import ProcessSection from "./home/ProcessSection";
import FeatureSection from "./home/FeatureSection";
import CtaBannerSection from "../components/common/CtaBannerSection";
import ServicesSection from "./home/ServiceSection";
import AboutSection from "./home/AboutSection";
import MissionSection from "./home/MissionSection";
// import { PoemAnimation } from "./PoemAnimation";


export default function Home() {
  return (
    <main>
      <HeroSection/>
      {/* <StatsSection/> */}
      <AboutSection/>
      <ServicesSection/>
      <WhyChooseUsSection/>
      <ProjectSection/>
      {/* <PoemAnimation
        poemText="Hand in hand, we build spaces where every new beginning can bloom."
        backgroundImageUrl="/image/studio.jpg"
        boyImageUrl="/image/object-image.png"
      /> */}
      <ProcessSection/>
      <MissionSection/>
      <FeatureSection/>
      <CtaBannerSection/>
      <GallerySection/>
    </main>
  );
};

