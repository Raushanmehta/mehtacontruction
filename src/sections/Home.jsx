import HeroSection from "./home/HeroSection";
import WhyChooseUsSection from "./home/WhyChooseUsSection";
import GallerySection from "./home/GallarySection";
import StatsSection from "./StatsSection";
import ProjectSection from "./home/ProjectSection";
import ProcessSection from "./home/ProcessSection";
import FeatureSection from "./home/FeatureSection";
import CtaBannerSection from "./CtaBannerSection";
import ServicesSection from "./home/ServiceSection";
import AboutSection from "./home/AboutSection";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <AboutSection/>
      <StatsSection/>
      <ServicesSection/>
      <WhyChooseUsSection/>
      <ProjectSection/>
      <ProcessSection/>
      <FeatureSection/>
      <CtaBannerSection/>
      <GallerySection/>
    </main>
  );
};

